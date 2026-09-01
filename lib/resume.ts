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
  /** 3–6 tags, most important first */
  stack: string[];
  /** Two or three sentences, past tense unless it's current work */
  summary: string;
};

export const experience: Role[] = [
  {
    company: "Boeing",
    href: "https://boeing.com",
    title: "Senior Software Engineer",
    period: "2025–",
    stack: ["Python", "Kubernetes", "Docker", "Argo", "TypeScript", "AWS"],
    summary:
      "Building the distributed framework that stores and moves training data for internal AI models. Hardening the backend for geosynchronous satellites through test-case refactoring and reliability checks, and running the GitLab CI/CD pipeline for a team of ten engineers.",
  },
  {
    company: "Northrop Grumman",
    href: "https://northropgrumman.com",
    title: "Software Engineer",
    period: "2020–25",
    stack: ["React", "Python", "Vue", "Llama 3", "Electron", "Java"],
    summary:
      "Led an AI chatbot that answered spacecraft test-interface questions and wrote scripts for hardware engineers. Built an automation platform that gave back 20 hours a month, and a real-time visualization app used by 50 test engineers that cut spacecraft commanding decisions by 15%. Also modernized a 20-year-old legacy desktop system and shipped weekly patches to the spacecraft test interface.",
  },
  {
    company: "Northrop Grumman",
    href: "https://northropgrumman.com",
    title: "Associate Software Engineer",
    period: "2020–22",
    stack: ["Python", "Real-Time OS", "FPGA", "LabVIEW", "C#"],
    summary:
      "Led a distributed system of software and embedded hardware that controlled, monitored and analyzed a propelled sled. Wrote a custom C# REST client for an internal server tool that saved eight hours of communication overhead.",
  },
  {
    company: "Built By Friday",
    href: "https://builtbyfriday.com",
    title: "Founder",
    period: "2021–",
    stack: ["AI", "Automation", "Consulting"],
    summary:
      "An agency doing automation, development and consulting — website design, custom software, architecture, data analytics and blockchain. Composed and closed multiple four-figure contracts on both one-time and recurring terms.",
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
    degree: "MS Management",
    period: "2024–26",
    note: "Cozad New Venture Challenge — Commitment to Entrepreneurship prize",
  },
  {
    name: "George Mason University",
    degree: "BS Computer Science",
    period: "2016–20",
    note: "Division 1 men's soccer, 30 hrs/week · NSBE executive board senator",
  },
];
