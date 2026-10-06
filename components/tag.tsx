import { cn } from "@/lib/utils";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-border bg-muted px-1.5 py-px font-mono text-[10px] leading-4 text-muted-foreground">
      {children}
    </span>
  );
}

export function StackTags({
  stack,
  limit,
}: {
  stack: readonly string[];
  limit?: number;
}) {
  const shown = limit ? stack.slice(0, limit) : stack;
  const rest = stack.length - shown.length;

  return (
    <span className="flex flex-wrap gap-1">
      {shown.map((s) => (
        <Tag key={s}>{s}</Tag>
      ))}
      {rest > 0 && <Tag>+{rest}</Tag>}
    </span>
  );
}

/**
 * Green if the work is still running, grey if it is finished. Deliberately two
 * states: an earlier version had four colours and no legend on the page, so the
 * extra ones were decoration nobody could decode.
 */
export function StatusDot({
  ongoing,
  className,
}: {
  ongoing: boolean;
  className?: string;
}) {
  const label = ongoing ? "ongoing" : "finished";
  return (
    <span
      title={label}
      aria-label={label}
      className={cn(
        "inline-block size-1.5 shrink-0 rounded-full",
        ongoing ? "bg-emerald-500" : "bg-neutral-400",
        className,
      )}
    />
  );
}
