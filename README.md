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

The placeholder Privacy Policy and Terms of Use pages are intentionally marked
`noindex` and excluded from the sitemap. Replace their placeholder copy with
approved legal text before making those routes indexable.

## Production Release Checklist

1. Set `NEXT_PUBLIC_SITE_URL=https://cjwarmstrong.com` in the production environment.
2. Replace the placeholder legal copy in `/privacy-policy` and `/terms-of-use`.
3. Run `npm run lint` and `npm run build`.
4. Deploy and verify `/robots.txt` and `/sitemap.xml` on the production domain.
5. Submit the sitemap in Google Search Console after deployment.

## Vercel And Cloudflare

1. Import this project into Vercel.
2. Add `cjwarmstrong.com` in Vercel project domain settings.
3. In Cloudflare DNS, point the domain records to the values Vercel provides.
4. Keep Cloudflare SSL/TLS mode set to `Full` or `Full (strict)`.
# cjwarmstrong.com
