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
};

// TODO(raheem): every oneLiner below is a placeholder. Fill in PROJECTS.md and
// these get replaced with the real thing.
export const projects: Project[] = [
  {
    slug: "electrolyte",
    name: "Electrolyte",
    category: "iOS",
    status: "in progress",
    year: "2026",
    stack: ["SwiftUI", "Supabase", "Postgres", "APNs"],
    oneLiner: "Language training for athletes, with an adaptive daily plan.",
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
    slug: "heemtoken",
    name: "HeemToken",
    category: "Web",
    status: "archived",
    year: "2024",
    stack: ["React", "Firebase"],
    oneLiner: "Placeholder — tell me what this was.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/raheemlawal/raheemcantcode",
      },
    ],
    caseStudy: true,
  },
];

export const visibleProjects = projects.filter((p) => !p.draft);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
