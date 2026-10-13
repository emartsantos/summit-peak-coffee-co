# Summit Peak Coffee Co. — Premium Landing Page

A bespoke, single-page site for a specialty coffee roaster & café, art-directed
around an **Alpine Editorial** concept: restrained palette, editorial
typography, generous negative space, and photography-led storytelling.

Inquiry is the primary conversion. The page ships as fully static output and is
optimised for performance, accessibility (WCAG 2.2 AA practices) and SEO.

---

## Stack

- **Next.js 16** (App Router, Cache Components + Partial Prefetching)
- **React 19**, **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/turbopack`) + CSS custom properties
- **next/font** — Playfair Display (display) + Inter (body)
- **next/image** — optimised, local, responsive images
- **lucide-react** icons
- **react-hook-form** + **zod** for the inquiry form

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build (prerenders all routes)
npm run start      # serve the production build
npm run lint       # eslint
npm run typecheck  # next typegen + tsc --noEmit
```

---

## Editing content

**All** copy, contact details and CTA labels live in one file:

```
src/lib/config.ts
```

Change values there and the whole page updates. No component edits required.

## Project structure

```
src/
  app/                 layout, page, globals.css, icon, robots, sitemap
  components/
    sections/          the 8 page sections
    site/              header, mobile menu, footer, logo
    ui/                button, input, field, section-heading, instagram-icon
    forms/             inquiry form (client)
    motion/            reveal-on-scroll wrapper (client)
  lib/                 config.ts, analytics.ts, utils.ts
public/images/         placeholder photography
```

---

## ⚠️ Replace before launch (placeholders)

These values are placeholders and are clearly marked with `TODO` in
`src/lib/config.ts`:

- [ ] **Contact details** — email, phone, WhatsApp number (digits only, incl.
      country code), address and Google Maps link.
- [ ] **Business hours**.
- [ ] **Instagram** handle + URL (`config.social.instagram`).
- [ ] **Founding year** (`config.brand.established`) and `footer.copyrightYear`.
- [ ] **Domain** — `config.seo.url` (used for canonical URLs, sitemap, JSON-LD
      and Open Graph). Must be the production URL.
- [ ] **Photography** — every image in `public/images/` is a **placeholder**
      sourced from Unsplash and must be replaced with the client's own
      professional product photography. Keep the same filenames to avoid code
      changes, or update the paths in `config.ts`.
- [ ] **Favicon / app icon** — `src/app/icon.svg` is a placeholder brand mark.
- [ ] **OG image** — `config.seo.ogImage` currently points at the hero photo.

> Do not publish unverified testimonials, reviews, ratings or press mentions.
> The Trust section intentionally states this and leaves room for real proof.

## Third-party setup (not included)

- **Inquiry form** — there is **no backend**. On submit the form opens the
  user's email client via a `mailto:` link, and a WhatsApp deep link
  (`wa.me`) is offered as an alternative. To capture submissions server-side,
  wire the form to an email/forms provider (e.g. Resend, Formspree) or an API
  route.
- **Analytics** — no third-party script is loaded. `src/lib/analytics.ts`
  emits typed events to `window.dataLayer` (Google Tag Manager-ready) and to a
  DOM custom event. Add an approved provider (GA4, Plausible, Vercel
  Analytics) and configure consent handling where legally required.
- **Hosting / domain** — deploy to any Node or static host (Vercel is the
  natural fit). Set the production domain in `config.seo.url`.

## Design system

Tokens are defined as CSS custom properties in `src/app/globals.css`:

- Colour: forest, terracotta, cream, charcoal (+ semantic `--background`,
  `--foreground`, `--accent`, …)
- Fluid type scale: `--step--1 … --step-7` (all via `clamp()`)
- Spacing/layout: `--gutter`, `--section-y`, `--measure`
- Motion: `--ease-*`, `--dur-*` — all disabled under
  `prefers-reduced-motion`.

## Accessibility & performance notes

- Semantic landmarks, skip link, labelled form fields with inline errors,
  visible focus rings, and `inert` on the closed mobile menu.
- Scroll reveals degrade gracefully: content is visible without JS and is
  shown immediately under reduced-motion.
- Images are served through `next/image` with explicit `sizes`; the hero is
  prioritised.
- All routes are prerendered statically.

## Licensing

Placeholder photos are used under the Unsplash License and are for
development/demo purposes only — replace them with the client's own imagery.
