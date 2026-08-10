import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20">
      <h1 className="font-mono text-3xl font-bold tracking-tight">404</h1>
      <p className="mt-3 text-[15px] text-muted-foreground">
        Nothing here. Which, given the domain, is on brand.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block font-mono text-xs underline decoration-border underline-offset-4 transition-colors hover:decoration-current"
      >
        back to the index
      </Link>
    </div>
  );
}
