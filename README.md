# HUMAN1000 — Dataset Website

Website for **HUMAN1000**, a 1000-hour synchronized human embodied dataset
(first-person vision + whole-body motion).

## Tech stack

- **React 18** — UI
- **Vite 5** — build / dev server
- **Tailwind CSS 3** — styling
- **GitHub** — version control & GitHub Pages deployment

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

```bash
npm run build    # production build → dist/
npm run preview  # preview the built output locally
```

`base` is set to `./` in `vite.config.js`, so the build works both at a domain
root (`https://<user>.github.io/`) and under a project sub-path.

## Project structure

```
public/
  images/{hero,scenarios,icons}/   Static images (served as-is)
  videos/hero/                     Hero footage (served as-is)

src/
  main.jsx                         Entry point
  App.jsx                          Page shell: Nav + sections + Footer
  data/site.js                     ✏️  ALL editable content lives here
  hooks/useReveal.js               Scroll-reveal observer
  styles/
    index.css                      Tailwind entry + base + shared visual classes
    animations.css                 All @keyframes
  components/
    layout/{Nav,Footer}.jsx        Site chrome
    sections/HeroSection.jsx       One file per page section
    ui/{Reveal,StatBlock,SectionLabel,DotGrid}.jsx   Reusable pieces
```

### Design rules

1. **Content is data, not markup.** Every number, label and link lives in
   `src/data/site.js`. Components only read from it.
2. **One section = one file.** `src/components/sections/XxxSection.jsx`, ideally
   under ~150 lines.
3. **Reuse before splitting.** Need a new widget? First check `components/ui/`.
   Only extract a new file when two or more sections need the same thing.
4. **Keep `App.jsx` thin.** It only lists sections in page order.

## Adding a new section

1. Add its content to `src/data/site.js`:

   ```js
   export const applications = { title: '...', items: [...] }
   ```

2. Create `src/components/sections/ApplicationsSection.jsx` and read from that
   export.

3. Drop it into `src/App.jsx`:

   ```jsx
   import ApplicationsSection from './components/sections/ApplicationsSection'
   // …
   <main>
     <HeroSection />
     <ApplicationsSection />
   </main>
   ```

That's it — no other file needs to change.

## Replacing placeholder media

Hero preview cards are animated SVG placeholders until real footage lands.
To swap in real video:

1. Put the file in `public/videos/hero/` (e.g. `ego.mp4`).
2. Set the path in `src/data/site.js`:

   ```js
   media: {
     egoVideo: '/videos/hero/ego.mp4',
     motionVideo: '/videos/hero/motion.mp4',
   }
   ```

When a path is `null`, the component falls back to the built-in placeholder.

## Section roadmap

| # | Section | Status |
|---|---------|--------|
| 1 | Cover / Hero | ✅ Done |
| 2 | About HUMAN1000 | ⬜ |
| 3 | Dataset / Data Scale | ⬜ |
| 4 | Data Modalities | ⬜ |
| 5 | Collection Scenarios | ⬜ |
| 6 | Data Pipeline | ⬜ |
| 7 | Applications | ⬜ |
| 8 | Benchmark / Research | ⬜ |
| 9 | Footer | 🟡 Placeholder |

The previous single-file prototype is archived at `legacy/index.html.backup`
for visual reference.
