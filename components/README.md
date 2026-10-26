# Ausgewählte proprietäre Originalauszüge

Die beiden unveränderten TypeScript-Dateien dienen ausschließlich der Ansicht und technischen Bewertung nach der [LICENSE](../LICENSE). Sie sind **kein Open-Source-SDK und keine vollständige Anwendung**. Die reinen Hilfsfunktionen sind mit Node.js ab 22.18 und `npm test` ohne externe Pakete prüfbar. Die FileReader-Funktion benötigt eine Browserumgebung und ist nicht durch diese Node-Tests abgedeckt.

| Showcase-Datei | Originaldatei | Aufgabe |
| --- | --- | --- |
| [urlPreview.ts](urlPreview.ts) | `prototype/src/domain/import.ts` | Droptext klassifizieren, URL-Titel/Domain lokal ableiten, Datei als Data-URL lesen |
| [images.ts](images.ts) | `prototype/src/domain/images.ts` | Bestimmte eingebettete Rasterbild-Data-URLs erkennen |

## Herkunft und Veröffentlichungsgrenze

Die Auszüge stammen aus dem Originalprojektstand auf Basis des Commits **`4c4897a` plus einer isolierten lokalen Datenschutzkorrektur**. Diese Korrektur wurde nicht als deployt nachgewiesen. Der Showcase-Code darf deshalb weder dem unveränderten Basis-Commit noch einer bereits veröffentlichten Produktversion gleichgesetzt werden. Die Dateien wurden byteidentisch aus diesem lokal korrigierten Stand übernommen, lediglich `import.ts` heißt hier `urlPreview.ts`. Prüfsummen stehen im [Manifest](../MANIFEST.sha256).

Die URL-Vorschau leitet Metadaten lokal ab und liefert ein leeres Favicon-Feld, statt einen fremden Favicon-Dienst zu kontaktieren. Die Bildprüfung beschränkt akzeptierte Werte auf bestimmte eingebettete Rasterformate; sie erlaubt keine Remote-URLs oder SVG. Das sind begrenzte Hilfsfunktionen, kein allgemeines Sicherheitsversprechen. Die Data-URL-Prüfung dekodiert oder analysiert den Bildinhalt nicht. Direkte URL-Verarbeitung kann bei ungültiger Eingabe scheitern; Aufrufer bleiben für Validierung, Fehlerbehandlung und Darstellung verantwortlich.

Es wurden keine zusätzlichen Lizenzheader in die Originaldateien eingefügt, damit die Quellkopien unverändert bleiben. Die proprietäre Lizenz gilt trotzdem. Der vollständige Produktcode, Betriebskonfiguration und private Entwicklungshistorie sind nicht Bestandteil dieses Showcases.
