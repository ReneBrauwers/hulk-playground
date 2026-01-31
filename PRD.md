# PRD — Hulk Landing Page + Portfolio (Astro + TypeScript, static-first)

## 1) Overview / Vision (What & Why)
**What:** A minimalist, static-first personal landing page + portfolio site built with **Astro + TypeScript**, consisting of **/**, **/about**, and **/projects**, with shared **nav + footer**, and **dark/light-friendly** styling.

**Why:** Provide a fast, accessible, and maintainable web presence that highlights identity and work (projects) without unnecessary complexity, tracking, or dynamic features.

## 2) Goals
- Present a clear personal/brand introduction and primary call-to-action (view projects).
- Showcase projects in a scannable, credible way (links, descriptions, tech).
- Maintain a clean, minimalist aesthetic that works in dark and light contexts.
- Ship as a static site compatible with **GitHub Pages**.

## 3) Success Criteria (Measurable)
### UX & Content
- Users can reach **Projects** from the homepage in **<= 1 click**.
- Each project entry exposes: **name, short description, tech/tags (optional), and at least one link** (e.g., GitHub/live).

### Performance
- Lighthouse (mobile) targets on all pages:
  - **Performance >= 95**
  - **Accessibility >= 95**
  - **Best Practices >= 95**
  - **SEO >= 90**
- **No client-side JavaScript shipped by default** (only if strictly necessary and justified).

### Accessibility (WCAG AA basics)
- Color contrast meets **WCAG 2.1 AA** for text and UI components.
- Full keyboard navigation for all interactive elements.
- Visible focus states across the site.

### Privacy
- **No analytics, cookies, trackers**, or third-party embeds that set cookies by default.

## 4) In Scope
- Astro + TypeScript project setup (static output).
- Pages: **/**, **/about**, **/projects**.
- Shared layout with **header/nav** and **footer**.
- Minimalist styling with dark/light-friendly support (system preference and/or toggle-free neutral design).
- Basic SEO metadata per page (title, description, canonical/base path as needed).
- GitHub Pages-ready build configuration and deployment expectations.

## 5) Out of Scope (Explicit)
- Blog / posts system
- Contact form, email sending, or CRM integrations
- Authentication / user accounts
- Database / CMS / admin panel
- Comments
- Site search
- Internationalization (i18n)
- Animations (beyond minimal CSS for usability, e.g., focus/hover states)
- Analytics / cookies / tracking pixels
- Heavy client-side SPA behavior

## 6) Assumptions
- Content (bio text, social links, and project details) will be provided as plain data (e.g., local JSON/TS module/Markdown content) and can be updated via repo changes.
- Hosting is via **GitHub Pages** (static hosting), so server-side features are not available.
- “Zero JS unless needed” allows Astro’s minimal runtime approach and excludes adding client hydration unless a requirement truly demands it.

## 7) Target Users / Personas
- **Recruiters / hiring managers:** want quick proof of capability and easy navigation to projects.
- **Engineering peers:** want technical credibility (stack, links to code, demos).
- **General visitors:** want a clear overview and minimal friction.

## 8) Information Architecture
- **Global Header/Nav:** links to Home, About, Projects.
- **Footer:** copyright, optional social links (GitHub, LinkedIn, etc.).
- **/** (Home): short intro + primary link to Projects.
- **/about:** longer bio, skills/stack summary, values/approach, optional resume link (file link only).
- **/projects:** list/grid of projects with detail snippets and links.

## 9) Functional Requirements (FR)

### FR-1: Global Layout (Nav + Footer)
- Header includes site name/identity and nav links: **Home**, **About**, **Projects**.
- The current page is visually indicated (e.g., `aria-current="page"`).
- Footer appears on all pages and includes at minimum a simple text line and optional external links.

**Acceptance Criteria**
- Keyboard users can tab through header links in a logical order.
- Active nav item has `aria-current="page"` and a visible style change.

### FR-2: Home Page (/)
- Displays primary identity (name/role) and a concise value statement.
- Provides a clear primary CTA to **/projects** and secondary navigation to About.

**Acceptance Criteria**
- Above-the-fold content includes a link to /projects.
- Page has unique `<title>` and meta description.

### FR-3: About Page (/about)
- Contains an “About” section (bio) and a “Skills/Stack” section (bulleted or short paragraphs).
- Optional: links to GitHub/LinkedIn and/or a downloadable resume (static asset).

**Acceptance Criteria**
- Headings follow a logical hierarchy (single H1, then H2/H3).
- External links use safe attributes where relevant (e.g., `rel="noopener noreferrer"` when `target="_blank"` is used).

