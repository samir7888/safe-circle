# Safety app website (Next.js, SEO friendly)

## Run it
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Before you publish
1. Open `lib/config.ts` and change `name` (currently a placeholder "SafeCircle"), text, FAQ, and optional `contactEmail`.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real domain.
3. Deploy to Vercel (import the repo, add the same env variable).
4. Add the site to Google Search Console and submit `https://your-domain.com/sitemap.xml`.
   Paste the verification code in `app/layout.tsx` (`verification.google`).

## Included SEO
Metadata + canonical URL, Open Graph/Twitter card (auto-generated image), sitemap.xml, robots.txt,
JSON-LD (MobileApplication, WebSite, FAQPage), semantic headings, fast server-rendered HTML.
