import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { StackTags, StatusDot } from "@/components/tag";
import { getProject, isOngoing, projects } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects
    .filter((p) => p.caseStudy && !p.draft)
    .map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.oneLiner,
    openGraph: {
      title: project.name,
      description: project.oneLiner,
      url: `/work/${project.slug}`,
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.caseStudy || project.draft) notFound();

  const { default: Body } = await import(`@/content/${slug}.mdx`);

  return (
    <article className="mx-auto w-full max-w-2xl">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3" aria-hidden />
        index
      </Link>

      <header className="mt-8 border-b border-border pb-8">
        <h1 className="font-mono text-3xl font-bold tracking-tight">
          {project.name}
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          {project.oneLiner}
        </p>

        <dl className="mt-7 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 font-mono text-xs">
          <dt className="text-muted-foreground">Status</dt>
          <dd className="flex items-center gap-2">
            <StatusDot ongoing={isOngoing(project)} />
            {project.status}
            <span className="text-muted-foreground">· {project.year}</span>
          </dd>

          <dt className="text-muted-foreground">Category</dt>
          <dd>{project.category}</dd>

          <dt className="pt-0.5 text-muted-foreground">Stack</dt>
          <dd>
            <StackTags stack={project.stack} />
          </dd>

          <dt className="text-muted-foreground">Links</dt>
          <dd className="flex flex-wrap gap-x-4 gap-y-1">
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-0.5 underline decoration-border underline-offset-4 transition-colors hover:decoration-current"
              >
                {link.label}
                <ArrowUpRight className="size-3" aria-hidden />
              </a>
            ))}
            {project.closedSource && (
              <span className="text-muted-foreground">closed source</span>
            )}
            {!project.links?.length && !project.closedSource && (
              <span className="text-muted-foreground">—</span>
            )}
          </dd>
        </dl>
      </header>

      <div className="mt-10">
        <Body />
      </div>
    </article>
  );
}
