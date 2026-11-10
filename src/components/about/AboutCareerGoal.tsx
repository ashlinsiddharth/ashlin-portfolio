import React from 'react';
import { Target } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { aboutData } from '../../data/about';

export const AboutCareerGoal: React.FC = () => {
  return (
    <GlassCard opacity="50" className="p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <Target className="h-8 w-8 text-brand-cyan shrink-0" aria-hidden="true" />
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
