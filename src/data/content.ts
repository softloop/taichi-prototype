export const homepage = {
  hero: {
    subtitle: 'Deutschlands älteste Tai-Chi-Schule',
    title: 'Entdecke Deine Innere Kraft',
    desc: 'Lerne authentisches Yang-Stil Tai Chi von Großmeister Frieder Anders – individuell abgestimmt auf Deinen Atemtyp.',
    ctaPrimary: { text: 'Kostenlos starten', href: '/kurse/online' },
    ctaSecondary: { text: 'Mehr erfahren', href: '/ueber-uns' },
    image: '/images/meister-anders-hero.jpg',
  },
  trustBar: [
    { icon: '🏆', text: '50+ Jahre Yang-Stil Erfahrung' },
    { icon: '🎓', text: '6. Generation Yang-Familientradition' },
    { icon: '🌍', text: 'Erster Europäer mit Meisterwürde' },
  ],
  problemSolution: {
    title: 'Tai Chi für Menschen, die mehr wollen',
    desc: 'Du suchst nicht einfach nur Bewegung. Du willst echte Veränderung – mehr Ruhe, weniger Anspannung, eine Kraft, die von innen kommt. Aber vielleicht fragst Du Dich: Wo finde ich authentisches Tai Chi? Und passt das zu mir?',
    cards: [
      {
        problem: 'Stress & innere Unruhe',
        solution: 'Tiefe Entspannung durch bewusste Bewegung',
      },
      {
        problem: 'Rückenschmerzen & Verspannungen',
        solution: 'Natürliche Haltungskorrektur ohne Anstrengung',
      },
      {
        problem: '„Normales" Tai Chi fühlt sich falsch an',
        solution: 'Atemtyp-Methode: endlich die richtige Variante für Dich',
      },
    ],
  },
  atemtypUSP: {
    subtitle: 'Unser einzigartiger Ansatz',
    title: 'Atemtyp Tai Chi',
    desc: 'So wie Sonne und Mond unseren Planeten beeinflussen, prägen sie auch Deinen Körper. Je nachdem, welcher Einfluss bei Deiner Geburt stärker war, bist Du zeitlebens **Einatmer** (lunar) oder **Ausatmer** (solar).',
    keyMessage: 'Erst Tai Chi im eigenen Atemtyp eröffnet den Zugang zu Deiner wahren inneren Kraft.',
    einatmer: {
      symbol: '☽',
      name: 'Einatmer (lunar)',
      desc: 'Braucht die Fülle, steigt nach oben',
    },
    ausatmer: {
      symbol: '☀',
      name: 'Ausatmer (solar)',
      desc: 'Braucht die Leere, sinkt zur Erde',
    },
    cta: { text: 'Welcher Atemtyp bist Du?', href: '/methode/test' },
  },
  coursePath: {
    title: 'Dein Weg zur inneren Kraft',
    stages: [
      {
        number: 1,
        name: 'KURZFORM',
        price: 'KOSTENLOS',
        desc: 'Der perfekte Einstieg – 10 Videos für Deinen Atemtyp',
        features: ['10 Videos', 'Für beide Atemtypen'],
        cta: { text: 'Jetzt kostenlos starten', href: '/kurse/online' },
      },
      {
        number: 2,
        name: 'LANGFORM',
        price: 'ab €399',
        desc: 'Die klassische Yang-Form in drei Teilen: Erde, Himmel, Mensch',
        features: ['81 Formen', '3 Teile'],
        cta: { text: 'Mehr erfahren', href: '/kurse/online' },
      },
      {
        number: 3,
        name: 'VERTIEFUNG',
        price: '€2.299',
        desc: 'Die 7 Tore zur inneren Kraft – alle Geheimnisse der Meister',
        features: ['7 Tore', 'Komplettpaket'],
        cta: { text: 'Meisterpaket ansehen', href: '/kurse/online' },
      },
    ],
  },
  meister: {
    subtitle: 'Der Meister',
    name: 'Frieder Anders',
    title: 'Großmeister der 6. Generation der Yang-Familientradition',
    desc: 'Der erste Europäer, der als Meister der Yang-Familientradition anerkannt wurde. 26 Jahre Ausbildung bei Meister K.H. Chu in London. Über 50 Jahre Erfahrung im Yang-Stil.',
    image: '/images/meister-anders.jpg',
    cta: { text: 'Mehr über den Meister', href: '/ueber-uns/meister' },
  },
  faq: [
    {
      question: 'Brauche ich Vorkenntnisse?',
      answer: 'Nein. Die Kurzform ist speziell für Einsteiger konzipiert. Du lernst alles Schritt für Schritt.',
    },
    {
      question: 'Bin ich zu alt/unbeweglich für Tai Chi?',
      answer: 'Tai Chi ist für jedes Alter geeignet. Die langsamen Bewegungen schonen die Gelenke und verbessern die Beweglichkeit sanft.',
    },
    {
      question: 'Was unterscheidet euch von anderen Tai-Chi-Schulen?',
      answer: 'Unsere Atemtyp-Methode. Du lernst die Form, die zu Deinem Körper passt – nicht eine Einheitslösung für alle.',
    },
    {
      question: 'Wie lange dauert es, bis ich Ergebnisse spüre?',
      answer: 'Viele berichten schon nach wenigen Wochen von mehr Ruhe und besserer Haltung. Die Kurzform kannst Du in 4-6 Wochen lernen.',
    },
  ],
  finalCTA: {
    title: 'Bereit für den ersten Schritt?',
    desc: 'Starte jetzt kostenlos mit der Kurzform – 10 Videos, individuell für Deinen Atemtyp.',
    cta: { text: 'Jetzt kostenlos starten', href: '/kurse/online' },
    smallPrint: 'Keine Kreditkarte erforderlich. Sofortiger Zugang.',
  },
  // Legacy fields für Kompatibilität
  benefits: [
    { icon: '☯', title: 'Innere Kraft', desc: 'Befreie Dich von Anstrengung und erlebe, wie Deine innere Kraft aus dem Nicht-Tun erwächst.' },
    { icon: '◎', title: 'Ruhe & Balance', desc: 'Erreiche mit jedem Atemzug tiefe Ruhe und emotionale Balance – die Basis für Harmonie im Leben.' },
    { icon: '✦', title: 'Gesundheit', desc: 'Verbessere Deine körperliche und geistige Gesundheit durch die Verbindung von Bewegung und Atmung.' },
  ],
  quote: {
    text: '„Folge nicht den Fußstapfen der Meister. Suche, was sie gesucht haben."',
    author: 'Matsuo Bashō (1644–1694)',
  },
}

