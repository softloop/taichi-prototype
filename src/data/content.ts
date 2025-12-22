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
    { icon: '👥', text: 'Mehr als 5.000 Schüler' },
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
        cta: { text: 'Jetzt kostenlos starten', href: '/kurse/online/kurzform' },
      },
      {
        number: 2,
        name: 'LANGFORM',
        price: 'ab €199',
        desc: 'Die klassische Yang-Form in drei Teilen: Erde, Himmel, Mensch',
        features: ['81 Formen', '3 Teile'],
        cta: { text: 'Mehr erfahren', href: '/kurse/online#langform' },
      },
      {
        number: 3,
        name: 'VERTIEFUNG',
        price: '€2.299',
        desc: 'Die 7 Tore zur inneren Kraft – alle Geheimnisse der Meister',
        features: ['7 Tore', 'Komplettpaket'],
        cta: { text: 'Meisterpaket ansehen', href: '/kurse/online#vertiefung' },
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

export const innereKraftDetail = {
  hero: {
    subtitle: 'DIE METHODE',
    title: 'Innere Kraft',
    desc: 'Was innere Kraft bedeutet – im Alltag und in der Kampfkunst Tai Chi. Und warum Entspannung stärker ist als Muskelkraft.',
  },
  section1: {
    imageLeft: false,
    title: 'Was ist innere Kraft?',
    desc: '»Innere Kraft« ist ein Begriff mit vielen Facetten. Er beschreibt unsere Fähigkeit, mit Herausforderungen umzugehen, authentisch zu sein und aus uns selbst heraus Energie zu schöpfen – ohne äußere Anstrengung, ohne Kampf.',
  },
  section2: {
    title: 'Innere Kraft im Alltag',
    intro: 'Im täglichen Leben zeigt sich innere Kraft auf vielfältige Weise:',
    aspects: [
      {
        title: 'Emotionale Stabilität',
        desc: 'Die Fähigkeit, mit Stress, Angst oder Trauer umzugehen, ohne sich davon überwältigen zu lassen.',
      },
      {
        title: 'Selbstvertrauen',
        desc: 'Der Glaube an die eigene Fähigkeit, Probleme zu lösen und Ziele zu erreichen.',
      },
      {
        title: 'Resilienz',
        desc: 'Die Kraft, nach Rückschlägen wieder aufzustehen und weiterzumachen.',
      },
      {
        title: 'Authentizität',
        desc: 'Treu zu sich selbst zu stehen, auch wenn äußere Erwartungen Druck ausüben.',
      },
      {
        title: 'Willenskraft',
        desc: 'Die Fähigkeit, sich selbst zu motivieren und durchzuhalten – auch wenn es schwer wird.',
      },
    ],
  },
  section3: {
    imageLeft: true,
    title: 'Innere Kraft in der Kampfkunst',
    desc: 'Im Tai Chi als Kampfkunst bezeichnet innere Kraft eine reale Kraft, die es ermöglicht, einen Angreifer auf Distanz zu halten und ihn zu entwurzeln – ohne ihn zu verletzen. Diese Fähigkeit hat Tai Chi im 19. Jahrhundert in China berühmt gemacht. Ihre Meister konnten einen Angreifer von sich abprallen lassen.',
    zusatztext: 'Während äußere Stile wie Karate oder Kungfu auf Schnelligkeit und äußere Kraft setzen (»Auge, Faust und Fuß«), arbeitet Tai Chi mit innerer Energie, dem Zusammenspiel von Yin und Yang, Balance und Achtsamkeit.',
  },
  section4: {
    imageLeft: false,
    title: 'Song – Die Kraft der Entspannung',
    desc: 'Nicht Muskelkraft (»Li«) wird trainiert, sondern Entspannung und »Sinken« (»Song«) ermöglichen es, das Kräftespiel der Faszienlinien des Körpers zu entwickeln und einzusetzen. Der Körper wird elastisch wie ein Ball – locker, aber verwurzelt. Nach einiger Übung wird er fähig zu sehr schnellen Bewegungen, die von der Vorstellungskraft »Yi« (intentionaler Geist) geführt werden.',
  },
  section5: {
    title: 'Tun und Sein',
    intro: 'Unser Leben wird von zwei gegensätzlichen Antrieben bewegt:',
    spalten: {
      tun: ['Handeln', 'Bewegung', 'Den Gang des Lebens steuern'],
      sein: ['Nichthandeln', 'Stille', 'Bewegungsloses, zeitloses Selbst'],
    },
    fortsetzung: 'Was vielen fehlt, ist die aktive Harmonisierung dieser Gegensätze in einer Aktivität. In der chinesischen Kultur wird das durch den Begriff **»Wu Wei«** bezeichnet – das Nichtun-im-Tun oder das »anstrengungslose Handeln«.',
    hervorgehoben: 'Diesen Ausgleich von Tun und Sein verspricht Tai Chi, die Bewegungskunst nach dem »Höchsten Prinzip« – und das höchste Prinzip ist die Verbindung polarer Kräfte.',
  },
  section6: {
    imageLeft: true,
    title: 'Körperhaben und Körpersein',
    desc: 'Die Polarität von Tun und Sein zeigt sich auch in unserem Verhältnis zum Körper: Wir »haben« einen Körper (als Instrument) und wir »sind« ein Körper (als lebendiges Wesen). Tai Chi bringt beides zusammen – das Machen und das Geschehenlassen, das Steuern und das Fließen.',
  },
  zitat1: {
    text: '»Viele üben heute Taiji, aber es ist nicht das wahre Taiji. Wahres Taiji ist wirklich wunderbar.«',
    author: 'Chen Weiming, 1928',
  },
  section7: {
    title: 'Warum entwickeln so wenige innere Kraft?',
    intro: 'Millionen Menschen üben heute Tai Chi – mit guten Ergebnissen für Entspannung und Gesundheit. Aber nur wenige entwickeln dabei die innere Kraft, die das Tai Chi einst berühmt gemacht hat. Die Gründe:',
    probleme: [
      {
        title: 'Nur Form, keine Tiefe',
        desc: 'Viele lernen die äußere Form, aber nicht die inneren Prinzipien dahinter.',
      },
      {
        title: 'Falscher Atemtyp',
        desc: 'Ohne Kenntnis des eigenen Atemtyps bleibt die wichtigste Kraftquelle verschlossen.',
      },
      {
        title: 'Fehlende Überlieferung',
        desc: 'Die »Geheimnisse« wurden in China traditionell zurückgehalten – nur wenige Meister geben sie offen weiter.',
      },
    ],
    hervorgehoben: 'Atemtyp Tai Chi löst diese Probleme: Es verbindet die authentische Überlieferung mit der individuellen Ausrichtung auf Deinen Atemtyp – und öffnet so den Zugang zur inneren Kraft.',
  },
  section8: {
    title: 'Demonstration der inneren Kraft',
    caption: 'Meister Frieder Anders demonstriert innere Kraft: Der Partner wird entwurzelt, ohne dass sichtbare Muskelanstrengung erfolgt.',
  },
  zitat2: {
    text: '»Mit 4 Unzen tausend Pfund besiegen.«',
    author: 'Klassischer Tai Chi Spruch',
  },
  section9: {
    title: 'Der Weg zur inneren Kraft',
    intro: 'Innere Kraft entwickelt sich nicht über Nacht. Sie erfordert:',
    schritte: [
      {
        nummer: 1,
        title: 'Deinen Atemtyp kennen',
        desc: 'Erst die richtige Ausrichtung ermöglicht den Zugang zur Kraft.',
      },
      {
        nummer: 2,
        title: 'Die Form lernen',
        desc: 'Die äußere Bewegung als Gefäß für die innere Arbeit.',
      },
      {
        nummer: 3,
        title: 'Die 7 Tore durchschreiten',
        desc: 'Die Vertiefungsstufen, die das Innere erschließen.',
      },
      {
        nummer: 4,
        title: 'Üben, üben, üben',
        desc: 'Mit Geduld und Ausdauer – ohne Anstrengung, aber mit Beständigkeit.',
      },
    ],
  },
  zitat3: {
    text: '»Folge nicht den Fußstapfen der Meister. Suche, was sie gesucht haben.«',
    author: 'Matsuo Bashō (1644–1694)',
  },
  finalCTA: {
    title: 'Bereit, Deine innere Kraft zu entdecken?',
    desc: 'Der erste Schritt: Finde heraus, welcher Atemtyp Du bist.',
    ctas: [
      { text: 'Atemtyp-Test starten', href: '/methode/test' },
      { text: 'Atemtyp Tai Chi verstehen', href: '/methode/atemtyp' },
    ],
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

export const atemtypDetail = {
  hero: {
    subtitle: 'DIE METHODE',
    title: 'Atemtyp Tai Chi',
    desc: 'Warum nur Tai Chi im eigenen Atemtyp zur inneren Kraft führt – und was das mit Sonne und Mond zu tun hat.',
  },
  section1: {
    imageLeft: false,
    title: 'Was ist Atemtyp Tai Chi?',
    desc: 'Die Tai-Chi-Bewegungen mit der Atmung zu verbinden? Das machen so gut wie alle Tai-Chi-Stile. Eine bestimmte »Atemtechnik« einzusetzen? Vorzugsweise die sogenannte Bauchatmung? Das machen die meisten Stile so, weil sie als die gesündeste Form der Atmung gilt. Aber das ist nur die halbe Wahrheit.',
    zusatztext: '»Atemtyp Tai Chi« ist speziell insofern, als es vorab bestimmt, welcher Atemtyp jemand ist – erst dann macht es Sinn, bestimmte Atemmethoden einzusetzen. Es geht nicht um das Atmen als technische Bewegung, sondern darum, wie der Körper im Lauf der Lebensjahre von der jeweils starken Atemphase – entweder Ein- oder Ausatmen – geprägt wurde.',
  },
  section2: {
    imageLeft: true,
    title: 'Wie Sonne und Mond',
    desc: 'So wie Sonne und Mond unseren Planeten beeinflussen, haben sie auch eine Wirkung auf unseren menschlichen Organismus. Je nachdem, ob Sonne oder Mond zum Zeitpunkt unserer Geburt einen stärkeren Einfluss auf uns ausüben, sind wir zeitlebens **Einatmer** (lunarer Atemtyp) oder **Ausatmer** (solarer Atemtyp).',
    hervorgehoben: 'Diese Prägung bestimmt unsere Haltung, unsere Bewegung, unseren Energiefluss – und wie wir Tai Chi üben sollten.',
  },
  section3: {
    title: 'Die zwei Atemtypen',
    intro: 'Die beiden Atemtypen unterscheiden sich grundlegend in Haltung, Bewegung und Energiefluss:',
    einatmer: {
      symbol: '☽',
      name: 'Einatmer (lunar)',
      aspekte: [
        { label: 'Starke Phase', wert: 'Einatmen' },
        { label: 'Energie-Richtung', wert: 'Steigt nach oben' },
        { label: 'Haltung', wert: 'Aufrecht' },
        { label: 'Braucht', wert: 'Die Fülle' },
        { label: 'Atmung', wert: '»Umgekehrte« Atmung – Bauch zieht beim Einatmen ein' },
        { label: 'Glücksgefühl', wert: 'Im gefüllten Zustand, im Schweben' },
      ],
      beschreibung: 'Als lunarer Einatmertyp brauchst Du die Fülle: Du füllst Brust und Rücken mit dem Einatmen und verweilst möglichst lange in diesem Zustand, weil er zu schweben scheint und glücklich macht – alles in Dir steigt nach oben. Deinem Ausatem schenkst Du kaum Beachtung, weil er von selbst geschieht; er darf keinesfalls so lang sein wie Dein Einatem.',
    },
    ausatmer: {
      symbol: '☀',
      name: 'Ausatmer (solar)',
      aspekte: [
        { label: 'Starke Phase', wert: 'Ausatmen' },
        { label: 'Energie-Richtung', wert: 'Sinkt zur Erde' },
        { label: 'Haltung', wert: 'Leicht nach vorn geneigt' },
        { label: 'Braucht', wert: 'Die Leere' },
        { label: 'Atmung', wert: '»Natürliche« Bauchatmung – Bauch dehnt sich beim Einatmen' },
        { label: 'Glücksgefühl', wert: 'Im Runterkommen, in der Verwurzelung' },
      ],
      beschreibung: 'Als solarer Ausatmertyp brauchst Du die Leere: Du leerst Deine Lungen mit dem Ausatmen und gewinnst so die Weite und Sicherheit der Erde, über die sich Deine Energie unaufhaltsam ausbreitet und Dich verwurzelt. Dein Glücksgefühl liegt im »Runterkommen«. Deinen Einatem überlässt Du sich selbst, achtest aber darauf, dass er viel kürzer als Dein Ausatem ist.',
    },
  },
  section4: {
    imageLeft: false,
    title: 'Atemtyp und Körperhaltung',
    desc: 'Jeder Atemtyp gewinnt seine innere Kraft nur durch seine starke Atemphase. Das wird sichtbar in der Körperhaltung, die unbewusst durch diese Phase geprägt wird:',
    haltungen: [
      { typ: 'Einatmer', haltung: 'Steht aufrecht, als würde er nach oben schweben' },
      { typ: 'Ausatmer', haltung: 'Steht leicht nach vorn geneigt, der Abwärtsbewegung folgend' },
    ],
    zusatztext: 'Diese unterschiedlichen Haltungen sind keine Fehler, die korrigiert werden müssen – sie sind der natürliche Ausdruck des jeweiligen Atemtyps und die Grundlage für typgerechtes Tai Chi.',
  },
  section5: {
    imageLeft: true,
    title: 'Warum ist der Atemtyp so wichtig?',
    desc: 'Wenn ein Einatmer wie ein Ausatmer übt – oder umgekehrt – arbeitet er gegen seine Natur. Die Bewegungen fühlen sich anstrengend an, der Atem stockt, die innere Kraft bleibt verschlossen.',
    hervorgehoben: 'Erst Tai Chi im eigenen Atemtyp entwickelt den »richtigen« Atem und eröffnet den Zugang zu einer Atemmethode, die nach längerer Zeit der Übung in der »richtigen« Körperhaltung bewusst eingesetzt werden kann. Deswegen »Atemtyp Tai Chi«.',
  },
  section6: {
    title: 'Die historische Verwirrung',
    desc: 'In der Geschichte des Tai Chi gab es immer wieder unterschiedliche Lehrmeinungen über die »richtige« Haltung und Atmung. Manche Meister lehrten die aufrechte Haltung, andere die geneigte. Manche die Bauchatmung, andere die umgekehrte Atmung.',
    hervorgehoben: 'Die Erklärung ist einfach: Die Meister lehrten das, was für ihren eigenen Atemtyp richtig war – ohne zu wissen, dass es zwei verschiedene Typen gibt.',
    zusatztext: 'Meister Frieder Anders hat diese Zusammenhänge in über 20 Jahren erforscht und systematisiert. Atemtyp Tai Chi erklärt die historischen Unterschiede und stellt für jeden Typ die passende Variante bereit.',
  },
  section7: {
    imageLeft: false,
    title: 'Terlusollogie – Die Wissenschaft dahinter',
    desc: 'Die Atemtyp-Lehre stammt aus der **Terlusollogie**, entwickelt von Erich Wilk und Charlotte Hagena. Sie beschreibt, wie der Zeitpunkt unserer Geburt – genauer: die Stellung von Sonne und Mond – unsere Atmung und damit unsere gesamte Körperhaltung prägt.',
    zusatztext: 'Meister Frieder Anders hat diese Erkenntnisse auf das Tai Chi übertragen und seit 2005 das Atemtyp Tai Chi entwickelt – eine wichtige Komponente, die von den alten Meistern lange unbewusst praktiziert wurde, aber erst von ihm bewusst erforscht und gelehrt wird.',
    literatur: 'Weiterführende Literatur: Frieder Anders: *Das Qi verwurzeln. Qigong und Atemtypen.* Kristkeitz 2020',
  },
  section8: {
    title: 'Was bedeutet das für Deine Praxis?',
    intro: 'Wenn Du Deinen Atemtyp kennst, verändert sich Deine gesamte Praxis:',
    punkte: [
      { bereich: 'Haltung', veraenderung: 'Du übst in der Haltung, die Deinem Typ entspricht – aufrecht oder geneigt' },
      { bereich: 'Atmung', veraenderung: 'Du nutzt die Atemphase, die Dich stärkt – Einatmen oder Ausatmen' },
      { bereich: 'Bewegung', veraenderung: 'Deine Bewegungen fließen natürlich, ohne inneren Widerstand' },
      { bereich: 'Kraft', veraenderung: 'Der Zugang zur inneren Kraft öffnet sich' },
    ],
    hervorgehoben: 'Die Ergebnisse gehen weit über das Tai Chi hinaus und beeinflussen das gesamte Leben.',
  },
  zitat: {
    text: '»Nichts unter dem Himmel ist so weich und schwach wie das Wasser, und doch ist es von keinem, das gegen Festes und Starkes anstürmt, zu schlagen.«',
    author: 'Laozi',
  },
  section9: {
    imageLeft: true,
    title: 'Lernen im eigenen Atemtyp',
    desc: 'Alle Online-Kurse der Tai Chi Academy gibt es in zwei Varianten: für Einatmer und für Ausatmer. In den Lernvideos siehst Du die Form so, wie sie für Deinen Atemtyp richtig ist – mit der richtigen Haltung, der richtigen Atmung, den richtigen Akzenten.',
    hinweis: 'Die Videos zeigen beide Varianten nebeneinander, sodass Du den Unterschied erkennst und von Anfang an richtig übst.',
  },
  faq: [
    {
      question: 'Kann sich mein Atemtyp ändern?',
      answer: 'Nein. Der Atemtyp wird bei der Geburt festgelegt und bleibt ein Leben lang gleich.',
    },
    {
      question: 'Was, wenn ich jahrelang »falsch« geübt habe?',
      answer: 'Keine Sorge – Dein Körper kennt seinen Typ. Sobald Du im richtigen Atemtyp übst, fühlt es sich natürlich an. Die Umstellung geht meist schneller als erwartet.',
    },
    {
      question: 'Ist ein Atemtyp besser als der andere?',
      answer: 'Nein. Beide Typen sind gleichwertig. Es geht nicht um besser oder schlechter, sondern um das, was für Dich richtig ist.',
    },
    {
      question: 'Kann ich auch ohne Atemtyp-Bestimmung Tai Chi lernen?',
      answer: 'Ja, aber Du verschenkst das größte Potenzial. Die Atemtyp-Ausrichtung ist der Schlüssel zur inneren Kraft.',
    },
  ],
  finalCTA: {
    title: 'Welcher Atemtyp bist Du?',
    desc: 'Finde es heraus – und beginne Deine Praxis im eigenen Atemtyp.',
    ctas: [
      { text: 'Atemtyp-Test starten', href: '/methode/test' },
      { text: 'Kurse entdecken', href: '/kurse/online' },
    ],
  },
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

export const meisterDetail = {
  hero: {
    subtitle: 'ÜBER UNS',
    title: 'Meister Frieder Anders',
    desc: 'Großmeister der 6. Generation der Yang-Familientradition. Der erste Europäer, der als Meister anerkannt wurde. Entwickler des Atemtyp Tai Chi.',
  },
  section1: {
    imageLeft: true,
    title: 'Frieder Anders',
    subtitle: 'Großmeister der 6. Generation der Yang-Familientradition',
    desc: 'Frieder Anders praktiziert seit 1973 Tai Chi und war 26 Jahre lang Schüler von Chu King-Hung, Meister der 5. Generation. Er ist der erste Europäer, der als Meister der Yang-Familientradition anerkannt wurde (2002) und hat mit dem Atemtyp Tai Chi eine wichtige Komponente wiederbelebt, die von den alten Meistern lange unbewusst praktiziert wurde.',
  },
  section2: {
    title: 'Der Weg zur Meisterschaft',
    desc: 'Ein Leben im Zeichen des Tai Chi – von den ersten Schritten bis zur Entwicklung einer eigenen Methode.',
    timeline: [
      { year: '1973', event: 'Beginn der Tai-Chi-Praxis im Yang-Stil' },
      { year: '1976', event: 'Erster Kontakt mit Meister Chu King-Hung in London' },
      { year: '1976–2002', event: '26 Jahre intensive Ausbildung bei Meister Chu – wöchentlicher Unterricht, Retreats, persönliche Betreuung' },
      { year: '1985', event: 'Gründung der ersten eigenen Tai-Chi-Schule in Deutschland' },
      { year: '2002', event: 'Anerkennung als Meister der Yang-Familientradition – als erster Europäer' },
      { year: '2005', event: 'Beginn der systematischen Erforschung der Atemtypen im Tai Chi' },
      { year: '2020', event: 'Veröffentlichung »Das Qi verwurzeln. Qigong und Atemtypen«' },
      { year: '2024', event: 'Veröffentlichung »Atemtyp Tai Chi. Die lange Yang-Form«' },
      { year: 'Heute', event: 'Über 50 Jahre Praxis, Unterricht und Weitergabe der Tradition' },
    ],
  },
  section3: {
    imageLeft: false,
    title: 'Der Lehrer: Meister Chu King-Hung',
    desc: 'Chu King-Hung (geb. 1945) ist Meister der 5. Generation der Yang-Familientradition. Er war der dritte Meisterschüler von Yang Shouzhong, dem ältesten Sohn von Yang Chengfu. Meister Chu gründete die International Tai Chi Chuan Association (ITCCA) und lehrte jahrzehntelang in London, wo Frieder Anders sein engster europäischer Schüler wurde.',
    zusatztext: 'Die 26 Jahre bei Meister Chu waren geprägt von intensivem Training, persönlicher Korrektur und der schrittweisen Weitergabe der »inneren Geheimnisse« des Tai Chi – Wissen, das in der chinesischen Tradition nur an die engsten Schüler weitergegeben wurde.',
  },
  section4: {
    imageLeft: true,
    title: 'Die Erkenntnis: Atemtyp Tai Chi',
    desc: 'In seiner jahrzehntelangen Praxis beobachtete Frieder Anders, dass manche Schüler trotz intensiven Übens keine innere Kraft entwickelten – während andere scheinbar mühelos Fortschritte machten. Die Erklärung fand er in der Terlusollogie: Die Atemtypen.',
    zusatztext: 'Seit 2005 erforscht und systematisiert Meister Anders die Zusammenhänge zwischen Atemtyp und Tai Chi. Seine Erkenntnis: Die alten Meister praktizierten unbewusst im eigenen Atemtyp – und lehrten entsprechend unterschiedlich. Erst das bewusste Üben im eigenen Atemtyp eröffnet allen Schülern den Zugang zur inneren Kraft.',
  },
  section5: {
    title: 'Die Weitergabe',
    desc: 'Basierend auf der überlieferten Form des authentischen Yang-Stils sieht Meister Anders seine Aufgabe darin, jeden einzelnen Schüler zu seiner individuellen inneren Kraft zu führen – ohne Geheimnisse zurückzuhalten, ohne Jünger zu machen.',
    quote: {
      text: '»Wir machen keine Jünger. Wir helfen Dir, Dein eigenes Instrument zu spielen.«',
      author: 'Frieder Anders',
    },
    zusatztext: 'Die Kursinhalte der Tai Chi Academy stehen allen Interessierten offen. Möchte jemand den Weg zur Meisterschaft beschreiten, wird er dabei vorbehaltlos unterstützt – ohne die »Geheimnisse« zurückzuhalten, wie es in der chinesischen Tradition üblich war.',
  },
  section6: {
    title: 'Die Traditionslinie des Yang-Stils',
    desc: 'Meister Frieder Anders steht in der direkten Überlieferungslinie der Yang-Familie – von Yang Luchan bis heute.',
    generations: [
      {
        name: 'Yang Luchan',
        years: '1799–1872',
        beschreibung: 'Begründer der Yang-Familientradition, bekannt als »Yang, der nicht kämpft« – weil niemand gegen ihn gewinnen konnte',
      },
      {
        name: 'Yang Jianhou',
        years: '1839–1917',
        beschreibung: 'Berühmt für seine Tai-Chi-Meisterschaft, besonders für seine Fähigkeit der »sticking energy«',
      },
      {
        name: 'Yang Chengfu',
        years: '1883–1936',
        beschreibung: 'Standardisierte den heutigen Yang-Stil mit langsamen, fließenden Bewegungen und verbreitete ihn in ganz China',
      },
      {
        name: 'Yang Shouzhong',
        years: '1910–1985',
        beschreibung: 'Erster Sohn von Yang Chengfu, begann mit acht Jahren seine Ausbildung, wurde mit 18 Meister. Lehrer von Chu King-Hung',
      },
      {
        name: 'Chu King-Hung',
        years: 'geb. 1945',
        beschreibung: 'Dritter Meisterschüler von Yang Shouzhong, Mitbegründer der ITCCA, 26 Jahre lang Lehrer von Frieder Anders',
      },
      {
        name: 'Frieder Anders',
        years: 'geb. 1945',
        beschreibung: 'Erster europäischer Meister der Yang-Tradition, Entwickler des Atemtyp Tai Chi',
      },
    ],
  },
  section7: {
    title: 'Meister Anders in Bewegung',
    caption: 'Meister Frieder Anders demonstriert die Yang-Form – über 50 Jahre Praxis in jeder Bewegung.',
  },
  section8: {
    title: 'Publikationen',
    buecher: [
      {
        titel: 'Atemtyp Tai Chi',
        untertitel: 'Die lange Yang-Form',
        autor: 'Frieder Anders',
        verlag: 'Tredition',
        jahr: '2024',
        beschreibung: 'Das umfassende Lehrbuch zur Methode',
        cta: { text: 'Beim Verlag bestellen →', href: '#' },
      },
      {
        titel: 'Das Qi verwurzeln',
        untertitel: 'Qigong und Atemtypen',
        autor: 'Frieder Anders',
        verlag: 'Kristkeitz',
        jahr: '2020',
        beschreibung: 'Die Grundlagen der Atemtyp-Lehre für Qigong',
        cta: { text: 'Beim Verlag bestellen →', href: '#' },
      },
    ],
  },
  section9: {
    badge: '👤 PERSÖNLICHER UNTERRICHT MIT MEISTER ANDERS',
    title: 'Meister Frieder Anders unterrichtet persönlich:',
    features: [
      'Präsenzkurse in Wien (Samstagskurse)',
      'Oster-Retreat in den Wiener Alpen',
      'Zoom-Webinare und Meetings',
      'Einzelunterricht (Präsenz oder Zoom)',
    ],
    cta: { text: 'Alle Kurse mit Meister Anders', href: '/kurse/praesenz' },
  },
  zitat: {
    text: '»Folge nicht den Fußstapfen der Meister. Suche, was sie gesucht haben.«',
    author: 'Matsuo Bashō (1644–1694)',
  },
  finalCTA: {
    title: 'Lerne vom Meister',
    desc: 'Erlebe Meister Frieder Anders persönlich – in Wien, online oder bei einem Retreat.',
    ctas: [
      { text: 'Präsenzkurse ansehen', href: '/kurse/praesenz' },
      { text: 'Online-Kurse entdecken', href: '/kurse/online' },
    ],
  },
}

export const tradition = {
  tradition: 'Authentisches Tai Chi in der Yang-Familientradition, von Meister Frieder Anders in 26 Jahren bei Meister K.H. Chu, vormals London, erlernt und in weiteren 20 Jahren Praxis bis heute erweitert.',
  moderne: 'Wir tragen der abendländischen Kultur, in der die Individuation eine bedeutende Rolle spielt, Rechnung. Das traditionelle asiatische Verständnis, einem Meister fraglos zu folgen, passt nicht in unsere Zeit.',
  quote: '„Wir machen keine Jünger. Wir helfen Dir, Dein eigenes Instrument zu spielen."',
  offenheit: 'Unsere Kursinhalte stehen allen Interessierten offen. Möchte jemand den Weg zur Meisterschaft beschreiten, wird er dabei vorbehaltlos unterstützt – ohne die „Geheimnisse" zurückzuhalten.',
}

export const traditionDetail = {
  hero: {
    subtitle: 'ÜBER UNS',
    title: 'Tradition & Moderne',
    desc: 'Authentisches Tai Chi in der Yang-Familientradition – angepasst an die westliche Kultur. Wir machen keine Jünger. Wir helfen Dir, Dein eigenes Instrument zu spielen.',
  },
  section1: {
    imageLeft: false,
    subline: 'DAS FUNDAMENT',
    title: 'Tradition',
    desc: 'Authentisches Tai Chi in der Yang-Familientradition, von Meister Frieder Anders in 26 Jahren bei Meister K.H. Chu in London erlernt und in weiteren 20 Jahren Praxis bis heute erweitert. Die Tai Chi Academy steht in der direkten Überlieferungslinie der Yang-Familie – sechs Generationen ununterbrochener Weitergabe.',
    zusatztext: 'Anders Atemtyp Tai Chi steht in der Yang-Familientradition und erweitert sie: Es erklärt die (unerkannten) Varianten der Meister als Atemtypen Einatmer und Ausatmer, erklärt die historischen Unterschiede und stellt die passende Atemtyp-Variante zum Lernen bereit.',
  },
  section2: {
    imageLeft: true,
    subline: 'DIE ANPASSUNG',
    title: 'Moderne',
    desc: 'Wir tragen der abendländischen Kultur Rechnung, in der die Individuation eine bedeutende Rolle spielt. Das traditionelle asiatische Verständnis der Schüler, einem Meister fraglos zu folgen, passt nicht in unsere Zeit.',
    zusatztext: 'Wird Tai Chi in diesem traditionellen Sinn verstanden und praktiziert, verhindert das den Weg zu sich selbst als autonomem Individuum – es produziert stattdessen »Jünger«, also »spirituelle Untertanen«.',
  },
  section3: {
    quote: {
      text: '»Wir machen keine Jünger. Wir helfen Dir, Dein eigenes Instrument zu spielen.«',
      author: 'Frieder Anders',
    },
  },
  section4: {
    imageLeft: false,
    title: 'Offenheit statt Geheimnisse',
    desc: 'Unsere Kursinhalte stehen allen Interessierten offen. Möchte jemand den Weg zur Meisterschaft in Tai Chi beschreiten, wird er dabei vorbehaltlos unterstützt.',
    zusatztext: 'Wie in den Familientraditionen der klassischen Stile ist der Status »Meisterschüler/in« ein Titel, der anzeigt, dass der Weg zur Meisterschaft ernsthaft verfolgt wird. Dieser Titel bedeutet jedoch nicht den Zugang zu sogenannten »Geheimnissen«, die zuvor zurückgehalten wurden, wie es in der chinesischen Tradition üblich war – denn diese Inhalte sind ALLEN zugänglich.',
    hervorgehoben: 'Meisterschaft zu erlangen bedeutet, den Tai-Chi-Weg allein fortsetzen zu können. Ein Meister wird nicht ernannt, sondern vom Lehrmeister anerkannt.',
  },
  section5: {
    imageLeft: true,
    subline: 'DIE WURZELN',
    title: 'Lebendige Tradition: Der philosophische Daoismus',
    desc: 'Im philosophischen Daoismus mit seinen Hauptvertretern Laozi und Zhuangzi ging es um die Harmonisierung der äußeren und inneren Welt, das »technische« Wirken in der Natur im Einklang mit ihr und um die mystische Innenschau.',
    zusatztext: 'Diese Verbindung von innen und außen hat auch das Tai Chi geprägt – das »Kind« des philosophischen Daoismus. »Zurück zum Ursprung« geschieht jedes Mal in der Tai-Chi-Form, wenn man an deren Ende wieder am Ausgangspunkt ankommt. Aber dazwischen liegt die Reise um die Welt, die Erfahrung seiner selbst zwischen Himmel und Erde.',
  },
  section6: {
    quote: {
      text: '»Das Paradies ist verriegelt und der Cherub hinter uns; wir müssen die Reise um die Welt machen, und sehen, ob es vielleicht von hinten irgendwo wieder offen ist.«',
      author: 'Heinrich von Kleist (1777–1811)',
    },
  },
  section7: {
    title: 'Was uns von anderen Tai-Chi-Schulen unterscheidet',
    vergleich: [
      {
        aspekt: 'Überlieferung',
        traditionell: 'Oft unklar oder unterbrochen',
        academy: 'Direkte Linie der Yang-Familie, 6. Generation',
      },
      {
        aspekt: 'Geheimnisse',
        traditionell: 'Werden zurückgehalten',
        academy: 'Alle Inhalte sind allen zugänglich',
      },
      {
        aspekt: 'Atemtyp',
        traditionell: 'Wird ignoriert oder nicht verstanden',
        academy: 'Zentrales Element der Methode',
      },
      {
        aspekt: 'Lehrer-Schüler',
        traditionell: 'Fraglose Gefolgschaft erwartet',
        academy: 'Autonomie und Eigenverantwortung gefördert',
      },
      {
        aspekt: 'Ziel',
        traditionell: 'Oft nur Form lernen',
        academy: 'Innere Kraft entwickeln',
      },
      {
        aspekt: 'Anpassung',
        traditionell: 'Einheitsmethode für alle',
        academy: 'Individuell nach Atemtyp',
      },
    ],
  },
  section8: {
    title: 'Für wen ist die Tai Chi Academy?',
    desc: 'Unsere Kurse sind für Menschen, die:',
    punkte: [
      'Authentisches Tai Chi in einer direkten Überlieferungslinie lernen wollen',
      'Nicht nur die Form, sondern auch die innere Kraft entwickeln möchten',
      'Einen individuellen Zugang suchen, der zu ihrem Körper passt',
      'Eigenverantwortung übernehmen und keinen Guru brauchen',
      'Bereit sind, regelmäßig zu üben – ohne Anstrengung, aber mit Beständigkeit',
    ],
  },
  section9: {
    title: 'Die Tai Chi Academy ist vielleicht nicht das Richtige für Dich, wenn:',
    punkte: [
      'Du einen spirituellen Führer suchst, dem Du folgen kannst',
      'Du Tai Chi nur als Gymnastik oder Fitness siehst',
      'Du schnelle Ergebnisse ohne regelmäßige Praxis erwartest',
    ],
  },
  section10: {
    quote: {
      text: '»Folge nicht den Fußstapfen der Meister. Suche, was sie gesucht haben.«',
      author: 'Matsuo Bashō (1644–1694)',
    },
    desc: 'Dieses Zitat von Bashō fasst unsere Philosophie zusammen: Es geht nicht darum, einen Meister zu kopieren, sondern den eigenen Weg zur inneren Kraft zu finden – mit der Unterstützung eines authentischen Lehrers und einer bewährten Methode.',
  },
  section11: {
    imageLeft: false,
    title: 'Weitergabe der Tradition',
    desc: 'Die Tai Chi Academy bildet Kursleiter und Lehrer aus, die das Atemtyp Tai Chi in ihrer Region weitergeben. Die Ausbildung verbindet die authentische Überlieferung mit modernen didaktischen Methoden – damit die Tradition lebendig bleibt und sich weiterentwickelt.',
    cta: { text: 'Mehr über die Lehrer-Ausbildung →', href: '/ueber-uns/lehrer' },
  },
  finalCTA: {
    title: 'Finde Deinen eigenen Weg',
    desc: 'Erlebe authentisches Tai Chi, das Deine Individualität respektiert – und Dich zu Deiner inneren Kraft führt.',
    ctas: [
      { text: 'Kurse entdecken', href: '/kurse' },
      { text: 'Den Meister kennenlernen', href: '/ueber-uns/meister' },
    ],
  },
}

export const methodePage = {
  hero: {
    subtitle: 'WAS UNS EINZIGARTIG MACHT',
    title: 'Die Methode',
    desc: 'Anders Atemtyp Tai Chi verbindet authentische Yang-Tradition mit der individuellen Ausrichtung auf Deinen Atemtyp – der Schlüssel zu Deiner inneren Kraft.',
  },
  sections: [
    {
      imageLeft: true,
      title: 'Innere Kraft',
      desc: 'Was innere Kraft bedeutet – im Alltag und in der Kampfkunst Tai Chi. Emotionale Stabilität, Resilienz und Authentizität auf der einen Seite. Die Fähigkeit, einen Angreifer ohne Muskelkraft auf Distanz zu halten auf der anderen. Beides entspringt derselben Quelle: dem Nicht-Tun im Tun.',
      cta: { text: 'Mehr über innere Kraft →', href: '/methode/innere-kraft' },
    },
    {
      imageLeft: false,
      title: 'Atemtyp Tai Chi',
      desc: 'So wie Sonne und Mond unseren Planeten beeinflussen, prägen sie auch unseren Organismus. Je nachdem, welcher Einfluss bei Deiner Geburt stärker war, bist Du zeitlebens Einatmer (lunar) oder Ausatmer (solar). Erst Tai Chi im eigenen Atemtyp eröffnet den Zugang zur inneren Kraft.',
      cta: { text: 'Atemtyp verstehen →', href: '/methode/atemtyp' },
    },
    {
      imageLeft: true,
      title: 'Welcher Atemtyp bist Du?',
      desc: 'Bist Du Einatmer oder Ausatmer? Die Antwort bestimmt, wie Du stehst, Dich bewegst und atmest – und wie Du Tai Chi üben solltest. Finde es heraus und beginne Deine individuelle Praxis mit den richtigen Übungen für Deinen Typ.',
      cta: { text: 'Atemtyp-Test starten →', href: '/methode/test' },
    },
  ],
  kurztext: {
    title: 'Der Unterschied, der den Unterschied macht',
    desc: 'Millionen Menschen üben Tai Chi – aber nur wenige entwickeln dabei innere Kraft. Der Grund: Ohne die Ausrichtung auf den eigenen Atemtyp bleibt die wichtigste Kraftquelle verschlossen. Atemtyp Tai Chi ist der Schlüssel, den Meister Frieder Anders in über 20 Jahren Forschung wiederentdeckt hat.',
  },
  zitat: {
    text: '»Nichts unter dem Himmel ist so weich und schwach wie das Wasser, und doch ist es von keinem, das gegen Festes und Starkes anstürmt, zu schlagen.«',
    author: 'Laozi',
  },
  finalCTA: {
    title: 'Bereit, Deine innere Kraft zu entdecken?',
    ctas: [
      { text: 'Atemtyp-Test starten', href: '/methode/test' },
      { text: 'Kurse entdecken', href: '/kurse' },
    ],
  },
}

export const atemtypTestDetail = {
  hero: {
    subtitle: 'FINDE DEINEN ATEMTYP',
    title: 'Welcher Atemtyp bist Du?',
    desc: 'Bist Du Einatmer (lunar) oder Ausatmer (solar)? Finde es heraus – und beginne Deine Praxis im eigenen Atemtyp.',
  },
  section1: {
    title: 'Drei Wege, Deinen Atemtyp zu bestimmen',
    desc: 'Es gibt drei Methoden, Deinen Atemtyp herauszufinden – wähle die, die zu Dir passt:',
    methods: [
      {
        title: 'Nach Geburtsdatum',
        desc: 'Berechnung basierend auf der Stellung von Sonne und Mond',
        feature: 'Schnell und eindeutig',
        price: 'Kostenlos',
        cta: { text: 'Berechnen ↓', href: '#geburtsdatum' },
      },
      {
        title: 'Körperlicher Selbsttest',
        desc: 'Einfache Übungen, die zeigen, welcher Atemtyp Du bist',
        feature: 'Spürbar und erfahrbar',
        price: 'Kostenlos',
        cta: { text: 'Selbsttest starten ↓', href: '#selbsttest' },
      },
      {
        title: 'Persönlich per Zoom',
        desc: 'Bestimmung durch Meister Anders mit Haltungsanalyse',
        feature: '100% Sicherheit',
        price: '€45',
        cta: { text: 'Termin anfragen ↓', href: '#zoom' },
      },
    ],
  },
  section2: {
    title: 'Berechnung nach Geburtsdatum',
    desc: 'Die Terlusollogie ermöglicht eine Bestimmung des Atemtyps nach dem Geburtsdatum. Ob Sonne oder Mond zum Zeitpunkt Deiner Geburt den stärkeren Einfluss hatte, lässt sich berechnen.',
    hinweis: 'Die Berechnung basiert auf der Terlusollogie nach Erich Wilk und Charlotte Hagena. In seltenen Fällen (Geburt genau an einem Umschalttag) kann das Ergebnis uneindeutig sein – dann hilft der körperliche Selbsttest oder die persönliche Bestimmung per Zoom.',
  },
  section3: {
    title: 'Körperlicher Selbsttest',
    desc: 'Der Selbsttest besteht aus einfachen Übungen, die zeigen, welche Atemphase Dich stärkt. Du brauchst keine Vorkenntnisse – nur ein paar Minuten Zeit und etwas Aufmerksamkeit für Deinen Körper.',
  },
  section4: {
    title: 'Die Testübungen',
    desc: 'Der Selbsttest umfasst mehrere kurze Übungen. Jede zeigt Dir, ob Du mit Einatmen oder Ausatmen mehr Kraft und Stabilität gewinnst.',
    tests: [
      {
        title: 'Der Armtest',
        desc: 'Strecke einen Arm zur Seite aus. Ein Partner drückt von oben auf Deinen Arm, während Du einatmest – dann während Du ausatmest. Bei welcher Atemphase bist Du stabiler?',
        einatmer: 'Stabiler beim Einatmen',
        ausatmer: 'Stabiler beim Ausatmen',
      },
      {
        title: 'Der Standtest',
        desc: 'Stehe aufrecht. Ein Partner schubst Dich leicht von vorn, während Du einatmest – dann während Du ausatmest. Bei welcher Atemphase bist Du verwurzelter?',
        einatmer: 'Verwurzelter beim Einatmen',
        ausatmer: 'Verwurzelter beim Ausatmen',
      },
      {
        title: 'Der Haltungstest',
        desc: 'Stehe entspannt und beobachte Deine natürliche Haltung. Neigst Du Dich leicht nach vorn oder stehst Du eher aufrecht mit leichter Tendenz nach hinten?',
        einatmer: 'Aufrechte Haltung, Tendenz nach oben/hinten',
        ausatmer: 'Leicht geneigte Haltung, Tendenz nach vorn/unten',
      },
      {
        title: 'Der Atembeobachtungstest',
        desc: 'Beobachte Deinen natürlichen Atem. Welche Phase ist länger und fühlt sich befriedigender an? Das Einatmen oder das Ausatmen?',
        einatmer: 'Einatmen fühlt sich voller und befriedigender an',
        ausatmer: 'Ausatmen fühlt sich befreiender und befriedigender an',
      },
    ],
  },
  section5: {
    title: 'Video: Atemtyp-Selbsttest',
    caption: 'Meister Frieder Anders zeigt die Testübungen und erklärt, wie Du Deinen Atemtyp erkennst.',
  },
  section6: {
    subline: 'PERSÖNLICHE BERATUNG',
    title: 'Atemtyp-Bestimmung mit dem Meister',
    desc: 'Du bist Dir unsicher? Lass Deinen Atemtyp direkt von Meister Frieder Anders bestimmen – persönlich per Zoom. In 30 Minuten führt er Dich durch die Tests, beobachtet Deine Haltung und Atmung und gibt Dir Sicherheit über Deinen Typ.',
    details: {
      format: '1:1 per Zoom',
      dauer: 'ca. 30 Minuten',
      inhalt: 'Atemtyp-Bestimmung, Haltungsanalyse, erste Tipps für Deine Praxis',
      preis: '€45',
      termine: 'Nach Vereinbarung',
    },
    cta: { text: 'Termin anfragen →', href: 'tel:+436701848742' },
    kontakt: '+43 670 1848742 oder info@tai-chi.academy',
  },
  section7: {
    title: 'Was Dein Ergebnis bedeutet',
    einatmer: {
      symbol: '☽',
      name: 'Wenn Du Einatmer bist',
      aspects: [
        { label: 'Deine Stärke', wert: 'Das Einatmen gibt Dir Kraft und Stabilität' },
        { label: 'Deine Haltung', wert: 'Übe aufrecht, mit Tendenz nach oben' },
        { label: 'Deine Atmung', wert: 'Betone das Einatmen, lass das Ausatmen kurz und passiv' },
        { label: 'Dein Kurs', wert: 'Wähle in allen Kursen die Einatmer-Variante' },
      ],
    },
    ausatmer: {
      symbol: '☀',
      name: 'Wenn Du Ausatmer bist',
      aspects: [
        { label: 'Deine Stärke', wert: 'Das Ausatmen gibt Dir Kraft und Verwurzelung' },
        { label: 'Deine Haltung', wert: 'Übe leicht geneigt, mit Tendenz nach unten' },
        { label: 'Deine Atmung', wert: 'Betone das Ausatmen, lass das Einatmen kurz und passiv' },
        { label: 'Dein Kurs', wert: 'Wähle in allen Kursen die Ausatmer-Variante' },
      ],
    },
  },
  section8: {
    title: 'Häufige Fragen zum Atemtyp-Test',
    faq: [
      {
        question: 'Was, wenn Berechnung und Selbsttest unterschiedliche Ergebnisse liefern?',
        answer: 'Das kommt selten vor. Meist liegt es daran, dass der Selbsttest nicht unter optimalen Bedingungen durchgeführt wurde (z.B. müde, gestresst). Vertraue im Zweifel der Berechnung und probiere beide Varianten in der Praxis aus – Dein Körper wird Dir zeigen, was sich richtig anfühlt. Oder buche eine persönliche Bestimmung per Zoom.',
      },
      {
        question: 'Kann ich den Test alleine machen?',
        answer: 'Den Haltungstest und den Atembeobachtungstest kannst Du alleine machen. Für den Arm- und Standtest brauchst Du einen Partner. Alternativ kannst Du den Test in einem unserer Präsenzkurse oder per Zoom machen.',
      },
      {
        question: 'Wie sicher ist die Berechnung nach Geburtsdatum?',
        answer: 'Sehr sicher – vorausgesetzt, Du kennst Dein genaues Geburtsdatum. Bei Geburten genau an einem »Umschalttag« (ca. 2% aller Fälle) kann das Ergebnis uneindeutig sein.',
      },
      {
        question: 'Muss ich meinen Atemtyp kennen, um mit Tai Chi zu beginnen?',
        answer: 'Du kannst auch ohne Atemtyp-Bestimmung beginnen – die kostenlose Kurzform zeigt beide Varianten. Aber für die volle Wirkung empfehlen wir, Deinen Atemtyp so früh wie möglich zu bestimmen.',
      },
      {
        question: 'Kann ich meinen Atemtyp auch im Präsenzkurs bestimmen lassen?',
        answer: 'Ja! In allen Einführungskursen in Wien bestimmen und verifizieren wir Deinen Atemtyp mit Tests der inneren Kraft.',
      },
      {
        question: 'Kann sich mein Atemtyp ändern?',
        answer: 'Nein. Der Atemtyp wird bei der Geburt festgelegt und bleibt ein Leben lang gleich.',
      },
    ],
  },
  section9: {
    title: 'Deine nächsten Schritte',
    steps: [
      {
        title: 'Kurzform lernen',
        desc: 'Starte kostenlos mit der Kurzform – in Deinem Atemtyp',
        cta: { text: 'Kurzform starten', href: '/kurse/online' },
      },
      {
        title: 'Vertiefung buchen',
        desc: 'Lerne die Langform und die 7 Tore zur inneren Kraft',
        cta: { text: 'Online-Kurse', href: '/kurse/online' },
      },
      {
        title: 'Präsenz erleben',
        desc: 'Lass Deinen Atemtyp im Kurs verifizieren',
        cta: { text: 'Präsenzkurse', href: '/kurse/praesenz' },
      },
    ],
  },
  section10: {
    title: 'ATEMTYP-BESTIMMUNG IM PRÄSENZKURS',
    desc: 'In unseren Einführungskursen in Wien bestimmen wir Deinen Atemtyp und verifizieren ihn mit Tests der inneren Kraft – so bist Du Dir zu 100% sicher.',
    termin: 'Nächster Termin: 10. Januar 2026, Wien',
    cta: { text: 'Einführungskurs buchen', href: '/kurse/praesenz' },
  },
  finalCTA: {
    title: 'Bereit, Deinen Atemtyp zu entdecken?',
    desc: 'Gib Dein Geburtsdatum ein, starte den Selbsttest oder buche eine persönliche Bestimmung – und beginne Deine Praxis im eigenen Atemtyp.',
    ctas: [
      { text: 'Geburtsdatum eingeben ↑', href: '#geburtsdatum' },
      { text: 'Zoom-Termin anfragen', href: 'tel:+436701848742' },
      { text: 'Kostenlose Kurzform starten', href: '/kurse/online' },
    ],
  },
}

export const lehrerDetail = {
  hero: {
    subtitle: 'ÜBER UNS',
    title: 'Zertifizierte Lehrer',
    desc: 'Finde einen Lehrer der Tai Chi Academy in Deiner Nähe – oder werde selbst Teil des Netzwerks.',
  },
  section1: {
    imageLeft: false,
    title: 'Das Lehrer-Netzwerk',
    desc: 'Die Tai Chi Academy bildet Kursleiter und Lehrer aus, die das Atemtyp Tai Chi in ihrer Region weitergeben. Alle zertifizierten Lehrer haben ihre Ausbildung direkt bei Meister Frieder Anders absolviert und werden regelmäßig fortgebildet.',
    zusatztext: 'So stellen wir sicher, dass Du überall die gleiche Qualität und Authentizität erlebst – egal ob in Wien, Frankfurt, München oder anderswo.',
    infobox: 'Alle Lehrerinnen und Lehrer der Akademie sind Lehrende und Lernende zugleich. Die Ausbildung ist personenbezogen, individuell und dauert sechs Jahre. Das Ziel: eine überdurchschnittliche Qualifizierung, die nicht nur die eigenen Tai-Chi-Fähigkeiten, sondern auch Kenntnisse in verwandten Gebieten umfasst.',
  },
  section2: {
    title: 'Finde einen Lehrer in Deiner Nähe',
    regionen: ['Alle', 'Wien', 'Frankfurt', 'München', 'Online'],
    angebote: ['Alle', 'Wochenkurse', 'Workshops', 'Retreats', 'Einzelunterricht', 'Online/Zoom'],
  },
  section3: {
    lehrer: [
      {
        name: 'Frieder Anders',
        zertifizierung: 'Großmeister, 6. Generation Yang-Tradition',
        region: 'Wien / Online',
        angebot: ['Präsenzkurse Wien', 'Retreats', 'Webinare', 'Zoom-Unterricht', 'Einzelunterricht'],
        kontakt: '+43 670 1848742 · info@tai-chi.academy',
        beschreibung: 'Leiter der Tai Chi Academy, Entwickler des Atemtyp Tai Chi. Erster Europäer mit Meisterwürde in der Yang-Familientradition.',
        cta: { text: 'Alle Kurse mit dem Meister →', href: '/ueber-uns/meister' },
      },
      {
        name: 'Dardo Lessmann',
        zertifizierung: 'Meister, zertifizierter Lehrer',
        region: 'Frankfurt am Main',
        angebot: ['Wochenkurse', 'Tai-Chi-Unterricht'],
        kontakt: 'info@taiji-wolkentor.de',
        beschreibung: 'Ansprechpartner für an Tai-Chi-Kursen Interessierte im Raum Frankfurt.',
        cta: { text: 'Kontakt →', href: 'mailto:info@taiji-wolkentor.de' },
      },
      {
        name: 'Toni Ananiadis',
        zertifizierung: 'Meister, zertifizierter Lehrer',
        region: 'Frankfurt am Main',
        angebot: ['Wochenkurse', 'Tai-Chi-Unterricht'],
        kontakt: 'verein@taijiakademie.de · Tel. 069-72 73 78',
        beschreibung: 'Ansprechpartner für an Tai-Chi-Kursen Interessierte im Raum Frankfurt.',
        cta: { text: 'Kontakt →', href: 'mailto:verein@taijiakademie.de' },
      },
      {
        name: 'Sibel Cirsi',
        zertifizierung: 'Meisterin, zertifizierte Lehrerin',
        region: 'München / Online',
        angebot: ['Wochenkurse', 'Workshops', 'Retreats', 'Online-Unterricht'],
        website: 'taiji-welle.de',
        beschreibung: 'Unterrichtet seit über 15 Jahren Tai Chi. Leitet das Oster-Retreat in den Wiener Alpen (Kurzform für Einsteiger).',
        cta: { text: 'Zur Website →', href: 'https://taiji-welle.de' },
      },
    ],
  },
  section4: {
    title: 'Kein Lehrer in Deiner Nähe?',
    desc: 'Kein Problem! Du kannst Tai Chi auch lernen:',
    optionen: [
      'Mit unseren Online-Lernvideos (Kurzform kostenlos)',
      'In den Live-Webinaren mit Meister Anders',
      'Per Zoom-Einzelunterricht',
    ],
    ctas: [
      { text: 'Online-Kurse entdecken', href: '/kurse/online' },
      { text: 'Zoom-Unterricht anfragen', href: '/kurse/live' },
    ],
  },
  section5: {
    title: 'Kursleiter und Lehrer – Was ist der Unterschied?',
    kursleiter: {
      symbol: '🥉',
      titel: 'Zertifizierte/r Kursleiter/in',
      berechtigung: 'Darf die Kurzform unterrichten',
      ausbildung: '4 Wochenenden + Praxis',
      voraussetzung: 'Kurzform beherrschen, mind. 1 Jahr Praxis',
    },
    lehrer: {
      symbol: '🥇',
      titel: 'Zertifizierte/r Lehrer/in',
      berechtigung: 'Darf Kurzform, Langform und Vertiefungsstufen unterrichten',
      ausbildung: '6 Jahre personenbezogen und individuell',
      voraussetzung: 'Langform nach Meister Chu, Kursleiter-Zertifikat',
    },
  },
  section6: {
    imageLeft: true,
    subline: 'WERDE TEIL DES NETZWERKS',
    title: 'Selbst Lehrer werden',
    desc: 'Du praktizierst Tai Chi und möchtest es weitergeben? Die Tai Chi Academy bildet Kursleiter und Lehrer aus – in einer Kombination aus Präsenz-Wochenenden, Online-Begleitung und praktischer Erfahrung.',
    zusatztext: 'Das Ziel der Ausbildung: Lehrende, die überdurchschnittlich qualifiziert sind – nicht nur in Tai Chi, sondern auch in verwandten Gebieten wie Anatomie, Atemtypen und Didaktik.',
  },
  section7: {
    title: 'Dein Weg zum Lehrer',
    schritte: [
      {
        nummer: 1,
        titel: 'Kurzform lernen',
        beschreibung: 'Lerne die Kurzform – online oder in Präsenz. Bestimme Deinen Atemtyp.',
      },
      {
        nummer: 2,
        titel: 'Kursleiter-Ausbildung',
        beschreibung: '4 Wochenenden: Theorie, Didaktik, Praxis. Abschluss: Zertifikat Kursleiter/in.',
      },
      {
        nummer: 3,
        titel: 'Praxis sammeln',
        beschreibung: 'Unterrichte eigene Kurse, hospitiere bei erfahrenen Lehrern, vertiefe Deine Praxis.',
      },
      {
        nummer: 4,
        titel: 'Lehrer-Ausbildung',
        beschreibung: '6 Jahre: Langform, alle 7 Tore, Push Hands, Didaktik. Abschluss: Zertifikat Lehrer/in.',
      },
    ],
  },
  section8: {
    title: 'Die Ausbildungen im Überblick',
    kursleiter: {
      titel: 'Kursleiter-Ausbildung Kurzform',
      dauer: '4 Wochenenden + Praxis',
      ort: 'Wien + Online',
      voraussetzung: 'Kurzform beherrschen, mind. 1 Jahr Praxis',
      preis: '€990',
      abschluss: 'Zertifikat »Kursleiter/in AtemtypTaiChi Kurzform«',
      naechsterStart: '2026 (auf Anfrage)',
      cta: { text: 'Mehr erfahren →', href: 'mailto:info@tai-chi.academy' },
    },
    lehrer: {
      titel: 'Lehrer-Ausbildung Langform',
      dauer: '6 Jahre, personenbezogen und individuell',
      ort: 'Wien + Retreats + Frankfurt',
      voraussetzung: 'Langform nach Meister Chu, Kursleiter-Zertifikat',
      preis: 'Auf Anfrage',
      abschluss: 'Zertifikat »Lehrer/in AtemtypTaiChi«',
      einstieg: 'Fortlaufend nach Absprache',
      cta: { text: 'Beratungsgespräch anfragen →', href: 'mailto:info@tai-chi.academy' },
    },
  },
  section9: {
    title: 'Deine Vorteile als zertifizierter Lehrer',
    vorteile: [
      'Listung auf der Website der Tai Chi Academy',
      'Nutzung des Namens und Logos »Tai Chi Academy«',
      'Zugang zu Lehrmaterialien und Lernvideos',
      'Regelmäßige Fortbildungen mit Meister Anders',
      'Teilnahme am jährlichen Lehrer-Treffen',
      'Austausch und Unterstützung im Lehrer-Netzwerk',
    ],
  },
  section10: {
    imageLeft: false,
    title: 'Das jährliche Lehrer-Treffen',
    desc: 'Einmal im Jahr kommen alle zertifizierten Lehrer und Kursleiter zusammen – zum gemeinsamen Üben, zum Austausch und für neue Impulse vom Meister. Das Treffen stärkt die Gemeinschaft und sorgt für kontinuierliche Weiterentwicklung.',
    details: {
      termin: 'Herbst 2026 (genaues Datum folgt)',
      dauer: '2–3 Tage',
      ort: 'Wird bekannt gegeben',
      preis: '€190 zzgl. Unterkunft',
    },
  },
  section11: {
    title: 'Häufige Fragen zur Lehrer-Ausbildung',
    faq: [
      {
        question: 'Kann ich die Ausbildung auch machen, wenn ich nicht aus Wien oder Frankfurt komme?',
        answer: 'Ja! Die Ausbildung kombiniert Präsenz-Wochenenden mit Online-Elementen. Viele unserer Lehrer kommen aus anderen Städten oder Ländern.',
      },
      {
        question: 'Muss ich die Yang-Form nach Meister Chu können?',
        answer: 'Für die Kursleiter-Ausbildung nicht – hier reicht die Kurzform. Für die Lehrer-Ausbildung ist die Langform nach Meister Chu Voraussetzung.',
      },
      {
        question: 'Kann ich als Lehrer einer anderen Schule die Ausbildung machen?',
        answer: 'Ja, nach einem Vorgespräch. Wir schauen gemeinsam, welche Vorkenntnisse angerechnet werden können.',
      },
      {
        question: 'Wie lange dauert die Lehrer-Ausbildung?',
        answer: 'Die Lehrer-Ausbildung dauert sechs Jahre. Sie ist personenbezogen und individuell gestaltet. Das Ziel: Lehrende, die überdurchschnittlich qualifiziert sind.',
      },
      {
        question: 'Kann ich nach der Kursleiter-Ausbildung sofort eigene Kurse geben?',
        answer: 'Nach der Kursleiter-Ausbildung darfst Du die Kurzform unterrichten. Wir unterstützen Dich beim Aufbau eigener Kurse.',
      },
      {
        question: 'Was kostet die Lehrer-Ausbildung?',
        answer: 'Die Kosten für die Lehrer-Ausbildung werden individuell besprochen, da die Ausbildung personenbezogen ist. Bitte frag ein Beratungsgespräch an.',
      },
    ],
  },
  section12: {
    title: 'INTERESSE AN DER AUSBILDUNG?',
    desc: 'Wir beraten Dich gern persönlich – per Telefon oder Zoom.',
    kontakt: {
      telefon: '+43 670 1848742',
      email: 'info@tai-chi.academy',
    },
    cta: { text: 'Beratungsgespräch anfragen', href: 'mailto:info@tai-chi.academy' },
  },
  finalCTA: {
    title: 'Finde Deinen Weg',
    desc: 'Ob Du einen Lehrer in Deiner Nähe suchst oder selbst Lehrer werden möchtest – wir unterstützen Dich.',
    ctas: [
      { text: 'Lehrer in meiner Nähe finden ↑', href: '#section3' },
      { text: 'Ausbildung anfragen', href: 'mailto:info@tai-chi.academy' },
    ],
  },
}

export const buecherDetail = {
  hero: {
    subtitle: 'WISSEN',
    title: 'Bücher',
    desc: 'Publikationen von Meister Frieder Anders – Lehrbücher, Lesebücher und Grundlagenwerke zu Tai Chi, Qigong und Atemtypen.',
  },
  section1: {
    desc: 'Meister Frieder Anders verbindet in seinen Büchern jahrzehntelange Praxiserfahrung mit fundiertem theoretischem Wissen. Die Werke richten sich sowohl an Einsteiger als auch an fortgeschrittene Praktizierende und Lehrer.',
  },
  section2: {
    buecher: [
      {
        titel: 'Die sieben Tore zur inneren Kraft',
        untertitel: 'Atemenergetik und Biomechanik in Tai Chi Chuan',
        autor: 'Frieder Anders',
        jahr: '2025',
        verlag: 'Tredition',
        preis: '€18,90',
        beschreibung: 'Gekürzte Neuauflage von ›Taiji- Atemenergetik und Biomechanik‹ von 2009/2017. In diesem Buch erläutert Meister Frieder Anders die energetischen und biomechanischen Unterschiede der beiden Atemtypen, auch anhand von historischen Beispielen und in Bezug auf die sog. ›frühen Schriften‹ des Tai Chi Chuan und zeigt, als Essenz seiner über 50-jährigen Tai-Chi-Erfahrung, den Weg, wie die Tai-Chi-Praxis entsprechend dem individuellen Atemtyp aufgebaut sein muss, um innere Kraft zu entwickeln.',
        themen: ['Atemtypen', 'Innere Kraft', 'Biomechanik', 'Atemenergetik', 'Tai Chi'],
        cta: { text: 'Bei Tredition kaufen →', href: 'https://shop.tredition.com/booktitle/Die%5Fsieben%5FTore%5Fzur%5Finneren%5FKraft/W-205-517-134' },
      },
      {
        titel: 'Atemtyp Tai Chi – Die lange Yang-Form',
        untertitel: 'Lehrbuch mit Anleitungen',
        autor: 'Frieder Anders',
        jahr: '2024',
        verlag: 'Tredition',
        isbn: '978-3-384-44019-8',
        beschreibung: 'Das umfassende Lehrbuch zur Methode: Die komplette lange Yang-Form mit detaillierten Anleitungen für beide Atemtypen (Einatmer und Ausatmer). Ideal als Begleitung zu den Online-Kursen und für das Selbststudium.',
        themen: ['Tai Chi', 'Langform', 'Atemtypen', 'Yang-Stil'],
        cta: { text: 'Bei Tredition kaufen →', href: 'https://shop.tredition.com/booktitle/Atemtyp_Tai_Chi/W-742-492-629' },
      },
      {
        titel: 'Abwehrkraft – Leben mit Tai Chi',
        untertitel: 'Ein Lesebuch',
        autor: 'Frieder Anders',
        jahr: '2024',
        verlag: 'Tredition',
        isbn: '978-3-384-12317-6',
        beschreibung: 'Ein Lesebuch über Tai Chi im Alltag: Wie die Praxis des Tai Chi unsere Abwehrkraft stärkt – körperlich, emotional und geistig. Persönliche Reflexionen und praktische Einsichten aus über 50 Jahren Erfahrung.',
        themen: ['Tai Chi', 'Gesundheit', 'Lebenskunst', 'Philosophie'],
        cta: { text: 'Bei Tredition kaufen →', href: 'https://shop.tredition.com/booktitle/Abwehrkraft/W-646-735-415' },
      },
      {
        titel: 'Das Qi verwurzeln',
        untertitel: 'Qigong und Atemtypen',
        autor: 'Frieder Anders',
        jahr: '2020',
        verlag: 'Kristkeitz, Heidelberg',
        isbn: '978-3-94837-800-4',
        preis: '€28,00',
        beschreibung: 'Das Grundlagenwerk zu Qigong und Atemtypen: Wie die individuelle Ausrichtung auf den eigenen Atemtyp das Qi verwurzelt und zur inneren Kraft führt. Mit praktischen Übungen für Einatmer und Ausatmer.',
        themen: ['Qigong', 'Atemtypen', 'Qi', 'Verwurzelung'],
        cta: { text: 'Im Buchhandel kaufen', href: '#' },
      },
      {
        titel: 'Innere Kraft durch Atemtyp Qigong',
        autor: 'Frieder Anders & Judith Hechler',
        jahr: '2019',
        verlag: 'tao.de in J. Kamphausen',
        isbn: '978-3-96240-480-2 (Hardcover) / 978-3-96240-485-7 (Paperback)',
        preis: '€20,99 (Hardcover) / €12,99 (Paperback)',
        beschreibung: 'Eine Einführung in das Atemtyp Qigong – gemeinsam verfasst mit Judith Hechler. Das Buch erklärt die Grundlagen der Atemtyp-Lehre und bietet praktische Qigong-Übungen für beide Typen.',
        themen: ['Qigong', 'Atemtypen', 'Innere Kraft', 'Übungen'],
        cta: { text: 'Bei Tredition kaufen →', href: 'https://shop.tredition.com/booktitle/Innere_Kraft_durch_Atemtyp_Qigong/W-54_54238' },
      },
    ],
  },
  section3: {
    title: 'Welches Buch passt zu mir?',
    empfehlungen: [
      {
        zielgruppe: 'Einsteiger in Tai Chi',
        empfehlung: '»Abwehrkraft – Leben mit Tai Chi« als Lesebuch zum Einstieg',
      },
      {
        zielgruppe: 'Kursteilnehmer (Langform)',
        empfehlung: '»Atemtyp Tai Chi – Die lange Yang-Form« als Lehrbuch',
      },
      {
        zielgruppe: 'Interessiert an Qigong',
        empfehlung: '»Das Qi verwurzeln« oder »Innere Kraft durch Atemtyp Qigong«',
      },
      {
        zielgruppe: 'Lehrer / Kursleiter',
        empfehlung: 'Alle vier Bücher als Grundlage für den Unterricht',
      },
    ],
  },
  section4: {
    title: 'Auf einen Blick',
    vergleich: [
      {
        buch: 'Die sieben Tore zur inneren Kraft',
        typ: 'Fachbuch',
        thema: 'Atemenergetik & Biomechanik',
        niveau: 'Fortgeschritten',
        preis: '€18,90',
      },
      {
        buch: 'Atemtyp Tai Chi',
        typ: 'Lehrbuch',
        thema: 'Tai Chi Langform',
        niveau: 'Alle Stufen',
        preis: '—',
      },
      {
        buch: 'Abwehrkraft',
        typ: 'Lesebuch',
        thema: 'Tai Chi & Leben',
        niveau: 'Einsteiger',
        preis: '—',
      },
      {
        buch: 'Das Qi verwurzeln',
        typ: 'Fachbuch',
        thema: 'Qigong & Atemtypen',
        niveau: 'Fortgeschritten',
        preis: '€28,00',
      },
      {
        buch: 'Innere Kraft durch Atemtyp Qigong',
        typ: 'Übungsbuch',
        thema: 'Qigong',
        niveau: 'Einsteiger',
        preis: 'ab €12,99',
      },
    ],
  },
  section5: {
    quote: {
      text: '»Erst Tai Chi im eigenen Atemtyp entwickelt den "richtigen" Atem und eröffnet den Zugang zur inneren Kraft.«',
      author: 'Frieder Anders, »Atemtyp Tai Chi«',
    },
  },
  section6: {
    title: 'Wo bekommst Du die Bücher?',
    desc: 'Die Bücher sind im Buchhandel, bei Online-Händlern und direkt bei den Verlagen erhältlich. Die Links führen Dich zur jeweiligen Verlagsseite.',
    bezugsquellen: [
      { icon: '📚', name: 'Buchhandel', info: 'Über ISBN bestellbar' },
      { icon: '🛒', name: 'Online-Händler', info: 'Amazon, Thalia, etc.' },
      { icon: '🏢', name: 'Verlag direkt', info: 'Tredition, Kristkeitz, tao.de' },
    ],
  },
  section7: {
    title: 'Noch mehr Wissen',
    desc: 'Neben den Büchern findest Du im Blog und Filmarchiv weitere Inhalte zu Tai Chi, Qigong und innerer Kraft.',
    ressourcen: [
      { icon: '✍️', title: 'Blog', desc: 'Artikel zu Theorie und Praxis', cta: { text: 'Zum Blog →', href: '/wissen/blog' } },
      { icon: '🎬', title: 'Filmarchiv', desc: 'Videos, Interviews, Demonstrationen', cta: { text: 'Zum Filmarchiv →', href: '/wissen/filmarchiv' } },
    ],
  },
  finalCTA: {
    title: 'Theorie und Praxis gehören zusammen',
    desc: 'Die Bücher begleiten Deine Praxis. Starte jetzt mit der kostenlosen Kurzform.',
    cta: { text: 'Kostenlos starten', href: '/kurse/online' },
  },
}

export const wissenPage = {
  hero: {
    subtitle: 'WISSEN',
    title: 'Wissen & Ressourcen',
    desc: 'Artikel, Bücher und Videos rund um Tai Chi, Atemtypen und innere Kraft – zum Lesen, Schauen und Vertiefen.',
  },
  section1: {
    bereiche: [
      {
        icon: '📚',
        title: 'Bücher',
        desc: 'Publikationen von Meister Frieder Anders – Lehrbücher und Grundlagenwerke zum Atemtyp Tai Chi und Qigong.',
        cta: { text: 'Bücher ansehen →', href: '/wissen/buecher' },
      },
      {
        icon: '✍️',
        title: 'Blog',
        desc: 'Artikel zu Theorie und Praxis – von den Grundlagen des Tai Chi bis zu fortgeschrittenen Themen wie innere Kraft und Atemtypen.',
        cta: { text: 'Zum Blog →', href: '/wissen/blog' },
      },
      {
        icon: '🎬',
        title: 'Filmarchiv',
        desc: 'Videos, Interviews und Demonstrationen – erlebe die Form in Bewegung und lerne von Meister Anders.',
        cta: { text: 'Filme ansehen →', href: '/wissen/filmarchiv' },
      },
    ],
  },
  section2: {
    title: 'Aktuelles aus dem Wissen-Bereich',
    neuestesBuch: {
      label: '📚 BUCH',
      title: 'Atemtyp Tai Chi. Die lange Yang-Form',
      jahr: '2024',
      beschreibung: 'Das Lehrbuch zur Methode mit detaillierten Anleitungen für Einatmer und Ausatmer.',
      cta: { text: 'Mehr erfahren →', href: '/wissen/buecher' },
    },
    neuesterArtikel: {
      label: '✍️ BLOG',
      datum: '04. Dezember 2025',
      title: 'Ein Riss geht durch die Tai-Chi-Welt',
      beschreibung: 'Über die Unterschiede zwischen äußeren und inneren Stilen und warum authentisches Tai Chi selten geworden ist.',
      cta: { text: 'Artikel lesen →', href: '/wissen/blog' },
    },
    neuestesVideo: {
      label: '🎬 VIDEO',
      title: 'Back to the Roots',
      dauer: '18:30',
      beschreibung: 'Interview mit Meister Frieder Anders über seinen Weg und die Entwicklung des Atemtyp Tai Chi.',
      cta: { text: 'Video ansehen →', href: '/wissen/filmarchiv' },
    },
  },
  section3: {
    title: 'Wissen nach Themen',
    desc: 'Du suchst Informationen zu einem bestimmten Thema? Hier findest Du schnellen Zugang.',
    themen: [
      { name: 'Innere Kraft', href: '/wissen?thema=innere-kraft' },
      { name: 'Atemtypen', href: '/wissen?thema=atemtypen' },
      { name: 'Yang-Tradition', href: '/wissen?thema=yang-tradition' },
      { name: 'Qigong', href: '/wissen?thema=qigong' },
      { name: 'Kampfkunst', href: '/wissen?thema=kampfkunst' },
      { name: 'Philosophie', href: '/wissen?thema=philosophie' },
    ],
  },
  section4: {
    quote: {
      text: '»Folge nicht den Fußstapfen der Meister. Suche, was sie gesucht haben.«',
      author: 'Matsuo Bashō (1644–1694)',
    },
  },
  section5: {
    title: 'Bleib auf dem Laufenden',
    desc: 'Erhalte neue Artikel, Videos und Kurs-Ankündigungen direkt in Dein Postfach.',
    hinweis: 'Du kannst Dich jederzeit wieder abmelden. Mehr in unserer Datenschutzerklärung.',
  },
  finalCTA: {
    title: 'Bereit, tiefer einzutauchen?',
    desc: 'Theorie und Praxis gehören zusammen. Starte jetzt mit der kostenlosen Kurzform.',
    cta: { text: 'Kostenlos starten', href: '/kurse/online' },
  },
}

export const ueberUnsPage = {
  hero: {
    subtitle: 'TRADITION TRIFFT MODERNE',
    title: 'Über uns',
    desc: 'Deutschlands älteste Tai-Chi-Schule – gegründet auf dem Fundament authentischer Yang-Tradition, weiterentwickelt für die westliche Welt.',
  },
  sections: [
    {
      imageLeft: true,
      title: 'Der Meister',
      desc: 'Frieder Anders ist der erste Europäer, der als Meister der Yang-Familientradition anerkannt wurde. 26 Jahre Ausbildung bei Meister K.H. Chu in London. Über 50 Jahre Praxis im Yang-Stil. Entwickler des Atemtyp Tai Chi.',
      cta: { text: 'Mehr über den Meister →', href: '/ueber-uns/meister' },
    },
    {
      imageLeft: false,
      title: 'Tradition & Moderne',
      desc: 'Authentisches Tai Chi in der Yang-Familientradition – angepasst an die westliche Kultur. Wir machen keine Jünger. Wir helfen Dir, Dein eigenes Instrument zu spielen. Offenheit statt Geheimnisse, Individuation statt blinder Gefolgschaft.',
      cta: { text: 'Unsere Philosophie →', href: '/ueber-uns/tradition' },
    },
    {
      imageLeft: true,
      title: 'Zertifizierte Lehrer',
      desc: 'Die Tai Chi Academy bildet Kursleiter und Lehrer aus, die das Atemtyp Tai Chi in ihrer Region weitergeben. Finde einen zertifizierten Lehrer in Deiner Nähe – oder werde selbst Teil des Netzwerks.',
      cta: { text: 'Lehrer finden →', href: '/ueber-uns/lehrer' },
    },
  ],
  geschichte: {
    title: 'Unsere Geschichte',
    desc: '1973 begann Frieder Anders seine Tai-Chi-Reise. 26 Jahre lernte er bei Meister Chu King-Hung in London – einem der wenigen Meister, die das authentische Yang-Stil Tai Chi noch in seiner Tiefe beherrschten. 2002 wurde Frieder Anders als erster Europäer als Meister der Yang-Familientradition anerkannt. Seit 2005 entwickelt er das Atemtyp Tai Chi – die Verbindung von traditioneller Meisterschaft mit der Erkenntnis der individuellen Atemtypen.',
  },
  zahlen: {
    title: 'Die Tai Chi Academy in Zahlen',
    stats: [
      { number: '50+', description: 'Jahre Tai-Chi-Erfahrung' },
      { number: '6.', description: 'Generation der Yang-Familientradition' },
      { number: '2002', description: 'Anerkennung als erster europäischer Meister' },
      { number: '2005', description: 'Beginn der Atemtyp-Forschung' },
    ],
  },
  zitat: {
    text: '»Folge nicht den Fußstapfen der Meister. Suche, was sie gesucht haben.«',
    author: 'Matsuo Bashō (1644–1694)',
  },
  finalCTA: {
    title: 'Lerne uns kennen',
    desc: 'Erfahre mehr über den Meister, unsere Philosophie oder finde einen Lehrer in Deiner Nähe.',
    ctas: [
      { text: 'Der Meister', href: '/ueber-uns/meister' },
      { text: 'Tradition & Moderne', href: '/ueber-uns/tradition' },
      { text: 'Lehrer finden', href: '/ueber-uns/lehrer' },
    ],
  },
}

export const blogDetail = {
  hero: {
    subtitle: 'WISSEN',
    title: 'Blog',
    desc: 'Artikel zu Theorie und Praxis – von Meister Frieder Anders. Gedanken zu Tai Chi, Qigong, Atemtypen und innerer Kraft.',
  },
  section1: {
    jahre: ['Alle', '2025', '2024', '2023', '2022', '2021', '2020', '2018', '2017', '2016', '2015', '2014', '2013'],
    themen: ['Alle', 'Tai Chi', 'Qigong', 'Atemtypen', 'Innere Kraft', 'Philosophie', 'Yang-Tradition', 'Kampfkunst'],
    suchePlaceholder: 'Artikel durchsuchen...',
  },
  section2: {
    title: 'Neueste Artikel',
  },
  section3: {
    title: 'Alle Artikel',
    info: 'Der Blog umfasst über 70 Artikel aus den Jahren 2013 bis heute.',
    artikelProSeite: 10,
  },
  section4: {
    title: 'Archiv nach Jahren',
  },
  section5: {
    title: 'Beliebte Themen',
  },
  section6: {
    title: 'Über den Autor',
    name: 'Frieder Anders',
    desc: 'Alle Blog-Artikel stammen von Großmeister Frieder Anders. Seit über 50 Jahren praktiziert und erforscht er Tai Chi – und teilt hier seine Gedanken, Erkenntnisse und Erfahrungen.',
    cta: { text: 'Mehr über den Meister →', href: '/ueber-uns/meister' },
  },
  section7: {
    title: 'Neue Artikel direkt ins Postfach',
    desc: 'Erhalte neue Blog-Artikel, Kurs-Ankündigungen und Neuigkeiten per E-Mail.',
    hinweis: 'Du kannst Dich jederzeit wieder abmelden. Mehr in unserer Datenschutzerklärung.',
  },
  section8: {
    title: 'Noch mehr Wissen',
    desc: 'Neben dem Blog findest Du Bücher und Videos zu Tai Chi und Qigong.',
    ressourcen: [
      {
        icon: '📚',
        title: 'Bücher',
        desc: 'Lehrbücher und Publikationen von Meister Anders',
        cta: { text: 'Zu den Büchern →', href: '/wissen/buecher' },
      },
      {
        icon: '🎬',
        title: 'Filmarchiv',
        desc: 'Videos, Interviews, Demonstrationen',
        cta: { text: 'Zum Filmarchiv →', href: '/wissen/filmarchiv' },
      },
    ],
  },
  finalCTA: {
    title: 'Theorie und Praxis gehören zusammen',
    desc: 'Der Blog begleitet Deine Praxis. Starte jetzt mit der kostenlosen Kurzform.',
    cta: { text: 'Kostenlos starten', href: '/kurse/online' },
  },
}

export const filmarchivDetail = {
  hero: {
    subtitle: 'WISSEN',
    title: 'Filmarchiv',
    desc: 'Videos, Demonstrationen und Dokumentationen – erlebe Tai Chi und Qigong in Bewegung. Von historischen Aufnahmen bis zu aktuellen Lehrvideos.',
  },
  filters: {
    kategorien: ['Alle', 'Dokumentation', 'Unterricht', 'Demonstration', 'Vortrag'],
    themen: ['Alle', 'Tai Chi Form', 'Qigong / Dao-Übungen', 'Atemtypen', 'Waffen', 'Geschichte', 'Innere Kraft'],
    atemtypen: ['Alle', 'Einatmer (lunar)', 'Ausatmer (solar)', 'Beide'],
  },
  featuredVideo: {
    kategorie: 'DOKUMENTATION',
    title: 'Das Innere Taijiquan',
    datum: '30. Dezember 2013',
    beschreibung: 'Eine Einführung in die Welt des inneren Tai Chi – was es von äußeren Kampfkünsten unterscheidet und wie innere Kraft entwickelt wird.',
    dauer: '25:00',
    cta: { text: '▶ Video ansehen', href: '#' },
  },
  kategorien: [
    {
      icon: '🎬',
      title: 'Dokumentation',
      desc: 'Historische Aufnahmen, Interviews und Hintergrundberichte zur Yang-Tradition und der Entwicklung des Atemtyp Tai Chi.',
      cta: { text: 'Alle Dokumentationen →', href: '#filter-dokumentation' },
    },
    {
      icon: '🎓',
      title: 'Unterricht',
      desc: 'Lehrvideos, Übungsanleitungen und Demonstrationen für beide Atemtypen – zum Mitmachen und Vertiefen.',
      cta: { text: 'Alle Unterrichtsvideos →', href: '#filter-unterricht' },
    },
  ],
  videos: [
    {
      title: 'Dao-Übung »Wellen, die sich kräuseln«',
      kategorie: 'Unterricht',
      atemtyp: 'Beide',
      datum: '06. Februar 2021',
      thema: 'Qigong / Dao-Übungen',
      cta: { text: '▶ Ansehen', href: '#' },
    },
    {
      title: 'Dao-Übung »Der fliegende Adler hebt den Kopf«',
      kategorie: 'Unterricht',
      atemtyp: 'Beide',
      datum: '06. Februar 2021',
      thema: 'Qigong / Dao-Übungen',
      cta: { text: '▶ Ansehen', href: '#' },
    },
    {
      title: 'Einführung LebenstorQigong® im Sitzen',
      kategorie: 'Unterricht',
      atemtyp: 'Beide',
      datum: '06. Februar 2021',
      thema: 'Qigong',
      cta: { text: '▶ Ansehen', href: '#' },
    },
    {
      title: 'Yin-Yang-Form',
      kategorie: 'Demonstration',
      atemtyp: null,
      datum: '06. Februar 2021',
      thema: 'Tai Chi Form, Vertiefung',
      cta: { text: '▶ Ansehen', href: '#' },
    },
    {
      title: 'Frieder Anders, Einatmer (lunarer Atemtyp)',
      kategorie: 'Demonstration',
      atemtyp: 'Einatmer (lunar)',
      datum: '2020',
      thema: 'Atemtypen, Demonstration',
      cta: { text: '▶ Ansehen', href: '#' },
    },
    {
      title: 'Vortrag »Atemtypen« von Marco Gerhards',
      kategorie: 'Vortrag',
      atemtyp: null,
      datum: '22. September 2020',
      thema: 'Atemtypen, Theorie',
      cta: { text: '▶ Ansehen', href: '#' },
    },
    {
      title: 'Das Innere Taijiquan',
      kategorie: 'Dokumentation',
      atemtyp: null,
      datum: '30. Dezember 2013',
      thema: 'Innere Kraft, Philosophie',
      cta: { text: '▶ Ansehen', href: '#' },
    },
    {
      title: 'Taiji Waffendemonstration',
      kategorie: 'Demonstration',
      atemtyp: null,
      datum: '30. Dezember 2013',
      thema: 'Waffen',
      cta: { text: '▶ Ansehen', href: '#' },
    },
    {
      title: 'Yang Shouzhong – Erster Sohn von Yang Chengfu (4. Generation)',
      kategorie: 'Dokumentation',
      atemtyp: null,
      datum: '21. November 2013',
      thema: 'Yang-Tradition, Geschichte',
      beschreibung: 'Historische Aufnahme des Meisters der 4. Generation der Yang-Familientradition.',
      cta: { text: '▶ Ansehen', href: '#' },
    },
    {
      title: '35 Jahre Taiji Akademie',
      kategorie: 'Dokumentation',
      atemtyp: null,
      datum: '26. Oktober 2015',
      thema: 'Geschichte',
      beschreibung: 'Jubiläums-Dokumentation zum 35-jährigen Bestehen der Akademie.',
      cta: { text: '▶ Ansehen', href: '#' },
    },
  ],
  historischeAufnahmen: {
    title: 'Historische Aufnahmen',
    desc: 'Das Filmarchiv enthält seltene historische Aufnahmen der Yang-Familientradition – darunter Videos von Yang Shouzhong, dem Meister der 4. Generation und Lehrer von Chu King-Hung.',
    featured: {
      title: 'Yang Shouzhong – Die 4. Generation',
      beschreibung: 'Yang Shouzhong (1910–1985) war der erste Sohn von Yang Chengfu und Lehrer von Chu King-Hung, bei dem Frieder Anders 26 Jahre lernte. Diese Aufnahme zeigt die direkte Linie der Tradition.',
      cta: { text: '▶ Ansehen', href: '#' },
    },
  },
  videosNachAtemtyp: {
    title: 'Videos für Deinen Atemtyp',
    einatmer: {
      symbol: '☽',
      title: 'Videos für Einatmer',
      desc: 'Demonstrationen und Anleitungen speziell für den lunaren Atemtyp.',
      beispiele: ['Frieder Anders (Einatmer)', 'Dao-Übungen lunar', '...'],
      cta: { text: 'Einatmer-Videos filtern', href: '#filter-einatmer' },
    },
    ausatmer: {
      symbol: '☀',
      title: 'Videos für Ausatmer',
      desc: 'Demonstrationen und Anleitungen speziell für den solaren Atemtyp.',
      beispiele: ['Dao-Übungen solar', '...'],
      cta: { text: 'Ausatmer-Videos filtern', href: '#filter-ausatmer' },
    },
  },
  hinweisLernvideos: {
    title: '🎬 DU SUCHST KOMPLETTE LERNVIDEOS?',
    desc: 'Das Filmarchiv zeigt Ausschnitte und Demonstrationen. Die vollständigen Lernvideos für Kurzform, Langform und die 7 Vertiefungsstufen findest Du in unseren Online-Kursen.',
    cta: { text: 'Zu den Online-Kursen →', href: '/kurse/online' },
  },
  weitereRessourcen: {
    title: 'Noch mehr Wissen',
    desc: 'Neben dem Filmarchiv findest Du Bücher und Blog-Artikel zu Tai Chi und Qigong.',
    ressourcen: [
      {
        icon: '📚',
        title: 'Bücher',
        desc: 'Lehrbücher und Publikationen von Meister Anders',
        cta: { text: 'Zu den Büchern →', href: '/wissen/buecher' },
      },
      {
        icon: '✍️',
        title: 'Blog',
        desc: 'Artikel zu Theorie und Praxis',
        cta: { text: 'Zum Blog →', href: '/wissen/blog' },
      },
    ],
  },
  finalCTA: {
    title: 'Bereit, selbst zu üben?',
    desc: 'Videos anschauen ist gut – selbst üben ist besser. Starte jetzt mit der kostenlosen Kurzform.',
    cta: { text: 'Kostenlos starten', href: '/kurse/online' },
  },
}

export const impressumDetail = {
  title: 'Impressum',
  subtitle: 'Angaben gemäß § 5 TMG / § 25 MedienG (Österreich) / Anbieterkennzeichnung',
  anbieter: {
    firmenname: 'Tai Chi Academy OÜ',
    rechtsform: 'OÜ (Osaühing – estnische Gesellschaft mit beschränkter Haftung)',
    anschrift: 'Sepapaja tn 6, 15551 Tallinn, Estland',
    email: 'info@tai-chi.academy',
    telefon: '+43 670 1848742',
    website: 'www.tai-chi.academy',
  },
  register: {
    registergericht: 'Tartu Maakohus (Handelsregister Estland)',
    registernummer: '[Registernummer eintragen nach Gründung]',
    ustId: '[EE + Nummer eintragen nach Gründung]',
  },
  vertretung: {
    geschaeftsfuehrer: 'Frieder Anders',
  },
  verantwortlicher: {
    name: 'Frieder Anders',
    anschrift: 'Sepapaja tn 6, 15551 Tallinn, Estland',
  },
  streitschlichtung: {
    eu: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/ Unsere E-Mail-Adresse finden Sie oben im Impressum.',
    verbraucher: 'Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
  },
  haftungsausschluss: {
    inhalte: 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
    links: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
  },
  urheberrecht: 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen und internationalen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.',
  bildnachweise: 'Fotos und Bilder: Tai Chi Academy, Frieder Anders, [weitere Fotografen bei Bedarf ergänzen] Icons: [z.B. Lucide Icons, etc.]',
}

export const datenschutzDetail = {
  title: 'Datenschutzerklärung',
  section1: {
    title: 'Datenschutz auf einen Blick',
    desc: 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Deinen personenbezogenen Daten passiert, wenn Du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen Du persönlich identifiziert werden kannst.',
  },
  section2: {
    title: 'Verantwortliche Stelle',
    verantwortlicher: 'Tai Chi Academy OÜ',
    anschrift: 'Sepapaja tn 6, 15551 Tallinn, Estland',
    email: 'info@tai-chi.academy',
    telefon: '+43 670 1848742',
    hinweis: 'Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.',
  },
  section3: {
    title: 'Datenerfassung auf dieser Website',
    cookies: {
      beschreibung: 'Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Deinem Endgerät gespeichert werden. Sie richten keinen Schaden an und enthalten keine Viren.',
      arten: [
        'Technisch notwendige Cookies – für den Betrieb der Website erforderlich',
        'Analyse-Cookies – nur mit Deiner Einwilligung (z.B. für Statistiken)',
        'Marketing-Cookies – nur mit Deiner Einwilligung',
      ],
      hinweis: 'Du kannst Deine Cookie-Einstellungen jederzeit anpassen über den Cookie-Banner oder in Deinen Browser-Einstellungen.',
    },
    serverLogs: {
      beschreibung: 'Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Dein Browser automatisch an uns übermittelt:',
      daten: [
        'Browsertyp und Browserversion',
        'Verwendetes Betriebssystem',
        'Referrer URL',
        'Hostname des zugreifenden Rechners',
        'Uhrzeit der Serveranfrage',
        'IP-Adresse (anonymisiert)',
      ],
      hinweis: 'Diese Daten werden nicht mit anderen Datenquellen zusammengeführt.',
    },
    kontakt: 'Wenn Du uns per Kontaktformular oder E-Mail kontaktierst, werden Deine Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Deine Einwilligung weiter.',
    newsletter: 'Wenn Du unseren Newsletter abonnierst, speichern wir Deine E-Mail-Adresse zum Zweck des Versands. Du kannst Dich jederzeit wieder abmelden – ein Link dazu findet sich in jedem Newsletter.',
  },
  section4: {
    title: 'Online-Kurse und Zahlungsabwicklung',
    kurse: {
      beschreibung: 'Für den Zugang zu unseren Online-Kursen erstellen wir ein Benutzerkonto für Dich. Dabei speichern wir:',
      daten: ['Name', 'E-Mail-Adresse', 'Kursfortschritt', 'Kaufhistorie'],
    },
    zahlung: 'Zahlungen werden über externe Zahlungsdienstleister abgewickelt (z.B. Digistore24, Stripe, PayPal). Wir selbst speichern keine Kreditkarten- oder Bankdaten. Es gelten die Datenschutzbestimmungen des jeweiligen Anbieters.',
  },
  section5: {
    title: 'Deine Rechte',
    rechte: [
      { name: 'Auskunft', beschreibung: 'Informationen über die von uns gespeicherten Daten' },
      { name: 'Berichtigung', beschreibung: 'Korrektur unrichtiger Daten' },
      { name: 'Löschung', beschreibung: 'Löschung Deiner Daten („Recht auf Vergessenwerden")' },
      { name: 'Einschränkung', beschreibung: 'Einschränkung der Verarbeitung' },
      { name: 'Datenübertragbarkeit', beschreibung: 'Übertragung Deiner Daten an einen anderen Anbieter' },
      { name: 'Widerspruch', beschreibung: 'Widerspruch gegen die Verarbeitung' },
      { name: 'Widerruf', beschreibung: 'Widerruf einer erteilten Einwilligung' },
    ],
    kontakt: 'Zur Ausübung Deiner Rechte wende Dich an: info@tai-chi.academy',
    beschwerde: {
      text: 'Du hast das Recht, Dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. In Estland ist dies:',
      behoerde: 'Andmekaitse Inspektsioon',
      anschrift: 'Tatari 39, 10134 Tallinn, Estland',
      website: 'https://www.aki.ee',
    },
  },
  section6: {
    title: 'Drittanbieter und externe Dienste',
    hosting: 'Diese Website wird gehostet bei [Hosting-Anbieter eintragen]. Es gelten deren Datenschutzbestimmungen.',
    videos: 'Wir binden Videos von YouTube/Vimeo ein. Beim Abspielen werden Daten an den jeweiligen Anbieter übertragen. Mehr dazu in deren Datenschutzerklärungen.',
    fonts: 'Diese Seite nutzt ggf. Google Fonts. Dabei werden Daten an Google übertragen. Alternativ werden die Schriften lokal gehostet.',
    analyse: '[Falls verwendet: z.B. Google Analytics, Matomo, etc. mit Details zur Anonymisierung]',
  },
  section7: {
    title: 'Aktualität dieser Datenschutzerklärung',
    stand: 'Stand: [Datum einfügen]',
    hinweis: 'Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.',
  },
}

export const agbDetail = {
  title: 'Allgemeine Geschäftsbedingungen',
  section1: {
    title: '§ 1 Geltungsbereich',
    text: 'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Tai Chi Academy OÜ, Sepapaja tn 6, 15551 Tallinn, Estland (nachfolgend „Anbieter") und dem Kunden (nachfolgend „Teilnehmer") über die Teilnahme an Online-Kursen, Live-Webinaren, Präsenzkursen und den Erwerb digitaler Produkte. Mit der Buchung erkennt der Teilnehmer diese AGB an.',
  },
  section2: {
    title: '§ 2 Vertragsgegenstand',
    text: 'Der Anbieter bietet folgende Leistungen an:',
    leistungen: [
      'Online-Videokurse (Streaming und/oder Download)',
      'Live-Webinare und Zoom-Unterricht',
      'Präsenz-Kurse und Seminare',
      'Digitale Produkte (z.B. PDF-Booklets)',
    ],
    hinweis: 'Der genaue Leistungsumfang ergibt sich aus der jeweiligen Kursbeschreibung.',
  },
  section3: {
    title: '§ 3 Vertragsschluss',
    punkte: [
      'Die Darstellung der Kurse auf der Website stellt kein bindendes Angebot dar, sondern eine Aufforderung zur Abgabe eines Angebots.',
      'Mit der Buchung gibt der Teilnehmer ein verbindliches Angebot ab.',
      'Der Vertrag kommt zustande, wenn der Anbieter die Buchung per E-Mail bestätigt oder den Zugang zum Kurs freischaltet.',
    ],
  },
  section4: {
    title: '§ 4 Preise und Zahlung',
    punkte: [
      'Alle Preise verstehen sich in Euro (€) und sind Endpreise. Die Tai Chi Academy OÜ ist als estnisches Unternehmen umsatzsteuerpflichtig; die Umsatzsteuer ist in den angegebenen Preisen enthalten bzw. wird gesondert ausgewiesen.',
      'Die Zahlung erfolgt über die angebotenen Zahlungsmethoden (z.B. Kreditkarte, PayPal, Überweisung, Ratenzahlung über Digistore24).',
      'Bei Ratenzahlung gelten die jeweiligen Bedingungen des Zahlungsdienstleisters.',
      'Der Zugang zu Online-Kursen wird nach Zahlungseingang freigeschaltet.',
    ],
  },
  section5: {
    title: '§ 5 Widerrufsrecht',
    belehrung: {
      title: 'Widerrufsbelehrung für Verbraucher:',
      text: 'Du hast das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsschlusses. Um Dein Widerrufsrecht auszuüben, musst Du uns (Tai Chi Academy OÜ, Sepapaja tn 6, 15551 Tallinn, Estland, E-Mail: info@tai-chi.academy) mittels einer eindeutigen Erklärung (z.B. per E-Mail oder Post) über Deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Zur Wahrung der Widerrufsfrist reicht es aus, dass Du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.',
    },
    folgen: {
      title: 'Folgen des Widerrufs:',
      text: 'Wenn Du diesen Vertrag widerrufst, haben wir Dir alle Zahlungen, die wir von Dir erhalten haben, unverzüglich und spätestens binnen 14 Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Deinen Widerruf bei uns eingegangen ist.',
    },
    ausnahmen: {
      title: 'Ausnahmen vom Widerrufsrecht:',
      text: 'Das Widerrufsrecht erlischt vorzeitig bei digitalen Inhalten (z.B. Online-Kurse), wenn: Du ausdrücklich zugestimmt hast, dass wir mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginnen, und Du Deine Kenntnis davon bestätigt hast, dass Du durch diese Zustimmung Dein Widerrufsrecht verlierst. Bei Präsenzkursen mit festem Termin erlischt das Widerrufsrecht mit Beginn des Kurses.',
    },
  },
  section6: {
    title: '§ 6 Online-Kurse – Nutzungsbedingungen',
    punkte: [
      'Der Zugang zu Online-Kursen ist persönlich und nicht übertragbar.',
      'Die Zugangsdaten dürfen nicht an Dritte weitergegeben werden.',
      'Das Herunterladen, Kopieren, Vervielfältigen oder Weitergeben der Kursinhalte ist ohne ausdrückliche Genehmigung nicht gestattet.',
      'Der Zugang zu gekauften Kursen besteht zeitlich unbegrenzt, solange die Plattform betrieben wird. Änderungen werden rechtzeitig angekündigt.',
    ],
  },
  section7: {
    title: '§ 7 Präsenzkurse – Teilnahmebedingungen',
    punkte: [
      'Die Anmeldung zu Präsenzkursen ist verbindlich.',
      'Bei Stornierung gelten folgende Bedingungen:',
    ],
    stornierung: [
      'Bis 30 Tage vor Kursbeginn: kostenlose Stornierung',
      '29–14 Tage vor Kursbeginn: 50% des Kurspreises',
      '13–0 Tage vor Kursbeginn: 100% des Kurspreises',
    ],
    weiterePunkte: [
      'Bei Ausfall eines Kurses durch den Anbieter werden bereits gezahlte Beträge vollständig erstattet.',
      'Der Anbieter behält sich vor, Kurse bei zu geringer Teilnehmerzahl abzusagen.',
    ],
  },
  section8: {
    title: '§ 8 Haftung',
    punkte: [
      'Tai Chi ist eine körperliche Aktivität. Die Teilnahme erfolgt auf eigene Verantwortung.',
      'Bei gesundheitlichen Einschränkungen empfehlen wir, vor Kursbeginn einen Arzt zu konsultieren.',
      'Der Anbieter haftet nicht für Schäden, die aus der unsachgemäßen Ausführung der Übungen entstehen.',
      'Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit keine wesentlichen Vertragspflichten verletzt werden.',
    ],
  },
  section9: {
    title: '§ 9 Urheberrecht',
    punkte: [
      'Alle Kursinhalte (Videos, Texte, Bilder, Booklets) sind urheberrechtlich geschützt.',
      'Die Nutzung ist ausschließlich für den persönlichen Gebrauch gestattet.',
      'Jede gewerbliche Nutzung, Vervielfältigung oder Weitergabe bedarf der schriftlichen Genehmigung.',
    ],
  },
  section10: {
    title: '§ 10 Schlussbestimmungen',
    punkte: [
      'Es gilt das Recht der Republik Estland unter Ausschluss des UN-Kaufrechts.',
      'Für Verbraucher mit Wohnsitz in der EU gelten zusätzlich die zwingenden Verbraucherschutzvorschriften des Wohnsitzlandes.',
      'Gerichtsstand für Kaufleute ist Tallinn, Estland.',
      'Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.',
    ],
  },
  stand: 'Stand: [Datum einfügen]',
}

export const kontaktDetail = {
  hero: {
    title: 'Kontakt',
    desc: 'Hast Du Fragen zu unseren Kursen, zur Methode oder zur Anmeldung? Wir helfen Dir gerne weiter.',
  },
  kontaktmoeglichkeiten: [
    { icon: '📞', label: 'Telefon', value: '+43 670 1848742', href: 'tel:+436701848742' },
    { icon: '✉️', label: 'E-Mail', value: 'info@tai-chi.academy', href: 'mailto:info@tai-chi.academy' },
    { icon: '📍', label: 'Postanschrift', value: 'Tai Chi Academy OÜ, Sepapaja tn 6, 15551 Tallinn, Estland', href: null },
  ],
  reaktionszeit: 'Wir bemühen uns, Anfragen innerhalb von 2 Werktagen zu beantworten.',
  kursorte: [
    {
      name: 'Kursort Wien',
      ort: 'Die HausWirtschaft',
      adresse: 'Bruno-Marek-Allee 5/1, 1020 Wien, Österreich',
      hinweis: 'Kurstermine und genaue Zeiten findest Du bei den jeweiligen Kursankündigungen.',
    },
    {
      name: 'Kursort Wiener Alpen (Retreats)',
      ort: 'Seminarhotel Flackl',
      adresse: 'Hinterleiten 12, 2651 Reichenau an der Rax, Österreich',
      hinweis: 'Für Retreats und Intensivseminare.',
    },
    {
      name: 'Kursort Frankfurt',
      ort: 'Taiji Akademie Frankfurt',
      adresse: 'Kursorte bitte den jeweiligen Kursankündigungen entnehmen',
      kontakt: [
        'Dardo Lessmann: info@taiji-wolkentor.de',
        'Toni Ananiadis: verein@taijiakademie.de · Tel. 069-72 73 78',
      ],
    },
  ],
  socialMedia: [
    { name: 'YouTube', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
  ],
  presse: {
    text: 'Presseanfragen bitte an: info@tai-chi.academy',
    betreff: 'Betreff: „Presse"',
  },
  formular: {
    betreffOptions: ['Allgemeine Anfrage', 'Kurse', 'Technischer Support', 'Presse', 'Sonstiges'],
  },
}


