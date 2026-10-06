import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Still running, as told by the date range. A trailing en dash ("2026–") means
 * ongoing; a closed range ("2020–25") or a single year ("2025") means finished.
 *
 * Shared by `Project.year` and `Role.period`, which use the same convention.
 * Derived rather than stored so a status dot can never contradict the dates
 * printed next to it.
 */
export function isOngoing(period: string): boolean {
  return period.trimEnd().endsWith("\u2013");
}
