# Development Roadmap

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Test plan](TEST_PLAN.md)

Statuses below describe the current source implementation. Browser verification was completed previously as provided by the project owner; this documentation update did not repeat browser testing.

| Area | Current status | Remaining work |
|---|---|---|
| Foundation and design system | Implemented; lint/build checks are available | Continue validation as changes are made |
| Shared layout and themes | Responsive navigation, footer, light/dark tokens, system-preference initialization, persistent manual theme switch | Deployment deep-link behavior is not asserted here |
| Homepage | Hero, About, Skills, and Services implemented | Update approved content as needed |
| Projects | Data-driven Top Projects and Other Projects catalog implemented | Add projects through centralized data and verified assets/links |
| Case studies | EventHub, School Van, and AI Content Automation routes implemented | Add evidence/assets only when available; exact n8n node wiring remains undocumented |
| Experience | Dedicated page with role and project entries implemented | Role responsibilities are not supplied for current employment/leadership entries |
| Certifications | Provider-grouped certificate page and previews implemented | Maintain metadata against actual certificate files |
| Contact | Contact page and EmailJS browser form implemented | Configure and verify EmailJS account/runtime delivery as needed |
| Resume | Concise overview and PDF download implemented; unavailable file has a disabled-action fallback | Recheck PDF availability and content when resume asset changes |
| Availability | Supported values exist in `src/content/siteConfig.js` | Select current value and add display only if approved |
| Accessibility, SEO, performance | Requirements and checks are documented | Record formal audits and measured production results |
| Deployment | Root `vercel.json` includes a SPA route rewrite; no production deployment is asserted | Verify Vercel configuration, HTTPS, and direct route refreshes after deployment |

See [Frontend Documentation](FRONTEND_DOCUMENTATION.md) for route and component details, [Integrations](INTEGRATIONS.md) for EmailJS configuration names, and the [Test Plan](TEST_PLAN.md) for verification scenarios.
