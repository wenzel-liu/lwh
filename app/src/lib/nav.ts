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
  const current = /\/(posts|medprism|sci-industrialist|notes)\//.test(currentPath) ? 'blog.html' : normalizePagePath(currentPath);
  const target = normalizePagePath(navHref);

  return current === target;
}

export function siteHref(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`;
}
