# Content and Asset Guide

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

## Content sources

Editable site content is centralized in `src/content/`. Keep personal, project, skill, credential, and contact claims supported by supplied or verified information. Optional links should be omitted when unavailable rather than represented by empty controls.

| Content | Source | Current use |
|---|---|---|
| About and interests | `src/content/about.js` | Homepage About cards; interests are objects with `name` and `description` |
| Skills | `src/content/skills.js` | Homepage categorized skills and configured descriptive levels/visual values |
| Services | `src/content/services.js` | Three expandable homepage service cards |
| Projects | `src/content/projects.js` | Featured and other project cards, routes, technologies, and verified external links |
| Experience | `src/content/experience.js` | Role and practical project experience page |
| Certifications | `src/content/certifications.js` | Provider-grouped certificate data and associated assets |
| Site configuration | `src/content/siteConfig.js` | Contact details and availability choices; availability currently has no public indicator |

## Project catalog and case studies

The `/projects` page currently lists EventHub, School Van Monitoring System, and AI Content Automation Pipeline as Top Projects, followed by SkillBridge, JARVIS Bot 2.0, TechFlow Summit 2025, and Shlok's Pizza Order Assistant under Other Projects. Dedicated case-study routes exist for EventHub, School Van, and AI Content Automation Pipeline. Do not infer a node-level n8n diagram for the AI workflow: no verified workflow export or diagram is included.

## Certifications and resume

Certificate records are grouped by provider on `/certifications`; the NPTEL Programming in Java record highlights 95%. Certificate files are stored under `assets/Certificates/`. The `/resume` overview uses selected certificate records and downloads the verified PDF at `assets/Shlok_Jaiswal_Resume.pdf`.

## Images and other assets

The Hero uses `assets/images/Profilephoto.jpg`. Certificate previews use the available certificate files. Do not substitute fabricated project screenshots or claim assets that are not present. Add suitable alternative text when adding meaningful images.

## Contact configuration

Contact destinations are stored in `src/content/siteConfig.js`. The EmailJS form uses `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`; do not put their values in documentation or commit environment files. The public EmailJS configuration is browser-visible. See [Integrations](INTEGRATIONS.md).
