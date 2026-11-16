# Aspire IT Pro — Hero Model 2

Light — centered, tilted code window. Stack: React 18 + Vite 5 + Tailwind CSS 3.

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```
Requires Node.js 18 or newer.

## Structure
- `src/components/Hero.jsx` — hero layout and content
- `src/components/Navbar.jsx` — navigation with your logo
- `src/components/Scene3D.jsx` — 3D animation and mouse tilt
- `src/index.css` — 3D/animation CSS and brand colour variables (`:root`)
- `src/assets/logo.webp`, `public/favicon.png` — your logo and favicon

## Customise
Brand colours are CSS variables at the top of `src/index.css` (and in `tailwind.config.js`).
Hero text lives in `Hero.jsx`. Animations respect `prefers-reduced-motion`.
