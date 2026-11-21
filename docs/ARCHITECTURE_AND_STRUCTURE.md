# Architecture and Structure

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

> Proposed future architecture only. No application source, folders, components, configuration, or dependencies exist yet. No versions or package scripts are specified.

## Principles and responsibilities

Use a small client-side React application built with Vite. Keep page composition, reusable presentation, content data, and integration boundaries distinct. Avoid a custom backend, database, or additional infrastructure for this portfolio.

- **React:** Compose pages and reusable UI; manage local interaction state.
- **Vite:** Future development server and frontend build tooling.
- **Tailwind CSS:** Utility styling guided by documented tokens and separate theme palettes.
- **Framer Motion (proposed):** Optional restrained transitions and avatar motion, with reduced-motion support.
- **Lucide React (proposed):** Optional consistent interface icons.
- **Routing:** React Router serves `/`, `/projects/eventhub`, `/projects/school-van`, and `/resume`, plus an understandable not-found page. Support direct navigation and page refreshes on each route.
- **EmailJS:** Browser-side contact submission boundary; no custom API is planned.
- **Vercel:** Proposed static frontend hosting connected to GitHub.

## Proposed structure

```text
portfolio/
├── README.md
├── docs/
├── public/
│   ├── assets/                 # approved images, icons, resume PDF
│   ├── favicon.*               # format pending
│   ├── robots.txt              # planned SEO asset
│   └── sitemap.xml             # planned SEO asset
└── src/
    ├── app/                    # entry, React Router routes, shared layout
    ├── components/
    │   ├── layout/             # navbar, footer, page shell
    │   ├── sections/           # homepage sections
    │   ├── projects/           # project cards and case study elements
    │   ├── forms/              # contact form and feedback
    │   └── ui/                 # small reusable controls
    ├── pages/                  # home, case studies, resume compositions
    ├── content/                # approved profile/project content and owner-edited siteConfig.js availability value
    ├── hooks/                  # focused reusable behavior if needed
    ├── theme/                  # tokens, themes, theme state
    ├── integrations/           # EmailJS adapter and validation boundary
    ├── assets/                 # imported source assets where suitable
    └── styles/                 # Tailwind entry and global styles
```

This proposal is not an existing directory listing.

## Pages, layout, and components

Planned React Router routes are `/` (Homepage), `/projects/eventhub` (EventHub case study), `/projects/school-van` (School Van case study), and `/resume` (Resume page). Include a clear not-found page. Configure the Vercel SPA fallback so direct navigation and refreshes resolve these paths. A shared shell may provide the floating navbar, OS-driven theme styling, main landmark, and footer. Case studies can reuse a common layout while project facts remain distinct. Reusable components may include navigation, terminal panel, skill item, service disclosure, project card, timeline item, certification card, labeled form control, and status feedback. Avoid abstractions without clear reuse.

## Theme and state management

Define semantic roles (page surface, elevated surface, primary/muted text, accents, border, focus) independently for each palette. Detect `prefers-color-scheme` and select the matching complete system. Theme is OS-controlled; manual theme selection is not part of the approved behavior, and no theme preference is persisted. Never merge palettes. Prefer local React state for menu, disclosure, and form lifecycle. Keep availability in a dedicated frontend content/configuration file (proposed `src/content/siteConfig.js`), changed by the owner through source edits. No global state library is justified.

## Animation and assets

Use restrained motion for hierarchy and feedback. Motion remains optional, respects reduced-motion, and the animated illustrated avatar belongs only in About. Framer Motion remains proposed. Use `public/` for stable URL-addressable files such as resume PDF; imported assets may be bundled. Avatar reference/style, project screenshots, diagrams, thumbnails, favicon, and social preview image are Pending. See [Content and Asset Guide](CONTENT_AND_ASSET_GUIDE.md).

## Contact boundary and deployment

Keep form presentation and basic client-side validation separate from the EmailJS browser adapter. EmailJS public configuration is browser-visible; private credentials must never be exposed in frontend code. IDs, keys, and environment variable names are Pending. Use EmailJS built-in spam protection; do not add a CAPTCHA dependency initially. Proposed deployment is a static frontend on Vercel connected to GitHub. Configure the SPA rewrite/fallback for React Router deep links. Build settings, environment names, domain, and project configuration are Pending. No backend is planned; see [Integrations](INTEGRATIONS.md).

## Error handling

Provide understandable UI for unavailable resume, contact failure, invalid input, missing optional project links, and unknown routes. Resume fallback includes a graceful unavailable-PDF message. Avoid logging message contents or configuration values. Gracefully handle unavailable integrations.

## Naming conventions

Use descriptive PascalCase React component names, camelCase functions/variables, and consistent filenames aligned with the eventual project convention. Name page compositions by purpose. Keep `planned`, `confirmed`, and `pending` information distinct during authoring and review.
