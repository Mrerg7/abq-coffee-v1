# ABQ.Coffee

Informational site for an Albuquerque coffee brand concept + domain acquisition listing.

**Domain available for acquisition — $100,000 USD** → [sales@desertrich.com](mailto:sales@desertrich.com)

## Stack

- Astro 5 static · Tailwind · TypeScript · Cloudflare Workers Static Assets
- Hero video via Cloudflare Stream

## Deploy

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

## SEO checklist (on-page, shipped)

- [x] Title/description with domain + price + buyer intent (`src/config/site.ts` defaults)
- [x] Self-referencing canonical on every page, trailing-slash normalized (Layout + `src/worker.ts` Link header)
- [x] `www` / `http` / `/index.html` → apex 301; 404s `noindex` (worker + `src/pages/404.astro`)
- [x] Sitemap (`/sitemap-index.xml`) referenced from `robots.txt` via `@astrojs/sitemap`
- [x] Structured data: `Organization`, `WebSite`, `WebPage`, `Product` + `Offer` ($100,000), `FAQPage` (matches visible FAQ), `BreadcrumbList`, `Article` on posts
- [x] Single H1 per page; FAQ + how-to-buy + inquiry form on homepage
- [x] `llms.txt` + `hreflang`, OG/Twitter cards with image alt
- [x] Insights content hub (`/insights/`) — 5 indexable posts, internally linked
- [x] Google Fonts via `<link>` + preconnect (no CSS `@import`)
- [x] Security headers, `Cache-Control: must-revalidate` for HTML

## DA checklist (off-site, do these after deploy)

1. **Search Console + Bing** — verify (meta already in Layout), submit `https://abq.coffee/sitemap-index.xml`, request indexing for `/` and `/insights/`.
2. **GitHub repo homepage** — set the repo About → homepage to `https://abq.coffee` (DA-98 backlink; repo already links the domain).
3. **Marketplace listings** — list on Sedo, Afternic/SedoADS, Dan.com, Atom.com, GoDaddy Auctions. Each listing page is a live backlink and buyer channel; point the listing URL at the apex.
4. **Escrow/marketplace profile links** — seller profile on Escrow.com / Dan with site URL.
5. **Cross-link the Desert Rich portfolio** — add a footer link to `abq.coffee` from sister domains you control (desertrich.com, other ABQ/coffee domains) — relevant, editorial, not a PBN pattern (link from contextual blocks, not sitewide boilerplate).
6. **Social/profile links** — X, LinkedIn company, Bio.link/Linktree, Behance; all pointing to the apex.
7. **Content syndication** — republish 1–2 insights on Medium/Substack with `rel=canonical` back to the original; post to r/coffee and r/Entrepreneur threads about naming a coffee business (editorial, not spam).
8. **Niche directories** — Albuquerque business roundups, "premium .coffee domains for sale" lists, DNForum/Sedo forum signature (where allowed).
9. **Digital PR** — respond to HARO/Connectively queries on brand naming and specialty coffee; each placement is a genuine authority link.
10. **Measure** — track DA/DR monthly; target: GSC impressions on `ABQ coffee` + `Albuquerque coffee domain` queries, referral visits to `#acquisition`.
