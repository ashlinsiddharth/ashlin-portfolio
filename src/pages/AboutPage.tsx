import React from 'react';
import Seo from '../components/layout/Seo';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <Seo title="About" />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
        About
      </h1>
    </div>
  );
};

export default AboutPage;
