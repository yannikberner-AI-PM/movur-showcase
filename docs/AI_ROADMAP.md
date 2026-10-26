# v1.0.0 — genehmigtes KI-Zielbild

## Status

Dies ist die nutzerseitig genehmigte Produktvision mit Abnahmekriterien, **keine Liste ausgelieferter KI-Funktionen und kein Terminversprechen**. v0.1.0 bleibt das vorbereitete Release-Ziel. KI-assistierte Entwicklung ist nicht mit einer integrierten KI-Funktion für Anwender gleichzusetzen.

**v1.0.0 soll aus Text, Sprache und Daten ein verständliches, berechenbares und vollständig weiterbearbeitbares Board machen.** KI soll native Cards, strukturierende Frames, typisierte Attribute/Formeln und semantische Verbindungen erzeugen und gezielt ändern — nicht nur Bilder oder Chatantworten. Nutzer behalten Kontrolle über Annahmen, Quellen und Ausführung.

Für Privatnutzer, Solo-Selbstständige und Teams in KMU sowie größeren Unternehmen, insbesondere Sales, Marketing, Product, Support und Softwareentwicklung. Enterprise-Betriebszusagen brauchen eigene Nachweise.

## Vorhandenes Fundament, fehlende Produktfunktion

Der eigene React-/TypeScript-Editor, typisierte Transaktionen, Undo/Redo, Cards, Frames, Formeln und Referenzen bilden das editierbare Zielmodell. Native Board-/Git-Historien-Importe, Vorlagen und private Account-Workspaces existieren. Daraus folgt noch kein ausgelieferter Text-/Speech-to-Board-Dienst, KI-Änderungsagent, allgemeiner Geschäftsconnector oder durchgängiges Provenienzmodell.

## Gewünschte Arbeitsabläufe

| Eingang / Aufgabe | Bearbeitbares Ergebnis | Nachvollziehbarkeit |
| --- | --- | --- |
| Textbriefing oder Notizen | Cards, Frames, offene Fragen und Beziehungen | Nutzertext, Annahmen und KI-Ergänzungen getrennt |
| Sprache | Korrigierbares Transkript, danach Board-Vorschlag | Freigabe und transparente Audio-/Transkriptverarbeitung |
| Sales / CRM / Funnels | Stufen, Chancen, Conversion- und Umsatzmodelle | Quellfelder, Zeitraum, Einheiten und fehlende Werte |
| Marketing | Kampagnen, Kanäle, Budgets und Abhängigkeiten | Ausgaben, Annahmen und berechnete Werte getrennt |
| Product | Ziele, Initiativen, Meilensteine und Roadmaps | Prioritäten und Termine bleiben Vorschläge |
| Support | Anliegen, Kategorien und Aufwands-/SLA-Modelle | Kontrollierbare Herkunft und sensible Inhalte |
| Software / Git | Historie, Änderungen und Roadmap-Kontext | Reale Historie statt erfundener Commits; Inferenz markiert |
| „Ändere dieses Modell …“ | Gezielte Änderungen am bestehenden Board | Diff, Quellen, Freigabe und Rücknahme |

Nicht jeder Ablauf benötigt sofort einen Live-Connector. Zunächst sollen dokumentierte Datei-/Exportschemas mit expliziten Grenzen unterstützt werden. Ein Upload autorisiert keinen Zugriff auf das Herkunftssystem.

## Lieferfolge und Abnahme

### 1. Gemeinsamer Änderungsvertrag

Validiertes Vorschlagsschema für Erstellen, Ändern und Entfernen; stabile Referenzen sowie Quellen, Annahmen und Unsicherheit. Ausführung ausschließlich über bestehende Commands.

**Gate:** Ungültige Typen, Referenzen, unzulässige Frame-Endpunkte und übergroße Vorschläge werden vor Mutation abgewiesen. Abbruch verändert nichts; bestätigte Transaktionen sind atomar rückgängig/wiederherstellbar. Veraltete Revisionen überschreiben keine neueren Änderungen.

### 2. Text-to-Board und kontrollierte Bearbeitung

Briefings werden zu Board-Vorschlägen; Änderungen gelten nur für ausdrücklich ausgewählte Objekte oder freigegebenen Kontext. Unklare Werte bleiben offene Fragen.

