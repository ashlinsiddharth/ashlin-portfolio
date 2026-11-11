import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageShell from './components/layout/PageShell';
import ScrollToTop from './components/layout/ScrollToTop';
import SuspenseFallback from './components/layout/SuspenseFallback';

// Lazy-loaded route components
import HomePage from './pages/HomePage';
const AboutPage = lazy(() => import('./pages/AboutPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage'));
const CertificateViewerPage = lazy(() => import('./pages/CertificateViewerPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <PageShell>
        <Suspense fallback={<SuspenseFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/certificates/:slug" element={<CertificateViewerPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </PageShell>
    </>
  );
};

export default App;
