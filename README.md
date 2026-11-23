# Shlok Jaiswal — Portfolio

A responsive React portfolio built with Vite, Tailwind CSS, and React Router. The site includes a multi-section homepage, project catalog and case studies, experience and certifications pages, a concise resume overview with a downloadable PDF, and an EmailJS contact form.

## Technology

- React and React Router
- Vite and Tailwind CSS
- EmailJS browser integration
- Lucide React and Framer Motion dependencies

## Setup

Prerequisites: Node.js and npm.

```sh
npm install
npm run dev
```

Available checks and build commands:

```sh
npm run lint
npm run build
npm run preview
```

The contact form reads these Vite configuration names: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`. Configure them in the local environment and deployment settings; do not commit environment files. EmailJS public configuration is visible to browsers, so private credentials must never be placed in frontend code. The form submits `name`, `email`, `subject`, and `message` parameters.

## Pages

| Path | Content |
|---|---|
| `/` | Hero, About, Skills, and Services |
| `/projects` | Top Projects and Other Projects catalog |
| `/projects/eventhub` | EventHub case study |
| `/projects/school-van` | School Van Monitoring System case study |
| `/projects/ai-content-automation` | AI Content Automation Pipeline case study |
| `/experience` | Internship, leadership, and practical project experience |
| `/certifications` | Certificate records grouped by provider |
| `/contact` | Contact options and EmailJS form |
| `/resume` | Concise resume overview and PDF download |
| Other paths | Not-found page |

## Project structure and documentation

Application code is organized under `src/app`, `src/components`, `src/content`, `src/pages`, `src/theme`, and `src/styles`. Portfolio images and certificate assets are under `assets/`.

- [Project overview](docs/PROJECT_OVERVIEW.md)
- [Frontend documentation](docs/FRONTEND_DOCUMENTATION.md)
- [Architecture and structure](docs/ARCHITECTURE_AND_STRUCTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Content and asset guide](docs/CONTENT_AND_ASSET_GUIDE.md)
- [Integrations](docs/INTEGRATIONS.md)
- [SEO, accessibility, and performance](docs/SEO_ACCESSIBILITY_PERFORMANCE.md)
- [Development roadmap](docs/DEVELOPMENT_ROADMAP.md)
- [Test plan](docs/TEST_PLAN.md)
