# raheemcantcode.com

Dev portfolio. Next.js 16 (App Router) · TypeScript · Tailwind v4 · MDX.
Deployed on Netlify.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Adding a project

Two files, always in this order:

1. **`lib/projects.ts`** — append a `Project` object. This drives the homepage
   table, the route, the sitemap and the page metadata. Copy the shape of an
   existing entry; the type will tell you what's missing.
2. **`content/<slug>.mdx`** — the case study prose. Only needed if you set
   `caseStudy: true`. Metadata does *not* go in this file.

If `caseStudy: true` and the MDX file is missing, the build fails on purpose —
better than shipping a dead link.

Useful flags on a `Project`:

- `draft: true` — keep the entry, hide it from the site
- `closedSource: true` — renders "closed source" instead of a repo link
- `caseStudy: false` — row shows in the table but isn't clickable

Site-wide copy (bio, email, socials) lives in **`lib/site.ts`**.

## Writing case studies

`PROJECTS.md` is the intake doc — fill in a block there, and it becomes a
`lib/projects.ts` entry plus a `content/<slug>.mdx` file. The `decisions` field
is the one that carries the page; the rest is scaffolding.

MDX styling is centralised in `mdx-components.tsx`, so case studies stay plain
markdown — headings, paragraphs, lists, code, images. No per-file styling.

## Layout

```
app/
  page.tsx                 index — the table
  work/[slug]/page.tsx     case study shell, imports the MDX body
  opengraph-image.tsx      social preview card
  sitemap.ts  not-found.tsx  globals.css  layout.tsx
components/
  tag.tsx                  stack tags + status dot
  ui/table.tsx             shadcn table primitives
content/*.mdx              case study prose
lib/
  projects.ts              source of truth
  site.ts                  bio, email, socials
```

## Deploying

Netlify builds from `main` and serves `raheemcantcode.com`. DNS is managed by
Netlify (NS1 nameservers) — nothing to change there. Build settings come from
`netlify.toml`.
