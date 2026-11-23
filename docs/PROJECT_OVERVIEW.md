# Project Overview

[← README](../README.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

## Purpose

Shlok Jaiswal's portfolio presents profile information, technical skills, services, projects, experience, certifications, and contact options for recruiters, internship providers, prospective clients, and technical peers.

## Technology and architecture

The implemented application uses React, Vite, Tailwind CSS, and React Router. Components and routes are under `src/`; editable portfolio data is under `src/content/`; theme tokens and provider are under `src/theme/`; application styling is under `src/styles/`. EmailJS is used by the browser-side contact form. There is no portfolio backend or database. See [Architecture and Structure](ARCHITECTURE_AND_STRUCTURE.md).

## Implemented pages and features

- Homepage sections: Hero with profile photo, About with education/roles/focus/interests, Skills, and expandable Services.
- Projects catalog at `/projects`, populated from `src/content/projects.js` with featured and other project groups.
- Case studies: EventHub, School Van Monitoring System, and AI Content Automation Pipeline.
- Experience page with listed roles and practical project experience.
- Certifications page with certificate records grouped by provider and preview/view options.
- Contact page with email, phone, LinkedIn, GitHub, validated form, and EmailJS submission states.
- Responsive shared navigation and footer; light/dark themes with operating-system preference and a persistent manual switch.
- Not-found page for unknown paths.
- Concise `/resume` overview with selected verified content and a download action for `assets/Shlok_Jaiswal_Resume.pdf`.

The resume overview includes education, categorized skills, listed internship/leadership roles without unsupported responsibility claims, selected project summaries with technology tags, selected certifications, career interests, and exactly three actions. The PDF is downloaded rather than previewed or embedded. The source configuration contains supported availability labels, but no public availability indicator is currently displayed.

## Routes

| Path | Page |
|---|---|
| `/` | Homepage |
| `/projects` | Project catalog |
| `/projects/eventhub` | EventHub case study |
| `/projects/school-van` | School Van case study |
| `/projects/ai-content-automation` | AI Content Automation Pipeline case study |
| `/experience` | Experience |
| `/certifications` | Certifications |
| `/contact` | Contact |
| `/resume` | Resume overview and PDF download |
| `*` | Not found |

## Design and quality goals

The visual system uses separate Light Sage Green and Dark Teal token sets. Responsive layouts, keyboard operation, visible focus, and reduced-motion support are implementation requirements. Accessibility, contrast, performance, and production deep-link behavior should be evaluated against the [test plan](TEST_PLAN.md); documentation does not imply those outcomes without recorded checks.

## Contact configuration

The browser form uses EmailJS and the variable names `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`. EmailJS public configuration is browser-visible. Never put private credentials in frontend code. See [Integrations](INTEGRATIONS.md).
