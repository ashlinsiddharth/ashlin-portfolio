import React from 'react';
import Seo from '../components/layout/Seo';

export const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Seo title="Projects" />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
        Projects
      </h1>
    </div>
  );
};

export default ProjectsPage;
