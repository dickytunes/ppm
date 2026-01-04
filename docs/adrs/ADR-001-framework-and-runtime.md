# ADR 001 – Framework and Runtime

- **Status**: Proposed
- **Date**: 2026-01-04

## Context

The personal CV/portfolio website needs a modern, maintainable frontend stack that:

- Produces a fully static site suitable for hosting on GitHub Pages.
- Is widely adopted and well supported in the ecosystem.
- Integrates easily with a headless CMS for content.
- Provides a productive developer experience with TypeScript.

## Decision

Use a **static site generator**, with **Astro + TypeScript** as the default choice, building a fully static site that is deployed to **GitHub Pages** via GitHub Actions.

## Rationale

- Astro is optimised for content-focused, static sites and works well with GitHub Pages.
- Supports hybrid rendering (static pages with optional interactive islands) without requiring a full server runtime.
- Flexible integration with headless CMS APIs at build time.
- Simple deployment story: static assets published to GitHub Pages.

## Consequences

- The project will be structured as an Astro site, with TypeScript-enabled components.
- Tailwind CSS will be used for styling with custom configuration for the dark off-black theme.
- There is no SSR at runtime; all dynamic behaviour must be implemented via client-side code or precomputed at build time.
- Contact forms and similar features must rely on third-party services or external endpoints compatible with static hosting.
- If a different framework is later preferred, this ADR should be updated or superseded with a new decision record.