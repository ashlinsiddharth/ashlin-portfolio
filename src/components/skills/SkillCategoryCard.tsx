import React from 'react';
import { BrainCircuit, Code2, Layout, Server, Wrench } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { skillLogos } from '../../data/skillLogos';
import type { Skill, SkillCategory } from '../../types';

export interface SkillCategoryCardProps {
  category: SkillCategory;
  skills: Skill[];
}

const categoryIconMap: Record<SkillCategory, React.ComponentType<{ className?: string }>> = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  'AI / Data Science': BrainCircuit,
  'Tools & Platforms': Wrench,
};

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category, skills }) => {
  const IconComponent = categoryIconMap[category] ?? Code2;

  return (
    <GlassCard
      hoverLift={true}
      opacity="50"
      className="p-6 sm:p-7 flex flex-col justify-between transition-all duration-300"
    >
      <div>
        <div className="flex items-center gap-3 mb-6">
          <IconComponent className="h-6 w-6 text-brand-cyan shrink-0" aria-hidden="true" />
          <h2 className="text-lg sm:text-xl font-heading font-semibold text-text-primary tracking-tight">
            {category}
          </h2>
        </div>

        {/* Skills Grid: Logo above name, matching reference */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skills.map((skill) => {
            const logo = skillLogos[skill.name];
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-brand-card/40 border border-brand-cyan/15 hover:border-brand-cyan/40 hover:bg-brand-card/70 transition-all text-center group"
              >
                {logo?.type === 'simple' && logo.path ? (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 mb-2 transition-transform group-hover:scale-110"
                    fill={logo.color}
                    aria-hidden="true"
                  >
                    <path d={logo.path} />
                  </svg>
                ) : logo?.lucideIcon ? (
                  <logo.lucideIcon
                    className="w-6 h-6 mb-2 text-brand-cyan transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  />
                ) : (
                  <Code2
                    className="w-6 h-6 mb-2 text-brand-cyan transition-transform group-hover:scale-110"
                    aria-hidden="true"
                  />
                )}
                <span className="text-xs font-heading font-medium text-text-primary tracking-tight">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </GlassCard>
  );
};

export default SkillCategoryCard;
