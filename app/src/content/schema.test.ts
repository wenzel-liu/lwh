import { describe, expect, it } from 'vitest';
import { profileSummary } from './profile';
import { blogProjects } from './blog';
import { professionalExperience } from './experience';
import { publications } from './research';

describe('content schema', () => {
  it('profile summary has required fields', () => {
    expect(profileSummary.name.length).toBeGreaterThan(0);
    expect(profileSummary.email).toContain('@');
  });

  it('blog projects include url and title', () => {
    expect(blogProjects.length).toBeGreaterThan(0);
    blogProjects.forEach((item) => {
      expect(item.title.length).toBeGreaterThan(0);
      expect(item.url.startsWith('http')).toBe(true);
    });
  });

  it('experience entries are non-empty', () => {
    expect(professionalExperience.length).toBeGreaterThan(0);
  });

  it('publications list is non-empty', () => {
    expect(publications.length).toBeGreaterThan(0);
  });
});
