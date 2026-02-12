import type { ReactNode } from 'react';
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  applyThemeToDocument,
  detectSystemTheme,
  normalizeThemePreference,
  persistThemePreference,
  readStoredTheme,
  resolveTheme,
  type ResolvedTheme,
  type ThemePreference
} from '@/lib/theme';

interface ThemeContextValue {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  setPreference: (next: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialPreference(): ThemePreference {
  if (typeof document !== 'undefined') {
    const fromDom = normalizeThemePreference(document.documentElement.getAttribute('data-theme-preference'));
    if (fromDom !== 'system') {
      return fromDom;
    }
  }

  return readStoredTheme();
}

function getInitialResolved(preference: ThemePreference): ResolvedTheme {
  if (typeof document !== 'undefined') {
    const fromDom = document.documentElement.getAttribute('data-theme');
    if (fromDom === 'light' || fromDom === 'dark') {
      return fromDom;
    }
  }

  return resolveTheme(preference, detectSystemTheme() === 'dark');
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ThemePreference>(() => getInitialPreference());
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => getInitialResolved(preference));
  const setPreference = useCallback((next: ThemePreference) => {
    const normalized = normalizeThemePreference(next);
    persistThemePreference(normalized);
    setPreferenceState(normalized);
  }, []);

  useEffect(() => {
    const nextResolved = applyThemeToDocument(preference);
    setResolvedTheme(nextResolved);
  }, [preference]);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const onChange = (event: MediaQueryListEvent) => {
      if (preference !== 'system') {
        return;
      }

      const nextResolved: ResolvedTheme = event.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextResolved);
      document.documentElement.classList.toggle('dark', nextResolved === 'dark');
      setResolvedTheme(nextResolved);
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', onChange);
      return () => mediaQuery.removeEventListener('change', onChange);
    }

    mediaQuery.addListener(onChange);
    return () => mediaQuery.removeListener(onChange);
  }, [preference]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      preference,
      resolvedTheme,
      setPreference
    }),
    [preference, resolvedTheme, setPreference]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return context;
}
