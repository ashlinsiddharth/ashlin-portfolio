import React from 'react';
import { BrainCircuit, Database, Globe, Layout, Server } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { aboutData } from '../../data/about';

const interestIconMap = {
  Globe: Globe,
  BrainCircuit: BrainCircuit,
  Database: Database,
  Server: Server,
  Layout: Layout,
};

export const AboutInterests: React.FC = () => {
  return (
    <section aria-labelledby="interests-heading" className="mb-8 sm:mb-12">
      <h2
        id="interests-heading"
        className="text-2xl font-heading font-bold text-text-primary tracking-tight mb-6"
      >
        My Interests
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {aboutData.interests.map((interest) => {
          const IconComponent = interestIconMap[interest.icon];
          return (
            <GlassCard
              key={interest.title}
              hoverLift={true}
              opacity="50"
              className="p-5 flex flex-col items-center text-center justify-center transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan mb-3 shadow-glow-cyan-sm"
                aria-hidden="true"
              >
                <IconComponent className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-heading font-semibold text-text-primary">
                {interest.title}
              </h3>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};

export default AboutInterests;

