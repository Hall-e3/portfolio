export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a root-relative path with the configured GitHub Pages base path. */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
