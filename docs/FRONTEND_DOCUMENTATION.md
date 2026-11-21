# Frontend Documentation

[← README](../README.md) · [Overview](PROJECT_OVERVIEW.md) · [Architecture](ARCHITECTURE_AND_STRUCTURE.md) · [Design system](DESIGN_SYSTEM.md) · [Content and assets](CONTENT_AND_ASSET_GUIDE.md) · [Integrations](INTEGRATIONS.md) · [SEO/accessibility/performance](SEO_ACCESSIBILITY_PERFORMANCE.md) · [Roadmap](DEVELOPMENT_ROADMAP.md) · [Test plan](TEST_PLAN.md)

> Every page, component, section, and interaction below is **planned**, not implemented. Unknown content remains Pending; see the [content guide](CONTENT_AND_ASSET_GUIDE.md).

## Global navigation

### Floating navbar (planned)

- **Purpose/content/layout:** Keep primary navigation available. Transparent at page top and gains a background on scroll; includes brand/home, section links, “Let's Talk” CTA, and Resume access. Mobile uses hamburger navigation. Theme follows OS preference; no manual theme control is included.
- **Components:** Planned `Navbar`, `MobileNavigation`, and active-section indicator.
- **Interactions:** Scroll-aware surface, active section highlighting, anchor/page navigation, menu open/close, and CTA to Contact. Close menu after navigation and on Escape. Theme is selected from OS `prefers-color-scheme`; no manual selection or persistence.
- **Responsive behavior:** Full navigation on wider screens; accessible compact menu on small screens.
- **Expected states:** Top, scrolled, active link, mobile menu closed/open, focus, and OS-selected theme.

## Homepage sections

### 1. Hero

- **Purpose:** Identify Shlok and establish engineering and automation focus.
- **Content:** Approved headline “Engineering Web Experiences. Automating What Comes Next.” Introduction combining Computer Science student, developer, full-stack capabilities, AI automation experience, and problem-solving mindset. Terminal: `$ npm run explore`; `✓ Projects loaded`; `✓ Skills initialized`; `✓ Ready to build something great`. Buttons: “Explore Projects” and “Let's Talk”.
- **Layout/components:** Planned `HeroSection`, `TerminalPanel`, and CTA buttons; terminal is supporting visual.
- **Interactions:** Explore Projects moves to featured work; Let's Talk moves to Contact. Terminal is presentation only; it does not execute a shell.
- **Responsive behavior:** Stack content and terminal on narrow screens; prevent overflow.
- **Expected states:** Initial and keyboard focus; terminal stays readable with motion disabled.

### 2. About

- **Purpose:** Balance professional background and personal interests.
- **Content:** Education, development journey, AI & Automation internship, leadership, technical growth; chess, art, podcasts, curiosity, learning mindset.
- **Layout/components:** Planned `AboutSection` and animated illustrated avatar. Avatar appears **only** in About.
- **Interactions:** Restrained avatar animation; no other behavior required.
- **Responsive behavior:** Stack text and illustration on small screens; preserve logical reading order.
- **Expected states:** Static content; motion respects reduced-motion and conveys no essential information.

### 3. Skills

- **Purpose:** Make technical breadth and self-assessed proficiency scannable.
- **Content:** Hybrid grid: Frontend, Backend, Programming, AI and Workflow Automation, Tools and Platforms, UI/UX. Each skill uses a Beginner, Intermediate, or Advanced level represented by a visual proficiency bar. Individual levels remain Pending until supplied; never invent them.
- **Layout/components:** Planned `SkillsSection`, categories, `SkillItem`, accessible progress indicator.
- **Interactions:** No filtering/editing specified; bars only represent supplied values.
- **Responsive behavior:** Grid adapts without horizontal scrolling.
- **Expected states:** Category and skill display with descriptive level and bar; never invent values. Text labels and accessible progress semantics communicate level without relying on color.

### 4. Services

- **Purpose:** Explain work a client can discuss.
- **Content:** Website Development; Full-Stack Development; AI & Workflow Automation. Each has short description, capabilities, and expandable details.
- **Layout/components:** Three planned `ServiceCard` instances in a responsive group.
- **Interactions:** Keyboard-operable expand/collapse disclosure with exposed state.
- **Responsive behavior:** Cards stack on narrow screens.
- **Expected states:** Collapsed, expanded, hover, focus, active.

### 5. Featured Projects

- **Purpose:** Direct visitors to project evidence.
- **Content:** EventHub and School Van Monitoring System. Cards require screenshot, name, short description, technology tags, features, case-study link, GitHub link, and demo link. Screenshots and URLs are Pending. Details in [Content and Asset Guide](CONTENT_AND_ASSET_GUIDE.md).
- **Layout/components:** Planned `FeaturedProjects`, `ProjectCard`, case-study links.
- **Interactions:** Open case study and verified repository/demo destinations when supplied.
- **Responsive behavior:** Responsive card grid, meaningful image alternatives.
- **Expected states:** Content-ready card; no fabricated link or media.

