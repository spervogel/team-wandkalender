# Kinderhaus Team-Kalender

2013-10-04

- Implementierung in AngularJS
- Konfiguration in `app.js` (Jahreszahl, Spalten, ggf. Namenskürzel)

2014-09-02

- Papierformat: 2000mm x 860mm

2020-10-13

- Auf Wunsche des Teams: Keine Teamie-Namenkürzel, Extraspalte
- Minimale Anpassungen im Code notwendig
- Ausdruck in Windows mit Firefox via "Adobe PDF" als PDF/X-3
- Anmerkung: Chrome/Windows druckt unvollständig
- Papierformat dort "KH Kalender 1900": 1900mm x 860mm

2021-09-09

- Gleiche Technik.
- Diesmal nur 10 Teamie-Spalten, daher Papierformat 1700mm x 860mm

2021-09-22

- Team will 2 Extra-Spalten für Springer ("S")
- Team will keine Namenskürzel
- Team will 14 Monate, also September bis Oktober des Folgejahres
- Ausdruck per Firefox in Windows 8 auf "Adobe PDF" in 2100x860 bleibt hängen.
  Grund ist unklar
- Daher nun Ausdruck unter Linux mit Firefox 92, "Save to PDF", "Print using system dialog", custom paper size.
- Dieses PDF habe ich zur Sicherheit nochmal unter W8 aus Acrobat auf "Adobe PDF" gedruckt.

2022-09-01

- Diesmal wieder mit Namenskürzel.
- Die aktuellen Namen ergeben etliche Uneindeutigkeiten bei den ersten zwei Buchstaben. Daher Kürzel angepasst.
- Wieder extra-Spalte für Springer (nun mit Kürzel "Sp"), aber nur eine statt vorher zwei.
- Ausdruck per Firefox in Windows 8 auf "Adobe PDF" bleibt wieder hängen.
- Daher nun Ausdruck unter Linux mit Firefox 94, "Print using system dialog", "Print to File", Scale 100%, custom paper size.
- Dieses PDF habe ich zur Sicherheit nochmal unter W8 aus Acrobat auf "Adobe PDF" gedruckt.

2024

- Nun wieder ohne Namenskürzel gewünscht
- Ausdruck mit Firefox/Linux
    - "Print using system dialog"
        - "Page Setup" > "Paper size" > "Manage Custom Sizes"
            - Papierformat 2000mm x 860mm
        - "General" > "Print to file"

2025 an Michi übergeben

2025-09-09

- Vorbereitung des Kalenders für's neue KiGa Jahr (2025/2026)
- Anpassung der Variablen $scope.jahr = 2024 zu $scope.jahr = 2025 in der Datei "app.js".
- Herunterladen aller Dateien und lokales öffnen der "index.html"
- In Safari Drucken als PDF mit Papierformat 2000mm x 860mm
