# Privacy Policy — Kite or no kite

> Bozza da pubblicare a un URL pubblico (richiesto da Play Console).
> Placeholder da completare prima della pubblicazione:
> - `[DOMINIO]` — dominio dove è ospitata l'app (es. `gab-loc19.github.io/kite-`)
> - `[EMAIL]` — contatto sviluppatore (proposto: locontegabriele19@gmail.com — **⚠️ conferma** che vuoi esporre questa email pubblicamente, oppure indica un alias)
> - Data di entrata in vigore (proposta: 13 luglio 2026)

---

## Informativa sulla privacy (Italiano)

**Ultimo aggiornamento: 13 luglio 2026**

"Kite or no kite" è un'app senza server, senza account e senza pubblicità. Questa informativa descrive, punto per punto, quali dati l'app tratta e cosa lascia il tuo dispositivo.

### 1. Nessuna geolocalizzazione

L'app **non richiede mai il permesso di posizione** e non accede al GPS o ad altri sensori di localizzazione del dispositivo. Le coordinate degli spot che vedi nell'app sono predefinite oppure inserite manualmente da te.

### 2. Dati salvati solo sul tuo dispositivo

L'app salva localmente (localStorage del browser/WebView):

- **I tuoi spot personalizzati** (nome, coordinate, direzione del mare che inserisci tu);
- **Il tuo profilo rider** (peso e misure dei kite che possiedi), usato solo per calcolare la misura di kite consigliata.

Questi dati **non vengono mai trasmessi fuori dal dispositivo**, a noi o a terzi. Non abbiamo server: non potremmo riceverli nemmeno volendo. Puoi cancellarli in ogni momento rimuovendo gli spot dall'app o svuotando i dati dell'app/sito nelle impostazioni del dispositivo.

### 3. Cosa lascia il dispositivo

Per funzionare l'app effettua richieste di rete verso:

- **Open-Meteo** (api.open-meteo.com, marine-api.open-meteo.com) — per ottenere previsioni di vento, onde ed elevazione, l'app invia **le coordinate geografiche degli spot** (predefiniti o inseriti da te) come parametri della richiesta. Non viene inviato alcun identificativo personale, nessun account, nessuna API key. In via conservativa trattiamo queste coordinate come dato di posizione condiviso con una terza parte, anche se non rappresentano la tua posizione reale. Come per qualunque connessione internet, Open-Meteo vede l'indirizzo IP del dispositivo che effettua la richiesta. Privacy policy di Open-Meteo: https://open-meteo.com/en/terms
- **Windy** (embed.windy.com) — la mappa del vento è un contenuto di terza parte incorporato (iframe). Si carica solo quando apri la vista Mappa. L'app non controlla né legge quel contenuto; quando la mappa si carica, il tuo dispositivo comunica direttamente con Windy come se visitassi il loro sito (con le relative eventuali pratiche di Windy su cookie e dati). L'app passa nell'URL dell'embed solo coordinate e zoom dello spot. Privacy policy di Windy: https://account.windy.com/agreements/windy-privacy-policy
- **wind24.it** — solo **link statici** verso pagine di stazioni vento, aperti nel browser esterno se li tocchi. L'app non effettua alcuna richiesta a wind24.it di propria iniziativa.

I caratteri tipografici sono inclusi nell'app (self-hosted): **nessuna richiesta viene inviata a Google Fonts** o ad altri servizi Google.

Il sito che ospita l'app (`[DOMINIO]`) può registrare log tecnici standard (es. indirizzo IP) come qualsiasi hosting web; noi non vi accediamo per finalità di tracciamento.

### 4. Cosa non c'è

- Nessun account, login o registrazione.
- Nessuna notifica push.
- Nessuna pubblicità, nessun SDK pubblicitario.
- Nessuno strumento di analytics o tracciamento.
- Nessuna vendita o condivisione di dati personali.
- Nessun dato raccolto da noi: non esiste un nostro backend.

### 5. Minori

L'app non raccoglie dati personali ed è utilizzabile senza fornire alcuna informazione personale.

### 6. Modifiche

Eventuali modifiche a questa informativa saranno pubblicate a questo stesso indirizzo, con aggiornamento della data in testa.

### 7. Contatti

Per qualsiasi domanda: `[EMAIL]`

---

## Privacy Policy (English)

**Last updated: 13 July 2026**

"Kite or no kite" is a serverless app with no accounts and no ads. This policy describes, point by point, what data the app handles and what leaves your device.

### 1. No geolocation

The app **never requests the location permission** and does not access GPS or any other device location sensor. The spot coordinates you see in the app are either built-in or entered manually by you.

### 2. Data stored on your device only

The app stores locally (browser/WebView localStorage):

- **Your custom spots** (name, coordinates and sea direction you enter);
- **Your rider profile** (your weight and the kite sizes you own), used only to compute the recommended kite size.

This data is **never transmitted off your device**, to us or to anyone else. We run no servers: we could not receive it even if we wanted to. You can delete it at any time by removing spots in the app or clearing the app/site data in your device settings.

### 3. What leaves your device

To work, the app makes network requests to:

- **Open-Meteo** (api.open-meteo.com, marine-api.open-meteo.com) — to fetch wind, wave and elevation forecasts, the app sends **the geographic coordinates of the spots** (built-in or entered by you) as request parameters. No personal identifier, account or API key is sent. Conservatively, we treat these coordinates as location data shared with a third party, even though they do not represent your actual position. As with any internet connection, Open-Meteo sees the IP address of the requesting device. Open-Meteo privacy terms: https://open-meteo.com/en/terms
- **Windy** (embed.windy.com) — the wind map is embedded third-party content (iframe). It loads only when you open the Map view. The app neither controls nor reads that content; when the map loads, your device talks directly to Windy as if you were visiting their website (subject to Windy's own cookie and data practices). The app only passes spot coordinates and zoom level in the embed URL. Windy privacy policy: https://account.windy.com/agreements/windy-privacy-policy
- **wind24.it** — **static links only**, pointing to wind-station pages that open in your external browser if you tap them. The app never makes requests to wind24.it on its own.

Fonts are bundled with the app (self-hosted): **no request is ever made to Google Fonts** or any other Google service.

The site hosting the app (`[DOMINIO]`) may record standard technical logs (e.g. IP addresses) like any web hosting; we do not access them for tracking purposes.

### 4. What is not there

- No account, login or registration.
- No push notifications.
- No advertising, no ad SDKs.
- No analytics or tracking tools.
- No sale or sharing of personal data.
- No data collected by us: there is no backend of ours.

### 5. Children

The app collects no personal data and can be used without providing any personal information.

### 6. Changes

Any changes to this policy will be published at this same address, with the date at the top updated.

### 7. Contact

For any questions: `[EMAIL]`