### FR-4: Projects Page (/projects)
- Shows a list/grid of projects generated from a local data source.
- Each project card/row includes:
  - Name
  - Short description
  - Optional tags/tech
  - At least one link (GitHub and/or live demo)
- Supports projects with missing optional fields gracefully.

**Acceptance Criteria**
- All project entries render without layout breakage even if tags are absent.
- Links are clearly labeled and accessible (no “click here”).

### FR-5: Styling (Minimalist, Dark/Light-Friendly)
- Use a small set of CSS variables for colors/typography.
- Respect `prefers-color-scheme` and maintain readable contrast in both modes.
- No decorative animation; only essential interaction states (hover/focus) allowed.

**Acceptance Criteria**
- Text contrast meets WCAG AA in both light and dark modes.
- Focus outlines are visible on all interactive elements.

### FR-6: Static-first + “Zero JS unless needed”
- Default pages ship as static HTML/CSS with no hydration.
- Any JavaScript usage must be justified as necessary and documented (what, why, and how it impacts performance/privacy).

**Acceptance Criteria**
- Build output contains no client-side JS bundles unless explicitly added for a justified requirement.
- If JS exists, it is scoped to the smallest surface area.

### FR-7: GitHub Pages Readiness
- Site builds to a static directory compatible with GH Pages.
- Configure base path handling appropriate for repository deployments (e.g., `site`/`base` configuration as needed).

**Acceptance Criteria**
- A production build can be generated and served statically without runtime errors.
- Routes resolve correctly under the expected GitHub Pages base path.

## 10) Non-Functional Requirements (NFR)

### NFR-1: Accessibility (WCAG AA basics)
- Keyboard operability throughout.
- Visible focus states.
- Semantic landmarks (`header`, `nav`, `main`, `footer`).
- Images (if any) include appropriate `alt` text.

### NFR-2: Performance
- Minimal CSS footprint and no unnecessary JS.
- Optimize images (if used) and avoid layout shifts.
- Use modern, system-first fonts where possible to avoid heavy font loads.

### NFR-3: Security & Privacy
- No cookies, analytics, or tracking beacons.
- No third-party scripts by default.
- External links handled safely.

### NFR-4: Maintainability
- Content and configuration stored in clearly named files/modules.
- Components are small and reusable (layout, nav, footer, project card).
- TypeScript types for project data.

### NFR-5: SEO Basics
- Unique titles and meta descriptions for each page.
- Single canonical URL strategy consistent with GH Pages base path.
- Open Graph/Twitter meta tags (static, no tracking).

## 11) User Stories (Testable)

### US-1: Navigate core pages
**As a visitor**, I want a consistent navigation menu, **so that** I can move between Home, About, and Projects easily.  
**Acceptance Criteria:** Nav appears on all pages; active page indicated with `aria-current`.

### US-2: Understand who this site represents
**As a visitor**, I want a clear intro on the homepage, **so that** I can quickly understand the person/brand and purpose.  
**Acceptance Criteria:** Homepage includes identity + short description + link to /projects.

### US-3: Learn background and skills
**As a recruiter**, I want an About page with bio and skills, **so that** I can assess fit quickly.  
**Acceptance Criteria:** About has structured headings and a scannable skills section.

### US-4: Evaluate projects quickly
**As a hiring manager**, I want a projects list with descriptions and links, **so that** I can verify experience and explore work samples.  
**Acceptance Criteria:** Each project shows name + description + at least one link.

### US-5: Use the site without barriers
**As a keyboard-only user**, I want visible focus and logical tab order, **so that** I can operate the site efficiently.  
**Acceptance Criteria:** All interactive elements are reachable and have visible focus.

### US-6: Trust the site’s privacy posture
**As a privacy-conscious visitor**, I want no analytics/cookies, **so that** I can browse without being tracked.  
**Acceptance Criteria:** No analytics scripts; no cookie banners; no third-party tracking.

## 12) Content Requirements (Inputs Needed)
- Display name and role/title
- Short tagline/value statement
- Bio (short + optionally long)
- Skills/stack list
- Social links (GitHub required; others optional)
- Projects dataset:
  - `name` (required)
  - `description` (required)
  - `links` (>= 1 required)
  - `tags/tech` (optional)
  - `status` or `year` (optional)

## 13) Milestones (High Level)
1. IA + layout components (header/nav/footer, base styles)
2. Page implementation: Home, About, Projects
3. Accessibility & SEO pass
4. GitHub Pages build validation and base-path verification
