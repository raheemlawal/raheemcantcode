# PROJECTS.md

This is the source of truth for the portfolio. Fill in a block, and I turn it into
`lib/projects.ts` (the table row) + `content/<slug>.mdx` (the case study page).

**How to use it:** bullets and fragments are fine — don't write prose, I'll do that.
Skip any field you don't have; blank is better than invented. To add project #12 later,
copy the template at the bottom, fill it, tell me "add the new one."

Fields marked **[table]** show up on the homepage row. Everything else is case-study only.

---

## Field reference

| Field | Notes |
|---|---|
| **name** [table] | Display name |
| **slug** | URL: `raheemcantcode.com/work/<slug>`. I'll pick one if you don't. |
| **category** [table] | iOS / Web / Backend / Tool / Experiment — keep the vocabulary small |
| **status** [table] | `live` · `in progress` · `shipped` · `archived` |
| **year** [table] | `2026` or `2024–25` |
| **stack** [table] | The tags. 3–6 max, most important first |
| **one-liner** [table] | ~10 words. What it is, not why it's cool |
| **links** [table] | repo / live site / App Store / video. `closed source` is a valid answer |
| **problem** | What was broken or missing, and for whom |
| **what it does** | The product, 2–3 sentences |
| **my role** | Only if it wasn't solo — what was yours specifically |
| **decisions** | 2–4 technical calls you'd defend in an interview, and why. **The most important field.** |
| **hardest part** | The bug, constraint, or dead end you fought. Specifics beat adjectives. |
| **outcome** | Users, scale, revenue, review status — whatever's real. "Not shipped yet" is a fine answer. |
| **media** | Screenshots, screen recordings, diagrams. Paths or "I'll send them" |

On **decisions**: this is the field that does the work. Not "used Supabase" —
"used Supabase over Firebase because I needed row-level security per organization and
Postgres joins for the metrics queries." That's the difference between a list of projects
and a portfolio.

On **closed source**: for Electrolyte, RigNest, and the CRM there's no repo to click, so
the write-up *is* the evidence. Tell me what you can say publicly and I'll keep to it —
architecture and decisions are almost always safe, customer names and schemas usually aren't.

---

## 1. Electrolyte (iOS)

Pre-filled from what I know — **correct anything wrong**, it's from memory, not the code.

- **name:** Electrolyte
- **slug:** `electrolyte`
- **category:** iOS — confirmed Aug 2026. The résumé still lists Electrolyte under
  "Web Development" with a React/Node/Render stack; that's out of date, and the résumé
  PDF should be updated to match. The web-side work lives in **Electrolyte CRM**.
