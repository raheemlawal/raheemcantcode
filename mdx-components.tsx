import type { MDXComponents } from "mdx/types";

/**
 * Styling for everything written in content/*.mdx.
 * Case studies are plain markdown — these are the house styles for it.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="mt-12 mb-3 font-mono text-sm font-semibold uppercase tracking-widest text-muted-foreground"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="mt-8 mb-2 text-base font-semibold" {...props} />
    ),
    p: (props) => (
      <p className="mt-4 text-[15px] leading-7 text-foreground/90" {...props} />
    ),
    ul: (props) => (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-foreground/90 marker:text-muted-foreground" {...props} />
    ),
    ol: (props) => (
      <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-7 text-foreground/90 marker:text-muted-foreground" {...props} />
    ),
    a: (props) => (
      <a
        className="underline decoration-border underline-offset-4 transition-colors hover:decoration-current"
        {...props}
      />
    ),
    strong: (props) => <strong className="font-semibold" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="mt-6 border-l-2 border-border pl-4 text-[15px] leading-7 text-muted-foreground italic"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-[13px]"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="mt-5 overflow-x-auto rounded-lg border border-border bg-muted p-4 font-mono text-[13px] leading-6 [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0"
        {...props}
      />
    ),
    hr: () => <hr className="my-10 border-border" />,
    // Markdown `![alt](src)` supplies no dimensions, which next/image requires,
    // so screenshots use a plain img. Import next/image directly in an MDX file
    // if a specific shot needs optimising.
    img: ({ alt = "", ...props }) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={alt}
        loading="lazy"
        className="mt-6 h-auto w-full rounded-lg border border-border"
        {...props}
      />
    ),
    ...components,
  };
}
