import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { SectionLabel } from '../ui/SectionLabel';
import { profile } from '../../data/profile';

export const AboutTeaser: React.FC = () => {
  // Filter only verified stats where confirmed === true
  const confirmedStats = profile.stats.filter((item) => item.confirmed);

  // Requirement: If fewer than 2 confirmed entries exist, do not render the panel at all
  const shouldRenderStats = confirmedStats.length >= 2;

  return (
    <section
      aria-labelledby="about-teaser-heading"
      className="py-12 sm:py-16 lg:py-20 border-t border-brand-cyan/10"
    >
      <div className={`grid grid-cols-1 ${shouldRenderStats ? 'lg:grid-cols-12' : ''} gap-10 lg:gap-16 items-center`}>
        {/* Left Column (About Teaser Narrative) */}
        <div className={shouldRenderStats ? 'lg:col-span-7' : 'max-w-3xl'}>
          <SectionLabel text="ABOUT ME" className="mb-4" />
          <h2
            id="about-teaser-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-text-primary tracking-tight leading-tight mb-4"
          >
            {profile.aboutTeaser.heading}
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8">
            {profile.aboutTeaser.paragraph}
          </p>
          <div>
            <Button variant="secondary" to={profile.aboutTeaser.ctaPath} size="md">
              <span>{profile.aboutTeaser.ctaText}</span>
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* 
          STATS PANEL DATA INTEGRITY & SUPPRESSION RULE:
          The stats panel is designed as a GlassCard that renders ONLY entries where 'confirmed' is true.
          Per project requirements: "If fewer than 2 confirmed entries exist, do not render the panel at all 
          and leave a code comment explaining why."
          Currently, only 1 confirmed entry exists: ('2027 / Graduation Year').
          Unconfirmed metrics (e.g. project counts, leadership roles, tech domains) must not be invented.
          Consequently, 'shouldRenderStats' evaluates to false, and the stats panel below is intentionally omitted.
        */}
        {shouldRenderStats && (
          <div className="lg:col-span-5">
            <GlassCard opacity="50" className="p-8">
              <div className="grid grid-cols-2 gap-6">
                {confirmedStats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-brand-cyan/40 pl-4">
                    <div className="text-3xl font-heading font-bold text-brand-cyan">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-text-muted mt-1 font-mono">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutTeaser;
