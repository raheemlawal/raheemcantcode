import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StackTags, StatusDot, Tag } from "@/components/tag";
import { agencyProjects, soloProjects, type Project } from "@/lib/projects";
import { education, experience, skills } from "@/lib/resume";
import { site } from "@/lib/site";

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-16 first:mt-0">
      <h2
        id={id}
        className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

/**
 * The row title links to the case study when there is one, and out to the live
 * thing when there isn't — so no row is a dead end.
 */
function ProjectTitle({ project }: { project: Project }) {
  const linkClass =
    "font-medium underline decoration-border underline-offset-4 transition-colors after:absolute after:inset-0 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  if (project.caseStudy) {
    return (
      <Link href={`/work/${project.slug}`} className={linkClass}>
        {project.name}
      </Link>
    );
  }

  const external = project.links?.[0];
  if (external) {
    return (
      <a
        href={external.href}
        target="_blank"
        rel="noreferrer"
        className={`${linkClass} inline-flex items-center gap-0.5`}
      >
        {project.name}
        <ArrowUpRight className="size-3" aria-hidden />
      </a>
    );
  }

  return <span className="font-medium">{project.name}</span>;
}

function ProjectTable({ projects }: { projects: Project[] }) {
  return (
    <Table className="border-t border-border">
      {/* Only one column survives on mobile, so the header earns nothing there. */}
      <TableHeader className="hidden sm:table-header-group">
        <TableRow className="hover:bg-transparent">
          <TableHead className="h-9 px-3 font-mono text-[11px] font-normal uppercase tracking-wider">
            Project
          </TableHead>
          <TableHead className="hidden h-9 px-3 font-mono text-[11px] font-normal uppercase tracking-wider sm:table-cell">
            Category
          </TableHead>
          <TableHead className="hidden h-9 px-3 font-mono text-[11px] font-normal uppercase tracking-wider sm:table-cell">
            Stack
          </TableHead>
          <TableHead className="hidden h-9 px-3 text-right font-mono text-[11px] font-normal uppercase tracking-wider sm:table-cell">
            Year
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.slug} className="group relative">
            <TableCell className="px-3 py-4 align-top">
              <span className="flex items-center gap-2">
                <StatusDot status={project.status} />
                <ProjectTitle project={project} />
              </span>
              <span className="mt-1.5 block max-w-sm text-[13px] leading-snug text-muted-foreground">
                {project.oneLiner}
              </span>
              {/* Stack has its own column from sm up; inline it on mobile. */}
              <span className="mt-2.5 flex sm:hidden">
                <StackTags stack={project.stack} limit={3} />
              </span>
            </TableCell>
            <TableCell className="hidden px-3 py-4 align-top font-mono text-xs text-muted-foreground sm:table-cell">
              {project.category}
            </TableCell>
            <TableCell className="hidden px-3 py-4 align-top sm:table-cell">
              <StackTags stack={project.stack} limit={3} />
            </TableCell>
            <TableCell className="hidden px-3 py-4 text-right align-top font-mono text-xs tabular-nums text-muted-foreground sm:table-cell">
              {project.year}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function Home() {
  return (
    <>
      <header className="mb-14">
        <h1 className="font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          {site.name}
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          {site.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs">
          <a
            href={`mailto:${site.email}`}
            className="text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-current"
          >
            {site.email}
          </a>
          {site.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-0.5 text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-current"
            >
              {s.label}
              <ArrowUpRight className="size-3" aria-hidden />
            </a>
          ))}
        </div>
      </header>

      <Section id="work" title="Selected work">
        <ProjectTable projects={soloProjects} />
      </Section>

      <Section id="agency" title="Built By Friday">
        <p className="-mt-1 mb-4 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
          My agency. Client and in-house products, shipped since 2021 —{" "}
          <a
            href="https://builtbyfriday.com"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-current"
          >
            builtbyfriday.com
          </a>
          .
        </p>
        <ProjectTable projects={agencyProjects} />
      </Section>

      <Section id="experience" title="Experience">
        <ul className="border-t border-border">
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.title}`}
              className="border-b border-border px-3 py-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium">
                  {role.href ? (
                    <a
                      href={role.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-border underline-offset-4 transition-colors hover:decoration-current"
                    >
                      {role.company}
                    </a>
                  ) : (
                    role.company
                  )}
                  <span className="text-muted-foreground"> · {role.title}</span>
                </h3>
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  {role.period}
                </span>
              </div>
              <p className="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-muted-foreground">
                {role.summary}
              </p>
              <span className="mt-2.5 flex">
                <StackTags stack={role.stack} />
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="grid gap-5 border-t border-border pt-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                {group.label}
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="education" title="Education">
        <ul className="border-t border-border">
          {education.map((school) => (
            <li key={school.name} className="border-b border-border px-3 py-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-medium">
                  {school.name}
                  <span className="text-muted-foreground">
                    {" "}
                    · {school.degree}
                  </span>
                </h3>
                <span className="font-mono text-xs tabular-nums text-muted-foreground">
                  {school.period}
                </span>
              </div>
              {school.note && (
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {school.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
