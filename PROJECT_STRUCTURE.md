# Projektstruktur - Tai Chi Academy

## Übersicht

Vollständige Next.js 14+ Website mit App Router, TypeScript und Tailwind CSS.

## Verzeichnisstruktur

```
taichi-prototype/
├── public/                 # Statische Assets
├── src/
│   ├── app/               # Next.js App Router Seiten
│   │   ├── layout.tsx     # Root Layout mit Fonts
│   │   ├── page.tsx       # Homepage
│   │   ├── globals.css    # Globale Styles
│   │   ├── not-found.tsx  # 404 Seite
│   │   ├── loading.tsx    # Loading State
│   │   ├── kurse/         # Kurs-Seiten
│   │   ├── methode/       # Methode-Seiten
│   │   ├── ueber-uns/     # Über-uns-Seiten
│   │   └── wissen/        # Wissen-Seiten
│   ├── components/
│   │   ├── layout/        # Layout-Komponenten
│   │   │   ├── Nav.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Grid.tsx
│   │   │   └── PageHero.tsx
│   │   ├── ui/            # UI-Komponenten
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── Tag.tsx
│   │   │   └── FilterTabs.tsx
│   │   └── features/       # Feature-Komponenten
│   │       ├── CourseCard.tsx
│   │       ├── TestimonialCard.tsx
│   │       ├── LehrerCard.tsx
│   │       ├── VideoCard.tsx
│   │       └── VertiefungItem.tsx
│   └── data/              # Daten-Dateien
│       ├── menu.ts
│       ├── courses.ts
│       ├── content.ts
│       ├── testimonials.ts
│       ├── lehrer.ts
│       ├── buecher.ts
│       ├── blog.ts
│       └── videos.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
├── postcss.config.mjs
└── README.md
```

## Seiten-Routing

### Hauptseiten
- `/` - Homepage
- `/kurse` - Kursübersicht
- `/methode` - Methode-Übersicht
- `/ueber-uns` - Über uns
- `/wissen` - Wissen-Übersicht

### Kurs-Seiten
- `/kurse/online` - Online-Kurse (Kurzform, Langform, Vertiefung)
- `/kurse/live` - Live & Zoom Kurse (mit Filter)
- `/kurse/praesenz` - Präsenz-Kurse

### Methode-Seiten
- `/methode/innere-kraft` - Innere Kraft erklärt
- `/methode/atemtyp` - Atemtyp Tai Chi
- `/methode/test` - Interaktiver Atemtyp-Test

### Über-uns-Seiten
- `/ueber-uns/meister` - Großmeister Frieder Anders
- `/ueber-uns/tradition` - Tradition & Moderne
- `/ueber-uns/lehrer` - Zertifizierte Lehrer

### Wissen-Seiten
- `/wissen/buecher` - Publikationen
- `/wissen/blog` - Blog-Artikel
- `/wissen/filmarchiv` - Videos

## Komponenten-Übersicht

### Layout-Komponenten
- **Nav**: Navigation mit MegaMenu (Desktop) und Mobile-Menü
- **Footer**: Footer mit Links und Kontakt
- **Container**: Zentrierter Container mit max-width
- **Section**: Section mit verschiedenen Background-Varianten
- **Grid**: Responsive Grid-System
- **PageHero**: Hero-Bereich für Seiten

### UI-Komponenten
- **Button**: Button mit Varianten (primary, secondary, full)
- **Card**: Card mit Varianten (default, hover, highlight)
- **SectionTitle**: Titel mit optionalem Subtitle
- **Tag**: Tag/Badge-Komponente
- **FilterTabs**: Filter-Tabs für Kategorien

### Feature-Komponenten
- **CourseCard**: Karten für Kurse
- **TestimonialCard**: Testimonials
- **LehrerCard**: Lehrer-Profile
- **VideoCard**: Video-Karten
- **VertiefungItem**: Items für Vertiefungsstufen

## Farbpalette

```ts
primary: '#C84B31'        // Terracotta-Rot
primary-dark: '#A13A24'
primary-light: '#E8D5D0'
background: '#F7F6F5'      // Warmes Weiß
background-alt: '#EFEEEC'
dark: '#1A1A1A'
border: '#E5E3E0'
```

## Fonts

- **Marcellus**: Headlines (via next/font)
- **Sora**: Body-Text (via next/font)

## Nächste Schritte

1. Dependencies installieren: `npm install`
2. Dev-Server starten: `npm run dev`
3. Build erstellen: `npm run build`

## Deployment

Die Website ist für Static Export konfiguriert und kann auf Vercel oder GitHub Pages deployed werden.






