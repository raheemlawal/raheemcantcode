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
      "Build a distributed framework storing and transferring 1TB of training data for internal AI models (Argo, Python, Docker, Kubernetes).",
      "Harden geosynchronous satellite backend software through test-case refactoring and codebase remodeling, increasing coverage by 60% (TypeScript, Python, AWS S3).",
      "Own the DevOps CI/CD pipeline for a team of 10 engineers, cutting deployment time by 10 minutes (GitLab).",
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
      "Deployed a full-stack AI chatbot (React, Python, Llama 3, RAG) letting hardware engineers query spacecraft test interfaces and generate test scripts on demand.",
      "Led a custom full-stack web application (React, Python) automating internal engineering scripts and tasks, saving 20 hours a month.",
      "Built and led a real-time web data visualization platform (Vue, Python) for 50 test engineers, reducing spacecraft commanding decision latency by 15%.",
      "Modernized a 20-year-old legacy system into a desktop application (TypeScript, Vue, Electron).",
      "Shipped weekly patches for a multi-layered spacecraft test interface (Java, SQL).",
      "Delivered a distributed control system across software and embedded hardware to monitor and analyze a propelled sled (Python, Real-Time OS, FPGA, LabVIEW).",
      "Built a custom REST API client (C#) for an internal server tool, saving 8 hours per week.",
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
    degree: "MS Management",
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
