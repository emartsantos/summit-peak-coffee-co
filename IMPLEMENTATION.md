# Implementation Roadmap - Detailed Steps

## Step 1: Initialize Project (Priority 1)
```bash
cd /c/Users/Eloisa/Desktop/emart/PremiumLandingPages
npx --yes create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --yes
```

Verify setup: Next.js 16, TS, Tailwind v4, App Router.

## Step 2: Install Dependencies
```bash
npm install lucide-react
# Motion library - evaluate need first; only add if CSS insufficient
# npm install motion  (only if justified)
```

## Step 3: Configure Fonts & Global Styles
- Add Playfair Display & Inter via next/font/google in app/layout.tsx
- Create CSS custom properties in app/globals.css
- Implement fluid typography, spacing, tokens
- Add reduced-motion support

## Step 4: Create Design System Files
- lib/config.ts - business content (editable)
- lib/constants.ts - design tokens/constants
- lib/utils.ts - helpers (cn, etc.)
- components/ui/button.tsx, input.tsx, etc. (shadcn style minimal)
- components/site/navigation.tsx
- components/site/footer.tsx

## Step 5: Content Configuration
Centralize editable content:
```ts
// lib/config.ts
export const config = {
  brand: { name: "Summit Peak Coffee Co.", ... },
  hero: { headline: "...", subheadline: "...", cta: "..." },
  contact: { email: "...", phone: "...", whatsapp: "...", hours: "..." },
  social: { instagram: "..." },
  // etc
}
```

## Step 6: Build Sections (in order)
Implement each section as Server Component by default, add client components only for interactivity.

## Step 7: Form Handling
- Simple inquiry form (client-side validation + submission)
- Loading/success/error states
- Can post to API route or mailto/WhatsApp fallback
- Keep it lightweight

## Step 8: SEO & Metadata
- metadata in layout.tsx + page.tsx
- OpenGraph, Twitter
- JSON-LD structured data

## Step 9: Polish & QA
- Run: npm run lint, npm run typecheck, npm run build
- Cross-device testing, accessibility check
- Remove unused deps, temp content

---

# IMPLEMENTATION NOTES — AS BUILT

The following deltas were applied during implementation (see `README.md` for
operational details).

## Framework specifics (Next.js 16.4, Cache Components)
- `cacheComponents: true` + `partialPrefetching: true` are enabled by the
  scaffold. All routes must be prerenderable.
- `new Date()` / current-time values are rejected during prerender, so the
  footer copyright year is a static config value (`footer.copyrightYear`) and
  the sitemap omits `lastModified`.
- `turbopack.root` is set in `next.config.ts` to the project directory.
- Tailwind v4 is wired through the `@tailwindcss/turbopack` loader (no
  PostCSS config).

## Design system additions
- Motion tokens (`--ease-*`, `--dur-*`) and a reduced-motion reset added to
  `globals.css` (not in the original DESIGN_SYSTEM.md).
- Reveal-on-scroll is CSS-first with an `IntersectionObserver` client wrapper
  (`components/motion/reveal.tsx`); content is visible without JS.

## Typography lock
- Playfair Display + Inter are brand-mandated, so they intentionally override
  the master-prompt guidance to vary fonts per project.

## Content & assets
- All business content is centralised in `src/lib/config.ts`.
- Placeholder assets: curated Unsplash photography in `public/images/` and a
  placeholder brand mark `src/app/icon.svg`. Replace before launch.
- Placeholder contact/domain values are clearly marked `TODO` in config.

## Conversion, SEO, accessibility
- Inquiry form: client-side `zod` validation, loading/success/error states,
  `mailto:` submit plus a WhatsApp deep link. No backend.
- Typed, provider-agnostic analytics stub (`lib/analytics.ts`) — no
  third-party scripts shipped.
- Metadata, Open Graph/Twitter, `CafeOrCoffeeShop` JSON-LD, `sitemap.ts` and
  `robots.ts` added.
- Semantic landmarks, skip link, labelled fields, visible focus rings, WCAG AA
  contrast adjustments, and `inert` on the closed mobile menu.
