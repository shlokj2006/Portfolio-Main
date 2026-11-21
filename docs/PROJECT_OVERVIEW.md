# Project Overview

[← README](../README.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

## Vision and purpose

**Shlok Jaiswal — Personal Portfolio** will present its owner as a Full-Stack Developer & AI Automation Enthusiast. It will make the owner's professional profile, project work, and contact path easy to understand for recruiters, hiring managers, internship providers, prospective clients, and technical peers.

Approved headline: “Engineering Web Experiences. Automating What Comes Next.”

## Goals

1. Attract internship opportunities.
2. Attract freelance development clients.
3. Showcase technical capabilities and real-world projects.
4. Establish a professional personal brand.

## Scope

### Initial planned scope

- Responsive homepage: Hero, About, Skills, Services, Featured Projects, Experience, Education, Certifications, Contact, and Footer.
- EventHub and School Van Monitoring System case studies.
- Dedicated Resume page with online preview and PDF download.
- Floating responsive navbar, OS-driven theming, project/service interactions, availability status, and contact form.
- Dark Teal Fintech and Light Sage Green themes treated as separate systems.

See the [frontend guide](FRONTEND_DOCUMENTATION.md) and [design system](DESIGN_SYSTEM.md).

### Future possibilities and out of scope

A Blog / Learning Journal is deferred and excluded from the initial navigation and implementation scope. A custom backend, API, database, or payment processing system for this portfolio is also out of scope. Do not claim third-party payment integration for EventHub. Other additions require a later product decision.

## Main features (planned)

| Feature | Intent | Status |
|---|---|---|
| Portfolio homepage | Present profile, capabilities, work, and contact | Planned |
| Project case studies | Explain EventHub and School Van work | Planned; implementation details need verification |
| Resume page | Preview, download, and open an updated PDF in a new tab with unavailable-PDF fallback | Planned; asset pending |
| Theme behavior | Follow OS `prefers-color-scheme`; independent palettes; no manual selector or persisted choice | Planned |
| Routing | React Router routes `/`, `/projects/eventhub`, `/projects/school-van`, `/resume`, and not-found; direct navigation/refresh support | Planned |
| Contact form | Collect name, email, enquiry type, and message | Planned; EmailJS pending |
| Availability indicator | Show one of four states sourced from owner-maintained frontend content/config | Planned; initial value pending |

## Non-functional requirements

- Responsive layouts preserve access to core content and controls.
- Keyboard-operable interactions, visible focus, semantic markup, and WCAG 2.2 AA target.
- Respect reduced-motion preferences.
- Readable contrast and resilient form feedback.
- Efficient loading, optimized media, and measured performance targets.
- Maintainable frontend architecture appropriate to a personal portfolio.

These are targets, not verified outcomes. See [SEO, accessibility, and performance](SEO_ACCESSIBILITY_PERFORMANCE.md).

## Design philosophy

Premium, creative, and technical. Use clean surfaces, subtle organic shapes, restrained gradients, and occasional hand-drawn details. Avoid neon, excessive gradients, generic AI SaaS styling, excessive glass effects, and overcrowding. Never blend the two theme palettes automatically.

## Constraints and decisions

- Documentation only. Development status **Not Started**; implementation status **Not Authorized**.
- Planned stack: React, Vite, Tailwind CSS, React Router, EmailJS, Git/GitHub, Vercel. Framer Motion and Lucide React are proposed. No versions, scripts, credentials, or configuration specified.
- Do not fabricate skill levels, contact details, achievements, certificates, screenshots, URLs, or resume contents. Mark unknown content Pending. Skill proficiency uses Beginner, Intermediate, or Advanced only when supplied.
- WhatsApp display awaits permission to publish a phone number.
- Distinguish confirmed project facts from planned or unverified capabilities, especially for School Van.
- Verify School Van evidence; label each partially implemented feature explicitly and do not describe partial/planned work as completed.
- EmailJS uses browser integration, built-in spam protection, and basic client-side validation; no CAPTCHA dependency initially. Its public configuration is browser-visible; private credentials must not be exposed.
- No initial-release blog, backend, or database for the portfolio.
