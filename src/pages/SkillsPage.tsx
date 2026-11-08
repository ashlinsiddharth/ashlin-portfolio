import React from 'react';
import Seo from '../components/layout/Seo';

export const SkillsPage: React.FC = () => {
  return (
    <div>
      <Seo title="Skills" />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
        Skills
      </h1>
    </div>
  );
};

export default SkillsPage;
