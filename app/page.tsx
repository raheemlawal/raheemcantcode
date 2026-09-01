import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { StackTags, StatusDot, Tag } from "@/components/tag";
import { agencyProjects, soloProjects, type Project } from "@/lib/projects";
import { education, experience, skills } from "@/lib/resume";
import { site } from "@/lib/site";

/**
 * The index is a single view: everything visible at once on a laptop, no
 * scrolling. That constraint drives the whole file — three columns, no table
 * headers, one line of prose per entry. Anything that needs more room belongs
 * in a case study or the résumé PDF, not here.
 *
 * Below `lg` the columns stack and the page scrolls normally; fitting this much
 * on a phone screen isn't possible and squinting isn't a feature.
 */

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mb-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
    >
      {children}
    </h2>
  );
}

/**
 * Links to the case study when there is one, out to the live thing when there
 * isn't — so no row is a dead end.
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
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.slug} className="group relative">
            <TableCell className="px-0 py-2 align-top">
              <span className="flex items-center gap-2 text-[13px]">
                <StatusDot status={project.status} />
                <ProjectTitle project={project} />
                <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                  {project.year}
                </span>
              </span>
              <span className="mt-1 block text-[12px] leading-snug text-muted-foreground">
                {project.oneLiner}
              </span>
              <span className="mt-1 flex">
                <StackTags stack={project.stack} limit={3} />
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <header>
        <h1 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
          {site.name}
        </h1>
        <p className="mt-2 max-w-4xl text-[13px] leading-relaxed text-muted-foreground">
          {site.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[11px]">
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

      <div className="mt-5 grid gap-x-10 gap-y-8 lg:grid-cols-12">
        <div className="flex flex-col gap-5 lg:col-span-5">
          <section aria-labelledby="work">
            <Heading id="work">Selected work</Heading>
            <ProjectTable projects={soloProjects} />
          </section>

          <section aria-labelledby="agency">
            <Heading id="agency">
              Built By Friday ·{" "}
              <a
                href="https://builtbyfriday.com"
                target="_blank"
                rel="noreferrer"
                className="normal-case tracking-normal underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-current"
              >
                builtbyfriday.com
              </a>
            </Heading>
            <ProjectTable projects={agencyProjects} />
          </section>
        </div>

        <section aria-labelledby="experience" className="lg:col-span-4">
          <Heading id="experience">Experience</Heading>
          <ul className="border-t border-border">
            {experience.map((role) => (
              <li
                key={`${role.company}-${role.title}`}
                className="border-b border-border py-2"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[13px] font-medium">
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
                  </h3>
                  <span className="shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground">
                    {role.period}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {role.title}
                </p>
                <p className="mt-1 text-[12px] leading-snug text-muted-foreground">
                  {role.summary}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-5 lg:col-span-3">
          <section aria-labelledby="skills">
            <Heading id="skills">Skills</Heading>
            <dl className="flex flex-col gap-2.5 border-t border-border pt-2.5">
              {skills.map((group) => (
                <div key={group.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="education">
            <Heading id="education">Education</Heading>
            <ul className="border-t border-border">
              {education.map((school) => (
                <li key={school.name} className="border-b border-border py-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[13px] font-medium">{school.degree}</h3>
                    <span className="shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground">
                      {school.period}
                    </span>
                  </div>
                  <p className="text-[12px] leading-snug text-muted-foreground">
                    {school.name}
                  </p>
                  {school.note && (
                    <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground/80">
                      {school.note}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