export const innereKraft = {
  intro: '„Innere Kraft" beschreibt unsere Fähigkeit, mit Herausforderungen umzugehen, authentisch zu sein und aus uns selbst heraus Energie zu schöpfen.',
  points: [
    { title: 'Emotionale Stabilität', desc: 'Die Fähigkeit, mit Stress, Angst oder Trauer umzugehen, ohne sich davon überwältigen zu lassen.' },
    { title: 'Selbstvertrauen', desc: 'Der Glaube an die eigene Fähigkeit, Probleme zu lösen und Ziele zu erreichen.' },
    { title: 'Resilienz', desc: 'Die Kraft, nach Rückschlägen wieder aufzustehen und weiterzumachen.' },
    { title: 'Authentizität', desc: 'Treu zu sich selbst zu stehen, auch wenn äußere Erwartungen Druck ausüben.' },
    { title: 'Willenskraft', desc: 'Die Fähigkeit, sich selbst zu motivieren und durchzuhalten – auch wenn es schwer wird.' },
  ],
  kampfkunst: 'Im Tai Chi als Kampfkunst bezeichnet innere Kraft eine reale Kraft, die es ermöglicht, einen Angreifer auf Distanz zu halten und ihn zu entwurzeln, ohne ihn zu verletzen.',
  quote: { text: '„Viele üben heute Taiji, aber es ist nicht das wahre Taiji. Wahres Taiji ist wirklich wunderbar."', author: 'Chen Weiming, 1928' },
}

export const atemtyp = {
  intro: 'So wie Sonne und Mond unseren Planeten beeinflussen, haben sie auch eine Wirkung auf unseren menschlichen Organismus.',
  keyMessage: 'Erst Tai Chi im eigenen Atemtyp entwickelt den „richtigen" Atem und eröffnet den Zugang zur inneren Kraft.',
  einatmer: {
    symbol: '☽',
    name: 'Einatmer',
    type: 'lunar',
    traits: ['Braucht die Fülle', 'Steigt nach oben', 'Aufrechte Haltung'],
    desc: 'Als lunarer Einatmertyp brauchst du die Fülle: du füllst Brust und Rücken mit dem Einatmen und verweilst möglichst lange in diesem Zustand.',
  },
  ausatmer: {
    symbol: '☀',
    name: 'Ausatmer',
    type: 'solar',
    traits: ['Braucht die Leere', 'Sinkt zur Erde', 'Leicht geneigte Haltung'],
    desc: 'Als solarer Ausatmertyp brauchst du die Leere: du leerst deine Lungen mit dem Ausatmen und gewinnst so die Weite und Sicherheit der Erde.',
  },
  quote: { text: '„Nichts unter dem Himmel ist so weich und schwach wie das Wasser, und doch ist es von keinem, das gegen Festes und Starkes anstürmt, zu schlagen."', author: 'Laozi' },
}

export const meister = {
  name: 'Frieder Anders',
  title: 'Großmeister der 6. Generation der Yang-Familientradition',
  intro: 'Frieder Anders ist der erste Europäer, der als Meister der Yang-Familientradition anerkannt wurde (2002). Er hat mit dem Atemtyp Tai Chi eine wichtige Komponente wiederbelebt.',
  milestones: [
    'Seit 1973: Über 50 Jahre Tai-Chi-Praxis im Yang-Stil',
    '26 Jahre Ausbildung bei Meister K.H. Chu, London',
    '2002: Anerkennung als Meister der Yang-Tradition',
    '2005: Entwicklung des Atemtyp Tai Chi',
    'Autor: „Die sieben Tore zur inneren Kraft", „Atemtyp Tai Chi"',
  ],
}

export const tradition = {
  tradition: 'Authentisches Tai Chi in der Yang-Familientradition, von Meister Frieder Anders in 26 Jahren bei Meister K.H. Chu, vormals London, erlernt und in weiteren 20 Jahren Praxis bis heute erweitert.',
  moderne: 'Wir tragen der abendländischen Kultur, in der die Individuation eine bedeutende Rolle spielt, Rechnung. Das traditionelle asiatische Verständnis, einem Meister fraglos zu folgen, passt nicht in unsere Zeit.',
  quote: '„Wir machen keine Jünger. Wir helfen Dir, Dein eigenes Instrument zu spielen."',
  offenheit: 'Unsere Kursinhalte stehen allen Interessierten offen. Möchte jemand den Weg zur Meisterschaft beschreiten, wird er dabei vorbehaltlos unterstützt – ohne die „Geheimnisse" zurückzuhalten.',
}






