import React, { useMemo, useState } from 'react';
import Seo from '../components/layout/Seo';
import { SectionLabel } from '../components/ui/SectionLabel';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import { projects } from '../data/projects';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Derive categories dynamically from tags actually present in the data
  const filterCategories = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return ['All', ...Array.from(tagSet)];
  }, []);

  // Client-side filtering
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.tags.includes(activeCategory));
  }, [activeCategory]);

  return (
    <div className="w-full pt-4 pb-8 sm:py-6">
      <Seo
        title="Projects"
        description="Featured technical projects by Ashlin Siddharth in AI/ML, Full Stack Development, and Modern Web Applications."
      />

      {/* Page Header */}
      <div className="mb-8 sm:mb-10">
        <SectionLabel text="MY PROJECTS" className="mb-3" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight mb-3">
          Featured Projects
        </h1>
        {/* [OWNER TO CONFIRM]: Factual introduction */}
        <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          A collection of applications and solutions I've built and contributed to across AI, full stack, and web development.
        </p>
      </div>

      {/* Filter Tabs */}
      {filterCategories.length > 1 && (
        <ProjectFilter
          categories={filterCategories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
      )}

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-card border border-brand-cyan/20 bg-brand-card/30">
          <p className="text-text-muted text-base mb-2">No projects found in this category.</p>
          <button
            type="button"
            onClick={() => setActiveCategory('All')}
            className="text-brand-cyan hover:underline font-mono text-sm"
          >
            Reset filter to All
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
