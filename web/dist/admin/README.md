# Decap CMS — Admin

The CMS admin UI is served from `src/pages/admin/index.astro` and configured via `config.yml`.

Authentication uses GitHub OAuth with PKCE flow. Uploaded media is stored in `uploads/`.

## Starting the app

Both the main site and the CMS admin run from the **same Astro dev server**:

```bash
cd web
npm install    # first time only
npm run dev    # starts at http://localhost:4321/ppm
```

## URLs

| What | URL |
|------|-----|
| Main site (home) | http://localhost:4321/ppm |
| Case studies | http://localhost:4321/ppm/case-studies |
| Contact | http://localhost:4321/ppm/contact |
| **CMS admin** | **http://localhost:4321/ppm/admin** |

## Building for production

```bash
npm run build   # outputs static site to dist/
npm run preview # preview the production build locally
```
