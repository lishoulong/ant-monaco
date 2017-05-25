/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.8.2(90c142a0ddcfbe2deb072d57136d9e895892f0e7)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.de",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (erneut aufgetreten)"],"vs/base/browser/ui/findinput/findInput":["Eingabe"],"vs/base/browser/ui/findinput/findInputCheckboxes":["Groß-/Kleinschreibung beachten","Nur ganzes Wort suchen","Regulären Ausdruck verwenden"],"vs/base/browser/ui/inputbox/inputBox":["Fehler: {0}","Warnung: {0}","Info: {0}"],"vs/base/common/severity":["Fehler","Warnung","Info"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, Auswahl","Auswahl"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Schnellauswahl. Nehmen Sie eine Eingabe vor, um die Ergebnisse einzugrenzen.","Schnellauswahl"],"vs/base/parts/tree/browser/treeDefaults":["Zuklappen"],"vs/editor/common/config/commonEditorConfig":["Editor","Steuert die Schriftfamilie.","Steuert die Schriftbreite.","Steuert den Schriftgrad in Pixeln.","Steuert die Zeilenhöhe. Verwenden Sie 0, um LineHeight aus der FontSize-Angabe zu berechnen.","Controls the letter spacing in pixels.",'Steuert die Anzeige von Zeilennummern. Mögliche Werte sind "Ein", "Aus" und "Relativ". "Relativ" zeigt die Zeilenanzahl ab der aktuellen Cursorposition.',"Spalten, an denen vertikale Lineale angezeigt werden sollen","Zeichen, die als Worttrennzeichen verwendet werden, wenn wortbezogene Navigationen oder Vorgänge ausgeführt werden.",'Die Anzahl der Leerzeichen, denen ein Tabstopp entspricht. Diese Einstellung wird basierend auf dem Inhalt der Datei überschrieben, wenn "editor.detectIndentation" aktiviert ist.','"number" wurde erwartet. Beachten Sie, dass der Wert "auto" durch die Einstellung "editor.detectIndentation" ersetzt wurde.','Fügt beim Drücken der TAB-TASTE Leerzeichen ein. Diese Einstellung wird basierend auf dem Inhalt der Datei überschrieben, wenn "editor.detectIndentation" aktiviert ist.','"boolean" wurde erwartet. Beachten Sie, dass der Wert "auto" durch die Einstellung "editor.detectIndentation" ersetzt wurde.','Beim Öffnen einer Datei werden "editor.tabSize" und "editor.insertSpaces" basierend auf den Dateiinhalten erkannt.',"Steuert, ob die Auswahl runde Ecken aufweist.","Legt fest, ob der Editor Bildläufe über die letzte Zeile hinaus ausführt.","Steuert, ob die Minikarte angezeigt wird","Die tatsächlichen Zeichen in einer Zeile rendern (im Gegensatz zu Farbblöcken)","Breite der Minikarte beschränken, um höchstens eine bestimmte Anzahl von Spalten zu rendern","Controls if we seed the search string in Find Widget from editor selection","Controls if Find in Selection flag is turned on when multiple characters or lines of text are selected in the editor","Zeilenumbrüche erfolgen nie.","Der Zeilenumbruch erfolgt an der Breite des Anzeigebereichs.",'Der Zeilenbereich erfolgt bei "editor.wordWrapColumn".','Der Zeilenumbruch erfolgt beim Mindestanzeigebereich und "editor.wordWrapColumn".','Steuert den Zeilenumbruch. Mögliche Einstellungen sind:\n - "off" (Umbruch deaktivieren),\n - "on" (Anzeigebereichsumbruch),\n - "wordWrapColumn" (Umbruch bei "editor.wordWrapColumn") oder\n - "bounded" (der Zeilenumbruch erfolgt beim Mindestanzeigebereich und "editor.wordWrapColumn").','Steuert die Umbruchspalte des Editors, wenn für "editor.wordWrap" die Option "wordWrapColumn" oder "bounded" festgelegt ist.','Steuert den Einzug der umbrochenen Zeilen. Der Wert kann "none", "same" oder "indent" sein.','Ein Multiplikator, der für die Mausrad-Bildlaufereignisse "deltaX" und "deltaY" verwendet werden soll.',"Schnellvorschläge innerhalb von Zeichenfolgen aktivieren.","Schnellvorschläge innerhalb von Kommentaren aktivieren.","Schnellvorschläge außerhalb von Zeichenfolgen und Kommentaren aktivieren.","Steuert, ob Vorschläge während der Eingabe automatisch angezeigt werden sollen.","Steuert die Verzögerung in ms für die Anzeige der Schnellvorschläge.","Aktiviert Parameterhinweise.","Steuert, ob der Editor Klammern automatisch nach dem Öffnen schließt.","Steuert, ob der Editor Zeilen automatisch nach der Eingabe formatiert.","Steuert, ob der Editor den eingefügten Inhalt automatisch formatiert.","Steuert, ob Vorschläge automatisch bei der Eingabe von Triggerzeichen angezeigt werden.","Steuert, ob Vorschläge über die Eingabetaste (zusätzlich zur TAB-Taste) angenommen werden sollen. Vermeidet Mehrdeutigkeit zwischen dem Einfügen neuer Zeilen oder dem Annehmen von Vorschlägen.",'Steuert, ob Vorschläge über Commitzeichen angenommen werden sollen. In JavaScript kann ein Semikolon (";") beispielsweise ein Commitzeichen sein, das einen Vorschlag annimmt und dieses Zeichen eingibt.',"Steuert, ob Codeausschnitte mit anderen Vorschlägen angezeigt und wie diese sortiert werden.","Steuert, ob ein Kopiervorgang ohne Auswahl die aktuelle Zeile kopiert.","Steuert, ob Vervollständigungen auf Grundlage der Wörter im Dokument berechnet werden sollen.","Schriftgröße für Vorschlagswidget","Zeilenhöhe für Vorschlagswidget","Steuert, ob der Editor der Auswahl ähnelnde Übereinstimmungen hervorheben soll.","Steuert, ob der Editor das Vorkommen semantischer Symbole markieren soll.","Steuert die Anzahl von Dekorationen, die an derselben Position im Übersichtslineal angezeigt werden.","Steuert, ob um das Übersichtslineal ein Rahmen gezeichnet werden soll.",'Steuert den Cursoranimationsstil. Gültige Werte sind "blink", "smooth", "phase", "expand" und "solid".',"Schriftart des Editors vergrößern, wenn das Mausrad verwendet und die STRG-TASTE gedrückt wird",'Steuert den Cursorstil. Gültige Werte sind  "block", "block-outline", "line", "line-thin", "underline" und "underline-thin".',"Aktiviert Schriftartligaturen.","Steuert die Sichtbarkeit des Cursors im Übersichtslineal.",'Steuert, wie der Editor Leerzeichen rendert. Mögliche Optionen: "none", "boundary" und "all". Die Option "boundary" rendert keine einzelnen Leerzeichen zwischen Wörtern.',"Steuert, ob der Editor Steuerzeichen rendern soll.","Steuert, ob der Editor Einzugsführungslinien rendern soll.",'Steuert, wie der Editor die aktuelle Zeilenhervorhebung rendern soll. Mögliche Werte sind "none", "gutter", "line" und "all".',"Steuert, ob der Editor CodeLenses anzeigt.","Steuert, ob für den Editor Codefaltung aktiviert ist.","Controls whether the fold controls on the gutter are automatically hidden.","Übereinstimmende Klammern hervorheben, wenn eine davon ausgewählt wird.","Steuert, ob der Editor den vertikalen Glyphenrand rendert. Der Glyphenrand wird hauptsächlich zum Debuggen verwendet.","Das Einfügen und Löschen von Leerzeichen folgt auf Tabstopps.","Nachfolgendes automatisch eingefügtes Leerzeichen entfernen","Peek-Editoren geöffnet lassen, auch wenn auf ihren Inhalt doppelgeklickt oder die ESC-TASTE gedrückt wird.","Steuert, ob der Editor das Verschieben einer Auswahl per Drag and Drop zulässt.","Steuert, ob der Diff-Editor das Diff nebeneinander oder inline anzeigt.","Steuert, ob der Diff-Editor Änderungen in führenden oder nachgestellten Leerzeichen als Diffs anzeigt.",'Steuert, ob der Diff-Editor die Indikatoren "+" und "-" für hinzugefügte/entfernte Änderungen anzeigt.',"Steuert, ob die primäre Linux-Zwischenablage unterstützt werden soll."],"vs/editor/common/config/editorOptions":["Editor-Inhalt"],"vs/editor/common/controller/cursor":["Unerwartete Ausnahme beim Ausführen des Befehls."],"vs/editor/common/model/textModelWithTokens":["Fehler des Modus bei der Tokenumwandlung der Eingabe."],"vs/editor/common/modes/modesRegistry":["Nur-Text"],"vs/editor/common/services/bulkEdit":["Die folgenden Dateien wurden in der Zwischenzeit geändert: {0}","Keine Änderungen vorgenommen","{0} Änderungen am Text in {1} Dateien vorgenommen","{0} Änderungen am Text in einer Datei vorgenommen"],"vs/editor/common/services/modeServiceImpl":["Contributes-Sprachdeklarationen","Die ID der Sprache.","Namealiase für die Sprache.","Dateierweiterungen, die der Sprache zugeordnet sind.","Dateinamen, die der Sprache zugeordnet sind.","Dateinamen-Globmuster, die Sprache zugeordnet sind.","MIME-Typen, die der Sprache zugeordnet sind.","Ein regulärer Ausdruck, der mit der ersten Zeile einer Datei der Sprache übereinstimmt.","Ein relativer Pfad zu einer Datei mit Konfigurationsoptionen für die Sprache."],"vs/editor/common/services/modelServiceImpl":["[{0}]\n{1}","[{0}] {1}"],"vs/editor/common/view/editorColorRegistry":["Hintergrundfarbe zur Hervorhebung der Zeile an der Cursorposition.","Hintergrundfarbe für den Rahmen um die Zeile an der Cursorposition.","Hintergrundfarbe hervorgehobener Bereiche (beispielsweise durch Features wie Quick Open und Suche).","Farbe des Cursors im Editor.","Farbe der Leerzeichen im Editor.","Farbe der Führungslinien für Einzüge im Editor.","Zeilennummernfarbe im Editor.","Color of the editor rulers.","Vordergrundfarbe der CodeLens-Links im Editor","Hintergrundfarbe für zusammengehörige Klammern","Color for matching brackets boxes","Color of the overview ruler border.","Background color of the editor gutter. The gutter contains the glyph margins and the line numbers.","Foreground color of error squigglies in the editor.","Border color of error squigglies in the editor.","Foreground color of warning squigglies in the editor.","Border color of warning squigglies in the editor."],"vs/editor/contrib/bracketMatching/common/bracketMatching":["Gehe zu Klammer"],"vs/editor/contrib/caretOperations/common/caretOperations":["Caretzeichen nach links verschieben","Caretzeichen nach rechts verschieben"],"vs/editor/contrib/caretOperations/common/transpose":["Buchstaben austauschen"],"vs/editor/contrib/clipboard/browser/clipboard":["Ausschneiden","Kopieren","Einfügen","Mit Syntaxhervorhebung kopieren"],"vs/editor/contrib/comment/common/comment":["Zeilenkommentar umschalten","Zeilenkommentar hinzufügen","Zeilenkommentar entfernen","Blockkommentar umschalten"],"vs/editor/contrib/contextmenu/browser/contextmenu":["Editor-Kontextmenü anzeigen"],"vs/editor/contrib/find/browser/findWidget":["Suchen","Suchen","Vorherige Übereinstimmung","Nächste Übereinstimmung","In Auswahl suchen","Schließen","Ersetzen","Ersetzen","Ersetzen","Alle ersetzen","Ersetzen-Modus wechseln","Nur die ersten 999 Ergebnisse werden hervorgehoben, alle Suchvorgänge beziehen sich aber auf den gesamten Text.","{0} von {1}","Keine Ergebnisse"],"vs/editor/contrib/find/common/findController":["Suchen","Nächstes Element suchen","Vorheriges Element suchen","Nächste Auswahl suchen","Vorherige Auswahl suchen","Ersetzen","Auswahl zur nächsten Übereinstimmungssuche hinzufügen","Letzte Auswahl zu vorheriger Übereinstimmungssuche hinzufügen","Letzte Auswahl in nächste Übereinstimmungssuche verschieben","Letzte Auswahl in vorherige Übereinstimmungssuche verschieben","Alle Vorkommen auswählen und Übereinstimmung suchen","Alle Vorkommen ändern"],"vs/editor/contrib/folding/browser/folding":["Auffalten","Faltung rekursiv aufheben","Falten","Rekursiv falten","Alle falten","Alle auffalten","Faltebene {0}"],"vs/editor/contrib/format/browser/formatActions":["Made 1 formatting edit on line {0}","Made {0} formatting edits on line {1}","Made 1 formatting edit between lines {0} and {1}","Made {0} formatting edits between lines {1} and {2}","Format Document","Format Selection"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":['Keine Definition gefunden für "{0}".',"Keine Definition gefunden"," – {0} Definitionen","Gehe zu Definition","Definition an der Seite öffnen","Peek-Definition",'Keine Implementierung gefunden für "{0}"',"Keine Implementierung gefunden","{0} Implementierungen","Zur Implementierung wechseln","Vorschau der Implementierung anzeigen",'Keine Typendefinition gefunden für "{0}"',"Keine Typendefinition gefunden","{0} Typdefinitionen","Zur Typdefinition wechseln","Vorschau der Typdefinition anzeigen","Klicken Sie, um {0} Definitionen anzuzeigen."],"vs/editor/contrib/gotoError/browser/gotoError":["({0}/{1})","Gehe zum nächsten Fehler oder zur nächsten Warnung","Gehe zum vorherigen Fehler oder zur vorherigen Warnung","Editormarkierung: Farbe bei Fehler des Navigationswidgets.","Editormarkierung: Farbe bei Warnung des Navigationswidgets.","Editormarkierung: Hintergrund des Navigationswidgets."],"vs/editor/contrib/hover/browser/hover":["Hovern anzeigen"],"vs/editor/contrib/hover/browser/modesContentHover":["Wird geladen..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Durch vorherigen Wert ersetzen","Durch nächsten Wert ersetzen"],"vs/editor/contrib/inspectTokens/browser/inspectTokens":["Developer: Inspect Tokens"],"vs/editor/contrib/linesOperations/common/linesOperations":["Zeile nach oben kopieren","Zeile nach unten kopieren","Zeile nach oben verschieben","Zeile nach unten verschieben","Zeilen aufsteigend sortieren","Zeilen absteigend sortieren","Nachgestelltes Leerzeichen kürzen","Zeile löschen","Zeileneinzug","Zeile ausrücken","Zeile oben einfügen","Zeile unten einfügen","Alle übrigen löschen","Alle rechts löschen","Zeilen verknüpfen","Zeichen um den Cursor herum transponieren","In Großbuchstaben umwandeln","In Kleinbuchstaben umwandeln"],"vs/editor/contrib/links/browser/links":["BEFEHLSTASTE + Mausklick zum Aufrufen des Links","STRG + Mausklick zum Aufrufen des Links","Fehler beim Öffnen dieses Links, weil er nicht wohlgeformt ist: {0}","Fehler beim Öffnen dieses Links, weil das Ziel fehlt.","Link öffnen"],"vs/editor/contrib/multicursor/common/multicursor":["Cursor oberhalb hinzufügen","Cursor unterhalb hinzufügen","Cursor an Zeilenenden hinzufügen"],"vs/editor/contrib/parameterHints/browser/parameterHints":["Parameterhinweise auslösen"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, Hinweis"],"vs/editor/contrib/quickFix/browser/quickFixCommands":["Korrekturen anzeigen ({0})","Korrekturen anzeigen","Schnelle Problembehebung"],"vs/editor/contrib/quickOpen/browser/gotoLine":["Go to line {0} and character {1}","Go to line {0}","Type a line number between 1 and {0} to navigate to","Type a character between 1 and {0} to navigate to","Go to line {0}","Type a line number, followed by an optional colon and a character number to navigate to","Go to Line..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","Type the name of an action you want to execute","Command Palette"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","Type the name of an identifier you wish to navigate to","Go to Symbol...","symbols ({0})","modules ({0})","classes ({0})","interfaces ({0})","methods ({0})","functions ({0})","properties ({0})","variables ({0})","variables ({0})","constructors ({0})","calls ({0})"],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" – {0} Verweise","Alle Verweise suchen"],"vs/editor/contrib/referenceSearch/browser/referencesController":["Wird geladen..."],"vs/editor/contrib/referenceSearch/browser/referencesModel":["Symbol in {0} in Zeile {1}, Spalte {2}","1 Symbol in {0}","{0} Symbole in {1}","Es wurden keine Ergebnisse gefunden.","1 Symbol in {0} gefunden","{0} Symbole in {1} gefunden","{0} Symbole in {1} Dateien gefunden"],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Fehler beim Auflösen der Datei.","{0} Verweise","{0} Verweis","Keine Vorschau verfügbar.","Verweise","Keine Ergebnisse","Verweise","Hintergrundfarbe des Titelbereichs der Peek-Ansicht.","Farbe des Titels in der Peek-Ansicht.","Farbe der Titelinformationen in der Peek-Ansicht.","Farbe der Peek-Ansichtsränder und des Pfeils.","Hintergrundfarbe der Ergebnisliste in der Peek-Ansicht.","Foreground color for line nodes in the peek view result list.","Foreground color for file nodes in the peek view result list.","Hintergrundfarbe des ausgewählten Eintrags in der Ergebnisliste der Peek-Ansicht.","Vordergrundfarbe des ausgewählten Eintrags in der Ergebnisliste der Peek-Ansicht.","Hintergrundfarbe des Peek-Editors.","Background color of the gutter in the peek view editor.","Farbe für Übereinstimmungsmarkierungen in der Ergebnisliste der Peek-Ansicht.","Farbe für Übereinstimmungsmarkierungen im Peek-Editor."],"vs/editor/contrib/rename/browser/rename":["Kein Ergebnis.",'"{0}" erfolgreich in "{1}" umbenannt. Zusammenfassung: {2}',"Fehler bei der Ausführung der Umbenennung.","Symbol umbenennen"],"vs/editor/contrib/rename/browser/renameInputField":["Benennen Sie die Eingabe um. Geben Sie einen neuen Namen ein, und drücken Sie die EINGABETASTE, um den Commit auszuführen."],"vs/editor/contrib/smartSelect/common/smartSelect":["Auswahl erweitern","Auswahl verkleinern"],"vs/editor/contrib/suggest/browser/suggestController":['Durch Annahme von "{0}" wurde folgender Text eingefügt: {1}',"Vorschlag auslösen"],"vs/editor/contrib/suggest/browser/suggestWidget":["Hintergrundfarbe des Vorschlagswidgets.","Rahmenfarbe des Vorschlagswidgets.","Vordergrundfarbe des Vorschlagswidgets.","Hintergrundfarbe des ausgewählten Eintrags im Vorschlagswidget.","Farbe der Trefferhervorhebung im Vorschlagswidget.","Mehr anzeigen...{0}","{0}, Vorschlag, hat Details","{0}, Vorschlag","Read less...{0}","Wird geladen...","Keine Vorschläge.","{0}, angenommen","{0}, Vorschlag, hat Details","{0}, Vorschlag"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["TAB-Umschalttaste verschiebt Fokus"],"vs/editor/contrib/wordHighlighter/common/wordHighlighter":["Hintergrundfarbe eines Symbols beim Lesezugriff (beispielsweise beim Lesen einer Variablen).","Hintergrundfarbe eines Symbols beim Schreibzugriff (beispielsweise beim Schreiben in eine Variable)."],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["Schließen"],"vs/platform/configuration/common/configurationRegistry":["Standard-Konfiguration überschreibt","Zu überschreibende Einstellungen für Sprache {0} konfigurieren.","Zu überschreibende Editor-Einstellungen für eine Sprache konfigurieren.","Trägt Konfigurationseigenschaften bei.","Eine Zusammenfassung der Einstellungen. Diese Bezeichnung wird in der Einstellungsdatei als trennender Kommentar verwendet.","Die Beschreibung der Konfigurationseigenschaften.",'"{0}" kann nicht registriert werden. Die Eigenschaft stimmt mit dem Eigenschaftsmuster \'\\\\[.*\\\\]$\' zum Beschreiben sprachspezifischer Editor-Einstellungen überein. Verwenden Sie den Beitrag "configurationDefaults".','"{0}" kann nicht registriert werden. Diese Eigenschaft ist bereits registriert.','"configuration.properties" muss ein Objekt sein.','Wenn eine Festlegung erfolgt, muss "configuration.type" auf "object" festgelegt werden.',"configuration.title muss eine Zeichenfolge sein.","Trägt zu Konfigurationeinstellungen des Standard-Editors für die jeweilige Sprache bei."],"vs/platform/extensions/common/extensionsRegistry":['Gibt für VS Code-Erweiterungen die VS Code-Version an, mit der die Erweiterung kompatibel ist. Darf nicht "*" sein. Beispiel: ^0.10.5 gibt die Kompatibilität mit mindestens VS Code-Version 0.10.5 an.',"Der Herausgeber der VS Code-Extension.","Der Anzeigename für die Extension, der im VS Code-Katalog verwendet wird.","Die vom VS Code-Katalog zum Kategorisieren der Extension verwendeten Kategorien.","Das in VS Code Marketplace verwendete Banner.","Die Bannerfarbe für die Kopfzeile der VS Code Marketplace-Seite.","Das Farbdesign für die Schriftart, die im Banner verwendet wird.","Alle Beiträge der VS Code-Extension, die durch dieses Paket dargestellt werden.","Legt die Erweiterung fest, die im Marketplace als Vorschau gekennzeichnet werden soll.","Aktivierungsereignisse für die VS Code-Extension.","Array aus Badges, die im Marketplace in der Seitenleiste auf der Seite mit den Erweiterungen angezeigt werden.","Die Bild-URL für den Badge.","Der Link für den Badge.","Eine Beschreibung für den Badge.",'Abhängigkeiten von anderen Erweiterungen. Der Bezeichner einer Erweiterung ist immer ${publisher}.${name}, beispielsweise "vscode.csharp".',"Ein Skript, das ausgeführt wird, bevor das Paket als VS Code-Extension veröffentlicht wird.","Der Pfad zu einem 128x128-Pixel-Symbol."],"vs/platform/keybinding/common/abstractKeybindingService":["({0}) wurde gedrückt. Es wird auf die zweite Taste der Kombination gewartet...","Die Tastenkombination ({0}, {1}) ist kein Befehl."],"vs/platform/keybinding/common/keybindingLabels":["STRG","UMSCHALTTASTE","ALT","Windows","STRG","UMSCHALTTASTE","ALT","Befehlstaste","STRG","UMSCHALTTASTE","ALT","Windows"],"vs/platform/message/common/message":["Schließen","Später","Abbrechen"],"vs/platform/theme/common/colorRegistry":["Ungültiges Farbformat. Verwenden Sie #RGB, #RGBA, #RRGGBB oder #RRGGBBAA.","In der Workbench verwendete Farben.","Allgemeine Vordergrundfarbe. Diese Farbe wird nur verwendet, wenn sie nicht durch eine Komponente überschrieben wird.","Allgemeine Vordergrundfarbe. Diese Farbe wird nur verwendet, wenn sie nicht durch eine Komponente überschrieben wird.","Vordergrundfarbe für Beschreibungstexte, die weitere Informationen anzeigen, z. B. für ein Label.","Allgemeine Rahmenfarbe für fokussierte Elemente. Diese Farbe wird nur verwendet, wenn sie nicht durch eine Komponente überschrieben wird.","Ein zusätzlicher Rahmen um Elemente, mit dem diese von anderen getrennt werden, um einen größeren Kontrast zu erreichen.","Ein zusätzlicher Rahmen um aktive Elemente, mit dem diese von anderen getrennt werden, um einen größeren Kontrast zu erreichen.","The background color of text selections in the workbench (e.g. for input fields or text areas). Note that this does not apply to selections within the editor and the terminal.","Farbe für Text-Trennzeichen.","Vordergrundfarbe für Links im Text.","Vordergrundfarbe für aktive Links im Text.","Vordergrundfarbe für vorformatierte Textsegmente.","Hintergrundfarbe für block quotes im Text.","Rahmenfarbe für block quotes im Text.","Hintergrundfarbe für Code-Blöcke im Text.","Schattenfarbe von Widgets wie zum Beispiel Suchen/Ersetzen innerhalb des Editors.","Hintergrund für Eingabefeld.","Vordergrund für Eingabefeld.","Rahmen für Eingabefeld.","Rahmenfarbe für aktivierte Optionen in Eingabefeldern.","Input box - Vordergrundfarbe für Platzhalter-Text.","Hintergrundfarbe bei der Eingabevalidierung für den Schweregrad der Information.","Rahmenfarbe bei der Eingabevalidierung für den Schweregrad der Information.","Hintergrundfarbe bei der Eingabevalidierung für eine Warnung zur Information.","Rahmenfarbe bei der Eingabevalidierung für den Schweregrad der Warnung.","Hintergrundfarbe bei der Eingabevalidierung für den Schweregrad des Fehlers.","Rahmenfarbe bei der Eingabevalidierung für den Schweregrad des Fehlers.","Hintergrund für Dropdown.","Vordergrund für Dropdown.","Rahmen für Dropdown.","Hintergrundfarbe der Liste/Struktur für das fokussierte Element, wenn die Liste/Struktur aktiv ist. Eine aktive Liste/Struktur hat Tastaturfokus, eine inaktive hingegen nicht.","List/Tree foreground color for the focused item when the list/tree is active. An active list/tree has keyboard focus, an inactive does not.","Hintergrundfarbe der Liste/Struktur für das ausgewählte Element, wenn die Liste/Struktur aktiv ist. Eine aktive Liste/Struktur hat Tastaturfokus, eine inaktive hingegen nicht.","Vordergrundfarbe der Liste/Struktur für das ausgewählte Element, wenn die Liste/Struktur aktiv ist. Eine aktive Liste/Struktur hat Tastaturfokus, eine inaktive hingegen nicht.","Hintergrundfarbe der Liste/Struktur für das ausgewählte Element, wenn die Liste/Struktur inaktiv ist. Eine aktive Liste/Struktur hat Tastaturfokus, eine inaktive hingegen nicht.","Liste/Baumstruktur - Vordergrundfarbe für das ausgewählte Element, wenn die Liste/Baumstruktur inaktiv ist. Eine aktive Liste/Baumstruktur hat Tastaturfokus, eine inaktive hingegen nicht.","Hintergrund der Liste/Struktur, wenn mit der Maus auf Elemente gezeigt wird.","List/Tree foreground when hovering over items using the mouse.","Drag & Drop-Hintergrund der Liste/Struktur, wenn Elemente mithilfe der Maus verschoben werden.","Vordergrundfarbe der Liste/Struktur zur Trefferhervorhebung beim Suchen innerhalb der Liste/Struktur.","Schnellauswahlfarbe für das Gruppieren von Bezeichnungen.","Schnellauswahlfarbe für das Gruppieren von Rahmen.","Vordergrundfarbe der Schaltfläche.","Hintergrundfarbe der Schaltfläche.","Hintergrundfarbe der Schaltfläche, wenn darauf gezeigt wird.","Badge - Hintergrundfarbe. Badges sind kurze Info-Texte, z. B. für Anzahl Suchergebnisse.","Badge - Vordergrundfarbe. Badges sind kurze Info-Texte, z. B. für Anzahl Suchergebnisse.","Schatten der Scrollleiste, um anzuzeigen, dass die Ansicht gescrollt wird.","Hintergrundfarbe des Schiebereglers.","Hintergrundfarbe des Schiebereglers, wenn darauf gezeigt wird.","Hintergrundfarbe des Schiebereglers, wenn dieser aktiv ist.","Background color of the progress bar that can show for long running operations.","Hintergrundfarbe des Editors.","Standardvordergrundfarbe des Editors.","Hintergrundfarbe von Editor-Widgets wie zum Beispiel Suchen/Ersetzen.","Border color of the editor widget.","Farbe der Editor-Auswahl.","Farbe der Auswahl in einem inaktiven Editor.","Farbe für Bereiche, deren Inhalt der Auswahl entspricht.","Farbe des aktuellen Suchergebnisses.","Farbe der anderen Suchtreffer.","Farbe des Bereichs zur Einschränkung der Suche.","Hervorhebung eines Worts, unter dem ein Mauszeiger angezeigt wird.","Background color of the editor hover.","Rahmenfarbe des Editor-Mauszeigers.","Farbe der aktiven Links.","Hintergrundfarbe für eingefügten Text.","Hintergrundfarbe für entfernten Text.","Konturfarbe für eingefügten Text.","Konturfarbe für entfernten Text."],"vs/workbench/common/theme":["Hintergrundfarbe der aktiven Registerkarte. Registerkarten sind die Container für Editors im Editorbereich. In einer Editorgruppe können mehrere Registerkarten geöffnet werden. Mehrere Editorgruppen können vorhanden sein.","Hintergrundfarbe der inaktiven Registerkarte. Registerkarten sind die Container für Editors im Editorbereich. In einer Editorgruppe können mehrere Registerkarten geöffnet werden. Mehrere Editorgruppen können vorhanden sein.","Rahmen zum Trennen von Registerkarten. Registerkarten sind die Container für Editoren im Editor-Bereich. In einer Editor-Gruppe können mehrere Registerkarten geöffnet werden. Mehrere Editor-Gruppen sind möglich.","Vordergrundfarbe der aktiven Registerkarte in einer aktiven Gruppe. Registerkarten sind die Container für Editors im Editorbereich. In einer Editorgruppe können mehrere Registerkarten geöffnet werden. Mehrere Editorgruppen können vorhanden sein.","Vordergrundfarbe der inaktiven Registerkarte in einer aktiven Gruppe. Registerkarten sind die Container für Editors im Editorbereich. In einer Editorgruppe können mehrere Registerkarten geöffnet werden. Mehrere Editorgruppen können vorhanden sein.","Hintergrundfarbe einer Editor-Gruppe. Editor-Gruppen sind die Container der Editoren. Die Hintergrundfarbe wird beim Ziehen von Editoren angezeigt.","Background color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.","Border color of the editor group title header when tabs are enabled. Editor groups are the containers of editors.","Hintergrundfarbe der Titelüberschrift des Editors, wenn die Registerkarten deaktiviert sind. Editor-Gruppen sind die Container der Editoren.","Farbe zum Trennen mehrerer Editor-Gruppen. Editor-Gruppen sind die Container der Editoren.","Background color when dragging editors around. The color should have transparency so that the editor contents can still shine through.","Hintergrundfarbe des Panels. Panels werden unter dem Editorbereich angezeigt und enthalten Ansichten wie die Ausgabe und das integrierte Terminal.","Farbe des oberen Panelrahmens, der das Panel vom Editor abtrennt. Panels werden unter dem Editorbereich angezeigt und enthalten Ansichten wie die Ausgabe und das integrierten Terminal.","Titelfarbe für den aktiven Bereich. Bereiche werden unter dem Editorbereich angezeigt und enthalten Ansichten wie Ausgabe und integriertes Terminal.","Titelfarbe für den inaktiven Bereich. Bereiche werden unter dem Editorbereich angezeigt und enthalten Ansichten wie Ausgabe und integriertes Terminal.","Rahmenfarbe für den Titel des aktiven Bereichs. Bereiche werden unter dem Editorbereich angezeigt und enthalten Ansichten wie Ausgabe und integriertes Terminal.","Vordergrundfarbe der Statusleiste. Die Statusleiste wird unten im Fenster angezeigt.","Standardhintergrundfarbe der Statusleiste. Die Statusleiste wird unten im Fenster angezeigt.","Status bar border color separating to the sidebar and editor. The status bar is shown in the bottom of the window.","Hintergrundfarbe der Statusleiste, wenn kein Ordner geöffnet ist. Die Statusleiste wird unten im Fenster angezeigt.","Hintergrundfarbe für Statusleistenelemente beim Klicken. Die Statusleiste wird am unteren Rand des Fensters angezeigt.","Hintergrundfarbe der Statusleistenelemente beim Daraufzeigen. Die Statusleiste wird am unteren Seitenrand angezeigt.","Hintergrundfarbe für markante Elemente der Statusleiste. Markante Elemente sind im Vergleich zu anderen Statusleisteneinträgen hervorgehoben, um auf ihre Bedeutung hinzuweisen. Die Statusleiste wird unten im Fenster angezeigt.","Hintergrundfarbe für markante Elemente der Statusleiste, wenn auf diese gezeigt wird. Markante Elemente sind im Vergleich zu anderen Statusleisteneinträgen hervorgehoben, um auf ihre Bedeutung hinzuweisen. Die Statusleiste wird unten im Fenster angezeigt.","Hintergrundfarbe der Aktivitätsleiste. Die Aktivitätsleiste wird ganz links oder rechts angezeigt und ermöglicht das Wechseln zwischen verschiedenen Ansichten der Seitenleiste.","Vordergrundfarbe der Aktivitätsleiste (z. B. für Symbole). Die Aktivitätsleiste wird ganz links oder rechts angezeigt und ermöglicht das Wechseln zwischen verschiedenen Ansichten der Seitenleiste.","Activity bar border color separating to the side bar. The activity bar is showing on the far left or right and allows to switch between views of the side bar.","Drag and drop feedback color for the activity bar items. The color should have transparency so that the activity bar entries can still shine through. The activity bar is showing on the far left or right and allows to switch between views of the side bar.","Hintergrundfarbe für Aktivitätsinfobadge. Die Aktivitätsleiste wird ganz links oder ganz rechts angezeigt und ermöglicht den Wechsel zwischen Ansichten der Seitenleiste.","Vordergrundfarbe für Aktivitätsinfobadge. Die Aktivitätsleiste wird ganz links oder ganz rechts angezeigt und ermöglicht den Wechsel zwischen Ansichten der Seitenleiste.","Hintergrundfarbe der Seitenleiste. Die Seitenleiste ist der Container für Ansichten wie den Explorer und die Suche.","Side bar foreground color. The side bar is the container for views like explorer and search.","Side bar border color on the side separating to the editor. The side bar is the container for views like explorer and search.","Vordergrundfarbe der Seitenleiste. Die Seitenleiste ist der Container für Ansichten wie den Explorer und die Suche.","Hintergrundfarbe der Abschnittsüberschrift der Seitenleiste. Die Seitenleiste ist der Container für Ansichten wie den Explorer und die Suche.","Side bar section header foreground color. The side bar is the container for views like explorer and search.","Vordergrund der Titelleiste, wenn das Fenster aktiv ist. Diese Farbe wird derzeit nur von MacOS unterstützt.","Vordergrund der Titelleiste, wenn das Fenster inaktiv ist. Diese Farbe wird derzeit nur von MacOS unterstützt.","Hintergrund der Titelleiste, wenn das Fenster aktiv ist. Diese Farbe wird derzeit nur von MacOS unterstützt.","Hintergrund der Titelleiste, wenn das Fenster inaktiv ist. Diese Farbe wird derzeit nur von MacOS unterstützt.","Vordergrundfarbe für Benachrichtigungen. Benachrichtigungen werden oben im Fenster eingeblendet.","Hintergrundfarbe für Benachrichtigungen. Benachrichtigungen werden oben im Fenster eingeblendet."]});
//# sourceMappingURL=editor.main.nls.de.js.map
