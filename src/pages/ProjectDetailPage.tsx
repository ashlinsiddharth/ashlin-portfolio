import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Seo from '../components/layout/Seo';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div>
      <Seo title={slug ? `Project: ${slug}` : 'Project Detail'} />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
        Project Detail
      </h1>
      <p className="text-text-muted mb-6">
        Project &quot;{slug}&quot; not found. No project data exists yet.
      </p>
      <Link
        to="/projects"
        className="inline-flex items-center text-sm font-sans text-brand-cyan hover:underline"
      >
        ← Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetailPage;
