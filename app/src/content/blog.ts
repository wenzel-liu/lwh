import type { ProjectItem } from './types';

export const blogIntro = {
  kicker: 'Writing & Builds',
  title: 'Projects, Notes, and Experiments',
  description:
    'A focused space for practical projects and reflective writing around cardiovascular science, research operations, and technology translation.'
};

export const blogUsage = {
  title: 'How I Use This Page',
  description:
    'This section tracks active project surfaces and selected long-form notes. The goal is not volume, but reusable thinking artifacts and applied outputs.',
  tags: ['Research Workflow', 'Translation', 'Technical Execution']
};

export const blogProjects: ProjectItem[] = [
  {
    title: 'MedPrism',
    description: 'A structured workspace for cardiovascular research intelligence, experimental planning, and synthesis.',
    tags: ['Research Ops', 'Knowledge Base'],
    url: 'https://whliu.notion.site/medprism?v=214aeaa78a4c81718d16000c31332e38&source=copy_link'
  },
  {
    title: 'Sci-Industrialist',
    description:
      'An exploration hub for bridging scientific novelty with industrial and clinical implementation pathways.',
    tags: ['Strategy', 'Translation'],
    url: 'https://whliu.notion.site/sci-industrialist?v=200aeaa78a4c80739092000ce65639af&source=copy_link'
  }
];

export const recentNotes = [
  {
    title: 'Academic Life in Tokyo',
    description: 'Reflections on research culture and adaptation in Tokyo.',
    href: 'posts/academic-life-in-tokyo.html'
  },
  {
    title: 'RNA Metabolism and Heart Disease',
    description: 'Practical implications of RNA regulation in cardiovascular pathology.',
    href: 'posts/rna-metabolism-heart-disease.html'
  },
  {
    title: 'Welcome Note',
    description: 'Context for this site and what I am building here.',
    href: 'posts/welcome-to-my-blog.html'
  }
];

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
