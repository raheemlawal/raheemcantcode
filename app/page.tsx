import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StackTags, StatusDot, Tag } from "@/components/tag";
import { sideProjects, ventures, type Project } from "@/lib/projects";
import { education, experience, skills } from "@/lib/resume";
import { site } from "@/lib/site";

/**
 * One column, read top to bottom. An earlier version put projects, employment
 * and the résumé facts in three side-by-side columns; it fit more on a screen
 * and was harder to read, because nothing told you where to start or what
 * followed what. Reading order is now the same as source order.
 *
 * Three sections carry the work, and the distinction between them is the point:
 * Experience is employment, Ventures are the businesses, Projects are
 * everything else. Built By Friday is a venture and appears exactly once, so
 * the projects it produced are listed on their own terms rather than nested
 * under a repeat of its name.
 *
 * The container in app/layout.tsx caps every page at a reading measure; long
 * lines were the other half of why the old layout was hard to follow.
 */

function Section({
  id,
  title,
  note,
  children,
}: {
  id: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id} className="mt-12 first:mt-0">
      <h2
        id={id}
        className="font-mono text-[11px] font-medium uppercase tracking-widest text-foreground"
      >
        {title}
      </h2>
      {note && (
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
          {note}
        </p>
      )}
      <div className="mt-3 border-t border-border">{children}</div>
    </section>
  );
}

/**
 * Links to the case study when there is one, out to the live thing when there
 * isn't — so no row is a dead end.
 */
function ProjectTitle({ project }: { project: Project }) {
  const linkClass =
    "underline decoration-border underline-offset-4 transition-colors after:absolute after:inset-0 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

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

  return <span>{project.name}</span>;
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="group relative border-b border-border py-4">
      <div className="flex items-baseline gap-2">
        <StatusDot status={project.status} className="self-center" />
        <h3 className="text-[15px] font-medium">
          <ProjectTitle project={project} />
        </h3>
        <span className="ml-auto shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground">
          {project.year}
        </span>
      </div>
      <p className="mt-1.5 max-w-prose text-[14px] leading-relaxed text-muted-foreground">
        {project.oneLiner}
      </p>
      <div className="mt-2.5">
        <StackTags stack={project.stack} />
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <div>
      <header className="border-b border-border pb-8">
        <h1 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
          {site.name}
        </h1>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          {site.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[11px]">
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

      <Section id="experience" title="Experience">
        <ul>
          {experience.map((role) => (
            <li
              key={`${role.company}-${role.title}`}
              className="border-b border-border py-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[15px] font-medium">
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
              <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
                {role.title}
              </p>
              <ul className="mt-2.5 list-disc space-y-1.5 pl-4 text-[14px] leading-relaxed text-muted-foreground marker:text-border">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="ventures" title="Ventures">
        <ul>
          {ventures.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>
      </Section>

      <Section
        id="projects"
        title="Projects"
        note="Mostly built under Built By Friday. Some are products, some are experiments."
      >
        <ul>
          {sideProjects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="flex flex-col gap-4 pt-4">
          {skills.map((group) => (
            <div key={group.label}>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
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
        <ul>
          {education.map((school) => (
            <li key={school.name} className="border-b border-border py-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[15px] font-medium">{school.degree}</h3>
                <span className="shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground">
                  {school.period}
                </span>
              </div>
              <p className="mt-0.5 text-[14px] leading-relaxed text-muted-foreground">
                {school.name}
              </p>
              {school.note && (
                <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground/80">
                  {school.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
