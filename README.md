# Rahul Pareek — Portfolio (React)

A React + Vite + Tailwind rebuild of the portfolio, replacing the old static
Webflow export. Same content and sections, componentized, plus a new
animated "liquid coffee" hero background (canvas + `requestAnimationFrame`,
no heavy SVG filters — smooth even on modest hardware).

## Before you run it — add your own assets

Two files are referenced but not included here (they're personal binary
assets that weren't available to generate this rebuild):

1. **Profile photo** → save it as `public/images/profile.png`
   (used in `src/components/Hero.jsx`)
2. **Resume PDF** → save it as `public/files/Rahul_Pareek_Resume.pdf`
   (linked from `src/components/Navbar.jsx`)

Copy both from your old repo's `images/profile.png` and
`files/Rahul_Pareek_Resume_j.pdf` — just rename the resume to match the
path above, or update the `href` in `Navbar.jsx` to match your filename.

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot reload.

## Build for production

```bash
npm run build
npm run preview   # serves the production build locally to sanity-check it
```

Output goes to `dist/` — deploy that folder to Vercel, Netlify, GitHub
Pages, or any static host. If you're already on Vercel (the old site was
at `portfolio-test-blond.vercel.app` / `rahulpareekdev.vercel.app`), just
point the same Vercel project at this repo — Vercel auto-detects Vite.

## Project structure

```
src/
  components/
    Navbar.jsx             top nav bar
    Hero.jsx                hero section (name, tagline, CTA)
    LiquidBackground.jsx    the animated canvas background
    Resume.jsx               work experience / education / skills
    CTA.jsx                  "Got an idea? Let's connect" section
    Footer.jsx               social links + email
  App.jsx                    assembles all sections
  index.css                  Tailwind import + fonts + CSS variables
```

## Customizing the liquid background

All colors live as CSS variables in `src/index.css`:

```css
--espresso: #1b1410;   /* darkest background tone */
--cream:    #f3e3c8;
--caramel:  #c9873f;
--amber:    #e0a458;
--cocoa:    #6b4226;
--gold:     #d9c093;
```

The blob positions/speeds are configured in the `blobs` array at the top
of `LiquidBackground.jsx` — each has a base position, radius, drift speed,
and phase offset (the phase offsets keep the blobs from moving in sync,
which is what avoids a repetitive/robotic feel).

The animation automatically pauses for anyone with
`prefers-reduced-motion` enabled at the OS level.

## Notes on the icon library

Social icons in `Footer.jsx` use `react-icons` (specifically the Font
Awesome set, `react-icons/fa`) rather than `lucide-react` — lucide
dropped brand/logo icons in recent versions for trademark reasons, so
`react-icons` is the more reliable choice for Facebook/Instagram/
Twitter/LinkedIn glyphs specifically.
