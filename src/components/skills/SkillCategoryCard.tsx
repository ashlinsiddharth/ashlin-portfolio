import React from 'react';
import { BrainCircuit, Code2, Layout, Server, Wrench } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Tag } from '../ui/Tag';
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
        <div className="flex items-center gap-3 mb-5">
          <IconComponent className="h-6 w-6 text-brand-cyan shrink-0" aria-hidden="true" />
          <h2 className="text-lg sm:text-xl font-heading font-semibold text-text-primary tracking-tight">
            {category}
          </h2>
        </div>

        {/* Skills Tag Chips */}
        <div className="flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <Tag
              key={skill.name}
              className="px-3.5 py-1.5 text-xs text-text-primary border-brand-cyan/25 bg-brand-card/60 backdrop-blur-sm hover:border-brand-cyan/60 hover:text-white"
            >
              {skill.name}
            </Tag>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default SkillCategoryCard;

