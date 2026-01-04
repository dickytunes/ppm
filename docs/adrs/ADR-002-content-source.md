# ADR 002 – Content Source Strategy

- **Status**: Proposed
- **Date**: 2026-01-04

## Context

The site will include relatively low-volume but important content:

- Projects/portfolio case studies.
- Profile/home page information.

There is a desire to manage content through a browser-based CMS, while still deploying a fully static site to GitHub Pages and keeping content versioned in git.

## Decision

Use **GitHub + Markdown in-repo** as the primary content source. Editors change content via GitHub UI/PRs; Astro consumes Markdown/JSON/YAML from the repository at build time. No in-browser CMS/admin is required, so there is no OAuth flow to manage on GitHub Pages.

## Rationale

- Enables content changes via a web UI (Decap admin) while still storing content in git.
- Structured collections make it easier to reuse information across pages (e.g. projects on home and projects pages).
- Works well with static generation: content is treated as local files at build time.
- No separate hosted CMS infrastructure is required beyond GitHub Pages and the repository.

## Consequences

- Requires clear folder structure and frontmatter schema for case studies, footer company logos, and profile data; editors use GitHub workflows (PR/review) to change content.
- Editorial access is tied to GitHub repository permissions.
- Content changes trigger commits to the repository, which in turn trigger builds and deployments.
- The repository will contain both code and content; care is needed when managing branches and reviews.