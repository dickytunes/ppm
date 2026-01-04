# Technical Specification – Personal CV & Portfolio Website

## 1. Overview

- **Purpose**: Redevelop the personal CV/portfolio site to clearly present professional profile as a web developer and software engineering manager, showcase case studies, and act as a conversion point for new work (inquiries, collaborations, or roles).
- **Primary outcomes**:
  - Clear, modern representation of skills and experience.
  - Easy to maintain and extend over time (content, case studies).
  - Fast, accessible site that works well on mobile and desktop.
  - Hosted as a static site on GitHub Pages, fronted by GitHub's CDN.
  - No single points of failure in custom infra (use managed services/third parties where possible).
  - Content edited directly in GitHub (Markdown in repo); no in-browser CMS/admin required.

> NOTE: Items marked **[TBC]** are assumptions that should be confirmed or edited.

### 4.1 Functional Requirements

1. **Home / Landing**
  - Hero section with name, roles (web developer and engineering manager), location, and key value proposition.
  - Short summary of experience and focus areas.
  - Highlighted links or cards pointing to featured case studies and contact.

2. **Case Studies**
  - Listing of case studies with title, short description, key technologies, and role.
  - Detail view per case study with problem, approach, outcome, and visuals.

3. **Contact**
  - Contact form (name, email, message) with validation.
  - Privacy note and consent copy for data handling.
  - Direct mailto link as fallback.

4. **Global**
  - Navigation: Left-side vertical navigation with icon-based primary links positioned at the top for Home, Case Studies, and Contact, with accessible labels/tooltips. Collapses to hamburger menu on mobile.
  - Sub-footer: Dedicated section above main footer displaying company logos representing places worked or collaborated with (editable via CMS).
  - Footer: Main footer containing copyright notice and social links (GitHub, LinkedIn, etc.).

### 4.2 Non‑Functional Requirements

1. **Performance**
   - Lighthouse performance score ≥ 90 on core pages on a mid‑range device.
   - First contentful paint (FCP) target < 2s on 3G/4G networks.

2. **Accessibility**
   - Aim for WCAG 2.1 AA level for key flows.
   - Keyboard navigable; sufficient color contrast; semantic HTML.

3. **Look & Feel**
  - Dark, off-black theme as the primary mode (no separate light theme for v1).
  - Left-side vertical navigation on desktop, collapsing to hamburger on mobile.
  - Navigation icons and UI elements use off-white (slightly muted, not pure white) for visual harmony.
  - Use subtle gradients and shadows to create depth without hurting readability.
  - Subtle, performance-friendly animations (e.g. hover states, section fades) that respect prefers-reduced-motion.

4. **SEO & Sharing**
  - Basic SEO metadata (titles, descriptions, canonical URLs).
  - Open Graph / Twitter cards for main pages and projects.
  - Sitemap and robots.txt.
  - Privacy-friendly analytics using Plausible.

5. **Reliability & Availability**
  - Hosted as a static site on GitHub Pages, fronted by GitHub's CDN.
  - No single points of failure in custom infra (use managed services/third parties where possible).

6. **Maintainability**
   - Codebase structured with clear separation of concerns (components, layout, content).
   - Typed code where feasible.
   - Automated formatting and linting.

## 5. Information Architecture & Content Model

### 5.1 Site Map (v1)

- `/` – Home / Landing
- `/case-studies` – Case studies listing
- `/case-studies/[slug]` – Individual case study detail
- `/contact` – Contact (form + info)

### 5.2 Content Model (Logical)

- **Person**
  - Name, title, location, summary, avatar image, social links.

- **Experience item**
  - Company, role, start/end dates, description, skills.

- **Case study**
  - Title, slug, summary, long description, role, technologies, links (live/demo, repo), images, outcomes.

- **Company logo** (for footer)
  - Company name, logo image, optional link, ordering.

- **Site settings**
  - Navigation (icon mapping, labels), footer links, metadata defaults.

> Implementation detail: these entities are stored as Decap-managed Markdown/JSON/YAML files in the repository (Git-based CMS), with minimal additional config files where needed.

## 6. Architecture Overview

### 6.1 Rendering & Delivery Approach

- **Primary pattern**: Static Site Generation (SSG) with a fully static export suitable for GitHub Pages (no runtime server).
- **Rationale**:
  - Content changes are infrequent; static builds are acceptable.
  - Enables CDN-level caching, strong performance, and low runtime cost.
  - Simplifies operations: no dedicated server to manage; hosting is static-only.
  - Decap admin runs on GitHub Pages using GitHub OAuth implicit flow (no separate auth server).

### 6.2 Application Architecture

- Component-based UI with a design system (typography, color, spacing, buttons, cards, layout).
- Routing handled by the chosen framework (file-based routing in Astro).
- Data loading at build time from Git-managed Markdown/JSON/YAML content stored in the repo (no external CMS).
- Contact form handling via a third-party form provider compatible with static hosting.

## 7. Technology Stack (Proposed)

> All of the following are **proposed defaults** and can be changed during ADR review.

### 7.1 Frontend Framework

- **Framework**: Astro
- **Language**: TypeScript
- **UI Layer**: Astro components with optional islands for interactivity
- **Styling**: Tailwind CSS with custom design tokens for the dark off-black theme

### 7.2 Content Source

- **Default proposal**: **Decap CMS** (Git-based CMS) as the primary editorial interface for projects, posts, and key profile content, with content stored as Markdown/JSON/YAML files in the repository.
- Pros: Browser-based editing UI; content is versioned in git; works naturally with static builds; no separate hosted CMS infrastructure required.
- Cons: Editorial access tied to repository permissions; content changes create commits; branch strategy and review flow need to account for content updates.

> Decap collection configuration and content models are defined in ADR‑002 and the Decap config file.

### 7.3 Deployment & Hosting

- **Default**: Deploy as a static site to **GitHub Pages**.
  - Static build generated by Astro.
  - GitHub Actions workflow to build the site and publish to the `gh-pages` branch or GitHub Pages artifact.
  - Optionally use branch or PR-based preview builds via GitHub Actions.

### 7.4 Tooling

- Package manager: pnpm or npm **[TBC]**
- Formatting: Prettier
- Linting: ESLint (with TypeScript support and accessibility rules)
- Testing (optional v1):
  - Unit tests with Jest or Vitest for key components.
  - Playwright or Cypress for key end-to-end flows **[v2+ option]**.

## 8. Security, Privacy, and Compliance

- No sensitive personal data beyond contact form fields.
- Contact form submissions:
  - Use a trusted third-party form service compatible with static hosting to send email.
  - Apply basic spam protection (honeypot or simple challenge).
- Provide a concise privacy notice describing what is collected and how it’s used.
- Analytics use a privacy-conscious provider (Plausible) with IP anonymisation and no invasive tracking.

## 9. Environments & Branching

- **Environments**:
  - Local: Developer machines.
  - Preview: Auto-generated per PR.
  - Production: Main branch deployments.

- **Branching model**:
  - `main` – production-ready code.
  - Short-lived feature branches for changes.

## 10. Risks & Open Questions

- Confirm final static-site framework choice (Astro vs alternative) **[TBC]**

Once these questions are resolved, this spec should be updated and then used to drive ADRs and an implementation contract.