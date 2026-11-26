# Frontend Documentation

[<- README](../README.md) | [Overview](PROJECT_OVERVIEW.md) | [Architecture](ARCHITECTURE_AND_STRUCTURE.md) | [Design system](DESIGN_SYSTEM.md) | [Content and assets](CONTENT_AND_ASSET_GUIDE.md) | [Integrations](INTEGRATIONS.md) | [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) | [Roadmap](DEVELOPMENT_ROADMAP.md) | [Test plan](TEST_PLAN.md)

## Shared layout and navigation

`src/components/layout/SiteLayout.jsx` wraps routed pages with the navbar, main landmark, skip link, footer, `ScrollProgress`, and `CommandPalette`. The responsive navbar links Home, Projects, Experience, Certifications, Contact, and Resume. On mobile, the expanded menu also has palette search access. Its theme switch toggles light and dark themes.

`CommandPaletteContext.jsx` handles Ctrl+K/Cmd+K, open/close state, and Developer Terminal registration. `CommandPalette.jsx` searches the route list in `src/app/navigationItems.js` and an action to open the terminal. The hero hint also opens it. `ScrollProgress.jsx` updates the top-edge indicator with requestAnimationFrame and hides it when there is no scroll range.

## Homepage

`src/pages/HomePage.jsx` composes these sections in order:

- **Hero:** profile photo, availability status, project/contact actions, interactive Developer Terminal, and command-palette shortcut hint.
- **About:** education, experience/leadership, focus, and interests from `src/content/about.js`; the Art interest links to the supplied Artverse Instagram profile.
- **Skills:** skill categories and labels from `src/content/skills.js`.
- **Services:** expandable cards from `src/content/services.js` with Contact links.
- **Whack-a-Mole:** compact teaser after Services; the game opens in a native dialog.

The terminal is in `src/components/terminal/`. `terminalCommands.js` defines `help`, `about`, `skills`, `projects`, `experience`, `certifications`, `contact`, `resume`, `clear`, and `exit`; profile and portfolio output reuses existing content modules.

## Projects and profile pages

`ProjectsPage` reads `src/content/projects.js` and displays featured and other projects. Dedicated case studies are `/projects/eventhub`, `/projects/school-van`, and `/projects/ai-content-automation`. The AI case study documents confirmed workflow behavior; exact n8n node wiring is not claimed without a verified workflow export or diagram.

`ExperiencePage` uses `src/content/experience.js`; `CertificationsPage` uses `src/content/certifications.js`. `/contact` displays contact options, copy actions for email and phone, and an EmailJS form. `/feedback` has a separate EmailJS feedback form. `/resume` summarizes selected education, skills, roles, projects, and certifications, and downloads the imported PDF `assets/Shlok_Jaiswal_Resume.pdf`. Unknown paths render the not-found page.

The shared footer contains page navigation, phone, LinkedIn, and GitHub links.

## Theme, responsiveness, and motion

Light and dark semantic tokens are in `src/theme/tokens.css`. The theme provider initializes from a saved manual selection or `prefers-color-scheme`; a manual selection persists in local storage. Responsive breakpoints and reduced-motion handling are in `src/styles/app.css`. The game has scoped retro colors; it does not change the shared theme tokens.

## Editable content

- `src/content/about.js`: About text, education, roles, focus areas, interests, and the Artverse link.
- `src/content/projects.js`: project ordering, featured state, technology tags, routes, and verified links.
- `src/content/skills.js`: skill names, categories, levels, and visual indicators.
- `src/content/services.js`: service card descriptions and capabilities.
- `src/content/experience.js`: role and project experience entries.
- `src/content/certifications.js`: certificate metadata and provider groups.
- `src/content/siteConfig.js`: contact destinations, availability content, and feedback form options/limits.

Contact and feedback EmailJS configuration names are documented in [Integrations](INTEGRATIONS.md); configuration values are not documented.
