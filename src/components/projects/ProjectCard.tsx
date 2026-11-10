import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2 } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Tag } from '../ui/Tag';
import type { Project } from '../../types';

export interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const isCompleted = project.status === 'completed';

  return (
    <GlassCard
      hoverLift={true}
      opacity="50"
      className="p-0 overflow-hidden flex flex-col justify-between group transition-all duration-300 h-full border border-brand-cyan/20 hover:border-brand-cyan/50"
    >
      <div>
        {/* Project Visual / Midnight Blue Gradient Fallback */}
        <div className="relative w-full h-48 sm:h-52 bg-gradient-to-br from-brand-card/90 via-[#0a1b33] to-brand-dark flex items-center justify-center border-b border-brand-cyan/15 overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              width={600}
              height={340}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 text-brand-cyan/60 group-hover:text-brand-cyan transition-colors">
              <div className="w-12 h-12 rounded-full bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center shadow-glow-cyan-sm">
                <Code2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs tracking-wider uppercase opacity-75">
                {project.tags[0] ?? 'Project'}
              </span>
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-heading font-medium tracking-wide ${
                isCompleted
                  ? 'bg-brand-cyan text-brand-dark font-semibold shadow-glow-cyan-sm border border-brand-cyan'
                  : 'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/40'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                  isCompleted ? 'bg-brand-dark' : 'bg-brand-cyan animate-pulse'
                }`}
                aria-hidden="true"
              />
              {project.status === 'completed' ? 'Completed' : 'In Progress'}
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h2 className="text-xl font-heading font-semibold text-text-primary group-hover:text-brand-cyan transition-colors tracking-tight mb-2">
            {project.title}
          </h2>
          <p className="text-text-muted text-sm leading-relaxed line-clamp-2 mb-4">
            {project.summary}
          </p>

          {/* Technology Stack Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.stack.slice(0, 4).map((tech) => (
              <Tag key={tech} className="py-0.5 px-2 text-[11px]">
                {tech}
              </Tag>
            ))}
            {project.stack.length > 4 && (
              <span className="text-xs text-text-muted font-mono self-center">
                +{project.stack.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Primary Card Link Target */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/projects/${project.slug}`}
          className="min-h-[44px] inline-flex items-center text-sm font-semibold text-brand-cyan hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded py-1"
          aria-label={`View details of ${project.title}`}
        >
          <span>View Project Details</span>
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;

