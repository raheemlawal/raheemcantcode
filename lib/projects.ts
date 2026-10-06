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
  /**
   * One sentence on what the thing is. Deliberately carries no metrics: the
   * numbers available across these entries measured six different things
   * (users, impressions, repos, contracts, market cap), so side by side they
   * could not be compared and stopped being worth scanning. Keep it
   * descriptive.
   */
  oneLiner: string;
  /** Shown on the case-study page, not the table */
  links?: ProjectLink[];
  /** Renders "closed source" instead of a repo link */
  closedSource?: boolean;
  /**
   * Generates /work/<slug> from content/<slug>.mdx. Switched off for every
   * entry in Oct 2026 — the detail moved into `oneLiner` instead. The prose is
   * still in content/, so setting this back to true restores the page.
   */
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
  // Ventures — the businesses. Newest first, like every other card.
  {
    slug: "electrolyte",
    name: "Electrolyte",
    category: "iOS",
    status: "live",
    year: "2026–",
    stack: ["SwiftUI", "Supabase", "Postgres", "APNs"],
    oneLiner:
      "iOS language training for athletes, with an adaptive daily plan.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/electrolyte-language-sport/id6783455523",
      },
      { label: "electrolyte.app", href: "https://electrolyte.app" },
    ],
    closedSource: true,
    group: "venture",
  },
  {
    slug: "rignest",
    name: "RigNest",
    category: "Web",
    status: "live",
    year: "2026–",
    stack: ["React", "Supabase", "Vercel"],
    oneLiner:
      "Fleet and payroll operations for contractors, with effective-dated pay rates and a driver portal.",
    links: [{ label: "rignest.io", href: "https://rignest.io" }],
    closedSource: true,
    group: "venture",
  },
  {
    slug: "dably",
    name: "Dably",
    category: "Web",
    status: "shipped",
    year: "2023–25",
    stack: ["React", "FastAPI", "Supabase", "Railway"],
    oneLiner:
      "Education platform. CTO for the admin suite and the user-facing apps.",
    links: [{ label: "dably.co", href: "https://dably.co" }],
    group: "venture",
  },
  {
    slug: "built-by-friday",
    name: "Built By Friday",
    category: "Agency",
    status: "live",
    year: "2022–",
    stack: ["React", "TypeScript", "Python", "Supabase"],
    oneLiner:
      "Software agency for startups and small businesses: automations, custom software and architecture consulting.",
    links: [{ label: "builtbyfriday.com", href: "https://builtbyfriday.com" }],
    group: "venture",
  },

  // Projects, newest first.
  {
    slug: "lemonpepper",
    name: "Lemonpepper",
    category: "iOS",
    status: "shipped",
    year: "2025",
    stack: ["SwiftUI", "FastAPI", "GPT-4", "HealthKit"],
    oneLiner:
      "Fitness app with an AI running coach, synced to Apple Watch and Garmin.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/lemonpepper/id6742935987",
      },
    ],
  },
  {
    slug: "too-fast-too-slow",
    name: "Too Fast Too Slow",
    category: "iOS",
    status: "live",
    year: "2023–",
    stack: ["SwiftUI", "Game Center", "StoreKit"],
    oneLiner:
      "Reflex timing game on the App Store.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/too-fast-too-slow/id6471321976",
      },
    ],
  },
  {
    slug: "heemtoken",
    name: "HeemToken",
    category: "Experiment",
    status: "archived",
    year: "2021–22",
    stack: ["Solidity", "React", "Truffle", "Netlify"],
    oneLiner:
      "BEP-20 token on Binance Chain, with its own information site.",
    links: [{ label: "heemtoken.com", href: "https://heemtoken.com" }],
  },

  // Off the index as of Oct 2026. `draft` keeps the entry and
  // content/electrolyte-crm.mdx in the repo but stops it rendering.
  {
    slug: "electrolyte-crm",
    name: "Electrolyte HQ",
    category: "Web",
    status: "in progress",
    year: "2026",
    stack: ["Next.js", "Supabase", "TypeScript"],
    oneLiner: "Internal hub: sales pipeline, engineering tickets and events.",
    closedSource: true,
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
