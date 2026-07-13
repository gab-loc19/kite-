# Data Safety Form — bozza per Google Play Console

App: **Kite or no kite** (PWA impacchettata come TWA)
Approccio: **dichiarativo conservativo** — dove c'è margine di interpretazione, si dichiara.
I punti marcati **⚠️ CONFERMA** richiedono la tua decisione finale prima dell'inserimento in Play Console.

Base fattuale (verificata nel codice, v35):
- Nessuna geolocalizzazione del dispositivo, mai richiesta (`navigator.geolocation` assente).
- `localStorage`: `kiteSpots` (coordinate spot inserite a mano), `kiteProfile` (peso, kite posseduti). Mai trasmessi fuori dal dispositivo.
- Nessuna notifica, nessun account, nessun login, nessun SDK pubblicitario o di analytics.
- Rete: Open-Meteo (forecast/elevation/marine — coordinate spot come query param, senza API key), Windy (iframe embed + link esterni), wind24.it (solo link statici), font self-hosted.

---

## Sezione 1 — Raccolta e condivisione dati

**Domanda Play Console:** "Does your app collect or share any of the required user data types?"

**Risposta: SÌ** (scelta conservativa)

Motivazione: le coordinate degli spot vengono trasmesse a Open-Meteo (terza parte) come parametri di query per ottenere le previsioni. Non sono la posizione reale dell'utente e non provengono da GPS/sensori, ma sono coordinate geografiche che l'utente inserisce e che lasciano il dispositivo → in ottica conservativa le trattiamo come "Location" condivisa.

> **⚠️ CONFERMA 1:** una lettura stretta della tassonomia Google ("user or device location") permetterebbe di rispondere **NO** (le coordinate sono di luoghi, non dell'utente/dispositivo). La bozza sceglie SÌ per prudenza. Confermi l'approccio conservativo?

---

## Sezione 2 — Tipi di dato

### 2.1 Location → **Approximate location**

| Campo Play Console | Valore dichiarato |
|---|---|
| Collected? | **No** (elaborazione effimera: le coordinate sono usate solo per la richiesta HTTP, non memorizzate da noi su server — non abbiamo server) |
| Shared? | **Sì** — con Open-Meteo (open-meteo.com), provider meteo terzo |
| Processed ephemerally? | Sì |
| Required or optional? | Required (senza coordinate l'app non può dare previsioni) |
| Purpose (sharing) | **App functionality** |
| Linked to user identity? | No (nessun account, nessun identificatore utente inviato) |
| Used for advertising? | No |

> **⚠️ CONFERMA 2 — granularità:** dichiarato **Approximate location**. Rationale: non deriva da GPS/sensori del dispositivo, è un luogo di interesse digitato dall'utente. L'alternativa ultra-conservativa è **Precise location** (le coordinate hanno 3-4 decimali, ~10-100 m), che però in Play Console attira scrutinio maggiore e suggerisce falsamente un tracciamento del dispositivo. Raccomando Approximate; decidi tu.

> **⚠️ CONFERMA 3 — "Collected = No, Shared = Sì":** in Play Console "collected" significa trasmesso off-device e conservato oltre l'elaborazione della richiesta. Noi non conserviamo nulla (zero backend); Open-Meteo riceve i parametri per rispondere. La combinazione dichiarata (shared + ephemeral, not collected) è quella che meglio descrive il flusso, ma verifica che la UI della console la accetti nella forma corrente del questionario.

### 2.2 WebView Windy → **nessuna dichiarazione**

L'iframe di embed.windy.com è **navigazione web aperta**: contenuto di terza parte su cui l'app non ha alcun controllo, non iniettiamo dati, non leggiamo nulla dall'iframe, l'utente può interagirci come con una pagina web qualsiasi. La policy Data Safety di Google **esenta esplicitamente** i dati trasferiti tramite "open web browsing" dalla dichiarazione. La stessa logica copre i link esterni verso windy.com e wind24.it (aperti nel browser, fuori dall'app).

> **⚠️ CONFERMA 4:** l'esenzione "open web browsing" è pensata per browser/webview a navigazione libera; un iframe embed è un caso limite ma difendibile (contenuto third-party non controllato, nessun dato passato oltre a lat/lon/zoom nell'URL dell'embed, che sono le stesse coordinate spot già dichiarate al punto 2.1). Confermi di appoggiarti all'esenzione, documentando questa motivazione?

### 2.3 Tutti gli altri tipi di dato → **nessuna raccolta**

Da dichiarare **No** per ogni categoria: Personal info, Financial info, Health & fitness, Messages, Photos & videos, Audio, Files & docs, Calendar, Contacts, App activity, Web browsing history, App info & performance (nessun crash log o diagnostica raccolti da noi), Device or other IDs.

Nota: `kiteSpots` e `kiteProfile` (peso, kite) restano in `localStorage` sul dispositivo e **non vengono mai trasmessi** → per definizione Google non sono "collected" (l'elaborazione on-device non trasmessa è esente).

> **⚠️ CONFERMA 5:** il peso dell'utente in `kiteProfile` potrebbe astrattamente rientrare in "Health & fitness → Fitness info". Resta solo sul dispositivo, quindi l'esenzione on-device si applica ed è corretto dichiarare No. Segnalato solo per completezza — confermi No?

---

## Sezione 3 — Sicurezza dei dati

| Domanda | Risposta |
|---|---|
| Is all of the user data collected by your app encrypted in transit? | **Sì** — tutte le richieste sono HTTPS (open-meteo.com, embed.windy.com) |
| Do you provide a way for users to request that their data is deleted? | Vedi sotto |

> **⚠️ CONFERMA 6 — cancellazione dati:** non esiste account né dato conservato da noi. I dati locali si eliminano dall'app (rimozione spot) o svuotando i dati dell'app/sito. In Play Console, se la domanda è vincolante nonostante "collected = No", la risposta appropriata è che non ci sono dati raccolti da cancellare; se il form richiede comunque un meccanismo, indicare la cancellazione locale. Da valutare sul questionario reale al momento dell'inserimento.

---

## Sezione 4 — Riepilogo per l'inserimento

1. Collect or share data? → **Sì**
2. Data types → **Location / Approximate location**: Shared (Open-Meteo), not collected, ephemeral, required, purpose App functionality, non collegato all'identità, no advertising.
3. Tutto il resto → **No**.
4. Encrypted in transit → **Sì**.
5. WebView Windy → non dichiarato (esenzione open web browsing, motivazione al § 2.2).

**Non inserire in Play Console prima di aver sciolto le CONFERME 1-6.**
