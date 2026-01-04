# Contact Form Configuration

The site uses a static-friendly form provider (Formspree by default) and a mailto fallback. Content and configuration are Git-managed.

## Form Provider Endpoint
- Current endpoint (in code): `https://formspree.io/f/xbldlbwk`
- File to edit: `web/src/pages/contact.astro`
- To change the endpoint: replace the `formEndpoint` string with your Formspree form ID (or other provider URL).
- Success redirect: controlled by the hidden `_redirect` field pointing to `/contact?submitted=1` (respects the Astro base path).

## Mailto Fallback
- File: `web/src/pages/contact.astro`
- Update the `mailto:` link with your email and subject.

## Spam Protection
- Honeypot field `_honeypot` is included. Leave it hidden and empty.

## Testing
- Submit the form on `/contact`; you should see a success message when redirected back with `?submitted=1`.
- If the provider is misconfigured or unavailable, the mailto link remains visible.

## Notes
- No CMS/admin is used; edit content/config directly in the repo.
- Hosted on GitHub Pages; no serverless functions are required.
