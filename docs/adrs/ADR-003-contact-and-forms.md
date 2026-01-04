# ADR 003 – Contact Form Handling

- **Status**: Proposed
- **Date**: 2026-01-04

## Context

The portfolio should provide a simple, reliable way for visitors to get in touch. Requirements:

- Collect name, email, and message.
- Avoid exposing email directly to bots if possible.
- Minimize operational complexity.

The site will be hosted as a fully static site on GitHub Pages, which does not provide built-in serverless functions.

## Decision

Use a **third-party form service** compatible with static sites (e.g. Formspree or similar) to receive form submissions and forward them via email to the site owner, with a mailto link as a basic fallback.

## Rationale

- Works with static-only hosting on GitHub Pages (no custom backend required).
- Reduces operational overhead by delegating delivery and basic spam protection to a specialised provider.
- Keeps implementation simple while still providing a professional contact experience.

## Consequences

- Requires configuration of the chosen form service (endpoints, allowed domains, spam settings).
- Introduces dependence on a third-party provider for form delivery.
- If requirements expand (e.g. CRM integration, more complex workflows), an additional ADR may introduce a more advanced solution.