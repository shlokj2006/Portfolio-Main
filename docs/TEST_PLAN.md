# Test Plan

[<- README](../README.md) | [Overview](PROJECT_OVERVIEW.md) | [Frontend](FRONTEND_DOCUMENTATION.md) | [Architecture](ARCHITECTURE_AND_STRUCTURE.md) | [Design system](DESIGN_SYSTEM.md) | [Content and assets](CONTENT_AND_ASSET_GUIDE.md) | [Integrations](INTEGRATIONS.md) | [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) | [Roadmap](DEVELOPMENT_ROADMAP.md)

## Automated checks

Verified commands from `package.json`:

```sh
npm run lint
npm run build
npm run preview
```

`git diff --check` is also useful for patch whitespace. These checks do not validate visual layout, browser interaction, EmailJS delivery, assistive-technology behavior, deployed routes, or measured performance. No automated component-test script is defined in `package.json`.

## Manual browser checks

| Area | Scenario | Expected result | Status |
|---|---|---|---|
| Routes and navigation | Visit every route and an unknown path; test desktop/mobile navigation and Escape | Correct page, active route, menu behavior, and not-found recovery | Not recorded |
| Command Palette | Test Ctrl+K/Cmd+K, hero hint, mobile menu search, filtering, arrow selection, Enter, Escape, outside click, resume/terminal actions, and focus restoration | Search results/actions work; focus returns appropriately | Not recorded |
| Theme | Fresh visits under OS light/dark; toggle, navigate, reload | Correct initial theme and persisted manual choice | Not recorded |
| Responsive layout | Review short and long pages at phone, tablet, desktop widths | No unintended horizontal overflow; controls remain usable | Not recorded |
| Hero and terminal | Check image, availability, terminal commands, history, completion, clear, exit/reopen | Content, links, focus, and commands behave as described | Not recorded |
| Homepage content | Inspect skill groups, service disclosure cards, project listings, experience, and certificate pages | Content matches source modules; controls and route links work | Not recorded |
| Project case studies | Visit all three case-study routes and review status/feature labels and links | Case-study details stay within recorded implementation evidence | Not recorded |
| Art link | Review About card at narrow and wide widths in both themes; activate link | Secondary Instagram link is readable, keyboard-accessible, and opens supplied profile in a new tab | Not recorded |
| Resume | Visit `/resume`; inspect content and activate PDF action | Resume overview appears and existing bundled PDF action works | Not recorded |
| Whack-a-Mole | Start, score normal/golden hits, miss golden mole, replay, toggle sound, close by button/Escape | 30-second round starts explicitly; +1/+5 scoring, once-per-round golden, sound preference, cleanup, status and focus behavior work | Not recorded |
| Contact copy | Copy displayed email and phone with clipboard granted and denied/unavailable | Accurate copied value or clear failure feedback announced to assistive technology | Not recorded |
| Forms | Validate contact/feedback fields; submit with missing config, successful test config, and simulated provider failure | Errors/status are clear; no success claim on failure; accepted request is distinguished from inbox delivery | Not recorded |
| Scroll progress | On short and long routes, inspect top/middle/bottom, route changes, and both themes | Bar tracks scroll, hides without scroll range, and does not block controls | Not recorded |
| SEO | Inspect route title/description/canonical/social metadata, JSON-LD, robots, sitemap, noindex behavior, social image, and verification file | Source metadata matches route; feedback and unknown routes are noindex; sitemap has intended public routes | Owner-confirmed tested; no independent Search Console access claimed |
| Accessibility and motion | Keyboard-only and screen-reader review; test reduced motion and contrast in both themes | Logical focus, meaningful names/status, visible focus, reduced nonessential motion; log findings | Not recorded |
| Performance/deployment | Run Lighthouse/Core Web Vitals on representative deployed pages; deep-link refresh and asset checks | Record device/network and actual results; no result is presumed by this plan | Not recorded |

The project owner confirms Google SEO/indexing setup was implemented and tested. This document does not report Search Console coverage, crawl dates, ranking, or impressions. See [SEO, Accessibility, and Performance](SEO_ACCESSIBILITY_PERFORMANCE.md) for the repository implementation and [Roadmap](DEVELOPMENT_ROADMAP.md) for project status.
