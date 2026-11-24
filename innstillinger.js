// INNSTILLINGER FOR SPILLERDAGBOKEN – STABÆK G13
// Dette er den eneste filen som normalt må endres.
// Datoer skrives som 'ÅÅÅÅ-MM-DD'. Ukedager: 1 = mandag, 2 = tirsdag, 3 = onsdag,
// 4 = torsdag, 5 = fredag, 6 = lørdag, 0 = søndag. Varighet er i minutter.

window.CONFIG = {

  lag: 'Stabæk G13',

  // Månedens tema fra trenerne. Vises øverst når guttene velger mål for neste uke.
  tema: 'F1 – Vi forsvarer sammen',

  // Faste treninger. Hver periode gjelder fra og med «fra» til og med «til».
  treningsplan: [
    {
      fra: '2026-11-01', til: '2026-12-04',   // treningsfri i desember
      dager: {
        1: { tid: '17:30', min: 105 },   // mandag 17:30–19:15
        2: { tid: '15:00', min: 90 },    // tirsdag 15:00–16:30
        5: { tid: '15:00', min: 90 }     // fredag 15:00–16:30
      }
    },
    {
      fra: '2027-01-04', til: '2027-06-30',
      dager: {
        2: { tid: '18:00', min: 75 },    // tirsdag 18:00–19:15
        3: { tid: '19:30', min: 60 },    // onsdag 19:30–20:30
        5: { tid: '18:00', min: 75 }     // fredag 18:00–19:15
      }
    }
  ],

  // Kamper og cuper legges inn enkeltvis, én linje per kamp. En kamp erstatter vanlig trening den dagen.
  // Har lagene hver sin kamp samme dag, legges begge inn. Guttene velger sin egen kamp i appen.
  // Eksempel: { dato: '2026-12-05', tid: '12:00', min: 50, navn: 'Kamp mot Bærum SK' },
  kamper: [
    { dato: '2026-11-28', tid: '11:00', min: 50, navn: 'Stabæk 2 mot Kjelsås 2' },
    { dato: '2026-11-28', tid: '13:00', min: 50, navn: 'Stabæk 1 mot Kjelsås 1' },
  ],

  // Google-skjemaet som ukesoppsummeringen sendes til.
  // «felt» er entry-ID-ene fra den forhåndsutfylte lenken, i samme rekkefølge som spørsmål 1–20.
  // Spørsmål 20 er «Dag for dag».
  skjema: {
    adresse: 'https://docs.google.com/forms/d/e/1FAIpQLSdQnuPEA3dYDlAHY1N6dbr_aFtk39v2oINqQY_D419CaDpHLA/viewform?usp=pp_url',
    felt: ['entry.1478736828','entry.466273441','entry.816141117','entry.852910305','entry.609478348',
           'entry.102917501','entry.629866702','entry.627654238','entry.769904438','entry.167900143',
           'entry.662322566','entry.16160287','entry.1140923564','entry.524411368','entry.2027299760',
           'entry.289140438','entry.811013465','entry.453328689','entry.329547673',
           'entry.203415835']   // 20: Dag for dag
  }
};
