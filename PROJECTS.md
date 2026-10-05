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

**CASE STUDY RETIRED Oct 2026** — the page at `/work/electrolyte` is gone; detail moved into the card description. Prose kept in `content/electrolyte.mdx`. Drafted from
project memory + the repos, scoped to architecture and decisions only (no client names,
no schemas, no revenue). Read it and correct anything I got wrong; the fields below are
the raw notes it came from.

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

**CASE STUDY RETIRED Oct 2026** — the page at `/work/rignest` is gone; detail moved into the card description. Prose kept in `content/rignest.mdx`. The customer is
never named on the page, deliberately.

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

## 3. Electrolyte HQ (Web)

**OFF THE SITE Oct 2026** — drafted out entirely. Prose kept in `content/electrolyte-crm.mdx`.
Renamed CRM → HQ in Sep 2026; the display name now says HQ, the slug stays `electrolyte-crm`
because that URL is already live and indexed.

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

## Still open

Everything on the index is written. What's left:

1. **Read the three case studies.** They were drafted from my project memory and the
   repos, not dictated by you. Anything that misremembers a decision, or says more about
   a customer than you want said, change it or tell me.
2. **The résumé PDF is out of date.** It still files Electrolyte under "Web Development"
   with a React/Node/Render stack. Electrolyte is iOS; the web work is Electrolyte HQ.
   The site and the PDF now disagree, and the PDF is the one that's wrong.
3. **LinkedIn / X** — still the only `TODO` in `lib/site.ts`. Give me the URLs if you
   want them public; otherwise I'll delete the comment and we're done.
4. **No case studies for the Built By Friday three.** Dably, Too Fast Too Slow and
   Lemonpepper are table rows with no `caseStudy: true`, so they aren't clickable. Dably's
   CI/CD across 8 repos and Lemonpepper's Watch + Garmin ingestion are both worth a page
   if you want them.
5. **Lemonpepper has no App Store link** — has it shipped?
6. **Dably says `shipped`** — the engagement ended Dec 2025. Is `archived` more honest?

Settled, for the record:

- **What the site is for:** showing work. No hire-me line, no ask. That's the framing the
  write-ups use.
- **Disclosure:** architecture and decisions. Engineering specifics stay in (the 48s
  transcript finalisation lag, 41 byte-identical settlements, 144 items across 31
  cohorts). Customer names, schemas and revenue stay out.
- **HeemToken:** off the site.
- **Sorbet / Language Dashboard / this site:** off, for now. Sorbet has no Swift written;
  Language Dashboard overlaps Electrolyte enough to confuse.

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
