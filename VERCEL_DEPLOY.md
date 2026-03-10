# Vercel Deployment Plan

This repository should be deployed as two separate Vercel projects.

## Project 1: Main site

- Project name: `hontosozo-main`
- Root directory: `source-snapshot`
- Framework preset: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: leave empty (managed by Next.js)
- Production domain:
  - `hontosozo.com`
  - `www.hontosozo.com` (redirect to `hontosozo.com`)

### Production environment variables

Copy values from `source-snapshot/.env.local` into Vercel Project Settings -> Environment Variables.

- `NEXT_PUBLIC_HCAPTCHA_SITE_KEY`
- `HCAPTCHA_SECRET_KEY`
- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO`
- `RESEND_FROM_EMAIL`
- `SERVICE_URL_STUDY`
- `SERVICE_URL_HOUSING`
- `SERVICE_URL_CONSULTING`

## Project 2: Tarot landing page

- Project name: `hontosozo-tarot`
- Root directory: `Nyanko-tarot/tarot-landing`
- Framework preset: `Vite`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Production domain:
  - `tarot.hontosozo.com`

### Production environment variables

Copy values from `Nyanko-tarot/tarot-landing/.env.local` into Vercel Project Settings -> Environment Variables.

- `VITE_HCAPTCHA_SITE_KEY`
- `VITE_LINE_URL`
- `VITE_API_URL`

Recommended production value:

- `VITE_API_URL=https://hontosozo.com/api/contact`

## Deployment order

1. Deploy `hontosozo-main` first.
2. Attach `hontosozo.com` and confirm the contact API works.
3. Deploy `hontosozo-tarot`.
4. Attach `tarot.hontosozo.com`.
5. Set `VITE_API_URL` in the tarot project to `https://hontosozo.com/api/contact`.
6. Set `VITE_LINE_URL` to the real LINE deep link before launch.

## DNS

If the DNS is managed outside Vercel:

- Apex/root domain: follow the A or ALIAS/ANAME records shown by Vercel for `hontosozo.com`
- `www`: CNAME to the Vercel target shown in the dashboard
- `tarot`: CNAME to the Vercel target shown in the dashboard

If DNS is moved to Vercel, add the domains in the same order and follow the generated records.

## Platform notes

- `Nyanko-tarot/tarot-landing/vercel.json` already rewrites SPA routes to `index.html`, so `/cards`, `/privacy`, and `/terms` can be opened directly on Vercel.
- The tarot landing page bundles images from sibling folders (`Logo`, `Screenshot`, `tarot/rider_waite`) at build time, so no extra static hosting step is needed.
- The main site uses a server-side contact API and should stay on Vercel rather than static-only hosting.

## Smoke test checklist

After both projects are deployed:

1. Open `https://hontosozo.com`
2. Confirm localized main pages load
3. Submit the main site contact form
4. Open `https://tarot.hontosozo.com`
5. Check hero images, screenshots, and tarot card images
6. Open `https://tarot.hontosozo.com/cards`
7. Open `https://tarot.hontosozo.com/privacy`
8. Open `https://tarot.hontosozo.com/terms`
9. Submit the tarot contact form
10. Click every LINE CTA and confirm it opens the real LINE URL
