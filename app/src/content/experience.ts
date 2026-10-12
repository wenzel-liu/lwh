import type { EducationItem, ExperienceItem, TrainingItem } from './types';

export const experienceIntro = {
  kicker: 'Career Path',
  title: 'Professional & Academic Experience',
  description:
    'Clinical education at Edwards Lifesciences, a completed Ph.D. at the University of Tokyo, and earlier residency training in internal medicine.'
};

export const profileSnapshotChips = [
  'MBBS / Ph.D.',
  'Clinical Education',
  'Structural Heart',
  'Cardiovascular Medicine',
  'Translational Research',
  'Clinical Trial Design',
  'Omics Analytics',
  'Heart Failure'
];

export const professionalExperience: ExperienceItem[] = [
  {
    title: 'Clinical Education Senior Specialist - Edwards Lifesciences',
    period: 'Mar 6, 2026 - Present',
    location: 'Tokyo, Japan',
    bullets: [
      'Clinical education within Transcatheter Mitral and Tricuspid Therapies (TMTT).',
      'Focus on structural heart therapies, echocardiography, and clinical learning.'
    ]
  },
  {
    title: 'Doctoral Research - The University of Tokyo, Graduate School of Medicine',
    period: 'Dec 2020 - Mar 2026',
    location: 'Tokyo, Japan',
    bullets: [
      'Completed a Ph.D. in March 2026, studying DDX41 and molecular mechanisms of heart failure.',
      'Built Python/R analytics across scRNA-seq, CUT&Tag, ChIP-seq, and eCLIP to guide experiment design.',
      'Presented research at cardiovascular conferences including AHA, ESC, ISHR, and JCS.',
      'Developed bioluminescent ATP imaging workflows for cardiomyocyte research.'
    ]
  },
  {
    title: 'Resident Physician, Internal Medicine - First Teaching Hospital of Tianjin University of TCM',
    period: 'Jun 2017 - Jun 2020',
    location: 'Tianjin, China',
    bullets: [
      'Co-led an RCT on heart failure with preserved ejection fraction (HFpEF).',
      'Integrated echocardiography and CPET datasets to clarify peripheral contributors.',
      'Authored publications translating clinical observations into peer-reviewed evidence.',
      'Managed inpatient and outpatient care including CCU responsibilities.',
      'Completed all clinical rotations and national residency training requirements.'
    ]
  }
];

export const educationItems: EducationItem[] = [
  {
    title: 'Ph.D. in Cardiovascular Medicine - The University of Tokyo',
    period: 'Dec 2020 - Mar 2026',
    details: 'Degree awarded in March 2026. Doctoral research on DDX41, RNA metabolism, and heart failure.',
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
    title: 'Standardized Residency Training - Internal Medicine',
    details: 'First Teaching Hospital of Tianjin University of TCM - Jun 2017-Jun 2020'
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
