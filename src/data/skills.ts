import type { Skill, SkillsData } from '../types';

/**
 * CONFIRMED SKILLS LIST — Single Source of Truth
 * Do not add, remove, rename, or assume any skills without owner approval.
 */
export const skills: Skill[] = [
  // Languages
  { name: 'HTML', category: 'Languages' },
  { name: 'CSS', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },

  // Frontend
  { name: 'React.js', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Responsive Web Design', category: 'Frontend' },

  // Backend
  { name: 'FastAPI', category: 'Backend' },
  { name: 'REST API Integration', category: 'Backend' },

  // AI / Data Science
  { name: 'Retrieval-Augmented Generation (RAG)', category: 'AI / Data Science' },
  { name: 'FAISS', category: 'AI / Data Science' },
  { name: 'Sentence Transformers', category: 'AI / Data Science' },

  // Tools & Platforms
  { name: 'Git', category: 'Tools & Platforms' },
  { name: 'GitHub', category: 'Tools & Platforms' },
  { name: 'VS Code', category: 'Tools & Platforms' },
  { name: 'Google Antigravity', category: 'Tools & Platforms' },
  { name: 'Vite', category: 'Tools & Platforms' },
  { name: 'Vercel', category: 'Tools & Platforms' },
];

export const skillsData: SkillsData = {
  // [OWNER TO CONFIRM]: One-line provisional introduction from design reference
  introduction: 'A combination of development, data and AI skills to build end-to-end solutions.',
  skills,
};

