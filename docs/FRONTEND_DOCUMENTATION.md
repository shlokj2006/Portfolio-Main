# Frontend Documentation

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

## Shared layout and navigation

`SiteLayout` wraps routed pages with the shared navbar, main landmark, skip link, and footer. The responsive navigation includes Home, Projects, Experience, Certifications, Contact, and Resume. Its compact menu toggle supports keyboard use, exposes its expanded state, and closes after navigation or Escape. The navbar also contains the light/dark theme switch.

## Homepage

`HomePage` composes four sections:

- **Hero:** approved headline and calls to `/projects` and `/contact`; the visual uses the profile photo in `assets/images/Profilephoto.jpg`.
- **About:** data from `src/content/about.js`, including education, roles, focus areas, and interest objects with names and descriptions.
- **Skills:** reusable category and skill components read the editable inventory and proficiency values in `src/content/skills.js`.
- **Services:** three expandable service cards read `src/content/services.js` and link to `/contact`.

## Projects and profile pages

`ProjectsPage` reads `src/content/projects.js`. It sorts project records by display order and generates Top Projects from the featured flag; remaining records appear under Other Projects. `ProjectCard` displays available detail, GitHub, and live-demo links without empty buttons.

Dedicated project case studies are available at `/projects/eventhub`, `/projects/school-van`, and `/projects/ai-content-automation`. The AI content case study documents the confirmed workflow lifecycle and integrations; exact n8n node wiring is not represented because no verified workflow export or diagram is available.

`ExperiencePage` uses role and project records in `src/content/experience.js`; role descriptions are omitted when no supported responsibilities are available. `CertificationsPage` renders certificate records from `src/content/certifications.js`, grouped by provider. `/contact` has contact options and an EmailJS form. `/resume` summarizes education, skills, experience/leadership, selected projects and certifications, and links to the bundled PDF `assets/Shlok_Jaiswal_Resume.pdf` for download. If a same-origin HEAD check cannot load the PDF, the download control is disabled with a recovery message. Unknown paths render the not-found page.

The shared footer contains page navigation, phone, LinkedIn, and GitHub links; email remains available on the Contact page.

## Theme, responsiveness, and motion

Light and dark palettes are separately defined in `src/theme/tokens.css`. The theme provider initializes from the operating system preference (`prefers-color-scheme`) unless a manual selection is stored. The user can switch themes; that choice persists in local storage. Components use shared semantic tokens, responsive CSS, and reduced-motion rules where motion is present.

## Editable content

- `src/content/about.js`: About text, role/education details, focus areas, and interest objects.
- `src/content/projects.js`: project order, featured state, technology tags, routes, and verified links.
- `src/content/skills.js`: skill names, categories, levels, and visual indicators.
- `src/content/services.js`: service card descriptions and capabilities.
- `src/content/experience.js`: role and project experience entries.
- `src/content/certifications.js`: certificate metadata and provider groups.
- `src/content/siteConfig.js`: contact destinations and supported availability values. Availability is not currently displayed as a public indicator.

Contact submission reads `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`; see [Integrations](INTEGRATIONS.md). Environment values are not documented here.
