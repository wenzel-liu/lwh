import type { ProjectItem } from './types';
import { focusReaderProject, medPrismProject, sciIndustrialistProject } from './projects';

export const blogIntro = {
  kicker: 'Writing & Builds',
  title: 'Projects, Notes, and Experiments',
  description:
    'Independent software, research projects, and notes on cardiovascular science, learning, and practical technology.'
};

export const blogUsage = {
  title: 'How I Use This Page',
  description:
    'This section tracks active project surfaces and selected long-form notes. The goal is not volume, but reusable thinking artifacts and applied outputs.',
  tags: ['Research Workflow', 'Translation', 'Technical Execution']
};

export const blogProjects: ProjectItem[] = [focusReaderProject, medPrismProject, sciIndustrialistProject];

export { personalNotes as recentNotes } from './article-index';

export const blogThemes = [
  {
    title: 'Cardiovascular Mechanisms',
    description: 'From molecular circuits to clinically relevant endpoints in pressure overload and heart failure.'
  },
  {
    title: 'Data-to-Decision Design',
    description: 'Building concise, action-oriented representations from high-dimensional biological data.'
  },
  {
    title: 'Science to Industry Interface',
    description:
      'Framing research outputs so they can be evaluated and deployed in real operating environments.'
  }
];

export const blogCta = {
  title: 'Share a Build Idea',
  description:
    "If your team is exploring translational cardiology, omics analytics, or research workflow design, I'm happy to connect.",
  href: 'mailto:wenzel_liu@outlook.jp'
};
