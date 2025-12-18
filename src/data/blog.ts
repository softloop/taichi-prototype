export interface BlogPost {
  date: string
  slug: string
  title: string
  autor?: string
  beschreibung?: string
  bild?: string
  themen?: string[]
  jahr: number
  monat?: string
}

export const blogPosts: BlogPost[] = [
  {
    date: '04. Dez 2025',
    slug: 'riss-tai-chi-welt',
    title: 'Ein Riss geht durch die Tai-Chi-Welt',
    autor: 'Frieder Anders',
    beschreibung: 'Über die Unterschiede zwischen äußeren und inneren Stilen und warum authentisches Tai Chi selten geworden ist.',
    bild: '/images/blog/riss-tai-chi-welt.jpg',
    themen: ['Tai Chi', 'Philosophie'],
    jahr: 2025,
    monat: 'Dezember',
  },
  {
    date: '17. Nov 2025',
    slug: '20-jahre-atemtyp',
    title: '20 Jahre Entwicklung von AtemtypTaiChi',
    autor: 'Frieder Anders',
    beschreibung: 'Ein Rückblick auf zwei Jahrzehnte Forschung und Praxis – wie die Methode entstanden ist und sich weiterentwickelt hat.',
    bild: '/images/blog/cdf-logo.jpg',
    themen: ['Atemtypen', 'Geschichte'],
    jahr: 2025,
    monat: 'November',
  },
  {
    date: '13. Okt 2025',
    slug: 'taichianders',
    title: 'Taichianders',
    autor: 'Frieder Anders',
    beschreibung: 'Was unseren Ansatz von anderen Tai-Chi-Schulen unterscheidet – und warum der Name Programm ist.',
    bild: '/images/blog/frieder-anders-portrait.jpg',
    themen: ['Philosophie'],
    jahr: 2025,
    monat: 'Oktober',
  },
  {
    date: '28. Sep 2025',
    slug: 'wu-wei',
    title: 'Wu Wei – Das Nichtun im Tun',
    autor: 'Frieder Anders',
    beschreibung: 'Ein Grundprinzip des Daoismus und wie es im Tai Chi zur inneren Kraft führt.',
    themen: ['Philosophie', 'Innere Kraft'],
    jahr: 2025,
    monat: 'September',
  },
  {
    date: '15. Aug 2025',
    slug: 'faszien-kraft',
    title: 'Die Faszien und innere Kraft',
    autor: 'Frieder Anders',
    beschreibung: 'Wie die Verbindung von Körper und Geist über das Fasziengewebe funktioniert.',
    themen: ['Innere Kraft', 'Tai Chi'],
    jahr: 2025,
    monat: 'August',
  },
  {
    date: '02. Jul 2025',
    slug: 'koerperhaben-sein',
    title: 'Körperhaben und Körpersein',
    autor: 'Frieder Anders',
    beschreibung: 'Der Unterschied zwischen Körperbesitz und Körpererfahrung im Tai Chi.',
    themen: ['Tai Chi', 'Philosophie'],
    jahr: 2025,
    monat: 'Juli',
  },
  // Weitere Artikel als Platzhalter für Archiv
  { date: '15. Dez 2024', slug: 'artikel-2024-1', title: 'Artikel 2024-1', autor: 'Frieder Anders', themen: ['Tai Chi'], jahr: 2024, monat: 'Dezember' },
  { date: '10. Okt 2024', slug: 'artikel-2024-2', title: 'Artikel 2024-2', autor: 'Frieder Anders', themen: ['Qigong'], jahr: 2024, monat: 'Oktober' },
  { date: '05. März 2024', slug: 'artikel-2024-3', title: 'Artikel 2024-3', autor: 'Frieder Anders', themen: ['Atemtypen'], jahr: 2024, monat: 'März' },
  { date: '20. Dez 2023', slug: 'artikel-2023-1', title: 'Artikel 2023-1', autor: 'Frieder Anders', themen: ['Yang-Tradition'], jahr: 2023, monat: 'Dezember' },
  { date: '10. Sep 2022', slug: 'artikel-2022-1', title: 'Artikel 2022-1', autor: 'Frieder Anders', themen: ['Kampfkunst'], jahr: 2022, monat: 'September' },
  { date: '05. Aug 2022', slug: 'artikel-2022-2', title: 'Artikel 2022-2', autor: 'Frieder Anders', themen: ['Innere Kraft'], jahr: 2022, monat: 'August' },
]

// Archiv-Struktur für Navigation
export const blogArchive = {
  2025: ['Dezember', 'November', 'Oktober', 'September', 'August', 'Juli'],
  2024: ['Dezember', 'Oktober', 'März'],
  2023: ['Dezember'],
  2022: ['September', 'August'],
  2021: ['Dezember', 'Oktober', 'Juli/August', 'Mai/Juni', 'April', 'März', 'Februar'],
  2020: ['Dezember', 'November', 'September', 'August', 'Juni', 'Mai', 'April'],
  2018: ['August', 'Mai', 'April', 'März', 'Februar', 'Januar'],
  2017: ['Dezember', 'November', 'Oktober', 'September', 'August', 'Juli', 'Juni', 'Mai', 'April', 'März', 'Februar', 'Januar'],
  2016: ['Dezember', 'November', 'Oktober', 'September', 'August', 'Juni', 'Mai', 'April', 'März', 'Februar', 'Januar'],
  2015: ['Dezember', 'November', 'Oktober', 'August', 'Juli', 'Juni', 'Mai', 'April', 'März', 'Februar', 'Januar'],
  2014: ['Dezember', 'November', 'Oktober', 'September', 'August', 'Juli', 'Juni', 'April', 'März'],
  2013: ['September'],
}

// Beliebte Themen mit Anzahl
export const blogThemenCounts = {
  'Tai Chi': 20,
  'Atemtypen': 15,
  'Innere Kraft': 12,
  'Qigong': 10,
  'Yang-Tradition': 8,
  'Philosophie': 8,
  'Kampfkunst': 6,
  'Gesundheit': 5,
}
