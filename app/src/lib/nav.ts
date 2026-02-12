export function normalizePagePath(pathname: string): string {
  const cleaned = pathname.split('?')[0].split('#')[0];

  if (!cleaned || cleaned === '/' || cleaned.endsWith('/')) {
    return 'index.html';
  }

  const parts = cleaned.split('/').filter(Boolean);
  const last = parts[parts.length - 1];

  return last || 'index.html';
}

export function isNavItemActive(currentPath: string, navHref: string): boolean {
  const current = normalizePagePath(currentPath);
  const target = normalizePagePath(navHref);

  return current === target;
}
