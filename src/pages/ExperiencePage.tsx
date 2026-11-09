import React from 'react';
import {
  Briefcase,
  Calendar,
  FileDown,
  GraduationCap,
  MapPin,
  School,
} from 'lucide-react';
import Seo from '../components/layout/Seo';
import { SectionLabel } from '../components/ui/SectionLabel';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { experiences } from '../data/experience';
import { profile } from '../data/profile';

export const ExperiencePage: React.FC = () => {
  return (
    <div className="w-full pt-4 pb-12 sm:py-6">
      <Seo
        title="Experience"
        description="Professional experience, academic foundation, and technical background of Ashlin Siddharth."
      />

      {/* Page Header */}
      <div className="mb-8 sm:mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-3">
          <SectionLabel text="EXPERIENCE & LEADERSHIP" />
          {/* Resume Quick Action */}
          <div>
            <Button
              variant="secondary"
              size="sm"
              href={profile.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="gap-2"
              aria-label="Download Resume PDF"
            >
              <FileDown className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight mb-3">
          My Experience
        </h1>

        {/* [OWNER TO CONFIRM]: Provisional intro text for Experience page */}
        <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          A record of my professional experience, leadership roles, and academic foundation in computer applications and data science.
        </p>
      </div>

      {/* Main Content: Timeline or Empty State */}
      <div className="mb-12">
        {experiences.length > 0 ? (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-brand-cyan/25 space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Cyan Timeline Dot */}
                <span
                  className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-brand-cyan shadow-glow-cyan border-2 border-brand-dark"
                  aria-hidden="true"
                />

                <GlassCard
                  hoverLift={true}
                  opacity="50"
                  className="p-6 sm:p-7 border border-brand-cyan/20 group-hover:border-brand-cyan/50 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h2 className="text-xl font-heading font-semibold text-text-primary tracking-tight">
                      {exp.title}
                    </h2>
                    <span className="font-mono text-xs sm:text-sm text-brand-cyan font-medium">
                      {exp.dateRange}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-sm font-medium text-text-muted">
                      {exp.organisation}
                    </span>
                    {exp.type && (
                      <Tag className="py-0.5 px-2 text-[11px]">
                        {exp.type}
                      </Tag>
                    )}
                  </div>

                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="space-y-2 mt-3">
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <li
                          key={bulletIdx}
                          className="flex items-start gap-2.5 text-text-muted text-sm leading-relaxed"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-brand-cyan/70 mt-2 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </GlassCard>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State: Experience details coming soon */
          <GlassCard
            opacity="50"
            className="p-8 sm:p-12 text-center border border-brand-cyan/20 bg-brand-card/40"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mx-auto mb-4 shadow-glow-cyan-sm">
              <Briefcase className="h-8 w-8" aria-hidden="true" />
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-semibold text-text-primary tracking-tight mb-2">
              Experience details coming soon
            </h2>
            <p className="text-text-muted text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-6">
              I am currently compiling verified professional roles, internships, and project contributions. Confirmed entries will be displayed here shortly.
            </p>
            <Button variant="primary" to="/projects" size="sm">
              Explore My Projects
            </Button>
          </GlassCard>
        )}
      </div>

      {/* Confirmed Education Card */}
      <div>
        <h2 className="text-2xl font-heading font-bold text-text-primary tracking-tight mb-4 flex items-center gap-2.5">
          <GraduationCap className="h-6 w-6 text-brand-cyan" aria-hidden="true" />
          <span>Academic Background</span>
        </h2>

        <GlassCard opacity="50" className="p-6 sm:p-8 border border-brand-cyan/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Degree & Major */}
            <div className="border-l-2 border-brand-cyan/40 pl-4">
              <p className="text-xs uppercase tracking-wider text-text-muted font-mono mb-1">
                Degree & Major
              </p>
              <h3 className="text-lg font-heading font-semibold text-text-primary">
                {profile.degree}
              </h3>
              <p className="text-sm text-text-muted mt-1 flex items-center gap-1.5">
                <School className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
                <span>{profile.institution}</span>
              </p>
            </div>

            {/* Expected Graduation Year */}
            <div className="border-l-2 border-brand-cyan/40 pl-4">
              <p className="text-xs uppercase tracking-wider text-text-muted font-mono mb-1">
                Expected Graduation
              </p>
              <h3 className="text-lg font-heading font-semibold text-brand-cyan">
                {profile.graduationYear}
              </h3>
              <p className="text-sm text-text-muted mt-1 flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
                <span>Graduating in {profile.graduationYear}</span>
              </p>
            </div>

            {/* Location */}
            <div className="border-l-2 border-brand-cyan/40 pl-4 sm:col-span-2 lg:col-span-1">
              <p className="text-xs uppercase tracking-wider text-text-muted font-mono mb-1">
                Location
              </p>
              <h3 className="text-lg font-heading font-semibold text-text-primary">
                {profile.location}
              </h3>
              <p className="text-sm text-text-muted mt-1 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
                <span>Bengaluru, India</span>
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default ExperiencePage;
