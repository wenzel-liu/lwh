import type { ProjectItem } from './types';
import { collections } from './collections';
import { siteHref } from '@/lib/nav';

export const medPrismProject: ProjectItem = { ...collections.medprism, url: siteHref(collections.medprism.path), linkLabel: 'Read articles' };
export const sciIndustrialistProject: ProjectItem = { ...collections['sci-industrialist'], url: siteHref(collections['sci-industrialist'].path), linkLabel: 'Read articles' };

export const focusReaderProject: ProjectItem = {
  title: 'Focus Reader',
  description:
    'A free, open-source Chrome extension I built for focused web reading. It emphasizes the beginnings of Latin-script words and extracts articles into a clean reader page, with all processing on your device.',
  tags: ['Chrome Extension', 'Open Source', 'Local First', 'MIT License'],
  features: [
    'Enhance selected text and restore it while preserving links and formatting.',
    'Read extracted articles in light or dark mode, or print them.',
    'No account, analytics, tracking, or page-content uploads.'
  ],
  url: 'https://github.com/wenzel-liu/focus-reader',
  linkLabel: 'Source & installation',
  featured: true
};
