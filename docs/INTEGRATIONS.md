# Integrations

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

> All integrations are **Planned**. No account, key, identifier, configuration, or deployment exists. Never put private credentials in client code.

## EmailJS — Planned

The contact form collects name, email, enquiry type, and message. Types are Internship Opportunities and Freelance Projects. Validate required fields and email format; provide inline errors, prevent duplicate submissions while sending, and announce success/failure accessibly. Avoid retaining message content beyond what delivery needs.

Use EmailJS browser integration. Its public configuration is browser-visible by design; never place private credentials in frontend code. Service ID, template ID, public key, variable names, and account details are Pending; no values are specified. Use EmailJS built-in spam protection and basic client-side validation. Do not introduce CAPTCHA dependencies initially. Test valid/invalid inputs, success/failure, missing configuration, duplicate submission, and mobile usability. Do not send real messages during tests without explicit authorization.

## Vercel — Planned

- Connect the future GitHub repository for build and deployment.
- Determine build command/output directory after the app is created; settings Pending.
- Configure required public integration settings in Vercel without exposing private secrets in the browser bundle.
- Configure SPA fallback so React Router routes support direct navigation and page refreshes (`/`, `/projects/eventhub`, `/projects/school-van`, `/resume`).
- Use HTTPS. A custom domain is a future possibility; domain/DNS choices Pending.
- No deployment is configured or performed.

## GitHub — Planned

Repository organization will contain README, docs, and the future app structure proposed in [Architecture](ARCHITECTURE_AND_STRUCTURE.md). A protected/default branch and focused feature branches are proposed; exact naming policy Pending. Concise imperative scoped commits are proposed; formal convention Pending. GitHub is the proposed Vercel source. No repository settings, branch rules, or hooks have changed.

| Integration | Intended use | Status |
|---|---|---|
| EmailJS | Contact form delivery | Planned; account configuration Pending |
| Vercel | Static hosting/deployment | Planned; configuration Pending |
| GitHub | Source control/deployment connection | Planned; settings Pending |

React Router is the approved client-side routing library; Vercel must serve the SPA entry for its planned routes.
