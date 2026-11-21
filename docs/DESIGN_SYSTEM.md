# Design System

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

> Two approved visual directions, both **Planned**. Keep palettes independent; never blend them automatically. Contrast notes need measurement against final typography and rendered components.

## Dark Theme — Dark Teal Fintech

| Color | Hex | Suggested role |
|---|---|---|
| Deep Teal | `#304C57` | Accent surface/emphasis |
| Almost Black | `#08171C` | Main background |
| Dark Teal | `#273D45` | Elevated surface |
| Muted Teal | `#3E7480` | Secondary accent |
| Soft Teal | `#58858F` | Highlight/decorative accent |
| Blue Grey | `#436E79` | Supporting accent |
| Off White | `#F4F3EF` | Primary text on dark |
| Silver Grey | `#B8BAB9` | Muted text on dark |
| Warm Grey | `#D4D1CD` | Supporting light tone |

## Light Theme — Sage Green Earthy Minimalism

| Color | Hex | Suggested role |
|---|---|---|
| Sage | `#ABC270` | Primary accent |
| Muted Olive | `#8C9F5F` | Secondary accent |
| Light Sage | `#B9C783` | Soft accent surface |
| Golden Yellow | `#FEC868` | Warm highlight |
| Soft Peach | `#FDA769` | Warm highlight |
| Dark Brown | `#473C33` | Primary text |
| Warm Ivory | `#FFFEF1` | Main background |
| White | `#FFFFFF` | Card/elevated surface |
| Warm Cream | `#EBE7D0` | Supporting surface |
| Warm Grey Brown | `#766B60` | Muted text |

## Tokens and contrast

Define semantic names per theme: `page`, `surface`, `surfaceRaised`, `textPrimary`, `textMuted`, `accentPrimary`, `accentSecondary`, `border`, `focusRing`, `success`, and `error`. Keep mappings independent and select the system using OS `prefers-color-scheme`. Manual theme selection is not part of approved behavior and no preference is persisted. Prefer Off White on Almost Black/Dark Teal and Dark Brown on Warm Ivory/White. Do not assume accent colors suit small text. Measure final foreground/background pairs against WCAG 2.2 AA. Contrast ratios are not asserted here. Do not communicate focus/error/success/active state by color alone.

## Typography

- **Manrope:** Headings.
- **Inter:** Body text.
- **JetBrains Mono:** Terminal and code.

Font delivery, weights, fallbacks, and source/licensing are Pending. Use fallbacks and avoid blocking text rendering on remote fonts.

## Layout, shape, and elevation

Use a consistent spacing scale, generous section separation, readable text measure, centered content container, and responsive side padding. Exact values, maximum widths, and breakpoints are Pending implementation; select breakpoints based on content needs. Use a restrained border-radius scale and subtle shadows only where useful. Keep clean surfaces, subtle organic shapes, restrained gradients, and occasional hand-drawn details.

## Component guidance

| Element | Planned treatment and states |
|---|---|
| Buttons | Clear primary/secondary hierarchy; hover, focus-visible, active, disabled; adequate target area |
| Cards | Calm surfaces and clear hierarchy; restrained border/shadow; hover only when interactive |
| Forms | Persistent labels, helpful validation, focus ring, error/status messaging |
| Navigation | Transparent at top, surface on scroll; active/focus; accessible mobile disclosure |
| Skill bars | Beginner/Intermediate/Advanced labels mapped to visual bars only when supplied; no invented levels; accessible text and progress semantics, not color alone |
| Project cards | Title, summary, tags, media alt text, and labeled destinations |

Define hover, focus-visible, active, disabled, expanded, error, and success states where applicable. Motion is restrained and honors reduced-motion.

## Responsive behavior and visual personality

Content-driven breakpoints should adapt navigation, grids, and typography. Prevent horizontal overflow, preserve touch targets, and keep functions available on small screens. Target a premium, creative, technical feel. Avoid neon, excessive gradients, generic AI SaaS styling, excessive glassmorphism, and overcrowding. See [frontend behavior](FRONTEND_DOCUMENTATION.md) and [accessibility target](SEO_ACCESSIBILITY_PERFORMANCE.md).
