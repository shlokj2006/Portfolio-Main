# Test Plan

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Frontend](FRONTEND_DOCUMENTATION.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md)

> All cases are **Not Run** because no application exists. Preconditions refer to a future build. Expected outcomes are requirements, not observed results.

| Test ID | Scenario | Preconditions | Steps | Expected result | Status |
|---|---|---|---|---|---|
| NAV-01 | Navbar and active section | Homepage with sections implemented | Activate each section link; scroll through sections | Correct section reached and active link reflects location | Not Run |
| NAV-02 | Mobile navigation | Narrow viewport; page loaded | Open menu; follow link; reopen and press Escape | Menu is operable, closes after navigation/Escape, state announced | Not Run |
| ROUTE-01 | React Router paths | App routes configured | Visit `/`, `/projects/eventhub`, `/projects/school-van`, `/resume` directly; refresh each | Each path renders intended page after direct visit and refresh | Not Run |
| ROUTE-02 | Not-found route | Not-found page implemented | Visit an unknown path and use its recovery link | Understandable not-found page appears with a way home | Not Run |
| THEME-01 | Initial OS theme | Both token systems implemented; OS preference can be changed | Set OS light then dark; load fresh visit each time | `prefers-color-scheme` selects matching palette initially | Not Run |
| THEME-02 | No manual theme override | OS-driven theme implemented | Inspect navigation/settings for a manual selector; change OS preference and reload | No manual theme control exists; theme follows OS preference; no stored override is present | Not Run |
| RESP-01 | Responsive layout | Phone, tablet, desktop viewports available | Inspect pages and controls at each size | No unintended horizontal overflow; content/actions remain available | Not Run |
| TERM-01 | Terminal presentation | Homepage loaded | Read terminal; enable reduced motion | Supplied lines stay legible; no command executes; motion reduced | Not Run |
| SKILL-01 | Skill categories/proficiency | Approved skill list and levels supplied | Inspect categories and bars with keyboard/screen reader | Beginner/Intermediate/Advanced match supplied values; no invented level; accessible text/progress semantics work without color | Not Run |
| SERV-01 | Service expansion | Service cards rendered | Expand/collapse each by pointer and keyboard | Details toggle; state exposed; focus usable | Not Run |
| PROJ-01 | Project navigation | Verified case-study links supplied | Activate cards; inspect external destinations | Correct case study opens; only verified destinations active | Not Run |
| CASE-01 | Case-study pages | Both case studies and evidence implemented | Open each route directly; inspect content and disclosures | Required sections render; confirmed and planned facts distinguished | Not Run |
| CASE-02 | School Van implementation labels | Evidence for full, partial, and planned features available | Compare each case-study claim with evidence and status label | Only verified complete features called complete; every partial feature says Partially implemented; planned work is not presented as complete | Not Run |
| RES-01 | Resume preview/download/open | Approved PDF deployed | Open page; preview; download; open in a new tab; test narrow viewport | Preview readable; download correct; new-tab option works | Not Run |
| RES-02 | Resume PDF unavailable | PDF missing or unavailable | Open Resume page and activate available recovery options | Graceful unavailable message; no broken/false success state | Not Run |
| FORM-01 | Form validation | Contact form implemented | Submit empty/malformed values; correct them | Accessible field errors; valid form can proceed | Not Run |
| FORM-02 | Contact submission lifecycle | EmailJS test configuration set | Submit test enquiry; observe loading/success/simulated failure | Duplicate submit prevented; status clear; no private credential exposed | Not Run |
| INT-01 | EmailJS unavailable/failure | Missing test config or simulated outage | Submit valid form under each failure case | Clear recovery message; no false success | Not Run |
| INT-02 | EmailJS browser configuration and spam controls | Test configuration set; browser inspection available | Inspect built assets/config handling; submit permitted spam-protection test | Public configuration is recognized as browser-visible; private credentials absent; built-in spam protection used without CAPTCHA dependency | Not Run |
| AVAIL-01 | Availability content configuration | Dedicated frontend content/config file implemented | Inspect configured value; try each supported value in source during review | Only four approved labels accepted; displayed value follows source; update requires source change | Not Run |
| A11Y-01 | Accessibility review | All planned pages implemented | Run automated and manual screen reader/contrast review | WCAG 2.2 AA target issues recorded and addressed | Not Run |
| KEY-01 | Keyboard navigation | All interactive UI implemented | Navigate with Tab/Shift+Tab; activate controls; inspect focus | Logical order, visible focus, keyboard operation throughout | Not Run |
| MOTION-01 | Reduced motion | Motion implemented and OS preference available | Enable reduced motion; review animations | Nonessential motion reduced/removed; content remains available | Not Run |
| SEO-01 | Metadata/indexing | Domain and page content finalized | Inspect titles, descriptions, canonical, Open Graph, sitemap, robots, schema | Metadata is accurate/page-specific; indexing assets match deployment | Not Run |
| PERF-01 | Loading/Core Web Vitals | Production-like build and representative content | Measure Core Web Vitals and Lighthouse under recorded conditions | Results recorded against targets; no score presumed | Not Run |
| COMP-01 | Browser compatibility | Browser matrix selected | Exercise pages and interactions in target browsers | Core content, routes, forms, themes work consistently | Not Run |
| DEP-01 | Production deployment | Authorized Vercel deployment exists | Visit homepage/deep routes over HTTPS; refresh; submit test enquiry | Routes load, HTTPS active, assets resolve, form behaves as configured | Not Run |

See [SEO, Accessibility, and Performance](SEO_ACCESSIBILITY_PERFORMANCE.md) for targets and [Roadmap](DEVELOPMENT_ROADMAP.md) for dependencies. All cases remain **Not Run** until an implementation exists.
