# Digital Asset Links — istruzioni per assetlinks.json

Il template è in `assetlinks-template.json`. Due placeholder da sostituire:

## 1. `package_name`

L'application ID Android che sceglierai in PWABuilder/Bubblewrap al momento del packaging
(es. `it.gabloc.kiteornokite`). Deve coincidere esattamente con quello del pacchetto caricato su Play.

## 2. `sha256_cert_fingerprints`

È l'impronta SHA-256 del **certificato che firma l'APK/AAB installato sui dispositivi**.
Non è generabile ora: esiste solo dopo aver creato il pacchetto firmato.

Dove trovarla, in ordine di autorevolezza:

- **Play App Signing (caso normale, raccomandato):** dopo il primo upload dell'AAB,
  in Play Console → **Test and release → Setup → App signing** (in precedenza
  "App integrity") → sezione **App signing key certificate** → campo
  **SHA-256 certificate fingerprint**. Questa è l'impronta che conta per gli utenti
  che installano da Play, perché Google ri-firma l'app con la propria chiave.
- **PWABuilder:** al termine del packaging Android mostra/scarica `signing.keystore`
  e un file `signing-key-info` con la SHA-256 della chiave di upload.
- **Bubblewrap:** `bubblewrap fingerprint list`, oppure manualmente:
  `keytool -list -v -keystore android.keystore -alias android` → riga `SHA256:`.

Il formato richiesto è esadecimale maiuscolo separato da due punti, 32 byte:
`AA:BB:CC:...` (95 caratteri totali).

**Consiglio pratico:** metti nell'array **entrambe** le impronte — quella della
App signing key di Play e quella della upload key di PWABuilder/Bubblewrap — così
i link verificati funzionano anche con build installate direttamente (internal
testing, sideload di prova). L'array accetta più voci:

```json
"sha256_cert_fingerprints": [
  "IMPRONTA:PLAY:APP:SIGNING:...",
  "IMPRONTA:UPLOAD:KEY:..."
]
```

## 3. Dove pubblicarlo

Il file finale va servito **esattamente** a:

```
https://<dominio-della-pwa>/.well-known/assetlinks.json
```

sullo **stesso dominio** dichiarato come host della TWA. Requisiti:

- HTTP **200** diretto, **nessun redirect** (Google non li segue per questo file);
- `Content-Type: application/json`;
- raggiungibile pubblicamente, no autenticazione.

Con GitHub Pages: crea la cartella `.well-known/` nella root del sito pubblicato e
mettici `assetlinks.json`; GitHub Pages serve correttamente il percorso e il MIME type.
(Nota: se il sito è pubblicato come *project page* — es. `utente.github.io/kite-/` —
il file va comunque alla **radice del dominio**, cioè nel repo `utente.github.io`,
perché `/.well-known/` è risolto a livello di dominio, non di sottocartella.
In quel caso valuta un dominio/hosting dedicato, oppure pubblica la PWA come user page.)

## 4. Verifica

Dopo la pubblicazione:

```
https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://<dominio>&relation=delegate_permission/common.handle_all_urls
```

deve restituire lo statement senza errori. In alternativa usa lo "Statement List
Generator and Tester" di Google. Se il file è corretto, la TWA si apre a schermo
pieno senza la barra URL di Chrome.

## Perché serve

Senza Digital Asset Links verificati la TWA mostra la barra del browser (Custom Tab):
il file prova a Chrome che l'app Android e il sito appartengono allo stesso proprietario.
