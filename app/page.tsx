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
import { StackTags, StatusDot } from "@/components/tag";
import { visibleProjects } from "@/lib/projects";
import { site } from "@/lib/site";

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

      <section aria-labelledby="work">
        <h2
          id="work"
          className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          Selected work
        </h2>

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
            {visibleProjects.map((project) => (
              <TableRow key={project.slug} className="group relative">
                <TableCell className="px-3 py-4 align-top">
                  <span className="flex items-center gap-2">
                    <StatusDot status={project.status} />
                    {project.caseStudy ? (
                      <Link
                        href={`/work/${project.slug}`}
                        className="font-medium underline decoration-border underline-offset-4 transition-colors after:absolute after:inset-0 hover:decoration-current focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        {project.name}
                      </Link>
                    ) : (
                      <span className="font-medium">{project.name}</span>
                    )}
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
      </section>
    </>
  );
}
