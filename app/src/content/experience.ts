import type { EducationItem, ExperienceItem, TrainingItem } from './types';

export const experienceIntro = {
  kicker: 'Career Path',
  title: 'Professional & Academic Experience',
  description:
    'Clinical training, research execution, and translational work across heart failure medicine and molecular cardiology.'
};

export const profileSnapshotChips = [
  'M.D. / Ph.D. Track',
  'Cardiovascular Medicine',
  'Translational Research',
  'Clinical Trial Design',
  'Omics Analytics',
  'Heart Failure'
];

export const professionalExperience: ExperienceItem[] = [
  {
    title: 'Ph.D. Candidate - The University of Tokyo, Graduate School of Medicine',
    period: 'Apr 2022 - Present',
    location: 'Tokyo, Japan',
    bullets: [
      'Prioritized validation of DEAD-box RNA helicase as a therapeutic target for heart failure.',
      'Built Python/R analytics across scRNA-seq, CUT&Tag, ChIP-seq, and eCLIP to guide experiment design.',
      'Presented findings to academic and industry audiences at AHA/ESC (6 talks).'
    ]
  },
  {
    title: 'Foreign Research Student - The University of Tokyo, Department of Cardiovascular Medicine',
    period: 'Sep 2020 - Mar 2022',
    location: 'Tokyo, Japan',
    bullets: [
      'Invented and validated a bioluminescent ATP probe for real-time cardiomyocyte imaging.',
      'Published in Circulation and delivered reusable protocols for cross-lab adoption.',
      'Coordinated imaging and cardiology collaboration to improve reproducibility.'
    ]
  },
  {
    title: 'Resident Physician, Cardiovascular Medicine - First Teaching Hospital of Tianjin University of TCM',
    period: 'Jul 2019 - Aug 2020',
    location: 'Tianjin, China',
    bullets: [
      'Co-led an RCT on heart failure with preserved ejection fraction (HFpEF).',
      'Integrated echocardiography and CPET datasets to clarify peripheral contributors.',
      'Authored publications translating clinical observations into peer-reviewed evidence.'
    ]
  },
  {
    title: 'Resident Physician, Internal Medicine - First Teaching Hospital of Tianjin University of TCM',
    period: 'Sep 2017 - Jun 2019',
    location: 'Tianjin, China',
    bullets: [
      'Managed inpatient and outpatient care including CCU responsibilities.',
      'Completed all clinical rotations and national residency training requirements.'
    ]
  }
];

export const educationItems: EducationItem[] = [
  {
    title: 'Ph.D. in Cardiovascular Medicine - The University of Tokyo',
    period: 'Apr 2022 - Mar 2026 (Expected)',
    details: 'Thesis on DEAD-box RNA helicase-targeted therapy.',
    note: 'The University of Tokyo Award'
  },
  {
    title: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
    period: 'Sep 2012 - Jun 2017',
    details: 'Tianjin University of Traditional Chinese Medicine'
  }
];

export const trainingItems: TrainingItem[] = [
  {
    title: 'Fellow of Echocardiography',
    details: 'Fuwai Hospital, National Center for Cardiovascular Diseases - Sep-Oct 2019'
  },
  {
    title: 'Resident Physician, Cardiovascular Medicine',
    details: 'First Teaching Hospital of Tianjin University of TCM - 2019-2020'
  },
  {
    title: 'Resident Physician, Internal Medicine',
    details: 'First Teaching Hospital of Tianjin University of TCM - 2017-2019'
  }
];

export const technicalSkills = [
  'Python',
  'R',
  'SPSS',
  'scRNA-seq',
  'CUT&Tag',
  'ChIP-seq',
  'eCLIP',
  'RNA-seq',
  'Echocardiography',
  'CPET',
  'RCT Design',
  'Animal Models'
];

export const languageSkills = ['Chinese - Native', 'Japanese - Fluent (N1)', 'English - Fluent'];

export const collaborationCta = {
  title: 'Research Collaboration',
  description:
    'Interested in collaborative studies around pressure overload, RNA metabolism, or translational heart failure programs.',
  href: 'mailto:wenzel_liu@outlook.jp'
};
