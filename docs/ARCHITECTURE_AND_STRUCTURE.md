# Architecture and Structure

[<- README](../README.md) | [Overview](PROJECT_OVERVIEW.md) | [Frontend](FRONTEND_DOCUMENTATION.md) | [Design system](DESIGN_SYSTEM.md) | [Content and assets](CONTENT_AND_ASSET_GUIDE.md) | [Integrations](INTEGRATIONS.md) | [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) | [Roadmap](DEVELOPMENT_ROADMAP.md) | [Test plan](TEST_PLAN.md)

## Architecture

The portfolio is a client-side React application built with Vite, styled with Tailwind CSS and project CSS, and routed with React Router. `src/content/` holds editable portfolio records. Contact and feedback forms use the EmailJS browser SDK. There is no custom portfolio backend or database.

## Source structure

```text
src/
  app/                 Route table and shared navigation item definitions
  components/
    certifications/    Certificate cards
    experience/        Experience cards
    game/              Whack-a-Mole UI, game hook, artwork, and audio hook
    layout/            Navbar, theme control, layout, footer, palette, scroll progress
    projects/          Project cards
    sections/          Homepage and profile sections
    services/          Expandable service cards
    skills/            Skill category and item components
    terminal/          Developer Terminal and content-backed commands
    SEO.jsx            Route metadata effect
  content/             About, projects, skills, services, experience, certifications, site config
  pages/               Home, profile, forms, case studies, and not-found pages
  styles/app.css       Component and layout styling
  theme/               Semantic tokens and theme provider/context
  index.css            Tailwind import and global styles
  main.jsx             React entry, router, and providers
```

Image and certificate assets live under `assets/`. Root Vite and package configuration are in `vite.config.js` and `package.json`.

## Routes and shared layout

`src/app/App.jsx` defines `/`, `/projects`, `/projects/eventhub`, `/projects/school-van`, `/projects/ai-content-automation`, `/experience`, `/certifications`, `/contact`, `/feedback`, `/resume`, and a catch-all not-found route. `SiteLayout` provides navigation, skip link, main landmark, footer, scroll progress, and command palette. `RouteSEO` selects route metadata and sets `/feedback` and unmatched routes to noindex. `/resume` presents a concise overview and a bundled PDF download. Root `vercel.json` rewrites client-side routes to `/index.html`.

## Theme and state

Independent Light Sage Green and Dark Teal palettes are in `src/theme/tokens.css`. `ThemeProvider` initializes from a stored manual choice or browser `prefers-color-scheme`; manual selection updates local storage. Page interactions use React state and refs; `CommandPaletteContext` shares palette visibility and terminal registration. No global state-management library is used.

## Contact and deployment boundaries

`ContactPage` and `FeedbackPage` validate form data and submit it through `@emailjs/browser`. They read the configuration names documented in [Integrations](INTEGRATIONS.md). Browser-side EmailJS configuration is public. Vercel SPA fallback is configured in `vercel.json`; the owner-provided live URL and SEO status are recorded in [SEO, Accessibility, and Performance](SEO_ACCESSIBILITY_PERFORMANCE.md).
