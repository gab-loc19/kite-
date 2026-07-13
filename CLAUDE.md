# CLAUDE.md — Kite or no kite

## Cos'è
PWA kitesurf, zero backend, hosting statico. Verdetti go/no-go basati su vento, raffiche, direzione per spot salvati. Rider di riferimento: 77kg, kite principale 12m RRD Obsession.

## Convenzioni obbligatorie
- Ad ogni release, bump insieme di `APP_VERSION` in index.html e della cache `CACHE` in sw.js (es. v34 → v35). Mai uno senza l'altro.
- Approccio conservativo su ogni decisione legale/compliance (GDPR, Data Safety Form, privacy policy): in caso di dubbio, dichiara/scegli l'opzione più cautelativa, non la più comoda.
- Modifiche minime, non toccare file o funzionalità non richieste esplicitamente.
- Non mergiare pull request in main senza conferma esplicita di Gab.
- Non pubblicare submission su Play Console o modificare account store.

## Architettura
- Zero backend, nessuna credenziale/API key nel client.
- Meteo: Open-Meteo, tre modelli in cross-check: icon_seamless (DWD ICON, primario), gfs_seamless (GFS), meteofrance_seamless (AROME). Mare/onde: Open-Meteo Marine API, solo informativo, non influenza il verdetto.
- Font self hosted in /fonts (Archivo, Space Mono). Nessuna chiamata a Google Fonts, rimosso per rischio GDPR (LG München I, gennaio 2022).
- Mappa: embed iframe Windy. Nessuna Windy Pro key nel client. Zoom ≤9 per mantenere l'overlay colorato.
- Stazioni live: link statici a wind24.it (Zapponeta è MADIS, non coperta da Windy Stations API).
- Sync spot tra dispositivi: export/import manuale, codice base64, nessun server.

## Spot built-in, fatti noti
- Margherita di Savoia (S): lat 41.3622, lon 16.1895, seaDir hardcoded 67°, NON ANCORA VERIFICATO con l'algoritmo estimateSea attuale. Verifica pendente, api.open-meteo.com serve per farla, non raggiungibile da ogni sandbox.
- Zapponeta: seaDir confermato 45° (NE) via Estimate in-app, era 115° in precedenza (errato).

## estimateSea
Run-length su 8 bearing × 5 distanze (0.6→6.5km), usa Open-Meteo elevation API. Il vecchio approccio a media circolare falliva su lagune costiere (Lago di Lesina, Torre Mileto).

## Store / compliance, stato attuale
- Fase 1 in corso: solo Google Play via TWA, iOS/Capacitor rimandato.
- Bozze in docs/play/ (privacy-policy.md, data-safety-form.md, assetlinks-template.json, store-listing.md), contengono placeholder, da rivedere con Gab prima della submission.
- Hosting attuale: GitHub Pages project page (gab-loc19.github.io/kite-/), nessun dominio custom. assetlinks.json non funzionante finché non c'è un dominio a livello di root, non bloccante per ora.
