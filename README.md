# Pangasinan Heritage Digital Showcase

React (Next.js 14, App Router) + Tailwind CSS component library and demo
site for the Pangasinan Provincial Tourism Office, built with Brad Frost's
Atomic Design methodology.

## Getting started

```bash
npm install
npm run dev
```

Then open:
- **http://localhost:3000** — the public homepage (Header Navigation + Heritage Grid)
- **http://localhost:3000/style-guide** — the full Atomic Design component library preview (Atoms, Molecules, Organisms), used as the visual reference for the Atomic Design System Manual.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # root layout, loads fonts
│   ├── page.tsx             # homepage
│   ├── globals.css
│   └── style-guide/
│       └── page.tsx         # component library preview page
├── components/
│   ├── atoms/                # Button, Typography, Color Tokens, Icon, Image
│   ├── molecules/             # Heritage Card, Search Form, Navigation Item
│   └── organisms/             # Heritage Grid, Header Navigation
└── lib/
    └── heritage-sites.ts      # sample content (Hundred Islands, Bolinao Lighthouse, Balungao Hot Spring)
```

## Design tokens

Colors and fonts are defined once in `tailwind.config.ts` and
`src/components/atoms/ColorTokens.tsx`, then reused everywhere via
Tailwind utility classes (e.g. `bg-sea`, `text-coral`, `font-display`).

## Framework choice

See `../report/Framework-Selection-Report.pdf` for the full comparison
against Vue + Nuxt.js 3 and the justification for choosing React + Next.js 14.
