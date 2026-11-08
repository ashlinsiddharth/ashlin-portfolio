import React from 'react';
import { BrainCircuit, Code2, Database, Layers } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { profile } from '../../data/profile';

const iconMap = {
  Code2: Code2,
  BrainCircuit: BrainCircuit,
  Database: Database,
  Layers: Layers,
};

export const FocusCards: React.FC = () => {
  return (
    <section aria-label="Core Focus Areas" className="py-6 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {profile.focusCards.map((card) => {
          const IconComponent = iconMap[card.icon];
          return (
            <GlassCard
              key={card.title}
              hoverLift={true}
              opacity="50"
              className="p-6 flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan mb-4 shadow-glow-cyan-sm"
                  aria-hidden="true"
                >
                  <IconComponent className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-heading font-semibold text-text-primary tracking-tight mb-2">
                  {card.title}
                </h2>
                <p className="text-sm text-text-muted leading-relaxed">{card.description}</p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};

export default FocusCards;
