import React from 'react';
import Seo from '../components/layout/Seo';
import HeroSection from '../components/home/HeroSection';
import FocusCards from '../components/home/FocusCards';
import AboutTeaser from '../components/home/AboutTeaser';
import { Reveal } from '../components/ui/Reveal';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <Seo title="Ashlin Siddharth | Full Stack Developer" />
      <HeroSection />
      <Reveal delayMs={100}>
        <FocusCards />
      </Reveal>
      <Reveal delayMs={150}>
        <AboutTeaser />
      </Reveal>
    </div>
  );
};

export default HomePage;
