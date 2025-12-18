# Tai Chi Academy Website

Deutschlands älteste Tai-Chi-Schule – Next.js Website mit Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Marcellus (Headlines) + Sora (Body)
- **TypeScript:** Vollständig typisiert
- **Deployment:** Static Export (für Vercel oder GitHub Pages)

## Installation

```bash
npm install
```

## Entwicklung

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Build

```bash
npm run build
```

Der Build erstellt einen statischen Export im `out/` Verzeichnis.

## Projektstruktur

```
src/
  app/              # Next.js App Router Seiten
  components/       # React Komponenten
    layout/         # Layout-Komponenten (Nav, Footer, etc.)
    ui/             # UI-Komponenten (Button, Card, etc.)
    features/       # Feature-Komponenten (CourseCard, etc.)
  data/            # Daten-Dateien (menu.ts, courses.ts, etc.)
```

## Seiten

- `/` - Homepage
- `/kurse` - Kursübersicht
- `/kurse/online` - Online-Kurse
- `/kurse/live` - Live & Zoom Kurse
- `/kurse/praesenz` - Präsenz-Kurse
- `/methode` - Methode-Übersicht
- `/methode/innere-kraft` - Innere Kraft
- `/methode/atemtyp` - Atemtyp Tai Chi
- `/methode/test` - Atemtyp-Test
- `/ueber-uns` - Über uns
- `/ueber-uns/meister` - Der Meister
- `/ueber-uns/tradition` - Tradition & Moderne
- `/ueber-uns/lehrer` - Zertifizierte Lehrer
- `/wissen` - Wissen-Übersicht
- `/wissen/buecher` - Bücher
- `/wissen/blog` - Blog
- `/wissen/filmarchiv` - Filmarchiv

## Farbpalette

- Primary: `#C84B31` (Terracotta-Rot)
- Background: `#F7F6F5` (Warmes Weiß)
- Dark: `#1A1A1A`

## Deployment

### Vercel

Einfach das Repository mit Vercel verbinden. Die `next.config.mjs` ist bereits für Static Export konfiguriert.

### GitHub Pages

Nach dem Build:

```bash
npm run build
# Kopiere den Inhalt von out/ in dein gh-pages Branch
```

## Lizenz

© 2025 Tai Chi Academy



