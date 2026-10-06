import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StackTags, StatusDot, Tag } from "@/components/tag";
import { sideProjects, ventures, type Project } from "@/lib/projects";
import { isOngoing } from "@/lib/utils";
import { education, experience, skills } from "@/lib/resume";
import { site } from "@/lib/site";

/**
 * Cards in three columns, sized to land on one laptop screen without
 * scrolling.
 *
 * The earlier bare three-column version was hard to follow because nothing
 * bounded a section — headings floated above loose rows and the eye had no
 * edges to follow. Cards fix that part: each section is a closed box with its
 * own label, so "where does this end" is answered by the border rather than by
 * reading. Inside a card the order is still vertical.
 *
 * Density is the cost. Type here is a step smaller than a page that could
 * scroll, because fitting ten résumé bullets, seven projects and the skills
 * block above the fold leaves no other lever. If the content grows again, the
 * honest fix is to let it scroll rather than shrink further.
 */

function Card({
  id,
  title,
  note,
  className,
  children,
}: {
  id: string;
  title: string;
  note?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={id}
      className={`rounded-lg border border-border bg-muted/40 p-3 ${className ?? ""}`}
    >
      <h2
        id={id}
        className="font-mono text-[10px] font-medium uppercase tracking-widest text-muted-foreground"
      >
        {title}
      </h2>
      {note && (
        <p className="mt-1 text-[11px] leading-snug text-muted-foreground/80">
          {note}
        </p>
      )}
      <div className="mt-2">{children}</div>
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
    <li className="group relative border-b border-border/70 py-1.5 first:pt-0 last:border-b-0 last:pb-0">
      <div className="flex items-baseline gap-1.5">
        <StatusDot ongoing={isOngoing(project.year)} className="self-center" />
        <h3 className="text-[13px] font-medium">
          <ProjectTitle project={project} />
        </h3>
        <span className="ml-auto shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground">
          {project.year}
        </span>
      </div>
      <p className="mt-0.5 text-[12px] leading-snug text-muted-foreground">
        {project.oneLiner}
      </p>
      <div className="mt-1">
        <StackTags stack={project.stack} />
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <div>
      <header className="mb-2 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <div>
          <h1 className="font-mono text-xl font-bold tracking-tight sm:text-2xl">
            {site.name}
          </h1>
          <p className="mt-1 max-w-xl text-[13px] leading-snug text-muted-foreground">
            {site.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px]">
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

      <div className="grid gap-2 lg:grid-cols-3 lg:items-start">
        <Card id="experience" title="Experience">
          <ul className="flex flex-col gap-2">
            {experience.map((role) => (
              <li
                key={`${role.company}-${role.title}`}
                className="border-b border-border/70 pb-2 last:border-b-0 last:pb-0"
              >
                <div className="flex items-baseline gap-1.5">
                  <StatusDot
                    ongoing={isOngoing(role.period)}
                    className="self-center"
                  />
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
                  <span className="ml-auto shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground">
                    {role.period}
                  </span>
                </div>
                <p className="font-mono text-[10px] leading-snug text-muted-foreground">
                  {role.title}
                </p>
                <ul className="mt-1 list-disc space-y-0.5 pl-3.5 text-[11px] leading-[1.45] text-muted-foreground marker:text-border">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </Card>

        <div className="flex flex-col gap-1.5">
          <Card id="ventures" title="Ventures">
            <ul>
              {ventures.map((project) => (
                <ProjectRow key={project.slug} project={project} />
              ))}
            </ul>
          </Card>
          <Card id="education" title="Education">
            <ul>
              {education.map((school) => (
                <li
                  key={school.name}
                  className="border-b border-border/70 py-1.5 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-[13px] font-medium">{school.degree}</h3>
                    <span className="shrink-0 font-mono text-[10px] tabular-nums text-muted-foreground">
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
          </Card>
        </div>

        <div className="flex flex-col gap-1.5">
          <Card
            id="projects"
            title="Projects"
            note="Mostly built under Built By Friday. Some products, some experiments."
          >
            <ul>
              {sideProjects.map((project) => (
                <ProjectRow key={project.slug} project={project} />
              ))}
            </ul>
          </Card>
          <Card id="skills" title="Skills">
            <dl className="flex flex-col gap-2.5">
              {skills.map((group) => (
                <div key={group.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground/80">
                    {group.label}
                  </dt>
                  <dd className="mt-1 flex flex-wrap gap-1">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>
        </div>
      </div>
    </div>
  );
}
