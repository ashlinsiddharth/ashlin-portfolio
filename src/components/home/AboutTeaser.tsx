import React from 'react';
import { ArrowRight, FolderGit2, GraduationCap } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { SectionLabel } from '../ui/SectionLabel';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';

export const AboutTeaser: React.FC = () => {
  // Two factual derived stats: confirmed projects count from projects.ts and graduation year from profile.ts
  const stats = [
    {
      value: String(projects.length),
      label: 'Projects',
      icon: FolderGit2,
    },
    {
      value: profile.graduationYear,
      label: 'Graduation Year',
      icon: GraduationCap,
    },
  ];

  return (
    <section
      aria-labelledby="about-teaser-heading"
      className="py-10 sm:py-14 lg:py-18"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column (About Teaser Narrative) */}
        <div className="lg:col-span-7">
          <SectionLabel text="ABOUT ME" className="mb-4" />
          <h2
            id="about-teaser-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-text-primary tracking-tight leading-tight mb-4"
          >
            {profile.aboutTeaser.heading}
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            {profile.aboutTeaser.paragraph}
          </p>
          <div>
            <Button variant="secondary" to={profile.aboutTeaser.ctaPath} size="md">
              <span>{profile.aboutTeaser.ctaText}</span>
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Right Column (Reference 2-Cell Stats Glass Panel) */}
        <div className="lg:col-span-5">
          <GlassCard opacity="50" className="p-6 sm:p-8">
            <div className="grid grid-cols-2 divide-x divide-brand-cyan/20">
              {stats.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`flex flex-col justify-center ${
                      idx === 0 ? 'pr-4 sm:pr-6' : 'pl-4 sm:pl-6'
                    }`}
                  >
                    <IconComponent className="h-6 w-6 text-brand-cyan mb-3" aria-hidden="true" />
                    <div className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-text-muted mt-1 font-heading font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default AboutTeaser;
