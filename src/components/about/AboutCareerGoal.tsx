import React from 'react';
import { Target } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { aboutData } from '../../data/about';

export const AboutCareerGoal: React.FC = () => {
  return (
    <GlassCard opacity="50" className="p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
        <div
          className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan shrink-0 shadow-glow-cyan-sm"
          aria-hidden="true"
        >
          <Target className="h-6 w-6" />
        </div>
        <div>
          <h2 className="text-xl font-heading font-semibold text-text-primary tracking-tight mb-2">
            Career Goal
          </h2>
          <p className="text-text-muted text-base leading-relaxed">
            {aboutData.careerGoal}
          </p>
        </div>
      </div>
    </GlassCard>
  );
};

export default AboutCareerGoal;

