# Test Plan

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md)

> The application is implemented. Browser verification was completed previously, but per-case coverage and outcomes are not captured in this table. This documentation update did not repeat browser checks. “Not recorded” means this document has no individual result for that case.

| Test ID | Scenario | Preconditions | Steps | Expected result | Status |
|---|---|---|---|---|---|
| NAV-01 | Navbar and active route | Shared navbar and routed pages available | Activate each navbar link and inspect active route state | Correct page opens; active route is indicated | Not recorded |
| NAV-02 | Mobile navigation | Narrow viewport; page loaded | Open menu; follow link; reopen and press Escape | Menu is operable, closes after navigation/Escape, state announced | Not recorded |
| ROUTE-01 | React Router paths | App routes configured | Visit `/`, `/projects`, all three project case-study routes, `/experience`, `/certifications`, `/contact`, and `/resume` | Each path renders its current page; resume overview appears | Not recorded |
| ROUTE-02 | Not-found route | Not-found page implemented | Visit an unknown path and use its recovery link | Understandable not-found page appears with a way home | Not recorded |
| THEME-01 | Initial OS theme | Both token systems implemented; OS preference can be changed | Set OS light then dark; load a fresh visit each time | `prefers-color-scheme` selects matching palette when no saved choice exists | Not recorded |
| THEME-02 | Manual theme selection | Theme switch is available | Change theme; navigate and reload; then change OS preference | Manual selection persists and takes precedence over system preference | Not recorded |
| RESP-01 | Responsive layout | Phone, tablet, desktop viewports available | Inspect pages and controls at each size | No unintended horizontal overflow; content/actions remain available | Not recorded |
| HERO-01 | Hero profile image | Homepage loaded | Inspect image and alt text at desktop/mobile widths and both themes | Profile photo loads, remains legible and uncropped in an unintended way | Not recorded |
| SKILL-01 | Skill categories/proficiency | Skill data and categories available | Inspect categories and indicators with keyboard/screen reader | Labels and visual indicators agree; text remains understandable without color | Not recorded |
| SERV-01 | Service expansion | Three service cards rendered | Expand/collapse each by pointer and keyboard | Details toggle; state exposed; focus usable | Not recorded |
| PROJ-01 | Project navigation | Project catalog rendered | Activate case-study and external links | Correct case study opens; external links are available only where configured | Not recorded |
| CASE-01 | Case-study pages | Three case-study routes implemented | Open each route and inspect sections and links | Project content renders; unsupported implementation claims are not presented as verified | Not recorded |
| CASE-02 | School Van implementation labels | Evidence-backed case study available | Compare implementation claims against evidence and status labels | Partial/planned claims are identified accurately | Not recorded |
| RES-01 | Resume overview and PDF download | Resume overview and bundled PDF exist | Open `/resume`; inspect summary, education, skills, roles, projects, certifications and three actions; activate download | Concise content appears without unsupported claims; PDF downloads; unavailable PDF produces a disabled action and clear recovery message | Not recorded |
| FORM-01 | Form validation | Contact form implemented | Submit empty/malformed values; correct them | Required fields validate; feedback is clear | Not recorded |
| FORM-02 | Contact submission lifecycle | EmailJS configuration set in test environment | Submit test enquiry; observe loading/success/failure | Form clears only after EmailJS accepts request; failure is not reported as success | Not recorded |
| INT-01 | EmailJS unavailable/failure | Missing test config or simulated outage | Submit valid form under each failure case | Clear recovery message; no false success | Not recorded |
| INT-02 | EmailJS browser configuration and spam controls | Test configuration set; browser inspection available | Inspect built assets/config handling; submit permitted spam-protection test | Public configuration is recognized as browser-visible; private credentials absent; built-in spam protection used without CAPTCHA dependency | Not recorded |
| AVAIL-01 | Availability content configuration | Dedicated frontend content/config file implemented | Inspect configured value; try each supported value in source during review | Only four approved labels accepted; displayed value follows source; update requires source change | Not recorded |
| A11Y-01 | Accessibility review | Current pages and interactions available | Run automated and manual screen reader/contrast review | Record issues against the WCAG 2.2 AA target and verify fixes | Not recorded |
| KEY-01 | Keyboard navigation | All interactive UI implemented | Navigate with Tab/Shift+Tab; activate controls; inspect focus | Logical order, visible focus, keyboard operation throughout | Not recorded |
| MOTION-01 | Reduced motion | Motion implemented and OS preference available | Enable reduced motion; review animations | Nonessential motion reduced/removed; content remains available | Not recorded |
| SEO-01 | Metadata/indexing | Domain and page content finalized | Inspect titles, descriptions, canonical, Open Graph, sitemap, robots, schema | Metadata is accurate/page-specific; indexing assets match deployment | Not recorded |
| PERF-01 | Loading/Core Web Vitals | Production-like build and representative content | Measure Core Web Vitals and Lighthouse under recorded conditions | Results recorded against targets; no score presumed | Not recorded |
| COMP-01 | Browser compatibility | Browser matrix selected | Exercise pages and interactions in target browsers | Core content, routes, forms, themes work consistently | Not recorded |
| DEP-01 | Production deployment | Authorized Vercel deployment exists | Visit homepage/deep routes over HTTPS; refresh; submit test enquiry | Routes load, HTTPS active, assets resolve, form behaves as configured | Not recorded |

See [SEO, Accessibility, and Performance](SEO_ACCESSIBILITY_PERFORMANCE.md) for targets and [Roadmap](DEVELOPMENT_ROADMAP.md) for dependencies. The status column records no per-case outcomes in this document; it does not imply that the application is absent or that browser verification has not occurred.
