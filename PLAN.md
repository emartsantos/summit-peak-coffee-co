# Premium Landing Page - Summit Peak Coffee Co. - Implementation Plan

## Overview
Build a bespoke, high-end single-page landing page for Summit Peak Coffee Co. (specialty coffee roaster & café) using Next.js 16 App Router, TypeScript, Tailwind CSS v4, with a focus on art direction, editorial typography, and premium craftsmanship.

## Phase 1: Creative Discovery & Concept Development
- [ ] Research brand requirements and create 3 distinct visual concepts
- [ ] Define brand personality: refined, artisanal, understated luxury
- [ ] Determine visual direction that avoids generic SaaS patterns
- [ ] Select strongest concept and document rationale

**Visual Concepts to Explore:**
1. **Editorial Minimalism** - Strong typography, generous whitespace, refined color restraint
2. **Warm Craft Aesthetic** - Earthy textures, artisanal photography, authentic storytelling
3. **Modern Alpine** - Inspired by "Summit Peak" - mountain landscapes, dramatic shadows, monochromatic with terracotta accent

**Brand Identity:**
- Logo: Minimalist mountain peak icon integrated with stylized coffee bean
- Colors: Deep Forest Green (#1B3B2B), Warm Terracotta (#C86446), Soft Cream (#F5EFEB), Charcoal (#2B2B2B)
- Typography: Playfair Display (serif) + Inter (sans-serif)

## Phase 2: Design System
- [ ] Initialize Next.js 16 project in PremiumLandingPages/
- [ ] Configure TypeScript, Tailwind CSS v4, PostCSS
- [ ] Create CSS custom properties for color tokens
- [ ] Implement fluid typography with CSS clamp()
- [ ] Build responsive spacing scale
- [ ] Define grid/container system
- [ ] Create button/link variants
- [ ] Define motion tokens (durations, easing)
- [ ] Set up accessible interaction states
- [ ] Select premium font families (Playfair Display, Inter via Google Fonts)

## Phase 3: Project Architecture
- [ ] Create app structure: app/layout.tsx, app/page.tsx
- [ ] Organize components: components/ui/, components/sections/, components/site/
- [ ] Create content/config: lib/content.ts, lib/config.ts, lib/constants.ts
- [ ] Set up design tokens: lib/tokens.ts or styles/tokens.css
- [ ] Add assets directory structure
- [ ] Configure Next.js Image, metadata, SEO

## Phase 4: Page Structure (8 sections, adapt as needed)
- [ ] **Signature Hero** - Brand headline, art-directed imagery, primary CTA, nav, entrance animation
- [ ] **Brand Introduction** - Positioning, editorial storytelling
- [ ] **Featured Offerings** - Coffee offerings (beans, drinks, retail) with custom layouts
- [ ] **Brand Differentiators** - Origin transparency, craftsmanship, quality signals
- [ ] **Visual Showcase** - Art-directed image gallery (full-bleed, asymmetry, layered)
- [ ] **Process/Experience** - Customer journey, roasting/story
- [ ] **Trust/Social Proof** - Real testimonials if provided; only verified content
- [ ] **Conversion/Contact** - Strong CTA, enhanced inquiry form, contact info, business hours, footer

## Phase 5: Interactions & Motion
- [ ] Subtle scroll-triggered reveals (use CSS animations + IntersectionObserver or motion library only if justified)
- [ ] Sophisticated hover interactions
- [ ] Responsive mobile menu
- [ ] Smooth in-page navigation
- [ ] Respect prefers-reduced-motion
- [ ] Avoid scroll hijacking, heavy parallax

## Phase 6: Conversion, SEO, Accessibility, Performance
- [ ] Inquiry form with loading/success/error states
- [ ] WhatsApp integration option
- [ ] SEO metadata (title, description, OG, Twitter)
- [ ] Structured data (LocalBusiness/Organization)
- [ ] Semantic HTML, keyboard nav, focus indicators
- [ ] WCAG 2.2 AA considerations
- [ ] Image optimization (Next/Image)
- [ ] Font loading optimization
- [ ] Privacy/consent considerations for analytics (if added)

## Phase 7: Testing & Quality Assurance
- [ ] Lint, type-check, production build
- [ ] Test responsive (mobile/tablet/desktop)
- [ ] Verify all links, buttons, menu, form
- [ ] Check reduced-motion behavior
- [ ] Validate accessibility
- [ ] Remove unused dependencies
- [ ] Document setup requirements

## Technology Stack
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- CSS custom properties
- next/image
- lucide-react
- motion (potentially - only if necessary; prefer CSS)

## Notes
- This is a single-page premium landing page
- Must feel crafted, not assembled
- Restraint is essential - don't overuse techniques
- Mobile design must be independently considered
- Only use verified content (no fake testimonials/reviews)
- Keep business content in centralized config