**Gate:** Vorschau/Diff und explizite Übernahme; alle Inhalte manuell editierbar, speicherbar und nach Reload erhalten. Die Formelengine prüft Berechnungen. Fehlende Daten bleiben sichtbare Fehler. Kein verstecktes Löschen oder externes Schreiben.

### 3. Strukturierte Daten und Provenienz

Dokumentierte Importschemas und Feldzuordnung; Herkunft mit Quelle, Fundstelle, Importzeitpunkt und Transformation. KI-Ergänzungen und abgeleitete Annahmen bleiben unterscheidbar.

**Gate:** Synthetische Referenzfälle je Schema, korrekte Einheiten/Datumssemantik, stabile Referenzen und überprüfbare Summen. Wiederholte Importe haben eine explizite Duplikat-/Updatestrategie. Kein stilles Abschneiden oder Vermischen mit lokalen Änderungen. Herkunft bleibt im Editor und Export erhalten.

### 4. Sprache als kontrollierter Eingang

Aufnahme/Upload nur nach Freigabe; korrigierbares Transkript vor Board-Erstellung. Danach gelten dieselben Regeln wie für Text.

**Gate:** Kein ungefragtes Mikrofon und keine stille Übertragung. Anbieter, Speicherung und Löschung von Audio/Transkript werden erklärt. Abbruch oder Transkriptionsfehler erzeugen keine Teiländerungen.

### 5. Providerwahl und Freigabe

Eine kleine providerneutrale Schnittstelle mit expliziten Fähigkeiten und getesteten Adaptern. Gewünschte Integrationen: **ChatGPT, Kimi, DeepSeek und lokale Modelle**. Das sind Wünsche, keine Behauptung bereits verfügbarer Adapter. Unterschiede bei strukturierten Antworten, Kontext und Sprache bleiben sichtbar; kein stiller Wechsel des Datenempfängers.

**Bestehende Abonnements:** Wiederverwendung nur bei offiziell unterstütztem Zugang und zulässigen Anbieterbedingungen. Ein Chat-Abonnement gewährt nicht automatisch API-Zugriff. APIs können separat kostenpflichtig sein; lokale Modelle benötigen eigene Rechen-/Betriebsressourcen und passende Modelllizenzen. Keine universelle Abo-Wiederverwendung, kein Cookie-Recycling, kein Auslesen von Browser-Sitzungen und keine Umgehung von Zugangsbeschränkungen. Zugang und Preise sind pro Adapter zu prüfen.

**Gate:** Transparente Kosten/Nutzung, abbrechbare Anfragen, Limits und sichtbare Fehler bei Timeout, Rate-Limit oder ungültigen Antworten. Kein Verlust bestätigter Änderungen beim Providerwechsel. Jede beworbene Integration braucht echte Integrationsprüfungen; ungeprüfte Adapter bleiben geplant.

## Sicherheits- und Qualitätsgrenzen

- Nur explizit freigegebener Kontext; kein pauschaler Workspace-Upload und keine fremden Boards.
- Board- und Importtexte sind unvertrauenswürdige Daten, keine Berechtigung für Tools oder weitere Netzwerkausgänge.
- Schlüssel gehören nicht in öffentliche Browserartefakte, Bilder, Logs oder Board-Exporte. Auch lokale Endpunkte benötigen ein Vertrauensmodell.
- Sensible Geschäfts-/Supportdaten erfordern Datenminimierung und geklärte Anbieterbedingungen. Kein implizites Trainings- oder Compliance-Versprechen.
- Synthetische Referenztests prüfen Typen, Quellen, Berechnungen, Persistenz und Undo/Redo; zusätzlich sind Providerfehler, Account-Isolation, Revisionskonflikte und reale Eingaben zu prüfen.
- Freigabe erst nach Prüfung der beworbenen Abläufe am tatsächlichen Release-Artefakt. Unit-Tests allein genügen nicht.

## Bewusst keine Zusage

Keine volle Excel-/BPMN-Parität, kein autonom handelnder Unternehmensagent, keine automatische Änderung fremder CRM-/Git-/Supportsysteme, keine garantierte Modellqualität und keine Enterprise-/Compliance-Zertifizierung. Echtzeit-Kollaboration und öffentliche Boardfreigabe sind separate Entscheidungen.

[Architektur](ARCHITECTURE.md) · [Vertrauensmodell](SECURITY.md) · [Geschäftsmodell](BUSINESS_MODEL.md)
