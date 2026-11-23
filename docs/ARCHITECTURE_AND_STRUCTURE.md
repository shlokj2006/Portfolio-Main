# Architecture and Structure

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

## Architecture

The portfolio is a client-side React application built and served with Vite, styled with Tailwind CSS and project CSS, and routed with React Router. `src/content/` separates editable portfolio records from page and component presentation. Shared layout, section, and feature components are grouped under `src/components/`. Theme tokens/provider are under `src/theme/`. Contact submission uses the EmailJS browser SDK; no custom portfolio backend or database is present.

## Source structure

```text
src/
├── app/App.jsx                   # React Router route table
├── components/
│   ├── certifications/           # Certificate cards
│   ├── experience/               # Experience cards
│   ├── layout/                   # Navbar, theme switch, layout, footer
│   ├── projects/                 # Project cards
│   ├── sections/                 # Homepage and experience sections
│   ├── services/                 # Expandable service cards
│   └── skills/                   # Skill category and item components
├── content/                      # About, projects, skills, services, experience,
│                                 # certifications, and site configuration
├── pages/                        # Home, projects, contact, resume, profile,
│                                 # case-study, and not-found pages
├── styles/app.css                # Component and layout styling
├── theme/                        # Semantic tokens and theme provider/context
├── index.css                     # Tailwind import and global styles
└── main.jsx                      # React entry, router, and providers
```

Image and certificate assets live under `assets/`. Root-level Vite and package configuration are in `vite.config.js` and `package.json`.

## Routes and shared layout

`src/app/App.jsx` defines `/`, `/projects`, `/projects/eventhub`, `/projects/school-van`, `/projects/ai-content-automation`, `/experience`, `/certifications`, `/contact`, `/resume`, and a catch-all not-found route. `SiteLayout` provides navigation, skip link, main landmark, and footer. `/resume` presents a concise overview and downloadable PDF. Root `vercel.json` rewrites client-side routes to `/index.html`; production route behavior still requires deployment verification.

## Theme and state

The independent Light Sage Green and Dark Teal palettes are in `src/theme/tokens.css`. `ThemeProvider` initializes using a stored manual selection or the browser's `prefers-color-scheme`; manual selection updates local storage. React local state handles page-level interactions. No global state-management library is used.

## Contact and deployment boundaries

`ContactPage` validates form fields and submits `name`, `email`, `subject`, and `message` through `@emailjs/browser`. It reads the Vite variable names documented in [Integrations](INTEGRATIONS.md). Public EmailJS configuration is visible in browser code; private credentials must not be exposed. Vercel SPA fallback configuration is present in the root `vercel.json`; no production deployment is asserted.
