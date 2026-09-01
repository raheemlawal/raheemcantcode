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
  /** One line. The index shows everything at once, so it has to stay short —
   *  full detail lives in the résumé PDF. */
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
      "Distributed data framework for internal AI models, geosynchronous satellite backends, and the CI/CD pipeline for a team of ten.",
  },
  {
    company: "Northrop Grumman",
    href: "https://northropgrumman.com",
    title: "Software Engineer",
    period: "2020–25",
    stack: ["React", "Python", "Vue", "Llama 3", "Electron", "Java"],
    summary:
      "Led an AI chatbot for spacecraft test queries, an automation platform saving 20 hrs/month, and a real-time visualization app for 50 test engineers that cut commanding decisions 15%.",
  },
  {
    company: "Northrop Grumman",
    href: "https://northropgrumman.com",
    title: "Associate Software Engineer",
    period: "2020–22",
    stack: ["Python", "Real-Time OS", "FPGA", "LabVIEW", "C#"],
    summary:
      "Distributed software and embedded hardware controlling a propelled sled, plus a C# REST client that saved eight hours of overhead.",
  },
  {
    company: "Built By Friday",
    href: "https://builtbyfriday.com",
    title: "Founder",
    period: "2021–",
    stack: ["AI", "Automation", "Consulting"],
    summary:
      "AI agency: automation, custom software, architecture and consulting. Multiple four-figure contracts, one-time and recurring.",
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
