# Build Contract – Personal CV & Portfolio Website

## 1. Purpose

This document defines the scope, milestones, deliverables, and acceptance criteria for building the personal CV/portfolio website according to the technical specification and ADRs.

## 2. Scope

### 2.1 In Scope

- Implementing the site information architecture defined in the tech spec (home, case studies, contact).
- Implementing the visual design and layout based on an agreed design direction (wireframes or design system tokens).
- Implementing the content model:
   - Decap CMS collections for projects, posts, and key profile information.
   - Config-based CV and site metadata where appropriate.
- Setting up the chosen framework and tooling (as per ADRs):
   - Static-site framework (default: Astro) + TypeScript (or alternative if ADRs are updated).
   - Styling solution (e.g. Tailwind CSS) and design system primitives.
   - Linting, formatting, and basic testing.
- Implementing a contact mechanism (form + mailto fallback) as defined in ADR‑003.
- Integrating Decap CMS (admin UI, collections, GitHub authentication, and build-time content loading).
- Setting up build, deployment, and preview environments on GitHub (GitHub Actions + GitHub Pages).

### 2.2 Out of Scope (v1)

- Advanced analytics/experimentation platforms beyond basic analytics.
- Complex animations and micro-interactions beyond agreed baseline.
- Multi-language/localization support.
- E‑commerce or payment processing.

## 3. Deliverables

1. **Codebase**
    - A version-controlled repository containing:
       - Application source code.
       - Decap CMS configuration (admin UI, config file, and collections).
       - Configuration for GitHub Actions workflows and GitHub Pages deployment (if applicable).
2. **Deployed Site**
   - Production deployment on GitHub Pages at the agreed domain.
   - Preview deployment workflow for changes (e.g. branch or PR-based builds).
3. **Documentation**
   - Updated technical specification reflecting final decisions.
   - ADRs for all major decisions, including any revisions.
   - Short README with setup, development, and deployment instructions.
   - Architecture contracts associated with key ADRs (framework/runtime, content source, contact/forms).
4. **Handover Session (optional)**
   - Walkthrough of codebase, content editing workflow, and deployment process.

## 4. Milestones

1. **M1 – Architecture & Design Alignment**
   - Confirm or adjust tech spec and ADRs.
   - Align on design direction (moodboard, basic layout, or design system tokens).
   - Outputs: finalised tech spec v1, ADRs in “Accepted” or “Superseded” state.

2. **M2 – Foundation Setup**
   - Initialize project with chosen framework, TypeScript, and tooling.
   - Set up basic routing and layout components.
   - Establish design system primitives (typography, colors, spacing, buttons, cards).

3. **M3 – Core Pages & Content**
   - Implement home and case studies listing/detail pages.
   - Migrate initial content (profile data, 2–5 case studies).

4. **M4 – Contact**
   - Implement contact form page and fallback mail link.

5. **M5 – Polish, Performance, and Launch**
   - Accessibility and performance tuning.
   - SEO metadata, OG tags, sitemap, robots.txt.
   - Final content review and production deployment.

## 5. Acceptance Criteria

- **Functional**
  - All in-scope pages and user flows work on current Chrome, Firefox, Safari, and Edge.
  - Contact mechanism successfully delivers messages or clearly falls back to mailto.

- **Quality**
  - Lighthouse scores: performance, accessibility, best practices, and SEO ≥ 90 on main pages (desktop, and as close as feasible on mobile).
  - No critical console errors in normal use.

- **Code & Ops**
  - Project can be installed and run locally via documented commands.
   - Main branch auto-deploys to production on GitHub Pages.
   - Preview environments available for pull requests (where configured in GitHub Actions).

## 6. Ways of Working (Architecture-Led)

- **Architecture first**: Changes that affect architecture or technology should be captured/updated in ADRs before implementation.
- **Contracts as law**: JSON contracts in `docs/contracts` are the authoritative description of "how" work is done for each concern; implementation work must follow them, and any change to behaviour must be made by updating the contract (and related ADR) before changing code.
- **Short iterations**: Work is organised into small milestones with visible increments (e.g. page-by-page).
- **Code review**: All non-trivial changes go through review or at least self-review using pull requests.
- **Documentation updates**: Tech spec, ADRs, and contracts are kept in sync with the implementation at the end of each milestone.

## 7. Open Items

- Confirm final static-site framework choice if not Astro (ADR‑001).
- Confirm whether writing/blog is v1 or v2 scope.
- Finalise Decap CMS collections and fields for projects, posts, and profile data (ADR‑002).
- Confirm any specific branding or design system requirements.
