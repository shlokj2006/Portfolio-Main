# Content and Asset Guide

[<- README](../README.md) | [Overview](PROJECT_OVERVIEW.md) | [Frontend](FRONTEND_DOCUMENTATION.md) | [Architecture](ARCHITECTURE_AND_STRUCTURE.md) | [Design system](DESIGN_SYSTEM.md) | [Integrations](INTEGRATIONS.md) | [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) | [Roadmap](DEVELOPMENT_ROADMAP.md) | [Test plan](TEST_PLAN.md)

## Content sources

Editable site content is centralized in `src/content/`. Keep personal, project, skill, credential, and contact claims supported by supplied or verified information. Optional links should be omitted when unavailable rather than represented by empty controls.

| Content | Source | Current use |
|---|---|---|
| About and interests | `src/content/about.js` | Homepage About cards; Art interest links to The Artverse Instagram profile |
| Skills | `src/content/skills.js` | Homepage categorized skills and configured labels/visual values |
| Services | `src/content/services.js` | Expandable homepage service cards |
| Projects | `src/content/projects.js` | Featured/other project cards, routes, technologies, verified links |
| Experience | `src/content/experience.js` | Role and practical project experience |
| Certifications | `src/content/certifications.js` | Provider-grouped certificate metadata and assets |
| Site configuration | `src/content/siteConfig.js` | Contact details, availability status, feedback categories and limits |

## Project catalog and case studies

The `/projects` page displays EventHub, School Van Monitoring System, and AI Content Automation Pipeline as Top Projects, followed by SkillBridge, JARVIS Bot 2.0, TechFlow Summit 2025, and Shlok's Pizza Order Assistant under Other Projects. Dedicated case-study routes exist for EventHub, School Van, and AI Content Automation Pipeline. Do not infer node-level n8n wiring for the AI workflow; no verified workflow export or diagram is included.

## Certifications and resume

Certificate records are grouped by provider on `/certifications`; the NPTEL Programming in Java record highlights 95%. Certificate files are stored under `assets/Certificates/`. The `/resume` overview uses selected certificate records and downloads `assets/Shlok_Jaiswal_Resume.pdf`.

## Images and other assets

The Hero uses `assets/images/Profilephoto.jpg`. Certificate previews use available certificate files. The game mole artwork is inline SVG, and game sounds are generated through Web Audio. Do not substitute fabricated project screenshots or claim assets that are not present. Add suitable alternative text to meaningful images.

## Contact configuration

Contact destinations, including the availability status content, are stored in `src/content/siteConfig.js`. Contact and feedback forms use the EmailJS configuration names documented in [Integrations](INTEGRATIONS.md); do not put configuration values in documentation or commit environment files. EmailJS public configuration is browser-visible.
