import { describe, expect, it } from 'vitest';
import { normalizePagePath, isNavItemActive } from './nav';

describe('nav helpers', () => {
  it('maps root path to index.html', () => {
    expect(normalizePagePath('/')).toBe('index.html');
    expect(normalizePagePath('/lwh/')).toBe('index.html');
  });

  it('extracts html file name from nested path', () => {
    expect(normalizePagePath('/lwh/experience.html')).toBe('experience.html');
  });

  it('matches active nav by file name', () => {
    expect(isNavItemActive('/lwh/blog.html', 'blog.html')).toBe(true);
    expect(isNavItemActive('/lwh/research.html', 'blog.html')).toBe(false);
  });
});
