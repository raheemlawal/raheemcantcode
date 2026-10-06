/**
 * The résumé half of the site: where I've worked, what I know, where I studied.
 *
 * Projects live in `lib/projects.ts` — this file is only for the things that
 * don't have a case study behind them. Source of truth is the PDF in
 * `public/Lawal_Raheem_Resume.pdf`; keep the two in sync when one changes.
 */

export type Role = {
  company: string;
  href?: string;
  title: string;
  /** "2025–" for current, "2020–25" for past */
  period: string;
  /**
   * Every line the résumé PDF carries for this role, in the PDF's own order.
   * The page shows all of them, so this is the thing to keep in sync with
   * `public/Lawal_Raheem_Resume.pdf` — not a summary of it.
   */
  bullets: string[];
};

/**
 * Employment only. Built By Friday is a company I run, not a job I hold, so it
 * lives in `ventures` in lib/projects.ts and is deliberately not repeated here.
 */
export const experience: Role[] = [
  {
    company: "Boeing",
    href: "https://boeing.com",
    title: "Senior Software Engineer",
    period: "2025–",
    bullets: [
      "Distributed framework to store and transfer data for internal AI models (Argo, Python, Docker, Kubernetes).",
      "Improved geosynchronous satellite backend software through test-case refactoring, reliability checks and codebase remodeling (TypeScript, Python, AWS S3).",
      "Lead the DevOps CI/CD pipeline used by a team of ten engineers (GitLab).",
    ],
  },
  {
    // One tenure, two titles. The résumé dates the company block, not each
    // title, so there is no promotion date to show without inventing one.
    company: "Northrop Grumman",
    href: "https://northropgrumman.com",
    title: "Software Engineer + Associate Software Engineer",
    period: "2020–25",
    bullets: [
      "Led a full-stack AI web chatbot (React, Python, Llama 3) for hardware engineers querying the spacecraft test interface and developing scripts.",
      "Led a custom full-stack web application (React, Python) automating internal engineering scripts and tasks, saving 20 hours a month.",
      "Led a real-time full-stack data visualization application (Vue, Python) used by 50 test engineers, cutting spacecraft commanding decisions by 15%.",
      "Desktop application (TypeScript, Vue, Electron) modernizing a 20+ year-old legacy system.",
      "Weekly patches for a multi-layered spacecraft test interface (Java, SQL).",
      "Distributed system of software (Python, Real-Time OS, FPGA, LabVIEW) and embedded hardware to control, monitor and analyze a propelled sled.",
      "Custom REST API client (C#) for an internal server tool, improving communication by eight hours.",
    ],
  },
];

export const skills = [
  {
    label: "Languages & frameworks",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Python",
      "Java",
      "Node + Express",
      "Swift",
      "Vue",
      "Solidity",
      "SQL",
      "RAG",
    ],
  },
  {
    label: "Certifications & awards",
    items: [
      "Docker Containerization",
      "Blockchain Analytics",
      "Northrop Grumman BRAVO Award ×3",
    ],
  },
  {
    label: "Languages",
    items: ["English", "Spanish", "French", "Yoruba", "Arabic"],
  },
] as const;

export type School = {
  name: string;
  degree: string;
  period: string;
  note?: string;
};

export const education: School[] = [
  {
    name: "University of Illinois Urbana-Champaign",
    degree: "MS Business Management",
    period: "2024–26",
    note: "Cozad New Venture Challenge, Commitment to Entrepreneurship prize",
  },
  {
    name: "George Mason University",
    degree: "BS Computer Science",
    period: "2016–20",
    note: "Division 1 men's soccer, 30 hrs/week · NSBE executive board senator",
  },
];
