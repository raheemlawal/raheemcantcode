import { cn } from "@/lib/utils";
import type { Status } from "@/lib/projects";

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

const statusColor: Record<Status, string> = {
  live: "bg-emerald-500",
  "in progress": "bg-amber-500",
  shipped: "bg-sky-500",
  archived: "bg-neutral-400",
};

export function StatusDot({
  status,
  className,
}: {
  status: Status;
  className?: string;
}) {
  return (
    <span
      title={status}
      aria-label={status}
      className={cn(
        "inline-block size-1.5 shrink-0 rounded-full",
        statusColor[status],
        className,
      )}
    />
  );
}
