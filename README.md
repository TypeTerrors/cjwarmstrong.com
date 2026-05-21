# CJW Armstrong Website

Next.js starter project configured for Vercel deployment and basic search indexing.

## Scripts

```bash
npm run dev
npm run build
npm run start
```

## Environment

Copy `.env.example` to `.env.local` and update the URL if needed.

```bash
NEXT_PUBLIC_SITE_URL=https://cjwarmstrong.com
```

## Search Indexing

The site generates:

- `/sitemap.xml` from `app/sitemap.ts`
- `/robots.txt` from `app/robots.ts`

After deployment, submit `https://cjwarmstrong.com/sitemap.xml` in Google Search Console.

## Vercel And Cloudflare

1. Import this project into Vercel.
2. Add `cjwarmstrong.com` in Vercel project domain settings.
3. In Cloudflare DNS, point the domain records to the values Vercel provides.
4. Keep Cloudflare SSL/TLS mode set to `Full` or `Full (strict)`.
# cjwarmstrong.com
