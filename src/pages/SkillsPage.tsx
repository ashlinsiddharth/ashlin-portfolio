import React from 'react';
import Seo from '../components/layout/Seo';
import { SectionLabel } from '../components/ui/SectionLabel';
import SkillCategoryCard from '../components/skills/SkillCategoryCard';
import { skillsData } from '../data/skills';
import type { SkillCategory } from '../types';

export const SkillsPage: React.FC = () => {
  // Dynamically derive non-empty categories from the single source of truth
  const categories: SkillCategory[] = Array.from(
    new Set(skillsData.skills.map((s) => s.category))
  );

  return (
    <div className="w-full pt-4 pb-8 sm:py-6">
      <Seo
        title="Skills"
        description="Technical skills and expertise of Ashlin Siddharth across Languages, Frontend, Backend, AI / Data Science, and Tools."
      />

      {/* Page Header */}
      <div className="mb-8 sm:mb-12">
        <SectionLabel text="MY SKILLS" className="mb-3" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight mb-3">
          Technical Expertise
        </h1>
        <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {skillsData.introduction}
        </p>
      </div>

      {/* Dynamic Skill Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const categorySkills = skillsData.skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <SkillCategoryCard
              key={category}
              category={category}
              skills={categorySkills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsPage;
