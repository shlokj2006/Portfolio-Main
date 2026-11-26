# SEO, Accessibility, and Performance

[<- README](../README.md) | [Overview](PROJECT_OVERVIEW.md) | [Frontend](FRONTEND_DOCUMENTATION.md) | [Architecture](ARCHITECTURE_AND_STRUCTURE.md) | [Design system](DESIGN_SYSTEM.md) | [Content and assets](CONTENT_AND_ASSET_GUIDE.md) | [Integrations](INTEGRATIONS.md) | [Roadmap](DEVELOPMENT_ROADMAP.md) | [Test plan](TEST_PLAN.md)

The project owner confirms that Google SEO and indexing setup has been implemented and tested. The repository implementation is described below. This does not claim direct Search Console access or assert indexing coverage, crawl dates, rankings, or impressions.

Live site URL provided by the project owner: <https://shlokjaiswal.vercel.app/>.

## SEO implementation

`src/app/App.jsx` maps routes to page-specific titles and descriptions. `RouteSEO` supplies these to reusable `src/components/SEO.jsx`, which updates the document title, description, robots directive, canonical URL, Open Graph metadata, and Twitter Card metadata as the client route changes.

| Route | Title | Description summary |
|---|---|---|
| `/` | Shlok Jaiswal \| Full-Stack Developer & AI Automation Enthusiast | Portfolio of Shlok Jaiswal, a Computer Science student building full-stack web applications and AI-assisted automation workflows. |
| `/projects` | Projects \| Shlok Jaiswal | Explore Shlok Jaiswal's selected projects in web development, event management, school transportation monitoring, and AI automation. |
| `/projects/eventhub` | EventHub Case Study \| Shlok Jaiswal | A MERN-stack event platform for event discovery, bookings, and administration, with role-based access and email verification. |
| `/projects/school-van` | School Van Monitoring System \| Shlok Jaiswal | A school transportation monitoring system with authorized live van tracking, student activity records, and pickup alerts. |
| `/projects/ai-content-automation` | AI Content Automation Pipeline \| Shlok Jaiswal | An n8n workflow for AI-assisted content generation, human review, and distribution with connected tracking and notifications. |
| `/experience` | Experience \| Shlok Jaiswal | Professional, leadership, and project experience of Shlok Jaiswal, a Computer Science student focused on software and AI automation. |
| `/certifications` | Certifications \| Shlok Jaiswal | Browse Shlok Jaiswal's course completion and participation certificates, organized by provider. |
| `/contact` | Contact \| Shlok Jaiswal | Contact Shlok Jaiswal about project enquiries, collaboration, or technology, using the available contact options. |
| `/resume` | Resume \| Shlok Ashish Jaiswal | Resume overview for Shlok Ashish Jaiswal, a Computer Science student specializing in Data Science and building full-stack applications and automation workflows. |
| `/feedback` | Portfolio Feedback \| Shlok Jaiswal | Share feedback about Shlok Jaiswal's portfolio through the feedback form. |
| Unknown path | Page Not Found \| Shlok Jaiswal | The requested page could not be found. |

The canonical domain is `https://shlokjaiswal.vercel.app`. Open Graph includes title, description, type, URL, and image; Twitter metadata uses the `summary` card with title, description, and image. Both use `/social-image.jpg`.

`index.html` includes Person and WebSite JSON-LD in an `application/ld+json` script. `public/robots.txt` allows crawling and points to the sitemap. `public/sitemap.xml` lists these nine routes: `/`, `/projects`, `/projects/eventhub`, `/projects/school-van`, `/projects/ai-content-automation`, `/experience`, `/certifications`, `/contact`, and `/resume`. `/feedback` and unmatched routes receive `noindex, nofollow`; recognized public routes receive `index, follow`.

`public/google518797585b7aa810.html` is the Google Search Console verification file. Its existence does not mean this documentation author accessed Search Console. The project owner confirms SEO/indexing setup was tested.

## Accessibility

Implemented patterns include semantic landmarks, labels and dialog names, keyboard-operable controls, visible focus styling, form/game status announcements, touch-usable controls, and reduced-motion CSS. WCAG 2.2 AA is a review target, not a certification; no complete accessibility audit or contrast measurement is recorded here. See [Test Plan](TEST_PLAN.md) for manual coverage.

## Performance

No current Lighthouse or Core Web Vitals measurements are recorded. Before release, measure representative routes/devices, review image sizing and loading, font behavior, layout shift, and animation performance. Do not treat source/build checks as performance results.
