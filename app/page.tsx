import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { StackTags, StatusDot, Tag } from "@/components/tag";
import { agencyProjects, soloProjects, type Project } from "@/lib/projects";
import { education, experience, skills } from "@/lib/resume";
import { site } from "@/lib/site";

/**
 * The index carries three things at once: projects, employment, and the résumé
 * facts. The job is making it obvious which is which at a glance.
 *
 * Hierarchy is doing that work, in three steps and no more. A section heading
 * sits in foreground against a rule; an entry title is 14px foreground; every
 * piece of supporting detail is muted and smaller. Nesting (Built By Friday and
 * its projects) is shown by indentation off a left rule rather than a fourth
 * type size, because a fourth size stops reading as a level and starts reading
 * as noise.
 *
 * It no longer tries to fit one laptop screen without scrolling. That
 * constraint is what pushed everything to 11px and made the page hard to
 * follow, which was the actual complaint.
 *
 * Below `lg` the three columns stack and it reads as one list.
 */

function Heading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="border-b border-border pb-2 font-mono text-[11px] font-medium uppercase tracking-widest text-foreground"
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

/**
 * Years are pushed right so they line up into a scannable column, the same way
 * the Experience and Education lists align their periods.
 */
function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="group relative border-b border-border py-3 last:border-b-0">
      <div className="flex items-baseline gap-2">
        <StatusDot status={project.status} className="self-center" />
        <h3 className="text-[14px] font-medium">
          <ProjectTitle project={project} />
        </h3>
        <span className="ml-auto shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground">
          {project.year}
        </span>
      </div>
      <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
        {project.oneLiner}
      </p>
      <div className="mt-2">
        <StackTags stack={project.stack} />
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <div>
      <header className="border-b border-border pb-7">
        <h1 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
          {site.name}
        </h1>
        <p className="mt-2.5 max-w-2xl text-[14px] leading-relaxed text-muted-foreground">
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

      <div className="mt-9 grid gap-x-12 gap-y-12 lg:grid-cols-12">
        <section aria-labelledby="projects" className="lg:col-span-5">
          <Heading id="projects">Projects</Heading>

          <ul>
            {soloProjects.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </ul>

          {/* Built By Friday is an entry in this list that happens to contain
              other entries, so it is indented under its own label rather than
              promoted to a second section. */}
          <div className="mt-7">
            <div className="flex items-baseline gap-2.5 border-b border-border pb-2">
              <h3 className="font-mono text-[12px] font-medium">
                Built By Friday
              </h3>
              <a
                href="https://builtbyfriday.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-0.5 font-mono text-[11px] text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-current"
              >
                builtbyfriday.com
                <ArrowUpRight className="size-3" aria-hidden />
              </a>
              <span className="ml-auto shrink-0 font-mono text-[11px] text-muted-foreground">
                agency
              </span>
            </div>
            <ul className="border-l border-border pl-4">
              {agencyProjects.map((project) => (
                <ProjectRow key={project.slug} project={project} />
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="experience" className="lg:col-span-4">
          <Heading id="experience">Experience</Heading>
          <ul>
            {experience.map((role) => (
              <li
                key={`${role.company}-${role.title}`}
                className="border-b border-border py-3 last:border-b-0"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[14px] font-medium">
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
                  {role.priorTitle && (
                    <span className="text-muted-foreground/70">
                      {" "}
                      (prev. {role.priorTitle})
                    </span>
                  )}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                  {role.summary}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-10 lg:col-span-3">
          <section aria-labelledby="skills">
            <Heading id="skills">Skills</Heading>
            <dl className="flex flex-col gap-4 pt-3">
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
          </section>

          <section aria-labelledby="education">
            <Heading id="education">Education</Heading>
            <ul>
              {education.map((school) => (
                <li
                  key={school.name}
                  className="border-b border-border py-3 last:border-b-0"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[14px] font-medium">{school.degree}</h3>
                    <span className="shrink-0 font-mono text-[11px] tabular-nums text-muted-foreground">
                      {school.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                    {school.name}
                  </p>
                  {school.note && (
                    <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground/80">
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
