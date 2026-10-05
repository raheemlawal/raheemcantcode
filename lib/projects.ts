/**
 * The single source of truth for the portfolio.
 *
 * To add a project: append an object to `projects`. That's the whole job —
 * the homepage table, the case-study route, the sitemap and the link previews
 * all read from here.
 *
 * If you set `caseStudy: true`, there must be a matching `content/<slug>.mdx`
 * or the build will fail (loudly, on purpose — better than a dead link).
 */

export type Category =
  | "iOS"
  | "Web"
  | "Backend"
  | "Tool"
  | "Experiment"
  | "Agency";

export type Status = "live" | "in progress" | "shipped" | "archived";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  /** URL segment: /work/<slug> */
  slug: string;
  name: string;
  category: Category;
  status: Status;
  /** "2026" or "2024–25" */
  year: string;
  /** 3–6 tags, most important first */
  stack: string[];
  /** ~10 words for the table row */
  oneLiner: string;
  /** Shown on the case-study page, not the table */
  links?: ProjectLink[];
  /** Renders "closed source" instead of a repo link */
  closedSource?: boolean;
  /** Requires content/<slug>.mdx to exist */
  caseStudy?: boolean;
  /** Hide from the index without deleting the entry */
  draft?: boolean;
  /**
   * "venture" is a business I run; everything else is a project. The index
   * renders them as two separate sections, which is why Built By Friday
   * appears exactly once, as a venture, and never as a heading over the
   * projects it produced.
   */
  group?: "venture";
};

export const projects: Project[] = [
  // Ventures — the businesses.
  {
    slug: "electrolyte",
    name: "Electrolyte",
    category: "iOS",
    status: "live",
    year: "2026",
    stack: ["SwiftUI", "Supabase", "Postgres", "APNs"],
    oneLiner: "iOS language training for athletes, with an adaptive daily plan.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/electrolyte-language-sport/id6783455523",
      },
      { label: "electrolyte.app", href: "https://electrolyte.app" },
    ],
    closedSource: true,
    caseStudy: true,
    group: "venture",
  },
  {
    slug: "built-by-friday",
    name: "Built By Friday",
    category: "Agency",
    status: "live",
    year: "2021–",
    stack: ["AI", "Automation", "Consulting"],
    oneLiner:
      "AI agency: automation, custom software, architecture and consulting.",
    links: [{ label: "builtbyfriday.com", href: "https://builtbyfriday.com" }],
    group: "venture",
  },

  // Projects. Order is deliberate, newest-feeling first, oldest last.
  {
    slug: "too-fast-too-slow",
    name: "Too Fast Too Slow",
    category: "iOS",
    status: "live",
    year: "2023–",
    stack: ["SwiftUI", "Game Center", "StoreKit"],
    oneLiner:
      "Reflex game on the App Store, 350k impressions across 5 continents.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/too-fast-too-slow/id6471321976",
      },
    ],
  },
  {
    slug: "dably",
    name: "Dably",
    category: "Web",
    status: "shipped",
    year: "2023–25",
    stack: ["React", "FastAPI", "Supabase", "Railway"],
    oneLiner: "Education platform with an admin suite and user-facing apps.",
    links: [{ label: "dably.co", href: "https://dably.co" }],
  },
  {
    slug: "lemonpepper",
    name: "Lemonpepper",
    category: "iOS",
    status: "in progress",
    year: "2024–",
    stack: ["SwiftUI", "FastAPI", "GPT-4", "HealthKit"],
    oneLiner: "Fitness app with an AI running coach, synced to Watch and Garmin.",
  },
  {
    slug: "rignest",
    name: "RigNest",
    category: "Web",
    status: "live",
    year: "2026",
    stack: ["React", "Supabase", "Vercel"],
    oneLiner: "Fleet and payroll operations for contractors.",
    links: [{ label: "app.rignest.io", href: "https://app.rignest.io" }],
    closedSource: true,
    caseStudy: true,
  },
  {
    slug: "heemtoken",
    name: "HeemToken",
    category: "Experiment",
    status: "archived",
    year: "2021–22",
    stack: ["Solidity", "React", "Truffle", "Netlify"],
    oneLiner: "BEP-20 token on Binance Chain, with its own information site.",
    links: [{ label: "heemtoken.com", href: "https://heemtoken.com" }],
  },

  // Off the index as of Oct 2026. `draft` keeps the entry and
  // content/electrolyte-crm.mdx in the repo but stops rendering the row and
  // stops generating /work/electrolyte-crm. Flip it back to restore both.
  {
    // Renamed from "Electrolyte CRM" in Sep 2026. The slug stays as-is on
    // purpose: the URL was already live and indexed.
    slug: "electrolyte-crm",
    name: "Electrolyte HQ",
    category: "Web",
    status: "in progress",
    year: "2026",
    stack: ["Next.js", "Supabase", "TypeScript"],
    oneLiner: "Internal hub: sales pipeline, engineering tickets and events.",
    closedSource: true,
    caseStudy: true,
    draft: true,
  },
];

export const visibleProjects = projects.filter((p) => !p.draft);

/** The businesses: Electrolyte and Built By Friday */
export const ventures = visibleProjects.filter((p) => p.group === "venture");

/** Everything else: products, experiments and things built for the fun of it */
export const sideProjects = visibleProjects.filter((p) => p.group !== "venture");

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
