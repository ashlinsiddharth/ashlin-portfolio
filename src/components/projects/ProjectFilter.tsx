import React from 'react';

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
      className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8"
    >
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelectCategory(category)}
            className={`min-h-[44px] px-5 py-2 rounded-full text-xs font-heading font-medium tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan ${
              isActive
                ? 'bg-brand-cyan text-[#0A192F] font-semibold shadow-glow-cyan-sm border border-brand-cyan'
                : 'bg-transparent border border-brand-cyan/30 text-text-muted hover:text-white hover:border-brand-cyan/60 hover:bg-brand-card/40'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ProjectFilter;
