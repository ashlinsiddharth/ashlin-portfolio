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
      {/* Focus cards sitting in front of portrait with higher z-index */}
      <Reveal delayMs={100} className="relative z-20 lg:-mt-6">
        <FocusCards />
      </Reveal>
      {/* Soft hairline divider between focus cards and About teaser */}
      <div className="w-full h-px bg-brand-cyan/15 my-6 sm:my-8" aria-hidden="true" />
      <Reveal delayMs={150}>
        <AboutTeaser />
      </Reveal>
    </div>
  );
};

export default HomePage;
