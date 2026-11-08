import React from 'react';
import { useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Briefcase,
  CheckCircle2,
  Code2,
  ExternalLink,
  Github,
  Layers,
} from 'lucide-react';
import Seo from '../components/layout/Seo';
import NotFoundPage from './NotFoundPage';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { Tag } from '../components/ui/Tag';
import { projects } from '../data/projects';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // Unknown slugs render the existing NotFoundPage state
  if (!project) {
    return <NotFoundPage />;
  }

  const isCompleted = project.status === 'completed';
  const hasFeatures = project.features && project.features.length > 0;
  const hasLinks = project.links.live || project.links.repo;

  return (
    <div className="w-full pt-4 pb-12 sm:py-6">
      <Seo title={project.title} description={project.summary} />

      {/* Back to Projects Link */}
      <div className="mb-6">
        <Button variant="secondary" to="/projects" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          <span>Back to Projects</span>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium tracking-wide border ${
              isCompleted
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                : 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/30'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                isCompleted ? 'bg-emerald-400' : 'bg-brand-cyan'
              }`}
              aria-hidden="true"
            />
            {isCompleted ? 'Completed' : 'In Progress'}
          </span>

          {project.tags.map((tag) => (
            <Tag key={tag} className="text-xs">
              {tag}
            </Tag>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight mb-3">
          {project.title}
        </h1>
        <p className="text-text-muted text-base sm:text-lg max-w-3xl leading-relaxed">
          {project.summary}
        </p>
      </div>

      {/* Featured Visual: Existing Image or Plain Midnight Blue Gradient Fallback */}
      <div className="mb-10 w-full h-56 sm:h-72 lg:h-96 rounded-card bg-gradient-to-br from-brand-card/90 via-[#0a1b33] to-brand-dark border border-brand-cyan/25 flex items-center justify-center overflow-hidden shadow-glow-cyan-sm">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            width={1200}
            height={675}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mx-auto mb-3 shadow-glow-cyan">
              <Code2 className="h-8 w-8" aria-hidden="true" />
            </div>
            <p className="font-heading font-semibold text-lg text-text-primary">
              {project.title}
            </p>
            <p className="font-mono text-xs text-text-muted mt-1 uppercase tracking-widest">
              Architecture & Interface Preview
            </p>
          </div>
        )}
      </div>

      {/* Main Content Columns: 12-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (Overview & Features) */}
        <div className="lg:col-span-8 space-y-8">
          {/* Overview */}
          {project.overview && (
            <GlassCard opacity="50" className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-text-primary tracking-tight mb-4">
                Overview
              </h2>
              <p className="text-text-muted text-base leading-relaxed whitespace-pre-line">
                {project.overview}
              </p>
            </GlassCard>
          )}

          {/* Key Features */}
          {hasFeatures && (
            <GlassCard opacity="50" className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-text-primary tracking-tight mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features!.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 text-brand-cyan shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-text-muted text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          )}
        </div>

        {/* Right Sidebar (Role, Stack & Links) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Role (rendered only if available) */}
          {project.role && (
            <GlassCard opacity="50" className="p-6">
              <div className="flex items-center gap-2.5 mb-3 text-brand-cyan">
                <Briefcase className="h-5 w-5 shrink-0" aria-hidden="true" />
                <h2 className="text-lg font-heading font-semibold text-text-primary">
                  My Role
                </h2>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                {project.role}
              </p>
            </GlassCard>
          )}

          {/* Tech Stack */}
          {project.stack && project.stack.length > 0 && (
            <GlassCard opacity="50" className="p-6">
              <div className="flex items-center gap-2.5 mb-4 text-brand-cyan">
                <Layers className="h-5 w-5 shrink-0" aria-hidden="true" />
                <h2 className="text-lg font-heading font-semibold text-text-primary">
                  Tech Stack
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Tag key={tech} className="py-1 px-3 text-xs">
                    {tech}
                  </Tag>
                ))}
              </div>
            </GlassCard>
          )}

          {/* Action Links (rendered only when genuine URLs exist) */}
          {hasLinks && (
            <GlassCard opacity="50" className="p-6">
              <h2 className="text-lg font-heading font-semibold text-text-primary mb-4">
                Project Links
              </h2>
              <div className="space-y-3">
                {project.links.live && (
                  <Button
                    variant="primary"
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" aria-hidden="true" />
                    <span>View Live</span>
                  </Button>
                )}
                {project.links.repo && (
                  <Button
                    variant="secondary"
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                    <span>GitHub Repository</span>
                  </Button>
                )}
              </div>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
