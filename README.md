# Master's Graduation — A Journey Completed

A Next.js (App Router) rebuild of the original single-file graduation page
(`Master's Graduation_ A Journey Completed (1).html`, kept for reference).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit it

- **Text, names, dates, milestones, gift link:** `app/content.ts`
- **Hero photo:** put an image at `public/graduation-photo.jpg` (a placeholder shows until you do)
- **Gallery photos:** add files under `public/` and set `image` on items in `app/content.ts`
- **Styles:** `app/globals.css`

## Structure

- `app/layout.tsx` — fonts (via `next/font`), metadata, viewport
- `app/page.tsx` — the page sections
- `app/components/Envelope.tsx` — the sealed opener
- `app/components/HeroPhoto.tsx` — photo with fallback
- `app/components/Gallery.tsx` — swipe rail with position dots
