import React from 'react';
import Seo from '../components/layout/Seo';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Seo title="Home" />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary">
        Home
      </h1>
    </div>
  );
};

export default HomePage;
