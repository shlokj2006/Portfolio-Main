# Integrations

[<- README](../README.md) | [Overview](PROJECT_OVERVIEW.md) | [Frontend](FRONTEND_DOCUMENTATION.md) | [Architecture](ARCHITECTURE_AND_STRUCTURE.md) | [Design system](DESIGN_SYSTEM.md) | [Content and assets](CONTENT_AND_ASSET_GUIDE.md) | [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) | [Roadmap](DEVELOPMENT_ROADMAP.md) | [Test plan](TEST_PLAN.md)

## EmailJS contact form

`src/pages/ContactPage.jsx` submits `name`, `email`, `subject`, and `message` through `@emailjs/browser`. It reports sending, success, and failure states and clears the form after EmailJS accepts the request. Acceptance does not guarantee inbox delivery.

Configuration names read by the contact form:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Configure the names in the local development environment and hosting settings as needed. Values are intentionally not recorded. EmailJS public configuration is visible in browser code; never put private credentials in frontend code. No live delivery test is claimed here.

## EmailJS feedback form

`src/pages/FeedbackPage.jsx` uses the existing EmailJS service and public key with the dedicated `VITE_EMAILJS_FEEDBACK_TEMPLATE_ID`. Its parameters are `feedback_category`, `feedback_rating`, `feedback_rating_label`, `feedback_name`, and `feedback_message`. The page reports when delivery configuration is missing and only reports success after EmailJS accepts the request; inbox delivery is not guaranteed. Client-side validation, a hidden honeypot, a minimum completion delay, and a disabled submit button provide basic spam friction. `/feedback` is marked `noindex, nofollow`.

## Browser APIs and local storage

The Contact page uses the Clipboard API for displayed email and phone values, with status feedback on success or failure. The game synthesizes sound with Web Audio after user interaction. Its sound preference and high score, and the theme preference, are stored locally with error handling. These features do not send this state to a portfolio backend.

The Art interest links to the supplied Instagram profile `https://www.instagram.com/the_artverse/` in a new tab with `noopener noreferrer`.

## GitHub and Vercel

The portfolio displays GitHub project links where configured. Root `vercel.json` provides a React Router SPA rewrite to `/index.html`. The project owner provided the live URL `https://shlokjaiswal.vercel.app/`; repository configuration alone does not verify deployment behavior.

| Integration | Current use/status |
|---|---|
| EmailJS | Browser-side contact and feedback forms; account configuration and delivery are external |
| GitHub | Project repository links are shown where available |
| Vercel | SPA fallback configured; live URL supplied by project owner |
