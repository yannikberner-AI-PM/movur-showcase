# Architektur

## Geltungsbereich

Diese technische Beschreibung betrifft den dokumentierten Editorstand; die hier enthaltenen zwei Auszüge ersetzen nicht dessen vollständigen Quellcode. Die Bilder basieren auf `4c4897a`. Neuere lokale Arbeiten und die isolierte Datenschutzkorrektur der Auszüge sind kein belegtes Deployment. v0.1.0 bleibt das Release-Ziel. [Status](../README.md), [Codeherkunft](../components/README.md).

## Implementierter Datenfluss

```text
React-Oberfläche / Szene / Inspector
  → Nutzeraktion → Controller / typisierte Commands
  → zentraler BoardStore → History und Persistenz
  → React-Viewmodels und Darstellung

Account-Modus:
Workspace-Client → serverseitige API → verifizierte Identität
                → Workspace-Snapshot mit Revision in D1
```

Vite erzeugt das Frontend. Cloudflare Pages liefert es aus, Pages Functions bedienen die Account-API. Clerk stellt Anmeldung und Sitzungen bereit, D1 speichert Account-Workspaces. Der Editor verwendet React, TypeScript und eigenes CSS; Verbindungen und Overlays werden mit SVG dargestellt. Es handelt sich nicht um eine Next.js-/tldraw-/HyperFormula-/Prisma-Architektur.

## Zuständigkeiten und Invarianten

- **Oberfläche:** Shell, Boardansichten, Szene und Inspector stellen den Zustand dar; sie sind nicht eine zweite Datenquelle.
- **Steuerung:** Controller und Services übersetzen Eingaben in typisierte Commands.
- **Zustand:** Ein zentraler BoardStore hält Board- und Gestenzustand. Zusammengehörige Mutationen bilden eine Transaktion mit Undo/Redo.
- **Normalisierung:** Daten werden an Lade-, Import- und Erstellgrenzen geprüft, nicht bei jedem Neuzeichnen repariert.
- **Berechnungen:** Eine eigene TypeScript-Engine löst Objekt-/Attributreferenzen auf und liefert typisierte Ergebnisse oder sichtbare Fehler, statt fehlende Daten still als Null zu behandeln.
- **Persistenz:** Lokaler Modus und Account-Modus haben unterschiedliche Speichergrenzen. Serverbestätigung und sichtbare Revisionskonflikte sind keine Echtzeit-Kollaboration.
- **Lebenszyklus:** Gesten, Listener und asynchrone Ergebnisse gehören zur aktiven Sitzung; ein verspätetes Ergebnis darf nicht im falschen Board oder Konto landen.

## Domänenmodell

Cards tragen Inhalt, Werte/Formeln, Einheiten und typisierte Attribute. Strukturierende Frames gruppieren Inhalte und können Kalenderansichten tragen; sie sind keine semantischen Verbindungsendpunkte. Verbindungen haben Richtung, Typ und Beschriftung, führen aber keinen Prozesscode aus. Freihand und grafische Elemente ergänzen das Modell.

Die Formelengine behandelt unter anderem Zahlen, Prozent, Datum, Uhrzeit und Dauer. Referenz-, Wert-, Divisions- und Zyklusfehler bleiben sichtbar. Das ist keine vollständige Excel-Implementierung. Native Board- und Git-Historien-JSON-Importe erzeugen gewöhnliche editierbare Objekte; ein Git-Import ist kein dauerhaft synchronisierter Connector.

## Öffentliche Codeauszüge

[URL-Vorschau](../components/urlPreview.ts) klassifiziert Text und leitet Titel/Domain lokal aus einer URL ab; sie lädt keine Remote-Metadaten oder Favicons. Die enthaltene FileReader-Hilfsfunktion liest Dateien als Data-URL. [Bildprüfung](../components/images.ts) erlaubt bestimmte eingebettete Rasterbild-Data-URLs. Diese Formatprüfung ersetzt weder vollständige Dateidekodierung noch Upload-, Größen- oder Berechtigungsprüfungen. Die Auszüge benötigen Browser-APIs und sind keine vollständige Sicherheitsgrenze.

## Geplante KI-Grenze — nicht implementiert

```text
Freigegebener Text / Transkript / Daten + Board-Ausschnitt
  → providerneutraler Adapter
  → validierter Änderungsvorschlag mit Quellen und Annahmen
  → Vorschau / explizite Nutzerfreigabe
  → bestehende Commands → BoardStore → Undo/Redo / Persistenz
```

Modellantworten sollen weder Datenbank noch Store direkt verändern. Typen, Referenzen, Rechte, Revision und Umfang müssen vor Ausführung geprüft werden. Anbieterwahl, Kosten und Datenübertragung bleiben explizit. Details und Abnahmekriterien: [v1.0.0-Roadmap](AI_ROADMAP.md).

## Prüfgrenzen

Im Produkt werden Vitest, Playwright und Python-Strukturprüfungen verwendet. Dieses Showcase enthält diese vollständigen Produkttests nicht, sondern acht separate Node-Tests für die ausgewählten reinen Hilfsfunktionen. Es behauptet keinen neuen Test des vollständigen Produkts. Native OS-Eingaben, physisches Safari, tatsächliche E-Mail-Verifikation, Produktionslast und Release-Artefakte benötigen gesonderte Prüfung. Ein lokaler Build oder Screenshot ist keine Produktionsfreigabe.
