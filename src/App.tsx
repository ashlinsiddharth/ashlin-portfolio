import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import DesignSystemShowcase from './pages/DesignSystemShowcase';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-text-primary">
      {/* Fixed Full-Screen Atmospheric Background */}
      <div className="cinematic-bg" aria-hidden="true">
        <div className="cinematic-bg-overlay" />
      </div>

      <Routes>
        {/* Foundation Placeholder Route */}
        <Route
          path="/"
          element={
            <main className="min-h-screen flex items-center justify-center p-6">
              <div className="flex items-center gap-3 rounded-card border border-brand-cyan/20 bg-brand-card/50 p-6 backdrop-blur-md shadow-glow-cyan-sm">
                <Terminal className="h-6 w-6 text-brand-cyan" />
                <h1 className="font-heading text-xl font-bold tracking-tight text-text-primary">
                  Ashlin Siddharth — Foundation Ready
                </h1>
              </div>
            </main>
          }
        />

        {/* ======================================================================
            TEMPORARY ROUTE: /design
            Used exclusively for Phase 2 design system and token verification.
            This route is NOT linked in any navigation and will be removed in Phase 8.
            ====================================================================== */}
        <Route path="/design" element={<DesignSystemShowcase />} />
      </Routes>
    </div>
  );
};

export default App;
