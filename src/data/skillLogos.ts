import React from 'react';
import {
  siHtml5,
  siCss,
  siJavascript,
  siReact,
  siBootstrap,
  siTailwindcss,
  siFastapi,
  siGit,
  siGithub,
  siVite,
  siVercel,
} from 'simple-icons';
import {
  MonitorSmartphone,
  Network,
  BrainCircuit,
  Database,
  Cpu,
  Code2,
  Sparkles,
} from 'lucide-react';

export interface SkillIconData {
  type: 'simple' | 'lucide';
  path?: string;
  color: string;
  isBrand: boolean;
  lucideIcon?: React.ComponentType<{ className?: string }>;
}

export const skillLogos: Record<string, SkillIconData> = {
  // Languages
  HTML: {
    type: 'simple',
    path: siHtml5.path,
    color: '#E34F26', // >= 3:1 contrast
    isBrand: true,
  },
  CSS: {
    type: 'simple',
    path: siCss.path,
    color: '#FFFFFF', // < 3:1 contrast, fallback to white
    isBrand: true,
  },
  JavaScript: {
    type: 'simple',
    path: siJavascript.path,
    color: '#F7DF1E', // >= 3:1 contrast
    isBrand: true,
  },

  // Frontend
  'React.js': {
    type: 'simple',
    path: siReact.path,
    color: '#61DAFB', // >= 3:1 contrast
    isBrand: true,
  },
  Bootstrap: {
    type: 'simple',
    path: siBootstrap.path,
    color: '#FFFFFF', // < 3:1 contrast, fallback to white
    isBrand: true,
  },
  'Tailwind CSS': {
    type: 'simple',
    path: siTailwindcss.path,
    color: '#06B6D4', // >= 3:1 contrast
    isBrand: true,
  },
  'Responsive Web Design': {
    type: 'lucide',
    lucideIcon: MonitorSmartphone,
    color: '#00D4FF',
    isBrand: false,
  },

  // Backend
  FastAPI: {
    type: 'simple',
    path: siFastapi.path,
    color: '#009688', // >= 3:1 contrast
    isBrand: true,
  },
  'REST API Integration': {
    type: 'lucide',
    lucideIcon: Network,
    color: '#00D4FF',
    isBrand: false,
  },

  // AI / Data Science
  'Retrieval-Augmented Generation (RAG)': {
    type: 'lucide',
    lucideIcon: BrainCircuit,
    color: '#00D4FF',
    isBrand: false,
  },
  FAISS: {
    type: 'lucide',
    lucideIcon: Database,
    color: '#00D4FF',
    isBrand: false,
  },
  'Sentence Transformers': {
    type: 'lucide',
    lucideIcon: Cpu,
    color: '#00D4FF',
    isBrand: false,
  },

  // Tools & Platforms
  Git: {
    type: 'simple',
    path: siGit.path,
    color: '#F03C2E', // >= 3:1 contrast
    isBrand: true,
  },
  GitHub: {
    type: 'simple',
    path: siGithub.path,
    color: '#FFFFFF', // < 3:1 contrast, fallback to white
    isBrand: true,
  },
  'VS Code': {
    type: 'lucide',
    lucideIcon: Code2,
    color: '#00D4FF',
    isBrand: false,
  },
  'Google Antigravity': {
    type: 'lucide',
    lucideIcon: Sparkles,
    color: '#00D4FF',
    isBrand: false,
  },
  Vite: {
    type: 'simple',
    path: siVite.path,
    color: '#FFFFFF', // < 3:1 contrast, fallback to white
    isBrand: true,
  },
  Vercel: {
    type: 'simple',
    path: siVercel.path,
    color: '#FFFFFF', // < 3:1 contrast, fallback to white
    isBrand: true,
  },
};
