export const STORAGE_KEY = 'site-theme';

export type ThemePreference = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

const THEME_PREFERENCES: ThemePreference[] = ['light', 'dark', 'system'];

export function normalizeThemePreference(value: string | null | undefined): ThemePreference {
  if (!value) {
    return 'system';
  }

  return THEME_PREFERENCES.includes(value as ThemePreference) ? (value as ThemePreference) : 'system';
}

export function resolveTheme(preference: ThemePreference, systemPrefersDark: boolean): ResolvedTheme {
  if (preference === 'system') {
    return systemPrefersDark ? 'dark' : 'light';
  }

  return preference;
}

export function detectSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function readStoredTheme(): ThemePreference {
  if (typeof window === 'undefined') {
    return 'system';
  }

  try {
    return normalizeThemePreference(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return 'system';
  }
}

export function applyThemeToDocument(preference: ThemePreference): ResolvedTheme {
  const root = document.documentElement;
  const resolved = resolveTheme(preference, detectSystemTheme() === 'dark');

  root.setAttribute('data-theme-preference', preference);
  root.setAttribute('data-theme', resolved);
  root.classList.toggle('dark', resolved === 'dark');

  return resolved;
}

export function persistThemePreference(preference: ThemePreference): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    if (typeof Storage !== 'undefined' && window.localStorage) {
      Storage.prototype.setItem.call(window.localStorage, STORAGE_KEY, preference);
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, preference);
  } catch {
    // Ignore storage write failures.
  }
}
