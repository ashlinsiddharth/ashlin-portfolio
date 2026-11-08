import React from 'react';
import { Tag } from '../ui/Tag';

export interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelectCategory(category)}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-full transition-all"
          >
            <Tag
              active={isActive}
              className={`cursor-pointer transition-all duration-200 py-1.5 px-4 text-xs font-mono tracking-wider ${
                isActive
                  ? 'bg-brand-cyan text-brand-dark shadow-glow-cyan-sm font-semibold'
                  : 'bg-brand-card/50 text-text-muted hover:text-text-primary hover:border-brand-cyan/50'
              }`}
            >
              {category}
            </Tag>
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;

