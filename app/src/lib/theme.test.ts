import { describe, expect, it } from 'vitest';
import { normalizeThemePreference, resolveTheme, STORAGE_KEY } from './theme';

describe('theme helpers', () => {
  it('exports stable storage key', () => {
    expect(STORAGE_KEY).toBe('site-theme');
  });

  it('normalizes unsupported values to system', () => {
    expect(normalizeThemePreference('foo')).toBe('system');
  });

  it('resolves explicit mode directly', () => {
    expect(resolveTheme('dark', false)).toBe('dark');
    expect(resolveTheme('light', true)).toBe('light');
  });

  it('resolves system mode by media preference', () => {
    expect(resolveTheme('system', true)).toBe('dark');
    expect(resolveTheme('system', false)).toBe('light');
  });
});
