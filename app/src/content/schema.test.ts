import { describe, expect, it } from 'vitest';
import { profileSummary } from './profile';
import { blogCollections } from './blog';
import { projects } from './projects';
import { professionalExperience } from './experience';
import { publications } from './research';

describe('content schema', () => {
  it('profile summary has required fields', () => {
    expect(profileSummary.name.length).toBeGreaterThan(0);
    expect(profileSummary.email).toContain('@');
  });

  it('writing collections and projects include valid destinations', () => {
    expect(blogCollections.length).toBeGreaterThan(0);
    [...blogCollections, ...projects].forEach((item) => {
      expect(item.title.length).toBeGreaterThan(0);
      expect(new URL(item.url, 'https://wenzel-liu.github.io').protocol).toBe('https:');
    });
  });

  it('experience entries are non-empty', () => {
    expect(professionalExperience.length).toBeGreaterThan(0);
  });

  it('publications list is non-empty', () => {
    expect(publications.length).toBeGreaterThan(0);
  });
});
