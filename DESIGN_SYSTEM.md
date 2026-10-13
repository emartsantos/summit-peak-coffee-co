# PHASE 2 - Premium Design System

## Color Tokens (CSS Custom Properties)
```css
:root {
  /* Core Brand Colors */
  --color-forest-green: #1B3B2B;
  --color-terracotta: #C86446;
  --color-soft-cream: #F5EFEB;
  --color-charcoal: #2B2B2B;
  
  /* Semantic Tokens */
  --color-background: var(--color-soft-cream);
  --color-surface: #FFFFFF;
  --color-text-primary: var(--color-charcoal);
  --color-text-secondary: #4B4B4B;
  --color-text-muted: #6B6B6B;
  --color-accent: var(--color-forest-green);
  --color-accent-contrast: var(--color-terracotta);
  --color-border: #E7E1DC;
  --color-border-subtle: #F0EBE8;
}
```

## Fluid Typography (CSS clamp)
```css
--text-xs: clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.825rem + 0.2vw, 1rem);
--text-base: clamp(1rem, 0.95rem + 0.2vw, 1.125rem);
--text-lg: clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.15rem + 0.4vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.35rem + 0.6vw, 2rem);
--text-3xl: clamp(2rem, 1.7rem + 1.2vw, 3rem);
--text-4xl: clamp(2.5rem, 2rem + 2vw, 4rem);
--text-5xl: clamp(3rem, 2.2rem + 3.2vw, 5rem);
--text-6xl: clamp(3.5rem, 2.4rem + 4.4vw, 6rem);
```

## Typography Families
- **Display/Headings**: Playfair Display (300-900, italics) - editorial serif
- **Body/UI**: Inter (100-900) - modern grotesk, highly legible

## Spacing Scale (4pt-based, fluid)
```css
--space-1: clamp(0.25rem, 0.2rem + 0.2vw, 0.5rem);
--space-2: clamp(0.5rem, 0.4rem + 0.4vw, 0.75rem);
--space-3: clamp(0.75rem, 0.6rem + 0.6vw, 1rem);
--space-4: clamp(1rem, 0.8rem + 0.8vw, 1.5rem);
--space-6: clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem);
--space-8: clamp(2rem, 1.6rem + 1.6vw, 3rem);
--space-10: clamp(2.5rem, 2rem + 2vw, 3.75rem);
--space-12: clamp(3rem, 2.4rem + 2.4vw, 4.5rem);
--space-16: clamp(4rem, 3.2rem + 3.2vw, 6rem);
--space-20: clamp(5rem, 4rem + 4vw, 7.5rem);
--space-24: clamp(6rem, 4.8rem + 4.8vw, 9rem);
```

## Container & Grid
- Container max-width: 1280px (7xl), padding: var(--space-4) mobile, var(--space-6) tablet+, var(--space-8) desktop
- Editorial grid: 12-column on lg+, asymmetrical layouts as needed
- Section padding: var(--space-16) to var(--space-24) vertical

## Motion Tokens
```css
--ease-out: cubic-bezier(0.25, 0.1, 0.25, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.25, 0.8, 0.25, 1);
--duration-fast: 200ms;
--duration-base: 300ms;
--duration-slow: 500ms;
```

## Component Patterns
- **Buttons**: Primary (terracotta bg, cream text, subtle hover), Secondary (transparent bg, forest border/text), Ghost (minimal)
- **Links**: Underline on hover, subtle color transitions
- **Images**: Next/Image with sizes, aspect ratios (16:9, 21:9, 4:3, 3:4, portrait, square) as fits
- **Focus**: Visible focus rings for accessibility (2px solid with offset)

## Accessibility
- Respect prefers-reduced-motion
- Semantic HTML (header, nav, main, section, article, footer)
- ARIA labels where needed
- Sufficient color contrast (WCAG 2.2 AA)
- Keyboard navigation
