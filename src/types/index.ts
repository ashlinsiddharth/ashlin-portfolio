/**
 * Confirmed skill categories (exact union of approved categories).
 * Do not add, rename, or assume categories without owner approval.
 */
export type SkillCategory =
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'AI / Data Science'
  | 'Tools & Platforms';

export interface Skill {
  name: string;
  category: SkillCategory;
}

export type InterestIcon = 'Globe' | 'BrainCircuit' | 'Database' | 'Server' | 'Layout';

export interface Interest {
  title: string;
  icon: InterestIcon;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
}

export interface AboutData {
  introduction: string; // [OWNER TO CONFIRM]
  background: string;   // [OWNER TO CONFIRM]
  careerGoal: string;   // [OWNER TO CONFIRM]
  education: Education; // Confirmed facts
  interests: Interest[];// [OWNER TO CONFIRM]
}

export interface SkillsData {
  introduction: string; // [OWNER TO CONFIRM]
  skills: Skill[];      // Confirmed list
}

/**
 * Project definitions for Phase 6 (Projects & Project Details)
 */
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export interface ProjectLinks {
  live?: string;
  repo?: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  role?: string;
  overview?: string;
  features?: string[];
  stack: string[];
  tags: string[];
  image?: string;
  links: ProjectLinks;
}

/**
 * Professional Experience definitions for Phase 7
 */
export interface Experience {
  title: string;
  organisation: string;
  dateRange: string;
  type: string;
  bullets: string[];
}

/**
 * Contact definitions for Phase 7
 */
export interface ContactInfo {
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;
}

