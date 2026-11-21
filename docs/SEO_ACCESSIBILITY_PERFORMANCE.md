# SEO, Accessibility, and Performance

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

> Planned guidelines only. No site, search metadata, audit, or performance result exists.

## SEO

- Unique, accurate title and meta description for homepage, each case study, and Resume page.
- Open Graph metadata and social preview image when approved asset and canonical domain exist.
- Create and validate `sitemap.xml` and `robots.txt` for deployed site.
- Set canonical URLs after domain selection (Pending).
- Use accurate project-specific metadata.
- Add appropriate Schema.org structured data only when supported by verified content; never fabricate ratings or credentials.
- Prepare Search Console verification after deployment; no property configured.

## Accessibility

**Target: WCAG 2.2 AA**, to be evaluated during implementation; this is not a certification.

- Semantic landmarks, logical heading order, descriptive links, buttons for actions.
- Keyboard operation for navigation, theme, disclosures, forms, downloads; visible focus.
- Measure final text/UI contrast in both themes (see [Design System](DESIGN_SYSTEM.md)).
- Persistent form labels and instructions; expose validation and submission status to assistive technology.
- Meaningful alt text for informative imagery, empty alt for decorative assets.
- Check screen-reader names, states, and reading order.
- Respect `prefers-reduced-motion`; essential information never depends on animation.
- Touch-usable controls and no color-only status communication.

## Performance

Core Web Vitals and Lighthouse measurements are targets, not guarantees or current scores.

- Optimize and size project imagery; use modern formats where supported and provide dimensions to reduce layout shift.
- Load fonts responsibly with fallbacks; avoid unnecessary blocking requests.
- Lazy-load below-fold media when beneficial without delaying critical content.
- Split route/component code only where it measurably helps.
- Keep animation performant; avoid layout-heavy animated properties.
- Measure Core Web Vitals and run Lighthouse on representative pages, devices, and network conditions before release.
- Recheck after content and media are finalized.

Use the [Test Plan](TEST_PLAN.md) for planned SEO, accessibility, reduced-motion, and performance checks. Record actual results only after testing an implementation.
