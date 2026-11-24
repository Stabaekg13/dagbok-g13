# Spillerdagbok G13 – pilotversjon

Appen er en vanlig nettside som guttene legger på hjem-skjermen. Den har ingen server og ingen database. Alt guttene registrerer, lagres på deres egen telefon. Bare ukesoppsummeringen, som gutten selv sender, havner i Google-skjemaet og regnearket.

## Filene

| Fil | Hva den er |
| --- | --- |
| `index.html` | Selve appen |
| `innstillinger.js` | Treningsplan, kamper, månedens tema og koblingen til Google-skjemaet. **Den eneste filen som normalt må endres.** |
| `manifest.webmanifest`, `sw.js` | Gjør at appen kan legges på hjem-skjermen og åpnes uten nett |
| `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` | Ikoner (kan byttes ut med klubbens logo når det er godkjent) |

## Publisere gratis på GitHub Pages (ca. 20 minutter første gang)

1. Opprett en gratis konto på github.com, gjerne med lagets Gmail-adresse.
2. Trykk **New repository**. Gi det et navn, for eksempel `dagbok-g13`. Velg **Public** (det kreves for gratis GitHub Pages; filene inneholder ingen personopplysninger). Trykk **Create repository**.
3. Trykk **uploading an existing file**, dra inn alle filene fra denne mappen (ikke selve mappen) og trykk **Commit changes**.
4. Gå til **Settings → Pages**. Under **Branch** velger du `main` og `/ (root)`, og trykker **Save**.
5. Etter et par minutter står adressen øverst på samme side, for eksempel `https://brukernavn.github.io/dagbok-g13/`. Det er lenken guttene skal få.

Alternativ: Netlify (app.netlify.com) lar deg dra mappen rett inn i nettleseren. Det er like gratis, men det er litt tyngre å endre én fil senere.

## Endre treningsplan, kamper eller tema

1. Åpne `innstillinger.js` i repositoriet på GitHub og trykk blyanten (**Edit**).
2. Endre det som trengs. Følg formatet som står der, med apostrofer rundt datoer og tider og komma mellom linjene.
3. Trykk **Commit changes**. Etter et par minutter får guttene den nye versjonen neste gang de åpner appen med nett.

Eksempel på en kamp:

```
kamper: [
  { dato: '2027-01-16', tid: '12:00', min: 50, navn: 'Kamp mot Skedsmo' },
],
```

Hvis appen slutter å virke etter en endring, er det nesten alltid et manglende komma eller en apostrof. Angre endringen under **History** på GitHub.

## Bytte Google-skjema

Hent en ny forhåndsutfylt lenke fra skjemaet med tallene 1–19 i feltene. Skriv adressen frem til og med `usp=pp_url` i `adresse`, og de 19 `entry.`-numrene i `felt`, i samme rekkefølge som spørsmålene.

## Slik kommer guttene i gang

1. Åpne lenken på telefonen: **Safari** på iPhone, **Chrome** på Android.
2. Legg appen på hjem-skjermen:
   - iPhone: Del-knappen → **Legg til på Hjem-skjerm**
   - Android: ⋮ → **Legg til på startskjermen**
3. Åpne appen fra hjem-skjermen og skriv inn navnet (fornavn og første bokstav i etternavnet).

Det er viktig at appen legges på hjem-skjermen. Ellers kan iPhone slette lagrede data for nettsider som ikke er brukt på en stund.

## Sikkerhetskopi

Under personikonet øverst på forsiden kan gutten lagre en sikkerhetskopi som en fil og hente den tilbake senere, for eksempel ved bytte av telefon.

## Personvern, kort fortalt

- Daglige tall, helsenotater og refleksjoner etter økter blir på guttens telefon.
- Treneren får bare det som står i ukesoppsummeringen, og gutten ser nøyaktig hva som sendes før han sender.
- Regnearket bør bare deles med trenerne, aldri publiseres på nettet, og tømmes når sesongen er over.
- Foreldrene bør få informasjon og gi en enkel godkjenning før guttene tar appen i bruk.
