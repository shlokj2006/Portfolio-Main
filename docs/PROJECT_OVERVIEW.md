# Project Overview

[<- README](../README.md) | [Frontend](FRONTEND_DOCUMENTATION.md) | [Architecture](ARCHITECTURE_AND_STRUCTURE.md) | [Design system](DESIGN_SYSTEM.md) | [Content and assets](CONTENT_AND_ASSET_GUIDE.md) | [Integrations](INTEGRATIONS.md) | [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) | [Roadmap](DEVELOPMENT_ROADMAP.md) | [Test plan](TEST_PLAN.md)

## Purpose

Shlok Jaiswal's portfolio presents profile information, technical skills, services, projects, experience, certifications, and contact options for recruiters, internship providers, prospective clients, and technical peers.

## Technology and architecture

The client-side application uses React, Vite, Tailwind CSS, and React Router. Editable portfolio data is under `src/content/`; shared components are under `src/components/`; theme tokens and provider are under `src/theme/`; styling is in `src/styles/`. Contact and feedback submissions use EmailJS in the browser. There is no custom portfolio backend or database. See [Architecture and Structure](ARCHITECTURE_AND_STRUCTURE.md).

## Implemented pages and features

- Homepage: hero with profile photo and Availability Status; About, skills, expandable Services, and Whack-a-Mole teaser/game. The Art interest links to The Artverse on Instagram.
- Interactive Developer Terminal in the hero. Commands: `help`, `about`, `skills`, `projects`, `experience`, `certifications`, `contact`, `resume`, `clear`, and `exit`.
- Projects catalog and case studies for EventHub, School Van Monitoring System, and AI Content Automation Pipeline.
- Experience, certifications, Contact, Feedback, Resume, and not-found pages.
- Responsive shared navigation/footer, persistent light/dark theme selection, route-aware scroll progress, and searchable Command Palette with mobile-menu access.
- Contact page email and phone copy actions with success/failure feedback. Contact and feedback forms have validation and EmailJS submission states.
- Whack-a-Mole has a 3x3 board, 30-second round, normal and once-per-round golden mole scoring, locally stored best score and sound preference, synthesized Web Audio effects, keyboard-operable holes, and a native dialog.
- `/resume` presents selected resume content and a download action for the bundled PDF.

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
| `/feedback` | Feedback (`noindex`) |
| `/resume` | Resume overview and PDF download |
| `*` | Not found |

## Design and quality

The visual system uses light sage/ivory and dark teal token sets. Interactive components include keyboard support and visible focus styles; responsive and reduced-motion rules are in `src/styles/app.css`. Accessibility and performance review status is described in the [test plan](TEST_PLAN.md).

## Contact configuration

The browser forms use the EmailJS configuration names documented in [Integrations](INTEGRATIONS.md). EmailJS public configuration is browser-visible; never put private credentials in frontend code.
