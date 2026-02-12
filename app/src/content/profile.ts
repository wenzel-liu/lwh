import type { ProfileSummary, ProjectItem } from './types';

export const profileSummary: ProfileSummary = {
  name: 'Wenzel Liu, M.D.',
  role: 'Cardiologist, Ph.D. candidate, and techno-industrialist based in Tokyo',
  tagline:
    'Focused on heart failure, RNA biology, and translational analytics at the intersection of medicine and computation.',
  location: 'Tokyo, Japan',
  email: 'wenzel_liu@outlook.jp',
  avatarSrc: 'assets/images/avatar.jpg',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/wenzel-liu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wenhao-liu-m-d-649112178/' },
    { label: 'X', href: 'https://x.com/monteopanquieu' },
    { label: 'ORCID', href: 'https://orcid.org/0000-0002-2243-8391' }
  ],
  focusItems: [
    'Target validation of DEAD-box RNA helicases for adverse cardiac remodeling.',
    'Integrated analysis across scRNA-seq, CUT&Tag, ChIP-seq, eCLIP, and RNA-seq.',
    'Bridging mechanistic biology and clinically deployable evidence pathways.'
  ],
  heroChips: ['Heart Failure', 'Omics Analysis', 'Real-World Data', 'Python', 'R', 'Clinical Trials'],
  coreStack: ['Python', 'R', 'SPSS', 'scRNA-seq', 'CUT&Tag', 'ChIP-seq', 'eCLIP', 'Echocardiography', 'CPET', 'RCT Design'],
  languages: ['Chinese - Native', 'Japanese - N1', 'English - Fluent']
};

export const homeIntro = {
  kicker: 'Open to Collaboration',
  title: 'Cardiovascular Research, Clinical Insight, and Applied Technology',
  description:
    'I work at the intersection of medicine and computation, translating mechanistic insights into practical pathways for heart failure research and care.'
};

export const selectedExperience = [
  {
    title: 'Ph.D. Candidate - The University of Tokyo',
    summary: 'Apr 2022 - Present - Cardiovascular medicine and RNA-centric therapeutic strategy.'
  },
  {
    title: 'Foreign Research Student - The University of Tokyo',
    summary: 'Sep 2020 - Mar 2022 - Bioluminescent ATP probe development and translational imaging workflow.'
  },
  {
    title: 'Resident Physician - Cardiovascular Medicine',
    summary: 'Jul 2019 - Aug 2020 - Heart failure trial operations, multimodal diagnostic synthesis.'
  }
];

export const homePublications = [
  {
    title: 'Chronobiological rhythms and artificial light at night in vascular physiology and pathology',
    summary: 'Hypertension Research (2024) - Liu W, Higashikuni Y, Sata M.'
  },
  {
    title: 'NLRP3 Inflammasome Activation Through Heart-Brain Interaction During Pressure Overload',
    summary: 'Circulation (2023) - Co-authored mechanistic inflammation study.'
  },
  {
    title: 'ESC Congress 2025 - Moderated Poster',
    summary: 'Rbm15b protects against adverse cardiac remodeling under pressure overload.'
  }
];

export const homeProjects: ProjectItem[] = [
  {
    title: 'MedPrism',
    description: 'Platform concept for medical research and analytics workflows in cardiovascular contexts.',
    tags: ['Research Ops', 'Knowledge Workflow'],
    url: 'https://whliu.notion.site/medprism?v=214aeaa78a4c81718d16000c31332e38&source=copy_link'
  },
  {
    title: 'Sci-Industrialist',
    description: 'Bridge between frontier scientific output and industrial execution opportunities.',
    tags: ['Translation', 'Strategy'],
    url: 'https://whliu.notion.site/sci-industrialist?v=200aeaa78a4c80739092000ce65639af&source=copy_link'
  }
];

export const homeCta = {
  title: "Let's Connect",
  description:
    'I am available for research collaborations, translational strategy work, and technical partnerships in cardiovascular medicine.',
  emailHref: 'mailto:wenzel_liu@outlook.jp',
  cvHref: 'assets/files/Curriculum Vitae.pdf'
};
