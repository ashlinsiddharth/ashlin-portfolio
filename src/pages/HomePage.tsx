import React from 'react';
import Seo from '../components/layout/Seo';
import HeroSection from '../components/home/HeroSection';
import FocusCards from '../components/home/FocusCards';
import AboutTeaser from '../components/home/AboutTeaser';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <Seo title="Ashlin Siddharth | Full Stack Developer" />
      <HeroSection />
      <FocusCards />
      <AboutTeaser />
    </div>
  );
};

export default HomePage;
