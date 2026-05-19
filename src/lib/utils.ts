import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conditional logic, de-duplicating conflicts. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// next/image with `unoptimized` does NOT prepend basePath to string src,
// so public assets 404 on the GitHub Pages project sub-path. Prefix them.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Resolve a /public asset URL against the deployment base path. */
export function asset(path: string) {
  if (/^(https?:)?\/\/|^data:/.test(path)) return path;
  return `${BASE_PATH}${path.startsWith("/") ? "" : "/"}${path}`;
}
