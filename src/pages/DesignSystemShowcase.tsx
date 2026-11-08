// ============================================================================
// TEMPORARY: Design System Showcase Route (/design)
// This page is created strictly for Phase 2 verification of tokens and UI primitives.
// It will be removed in Phase 8 (Clean-up & Final Audit).
// DO NOT LINK THIS ROUTE IN ANY NAVIGATION BAR OR FOOTER.
// ============================================================================

import React from 'react';
import Button from '../components/ui/Button';
import GlassCard from '../components/ui/GlassCard';
import SectionLabel from '../components/ui/SectionLabel';
import Tag from '../components/ui/Tag';

export const DesignSystemShowcase: React.FC = () => {
  return (
    <div className="relative min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Background layer */}
      <div className="cinematic-bg" aria-hidden="true">
        <div className="cinematic-bg-overlay" />
      </div>

      <header className="mb-12">
        <SectionLabel label="PHASE 2 DESIGN SYSTEM" className="mb-3" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-3">
          Design Tokens & Component Preview
        </h1>
        <p className="text-text-muted max-w-2xl text-base sm:text-lg">
          Verification showcase for the Midnight Blue aesthetic, glassmorphism surfaces, electric cyan
          highlights, and atomic UI primitives.
        </p>
      </header>

      <div className="space-y-12">
        {/* 1. Color Tokens & Contrast Readouts */}
        <section aria-labelledby="colors-heading">
          <SectionLabel label="FOUNDATION TOKENS" className="mb-2" />
          <h2 id="colors-heading" className="text-2xl font-heading font-semibold text-text-primary mb-6">
            Color Palette & WCAG Contrast
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <GlassCard className="p-5">
              <div className="h-14 rounded-md bg-brand-dark border border-brand-border mb-3 flex items-center justify-center font-mono text-xs text-text-muted">
                #0A192F
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-sm">Background (Primary)</h3>
              <p className="text-xs text-text-muted mt-1">Deep midnight-blue viewport base canvas.</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="h-14 rounded-md bg-brand-card/50 border border-brand-cyan/20 mb-3 flex items-center justify-center font-mono text-xs text-brand-cyan">
                #0F2A4D (50% Opacity)
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-sm">Surface / Glass Card</h3>
              <p className="text-xs text-text-muted mt-1">Frosted panel with backdrop-blur-md.</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="h-14 rounded-md bg-brand-cyan mb-3 flex items-center justify-center font-mono text-xs text-brand-dark font-bold">
                #00D4FF
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-sm">Accent Cyan (Primary)</h3>
              <p className="text-xs text-text-muted mt-1">Contrast on card: 9.6:1 (AAA Pass)</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="h-14 rounded-md bg-brand-blue mb-3 flex items-center justify-center font-mono text-xs text-white font-bold">
                #3B82F6
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-sm">Accent Blue (Secondary)</h3>
              <p className="text-xs text-text-muted mt-1">Supporting gradient and badge accent.</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="h-14 rounded-md bg-brand-card/50 border border-brand-cyan/20 mb-3 flex items-center justify-center">
                <span className="text-text-primary font-bold text-sm">Primary Text: #FFFFFF</span>
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-sm">Text Primary</h3>
              <p className="text-xs text-text-muted mt-1">Contrast on card: 16.15:1 (AAA Pass)</p>
            </GlassCard>

            <GlassCard className="p-5">
              <div className="h-14 rounded-md bg-brand-card/50 border border-brand-cyan/20 mb-3 flex items-center justify-center">
                <span className="text-text-muted font-medium text-sm">Muted Text: #A9B4C7</span>
              </div>
              <h3 className="font-heading font-semibold text-text-primary text-sm">Text Muted</h3>
              <p className="text-xs text-text-muted mt-1">Contrast on card: 7.63:1 (AAA Pass)</p>
            </GlassCard>
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section aria-labelledby="typography-heading">
          <SectionLabel label="TYPOGRAPHY SYSTEM" className="mb-2" />
          <h2 id="typography-heading" className="text-2xl font-heading font-semibold text-text-primary mb-6">
            Font Pairings & Scale
          </h2>
          <GlassCard className="p-6 sm:p-8 space-y-6">
            <div>
              <span className="font-mono text-xs text-brand-cyan">Space Grotesk — Headings (600 / 700)</span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-text-primary mt-1">
                The Quick Brown Fox Jumps Over The Lazy Dog
              </h3>
            </div>
            <div>
              <span className="font-mono text-xs text-brand-cyan">Inter — Body Text (400 / 500)</span>
              <p className="text-text-muted text-sm sm:text-base mt-1">
                A clean, modern sans-serif typeface engineered for high legibility on digital displays.
                Designed for paragraph hierarchy, descriptions, metadata, and form controls.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-brand-cyan">JetBrains Mono — Code, Tags & Technical Labels (500)</span>
              <p className="font-mono text-xs sm:text-sm text-brand-cyan mt-1">
                const portfolio = &#123; developer: &quot;Ashlin Siddharth&quot;, role: &quot;Full Stack Developer&quot; &#125;;
              </p>
            </div>
          </GlassCard>
        </section>

        {/* 3. Button Component States */}
        <section aria-labelledby="buttons-heading">
          <SectionLabel label="ATOMIC PRIMITIVE" className="mb-2" />
          <h2 id="buttons-heading" className="text-2xl font-heading font-semibold text-text-primary mb-6">
            Button Component States
          </h2>
          <GlassCard className="p-6 sm:p-8 space-y-8">
            {/* Primary Variant */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
                Primary Button (Cyan Fill)
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">Small Primary</Button>
                <Button variant="primary" size="md">Default Primary</Button>
                <Button variant="primary" size="lg">Large Primary</Button>
                <Button variant="primary" size="md" disabled>Disabled Primary</Button>
                <Button variant="primary" size="md" href="#test-link">As Anchor Link</Button>
              </div>
            </div>

            {/* Secondary Variant */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-4">
                Secondary Button (Transparent with Cyan Border)
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="secondary" size="sm">Small Secondary</Button>
                <Button variant="secondary" size="md">Default Secondary</Button>
                <Button variant="secondary" size="lg">Large Secondary</Button>
                <Button variant="secondary" size="md" disabled>Disabled Secondary</Button>
                <Button variant="secondary" size="md" href="#test-link">As Anchor Link</Button>
              </div>
            </div>
          </GlassCard>
        </section>

        {/* 4. GlassCard Component Variants */}
        <section aria-labelledby="cards-heading">
          <SectionLabel label="ATOMIC PRIMITIVE" className="mb-2" />
          <h2 id="cards-heading" className="text-2xl font-heading font-semibold text-text-primary mb-6">
            GlassCard Component Variants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard opacity="40" className="p-6">
              <h3 className="font-heading font-semibold text-text-primary text-base mb-2">
                GlassCard (40% Opacity)
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Light translucent surface with backdrop-blur-md and cyan border accent.
              </p>
            </GlassCard>

            <GlassCard opacity="50" className="p-6">
              <h3 className="font-heading font-semibold text-text-primary text-base mb-2">
                GlassCard (50% Standard)
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Baseline container used for content panels, forms, and info cards.
              </p>
            </GlassCard>

            <GlassCard opacity="60" hoverLift className="p-6">
              <h3 className="font-heading font-semibold text-text-primary text-base mb-2">
                GlassCard (Hover Lift & Glow)
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Interactive card variant that elevates on hover with enhanced cyan glow.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* 5. SectionLabel & Tag Components */}
        <section aria-labelledby="labels-tags-heading">
          <SectionLabel label="ATOMIC PRIMITIVES" className="mb-2" />
          <h2 id="labels-tags-heading" className="text-2xl font-heading font-semibold text-text-primary mb-6">
            SectionLabel & Tag Components
          </h2>
          <GlassCard className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-3">
                SectionLabel Indicators
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <SectionLabel label="HELLO, I'M" />
                <SectionLabel label="ABOUT ME" />
                <SectionLabel label="MY SKILLS" />
                <SectionLabel label="FEATURED PROJECTS" />
                <SectionLabel label="GET IN TOUCH" />
              </div>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-text-primary mb-3">
                Tag Components (Default & Active States)
              </h3>
              <div className="flex flex-wrap gap-2">
                <Tag active>All</Tag>
                <Tag>React</Tag>
                <Tag>TypeScript</Tag>
                <Tag>Tailwind CSS</Tag>
                <Tag>Python</Tag>
                <Tag>FastAPI</Tag>
                <Tag>FAISS</Tag>
                <Tag>Node.js</Tag>
                <Tag>PostgreSQL</Tag>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
};

export default DesignSystemShowcase;
