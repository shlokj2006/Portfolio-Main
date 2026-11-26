# Development Roadmap

[<- README](../README.md) | [Overview](PROJECT_OVERVIEW.md) | [Frontend](FRONTEND_DOCUMENTATION.md) | [Architecture](ARCHITECTURE_AND_STRUCTURE.md) | [Design system](DESIGN_SYSTEM.md) | [Content and assets](CONTENT_AND_ASSET_GUIDE.md) | [Integrations](INTEGRATIONS.md) | [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) | [Test plan](TEST_PLAN.md)

Statuses below describe the current source implementation. Google SEO/indexing implementation and testing are owner-confirmed. Other browser test outcomes are tracked in the [Test Plan](TEST_PLAN.md) and are not assumed here.

| Area | Current status | Remaining work |
|---|---|---|
| Foundation and design system | React/Vite application, shared theme tokens, lint/build scripts | Maintain as changes are made |
| Shared layout and themes | Responsive navigation/footer, light/dark themes, persistent selection, scroll progress, Command Palette, mobile search | Continue accessibility and browser review |
| Homepage | Hero, availability, About, Skills, Services, Developer Terminal, Whack-a-Mole | Update only with supported content |
| Projects and case studies | Data-driven project catalog and EventHub, School Van, AI Content Automation case studies | Add content only with verified details/assets |
| Experience and certifications | Dedicated pages backed by content modules | Keep records aligned with source documents |
| Contact and feedback | EmailJS forms, validation/status feedback, copy-to-clipboard email/phone actions | Configure and verify provider delivery as needed |
| Resume | Overview and bundled PDF download with unavailable-file fallback | Recheck when resume asset changes |
| Art social link | The Artverse link is in the Art interest card | Update only if destination changes |
| SEO and indexing | Reusable route metadata, canonicals/social metadata, JSON-LD, robots, sitemap, verification file; owner-confirmed tested | Do not infer Search Console metrics; keep metadata in sync with routes |
| Accessibility and performance | Keyboard, focus, responsive, and reduced-motion behavior implemented | Complete formal accessibility and performance audits |
| Deployment | SPA fallback configured; live URL provided by owner | Continue route, asset, and provider runtime checks |
| Testimonials and references | Deferred until the Admin Dashboard and backend exist | Revisit after both foundations are available |
| AI Portfolio Assistant | Postponed | No scheduled work |
| Admin Dashboard, CMS, and Analytics | Future work | Requires separate scope and backend design |
| Hidden Easter Eggs | Postponed; design is not finalized | Finalize design before considering implementation |

See [Frontend Documentation](FRONTEND_DOCUMENTATION.md) for routes/components, [Integrations](INTEGRATIONS.md) for provider setup, and the [Test Plan](TEST_PLAN.md) for verification scenarios.