### 6. Experience

- **Purpose:** Present professional and leadership roles chronologically.
- **Content:** Traditional timeline: AI & Automation Intern — HTD Resources Pvt. Ltd.; Vice President — BTech Culture Community, ITM Vocational University.
- **Layout/components:** Planned `ExperienceTimeline` and `ExperienceItem`.
- **Interactions:** None beyond navigation.
- **Responsive behavior:** Readable single column on small screens.
- **Expected states:** Supplied role and organization; dates/responsibilities Pending. No invented achievements.

### 7. Education

- **Purpose:** Show academic background.
- **Content:** ITM Vocational University; B.Tech Computer Science; 2024–2028; GPA 9.4; Top 5% of class.
- **Layout/components:** Planned concise education card or timeline entry.
- **Interactions:** None required.
- **Responsive behavior:** Single-column readable content.
- **Expected states:** Supplied details; any supporting link Pending.

### 8. Certifications

- **Purpose:** Group credentials for scanning.
- **Content:** Full-Stack Development, Programming, AI & Automation, Data Science, UI/UX, SEO categories. Individual names, issuers, dates, links Pending.
- **Layout/components:** Planned categorized certification cards.
- **Interactions:** External credential links only when supplied and verified.
- **Responsive behavior:** Flexible grid that collapses to one column.
- **Expected states:** Pending categories may be omitted or marked; no credential fabricated.

### 9. Contact

- **Purpose:** Enable internship and freelance enquiries.
- **Content:** Email, LinkedIn, GitHub, plus name, email, enquiry type, and message form fields. Types: Internship Opportunities and Freelance Projects. WhatsApp awaits permission to display a phone number.
- **Layout/components:** Planned `ContactSection`, labeled fields, validation and status feedback.
- **Interactions:** Validate and submit through planned EmailJS integration; show success/failure. See [Integrations](INTEGRATIONS.md).
- **Responsive behavior:** Form and links fit narrow layouts; controls remain touch-friendly.
- **Expected states:** Pristine, invalid, submitting, success, failure, integration unavailable.

### 10. Footer

- **Purpose:** Close with a personal statement and useful routes.
- **Content:** Closing statement, navigation, contact/social links, copyright, back-to-top.
- **Layout/components:** Planned `Footer`, compact link groups, back-to-top button.
- **Interactions:** Route/section links; back-to-top returns to document start.
- **Responsive behavior:** Groups stack on mobile; links remain reachable.
- **Expected states:** Normal, hover, focus, active link.

## Additional pages

### EventHub case study (planned)

Include overview, problem, motivation, objectives, solution, features, architecture, technology stack, challenges, engineering decisions, results, learning, screenshots, and links. Known brief facts: MERN-stack event management and booking application; JWT and bcrypt authentication; email OTP verification; event management; booking workflows; admin and user roles; manual admin payment workflow. Do not describe third-party payment integration. Implementation evidence, screenshots, links, outcomes, and challenges are Pending. Use expandable technical sections where useful.

### School Van Monitoring System case study (planned)

Use the same case-study structure. Include fully implemented features and optionally partially implemented features, but verify implementation evidence before making any claim. Label every partially implemented feature clearly; never present partial or planned work as complete. Brief-described capability areas are real-time GPS tracking, parent visibility, driver-recorded student movement, pickup/drop-off status, and admin monitoring/audit information. Their implementation state is Pending verification. Planned stack: React, Vite, Tailwind CSS, Express, MongoDB, Socket.IO, Leaflet, OpenStreetMap. Architecture evidence, screenshots, links, challenges, and results remain Pending. Use expandable technical sections where useful.

### Resume page (planned)

- **Purpose/content:** Dedicated page with online PDF preview, download button, and option to open PDF in a new browser tab; current resume content and PDF Pending.
- **Layout/components:** Planned `ResumePage`, preview region, download link, and open-in-new-tab link.
- **Interactions:** Preview, download, or open approved PDF.
- **Responsive behavior:** Preview remains usable on mobile; download/open provide direct alternatives.
- **Expected states:** Ready, loading, unavailable PDF with a graceful message and clear recovery options.

## Other interactions

- **Theme behavior:** Follow OS `prefers-color-scheme` and apply one independent system. Manual theme selection is not part of approved behavior; no selection is persisted. See [Design System](DESIGN_SYSTEM.md).
- **Terminal:** Display supplied command/output; never run a shell command.
- **Skill bars:** Use Beginner, Intermediate, Advanced levels only when supplied; represent visually with accessible text and progress semantics. Individual levels Pending.
- **Availability:** Read from a dedicated frontend content/configuration file edited by the owner through source changes. Supported labels: Open to Internship Opportunities, Available for Freelance Projects, Open to Both, Currently Unavailable. Initial selection Pending.
- **Project cards:** Show only supplied media, copy, technology, and links.
- **Service cards:** Semantic disclosure controls with announced expanded state.
- **Footer:** Links and back-to-top support keyboard and touch.
