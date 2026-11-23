# Integrations

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

## EmailJS contact form — implemented

`src/pages/ContactPage.jsx` submits the form in the browser with `@emailjs/browser`. It sends the template parameters `name`, `email`, `subject`, and `message`, and provides sending, success, and error feedback. The form clears only after EmailJS accepts the request. The success message does not guarantee inbox delivery. Basic client-side validation is used. No CAPTCHA dependency is included; enable EmailJS built-in spam controls in the provider configuration.

The Vite configuration names are:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Configure these names in the local development environment and hosting settings as appropriate. Values are intentionally not recorded in documentation. EmailJS public configuration is visible in browser code; do not place private credentials in frontend code. A form submission has not been represented here as a live delivery test.

## GitHub and Vercel

Root `vercel.json` configures a React Router single-page-app rewrite to `/index.html`. The project includes verified GitHub and Vercel links for particular portfolio projects, but this documentation does not assert that the portfolio itself is deployed or that production direct-route refreshes have been tested.

| Integration | Current use/status |
|---|---|
| EmailJS | Browser-side contact form implemented; account/runtime configuration is not documented here |
| GitHub | Project repository links are shown where available |
| Vercel | SPA fallback configured in root `vercel.json`; portfolio deployment status is not asserted |
