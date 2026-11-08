import React from 'react';
import { Calendar, GraduationCap, MapPin, School } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { aboutData } from '../../data/about';

export const AboutEducation: React.FC = () => {
  return (
    <GlassCard opacity="50" className="p-6 sm:p-8 mb-8 sm:mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan shadow-glow-cyan-sm"
          aria-hidden="true"
        >
          <GraduationCap className="h-5 w-5" />
        </div>
        <h2 className="text-xl sm:text-2xl font-heading font-bold text-text-primary tracking-tight">
          Education
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Degree & Institution */}
        <div className="border-l-2 border-brand-cyan/40 pl-4">
          <p className="text-xs uppercase tracking-wider text-text-muted font-mono mb-1">
            Degree & Major
          </p>
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            {aboutData.education.degree}
          </h3>
          <p className="text-sm text-text-muted mt-1 flex items-center gap-1.5">
            <School className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
            <span>{aboutData.education.institution}</span>
          </p>
        </div>

        {/* Expected Graduation Year */}
        <div className="border-l-2 border-brand-cyan/40 pl-4">
          <p className="text-xs uppercase tracking-wider text-text-muted font-mono mb-1">
            Expected Graduation
          </p>
          <h3 className="text-lg font-heading font-semibold text-brand-cyan">
            {aboutData.education.graduationYear}
          </h3>
          <p className="text-sm text-text-muted mt-1 flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
            <span>Graduating in {aboutData.education.graduationYear}</span>
          </p>
        </div>

        {/* Location */}
        <div className="border-l-2 border-brand-cyan/40 pl-4 sm:col-span-2 lg:col-span-1">
          <p className="text-xs uppercase tracking-wider text-text-muted font-mono mb-1">
            Location
          </p>
          <h3 className="text-lg font-heading font-semibold text-text-primary">
            {aboutData.education.location}
          </h3>
          <p className="text-sm text-text-muted mt-1 flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
            <span>Bengaluru Campus</span>
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default AboutEducation;

