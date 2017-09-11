import Promise from 'bluebird';
import TextDocument from './TextDocument';
import Uri from './Uri';
import GrammarRegistry from './GrammarRegistry';
import { addTextDocument } from '../ant/workspace';
import { Event } from '../ant/Event';
import * as convert from '../ant/convert';

let registry;
global.uriToDocument = new Map();

export default function hook() {
  registerEditorEvent();
}

function registerEditorEvent(editor) {
  const originalCreateModel = window.monaco.editor.createModel;
  const originalCreate = window.monaco.editor.create;

  /**
   * FIX ME: IDE do it by itself.
   * Hook the creatModel and convert path to file uri.
   */
  window.monaco.editor.createModel = (value, language, path) => {
    const uri = new Uri('file', '', path);
    if (!registry) {
      GrammarRegistry.setMode('dark');
      window.monaco.editor.defineTheme('tiny', {
        base: 'vs-dark',
        inherit: true,
        rules: [], // 之后实际要复写这些rules的，所以干脆就传个空数组进去
        colors: GrammarRegistry.getDefaultColors(),
      });
      registry = new GrammarRegistry();
      registry.reloadTheme('tiny');
    }
    return Promise.resolve({ languageId: language, registry })
      .then((res) => { if (language) return GrammarRegistry.loadGrammar(res); })
      .then((res) => { if (language) return GrammarRegistry.registerLanguage(res); })
      .then(() => Promise.resolve(originalCreateModel(value, language, uri.toString())))
  }

  /**
   * Hook the create editor function.
   */
  window.monaco.editor.create = (dom, options, override) => {
    const editor = originalCreate(dom, options, override);
    return editor;
  }

  /**
   * Register the onDidCreateModel event.
   * Restore the textDocument in a global Map.
   */
  window.monaco.editor.onDidCreateModel((model) => {
    registerModelEvent(model);

    const uri = Uri.parse(model.uri);
    const splited = uri.fsPath.split('/');
    const filename = splited[splited.length - 1];
    const value = model.getValue();
    const language = model.getModeId();
    const eol = '\n';

    const textDocument = new TextDocument(uri, value.split(eol), eol, language, 0, filename);

    uriToDocument.set(uri.toString(), textDocument);
    addTextDocument(textDocument);

    Event.dispatchGlobalEvent('onDidOpenTextDocument', { textDocument });      
  })
}

function registerModelEvent(model) {
  model.onDidChangeContent(async (event) => {
    const textDocument = uriToDocument.get(model.uri);
    textDocument.onEvents(event);
    Event.dispatchGlobalEvent('onDidChangeTextDocument', {
      document: textDocument,
      contentChanges: event.changes.map((item) => {
        return {
          ...item,
          range: convert.toRange(item.range),
        }
      }),
    });
  });
}