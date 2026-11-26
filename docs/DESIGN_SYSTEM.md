# Design System

[<- README](../README.md) | [Overview](PROJECT_OVERVIEW.md) | [Frontend](FRONTEND_DOCUMENTATION.md) | [Architecture](ARCHITECTURE_AND_STRUCTURE.md) | [Content and assets](CONTENT_AND_ASSET_GUIDE.md) | [Integrations](INTEGRATIONS.md) | [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) | [Roadmap](DEVELOPMENT_ROADMAP.md) | [Test plan](TEST_PLAN.md)

The implemented system uses two independent palettes selected by `data-theme`: Light Sage Green and Dark Teal. Semantic tokens are defined in `src/theme/tokens.css`. The Whack-a-Mole colors are scoped to game classes and do not alter shared theme tokens.

## Theme tokens

| Theme | Main background | Surface | Primary text | Accent |
|---|---|---|---|---|
| Light | Warm ivory `#FFFEF1` | White `#FFFFFF` | Dark brown `#473C33` | Muted olive `#8C9F5F` |
| Dark | Almost black `#08171C` | Dark teal `#273D45` | Off white `#F4F3EF` | Soft teal `#58858F` |

Supporting light tokens: sage `#ABC270`, muted olive `#8C9F5F`, light sage `#B9C783`, golden yellow `#FEC868`, soft peach `#FDA769`, warm cream `#EBE7D0`, and warm grey-brown `#766B60`. Supporting dark tokens: deep teal `#304C57`, muted teal `#3E7480`, blue grey `#436E79`, silver grey `#B8BAB9`, and warm grey `#D4D1CD`.

Semantic variables include page, surface, raised surface, primary/muted text, primary/secondary accent, border, focus ring, success, error, and button colors. The theme provider initializes from a stored manual choice or OS preference. The navbar toggle persists manual selections. Contrast ratios have not been recorded here; do not communicate focus/error/success/active state through color alone.

## Typography

- Headings: Manrope with system sans-serif fallback.
- Body: Inter with system sans-serif fallback.
- Terminal/code: JetBrains Mono with monospace fallback.

## Layout and components

`src/styles/app.css` contains the responsive layout and component styles. Breakpoints adapt navigation, grids, and typography; interactions have hover, focus-visible, active, disabled, expanded, error, and success states as applicable. The game modal bounds its height to the viewport and scrolls internally on small screens.

The game teaser/modal uses a local palette of cream, coral, mint, purple, and navy. Its inline SVG mole artwork avoids external assets. The rest of the interface uses shared semantic theme tokens.

## Accessibility and motion

Use semantic controls, visible focus, readable labels, and status announcements. Motion is restrained and reduced when `prefers-reduced-motion` is enabled. Accessibility behavior and manual review status are tracked in [SEO, Accessibility, and Performance](SEO_ACCESSIBILITY_PERFORMANCE.md) and the [Test Plan](TEST_PLAN.md); no complete contrast or accessibility audit is claimed here.
