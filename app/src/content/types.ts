export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ProfileSummary {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  avatarSrc: string;
  socialLinks: SocialLink[];
  focusItems: string[];
  heroChips: string[];
  coreStack: string[];
  languages: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

export interface ExperienceItem {
  title: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface EducationItem {
  title: string;
  period: string;
  details: string;
  note?: string;
}

export interface TrainingItem {
  title: string;
  details: string;
}

export interface PublicationItem {
  year: number;
  title: string;
  citation: string;
}

export interface PresentationItem {
  year: number;
  title: string;
  citation: string;
}
