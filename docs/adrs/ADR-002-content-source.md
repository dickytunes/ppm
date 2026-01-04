# ADR 002 – Content Source Strategy

- **Status**: Proposed
- **Date**: 2026-01-04

## Context

The site will include relatively low-volume but important content:

- Projects/portfolio case studies.
- Profile/home page information.

There is a desire to manage content through a browser-based CMS, while still deploying a fully static site to GitHub Pages and keeping content versioned in git.

## Decision

Use **Decap CMS** (a Git-based CMS) as the primary editorial interface for case studies and key profile/site settings information, with content stored in Markdown/JSON/YAML files in the repository. Site settings and configuration also live in version control. Authentication uses Decap's GitHub backend with **implicit OAuth** (GitHub OAuth app) so that the admin runs entirely on GitHub Pages without additional servers.

## Rationale

- Enables content changes via a web UI (Decap admin) while still storing content in git.
- Structured collections make it easier to reuse information across pages (e.g. projects on home and projects pages).
- Works well with static generation: content is treated as local files at build time.
- No separate hosted CMS infrastructure is required beyond GitHub, the OAuth app, and static site hosting on GitHub Pages.

## Consequences

- Requires configuration of Decap CMS (admin UI, GitHub backend with implicit OAuth, and collection definitions for case studies, footer company logos, and profile data).
- Editorial access is tied to GitHub repository permissions.
- Content changes trigger commits to the repository, which in turn trigger builds and deployments.
- The repository will contain both code and content; care is needed when managing branches and reviews.