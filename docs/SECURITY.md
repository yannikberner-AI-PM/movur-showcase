# Sicherheit und Vertrauensmodell

## Umfang und Grenzen

Dieses Showcase enthält Dokumentation, synthetische Screenshots und zwei ausgewählte Originalauszüge, keine betreibbare Anwendung. Es ist weder Sicherheitszertifikat noch Auditbericht. Die beschriebenen Grenzen des Produkts sind keine Garantie, dass jede mögliche Angriffssituation geprüft wurde.

## Identität und Datenhoheit

Im Account-Modus wird Identität serverseitig geprüft. Vom Browser gelieferte Kennungen sind keine Zugriffsberechtigung; Eigentümerschaft muss serverseitig durchgesetzt werden. Lokaler Browserzustand ersetzt keine Account-Identität. Accountwechsel und Sitzungsende müssen laufende Vorgänge abgrenzen, damit verspätete Ergebnisse nicht in ein anderes Konto gelangen.

Private Workspace-Daten und die öffentliche Produktdarstellung sind getrennte Vertrauensbereiche. Revisionen sollen konkurrierende Speicherstände sichtbar machen, statt unbemerktes Überschreiben zuzulassen. Das ist kein Echtzeit-Kollaborationsprotokoll.

## Nicht vertrauenswürdige Eingaben

Dateien, URLs, Boardtexte und künftige Modellantworten sind Daten, keine ausführbaren Befehle oder Zugriffsrechte. Typen, Referenzen und Umfang müssen an Systemgrenzen geprüft werden. Formatprüfung ist nicht gleich Inhaltsprüfung: Die [Bildfunktion](../components/images.ts) erkennt erlaubte Data-URL-Formate, ersetzt aber keine vollständige Dekodierungs-, Größen- oder Uploadkontrolle. Die [URL-Vorschau](../components/urlPreview.ts) erzeugt lokale Metadaten ohne Remote-Faviconabruf; sie ist kein vollständiger URL-Sicherheitsfilter.

## Geplante KI-Verarbeitung

Die [KI-Roadmap](AI_ROADMAP.md) verlangt explizite Kontextfreigabe, sichtbare Providerwahl, Vorschau und bestätigte Änderungen über die vorhandenen Commands. Prompt-Inhalte dürfen Berechtigungen nicht erweitern. Kein stiller Anbieterwechsel oder unbeabsichtigter externer Schreibzugriff. Modell- und Transkriptionsfehler müssen abbrechbar und sichtbar bleiben. Diese KI-Grenzen sind Zielanforderungen, keine bereits ausgelieferten Funktionen.

## Verantwortlicher Umgang

Keine Geheimnisse, privaten Boards oder Zugangsdaten in öffentliche Artefakte hochladen. Für sensible Daten sind Zweck, Empfänger, Speicherung/Löschung und rechtliche Grundlage vor Nutzung zu klären. Keine pauschale Compliance-, Verfügbarkeits- oder Trainingsausschlusszusage aus diesem Dokument ableiten.

Sicherheitsrelevante Hinweise bitte zunächst an **info@movur.app** melden, nicht mit persönlichen Daten oder Zugangsmaterial in öffentlichen Diskussionen. Die tatsächliche Erreichbarkeit des Postfachs ist noch zu prüfen; es gibt hier keine zugesagte Reaktionszeit oder Bug-Bounty-Vereinbarung.
