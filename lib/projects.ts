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

export type Category = "iOS" | "Web" | "Backend" | "Tool" | "Experiment";

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
  /** Shipped under an agency/company rather than solo — groups it on the index */
  org?: "Built By Friday";
};

export const projects: Project[] = [
  {
    slug: "electrolyte",
    name: "Electrolyte",
    category: "iOS",
    status: "in progress",
    year: "2026",
    stack: ["SwiftUI", "Supabase", "Postgres", "APNs"],
    oneLiner: "iOS language training for athletes, with an adaptive daily plan.",
    links: [{ label: "electrolyte.app", href: "https://electrolyte.app" }],
    closedSource: true,
    caseStudy: true,
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
    slug: "electrolyte-crm",
    name: "Electrolyte CRM",
    category: "Web",
    status: "in progress",
    year: "2026",
    stack: ["Next.js", "Supabase", "TypeScript"],
    oneLiner: "Internal CRM for managing clubs, staff and rosters.",
    closedSource: true,
    caseStudy: true,
  },
  {
    slug: "dably",
    name: "Dably",
    category: "Web",
    status: "shipped",
    year: "2023–25",
    stack: ["React", "FastAPI", "Supabase", "Railway"],
    oneLiner: "Education platform — admin suite and user-facing apps.",
    links: [{ label: "dably.co", href: "https://dably.co" }],
    org: "Built By Friday",
  },
  {
    slug: "too-fast-too-slow",
    name: "Too Fast Too Slow",
    category: "iOS",
    status: "live",
    year: "2023–",
    stack: ["SwiftUI", "Game Center", "StoreKit"],
    oneLiner: "Reflex game on the App Store, 350k impressions across 5 continents.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/too-fast-too-slow/id6471321976",
      },
    ],
    org: "Built By Friday",
  },
  {
    slug: "lemonpepper",
    name: "Lemonpepper",
    category: "iOS",
    status: "in progress",
    year: "2024–",
    stack: ["SwiftUI", "FastAPI", "GPT-4", "HealthKit"],
    oneLiner: "Fitness app with an AI running coach, synced to Watch and Garmin.",
    org: "Built By Friday",
  },
];

export const visibleProjects = projects.filter((p) => !p.draft);

/** Solo work — the main index table */
export const soloProjects = visibleProjects.filter((p) => !p.org);

/** Everything shipped under Built By Friday, listed under its own heading */
export const agencyProjects = visibleProjects.filter(
  (p) => p.org === "Built By Friday",
);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
