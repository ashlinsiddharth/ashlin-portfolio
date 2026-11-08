import type { Project } from '../types';

/**
 * APPROVED CANDIDATE PROJECTS
 * All provisional copy and unverified claims are flagged [OWNER TO CONFIRM].
 * No fake screenshots, no fake metrics, no dead buttons.
 */
export const projects: Project[] = [
  {
    slug: 'academic-rag-assistant',
    title: 'RAG-Based Intelligent Academic Information Assistant for University Students',
    summary:
      'An academic information assistant designed to help university students retrieve relevant information from academic documents.',
    // [OWNER TO CONFIRM]: Project status
    status: 'in-progress',
    // [OWNER TO CONFIRM]: Stated personal role
    role: 'Group Leader. Responsible for coordinating the project and developing the RAG and FastAPI backend integration.',
    overview:
      'This is an academic group project developed as part of the BCA Data Science mini project. The project uses Retrieval-Augmented Generation to help students obtain relevant information from academic documents.',
    // [OWNER TO CONFIRM]: Core verified features
    features: [
      'Document parsing and processing for university academic reference materials',
      'Vector embeddings and similarity search using FAISS',
      'Contextual retrieval-augmented answer generation',
      'FastAPI backend service with structured query endpoints',
    ],
    stack: ['Python', 'FastAPI', 'FAISS', 'Sentence Transformers', 'PyPDF'],
    tags: ['AI/ML', 'Full Stack', 'Data Science'],
    links: {
      repo: 'https://github.com/ashlinsiddharth/academic-rag-assistant',
    },
  },
  {
    slug: 'verisync',
    title: 'VeriSync — Secure Assessment Portal',
    summary: 'A secure online assessment portal designed for internship assessment workflows.',
    // [OWNER TO CONFIRM]: Project status
    status: 'in-progress',
    // [OWNER TO CONFIRM]: Stated personal role
    role: 'Developer B. Responsible for the admin-web application during Phase 1, with additional responsibilities involving the code-runner service planned for later development.',
    overview:
      'VeriSync is a secure internship assessment portal developed for Destiny Communication. It is intended to support student registration and online assessments with assessment-integrity precautions.',
    stack: ['React.js', 'Tailwind CSS', 'REST API Integration'],
    tags: ['Web Dev', 'Full Stack'],
    links: {},
  },
  {
    slug: 'inpm-trust-website',
    title: 'INPM Trust Website',
    summary:
      'A website developed for INPM Trust to present its organization, activities and support information.',
    // [OWNER TO CONFIRM]: Project status
    status: 'completed',
    // [OWNER TO CONFIRM]: Exact responsibilities
    role: 'Website development and design.',
    overview:
      'A website project for INPM Trust with pages covering Home, About, Vision and Mission, Trustees, Causes, News and Events, Support Us and Contact.',
    // [OWNER TO CONFIRM]: Verified project sections
    features: [
      'Organization information pages',
      'Vision and Mission section',
      'Trustees section',
      'Causes section',
      'News and Events section',
      'Support Us section',
      'Contact section',
    ],
    stack: ['React.js', 'Responsive Web Design', 'HTML', 'CSS'],
    tags: ['Web Dev', 'Full Stack'],
    links: {},
  },
];

