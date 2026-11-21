# Development Roadmap

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Test plan](TEST_PLAN.md)

> Phase 0 records this documentation work as complete. Every implementation phase remains **Planned**. This roadmap is not authorization to start development; implementation status is **Not Authorized**.

## Phase 0: Planning and documentation

- **Objective:** Record scope, design, requirements, constraints, and test approach.
- **Tasks:** Document supplied decisions and pending content.
- **Dependencies:** Task brief and owner decisions.
- **Deliverables:** Complete documentation system.
- **Acceptance criteria:** Required docs exist, links resolve, unknown facts remain pending.
- **Status:** Complete (documentation only).

## Phase 1: React/Vite project setup and design tokens

- **Objective:** Initialize the future frontend and theme foundations.
- **Tasks:** Set up app tooling and independent token sets.
- **Dependencies:** Phase 0 and implementation authorization.
- **Deliverables:** App shell and design tokens.
- **Acceptance criteria:** Build starts; both theme systems remain separate.
- **Status:** Planned.

## Phase 2: Responsive layout, navbar and theme system

- **Objective:** Build shared shell, responsive navigation, and OS-driven theme selection.
- **Tasks:** Create layouts, floating navbar, mobile menu, and OS-preference theme selection.
- **Dependencies:** Phase 1.
- **Deliverables:** Shared layout and theme interaction.
- **Acceptance criteria:** Works across viewport sizes; `prefers-color-scheme` selects palette; no manual theme selector or persisted preference; palettes remain independent.
- **Status:** Planned.

## Phase 3: Hero, About and Skills

- **Objective:** Present identity, background, and verified skills.
- **Tasks:** Build hero, terminal presentation, About, and skill categories.
- **Dependencies:** Phase 2; profile content and avatar assets.
- **Deliverables:** Hero, About, Skills sections.
- **Acceptance criteria:** Avatar only in About; supplied Beginner/Intermediate/Advanced skill levels represented accessibly; no levels invented.
- **Status:** Planned.

## Phase 4: Services and featured projects

- **Objective:** Explain offerings and present project cards.
- **Tasks:** Add three services and verified project cards.
- **Dependencies:** Phase 2; approved service/project content and assets. School Van claims require implementation evidence and explicit partial/planned labels.
- **Deliverables:** Service cards and project showcase.
- **Acceptance criteria:** Disclosures accessible; destinations and media verified.
- **Status:** Planned.

## Phase 5: Project case studies

- **Objective:** Create EventHub and School Van technical narratives.
- **Tasks:** Assemble agreed sections and evidence for each case study.
- **Dependencies:** Phase 4; verified implementation evidence, screenshots, links.
- **Deliverables:** Two case-study pages.
- **Acceptance criteria:** Evidence-backed completed features distinguished from explicitly labeled partially implemented and planned/pending features.
- **Status:** Planned.

## Phase 6: Experience, Education and Certifications

- **Objective:** Add professional timeline, education, and verified credentials.
- **Tasks:** Build experience, education, certificate sections.
- **Dependencies:** Verified role details and certificate information.
- **Deliverables:** Three profile sections.
- **Acceptance criteria:** No unsupported responsibilities, outcomes, or credentials.
- **Status:** Planned.

## Phase 7: Contact form and Resume page

- **Objective:** Add contact flow and resume preview/download.
- **Tasks:** Build form, EmailJS boundary, resume page.
- **Dependencies:** Approved contact details, EmailJS setup, current resume asset.
- **Deliverables:** Contact integration and Resume page.
- **Acceptance criteria:** Accessible form states; EmailJS built-in spam protection and basic validation; public configuration identified as browser-visible; private credentials protected. Resume PDF preview, download, open-in-new-tab, and unavailable fallback work.
- **Status:** Planned.

## Phase 8: Animations and interactions

- **Objective:** Add restrained motion and interaction polish.
- **Tasks:** Complete transitions, disclosures, and interaction states.
- **Dependencies:** Relevant sections and motion decisions.
- **Deliverables:** Optional animations and interaction polish.
- **Acceptance criteria:** Reduced motion respected; UI works without motion.
- **Status:** Planned.

## Phase 9: Accessibility, SEO and performance

- **Objective:** Audit accessibility, metadata, responsive quality, and loading.
- **Tasks:** Run checks and fix issues.
- **Dependencies:** Implemented pages and final content/assets.
- **Deliverables:** Metadata, accessibility fixes, measured performance report.
- **Acceptance criteria:** WCAG 2.2 AA target checks documented; scores measured, not assumed.
- **Status:** Planned.

## Phase 10: Testing, deployment and final review

- **Objective:** Run test plan, deploy, and review production behavior.
- **Tasks:** Validate release candidate and production routes.
- **Dependencies:** Prior phases; Vercel/GitHub settings and owner approval.
- **Deliverables:** Validated deployment and release review.
- **Acceptance criteria:** Required checks pass, all React Router deep links work on direct visit and refresh through Vercel SPA fallback, HTTPS works, content approved.
- **Status:** Planned.