- **status:** in progress — App Store submission
- **year:** 2026
- **stack:** SwiftUI, Supabase, Postgres, APNs
- **one-liner:**
- **links:** closed source · App Store:
- **problem:**
- **what it does:**
- **my role:**
- **decisions:** _(candidates I'd guess are here — pick the real ones)_
  - the adaptive training algorithm (phases A/B/C) — how does it decide what to serve next?
  - per-language metrics + the scenario content pipeline (144 items, 31 cohorts, generated audio)
  - APNs + server-side timezone-aware scheduling instead of local notifications — why?
- **hardest part:** _(the challenge-scoring race is a good one — transcript finalization
  lagging call-end past the app's timeout. Real bug, real diagnosis, real fix.)_
- **outcome:**
- **media:**

## 2. RigNest (Web)

- **name:** RigNest
- **slug:** `rignest`
- **category:** Web
- **status:** live
- **year:** 2026
- **stack:** React, Supabase, Vercel
- **one-liner:**
- **links:** closed source · site: `app.rignest.io`
- **problem:**
- **what it does:**
- **my role:**
- **decisions:**
- **hardest part:**
- **outcome:**
- **media:**

## 3. Electrolyte CRM (Web)

- **name:**
- **slug:** `electrolyte-crm`
- **category:** Web
- **status:**
- **year:** 2026
- **stack:** Next.js, Supabase, TypeScript
- **one-liner:**
- **links:** closed source
- **problem:**
- **what it does:**
- **my role:**
- **decisions:**
- **hardest part:**
- **outcome:**
- **media:**

---

## Built By Friday

These three shipped under the agency, so they're grouped under their own heading on
the index (`org: "Built By Friday"` in `lib/projects.ts`). Table metadata below is
from the résumé; everything under **problem** is still yours to fill in.

## 5. Dably (Web)

- **name:** Dably
- **slug:** `dably`
- **category:** Web
- **status:** shipped _(engagement ended Dec 2025 — or is "archived" more honest?)_
- **year:** 2023–25
- **stack:** React, FastAPI, Supabase, Railway
- **one-liner:** Education platform — admin suite and user-facing apps.
- **links:** dably.co
- **problem:**
- **what it does:**
- **my role:** CTO — architected the app suite, designed the CI/CD pipeline across 8
  repos, managed 5 outsourced engineers from Figma to MVP, ran a 4-figure infra budget
- **decisions:** _(the CI/CD design across 8 repos is the interview-grade one)_
- **hardest part:**
- **outcome:**
- **media:**

## 6. Too Fast Too Slow (iOS)

- **name:** Too Fast Too Slow
- **slug:** `too-fast-too-slow`
- **category:** iOS
- **status:** live
- **year:** 2023–
- **stack:** SwiftUI, Game Center, StoreKit
- **one-liner:** Reflex game on the App Store, 350k impressions across 5 continents.
- **links:** apps.apple.com/us/app/too-fast-too-slow/id6471321976
- **problem:**
- **what it does:**
- **decisions:**
- **hardest part:**
- **outcome:** 350,000 impressions across 5 continents; beta rounds feed each release
- **media:**

## 7. Lemonpepper (iOS)

- **name:** Lemonpepper
- **slug:** `lemonpepper`
- **category:** iOS
- **status:** in progress _(no App Store link on the résumé — has it shipped?)_
- **year:** 2024–
- **stack:** SwiftUI, FastAPI, GPT-4, HealthKit
- **one-liner:** Fitness app with an AI running coach, synced to Watch and Garmin.
- **links:** _(App Store link needed)_
- **problem:**
- **what it does:**
- **decisions:** _(HealthKit → Apple Watch + Garmin ingestion is the meaty one)_
- **hardest part:**
- **outcome:**
- **media:**

---

## Undecided — do these go on?

Tell me in / out for each. A portfolio of 4 strong entries beats 8 with filler.

- **Sorbet** — spec + live schema, no Swift yet. In-progress entries can work if the
  write-up is about the design thinking, but only if you actually intend to build it.
- **Language Dashboard** — Next.js language learning app. Does it overlap Electrolyte
  enough to be confusing?
- **This site** — some people list the portfolio itself. Cute or self-indulgent, your call.
- Anything older, from work, or non-code that belongs here and I don't know about.

---

## About you

The table needs a header, and case studies need a byline.

- **one-line bio:** on the site now, from the résumé — Boeing senior SWE + Built By
  Friday founder. Rewrite it in your own voice when you get a minute (`lib/site.ts`).
- **what you're looking for:** (job / freelance / nothing, just showing work)
- **contact:** email + GitHub + résumé PDF are live. LinkedIn/X still TODO in
  `lib/site.ts` — give me the URLs if you want them public. Phone number is on the
  résumé PDF but deliberately not in the page HTML.
- **the name:** is "raheemcantcode" a joke you're committing to on the page, or just the URL?

---

## Template — copy for each new project

```
## <name>

- **name:**
- **slug:**
- **category:**
- **status:**
- **year:**
- **stack:**
- **one-liner:**
- **links:**
- **problem:**
- **what it does:**
- **my role:**
- **decisions:**
- **hardest part:**
- **outcome:**
- **media:**
```
