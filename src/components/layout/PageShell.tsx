import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export interface PageShellProps {
  children: React.ReactNode;
}

export const PageShell: React.FC<PageShellProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col text-text-primary selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* 1. Accessible Skip to Content Link (First Focusable Element) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-cyan focus:text-brand-dark focus:font-bold focus:rounded-full focus:shadow-glow-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan"
      >
        Skip to content
      </a>

      {/* 2. Fixed Full-Screen Atmospheric Midnight-Blue Background */}
      <div className="cinematic-bg" aria-hidden="true">
        <div className="cinematic-bg-overlay" />
      </div>

      {/* 3. Header & Navigation */}
      <Navbar />

      {/* 4. Semantic Main Content Landmark */}
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 outline-none"
      >
        {children}
      </main>

      {/* 5. Footer Landmark */}
      <Footer />
    </div>
  );
};

export default PageShell;
