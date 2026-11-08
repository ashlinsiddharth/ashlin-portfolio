import React from 'react';
import Seo from '../components/layout/Seo';
import { SectionLabel } from '../components/ui/SectionLabel';
import AboutBackground from '../components/about/AboutBackground';
import AboutEducation from '../components/about/AboutEducation';
import AboutInterests from '../components/about/AboutInterests';
import AboutCareerGoal from '../components/about/AboutCareerGoal';
import { aboutData } from '../data/about';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full pt-4 pb-8 sm:py-6">
      <Seo
        title="About"
        description="Learn more about Ashlin Siddharth, Full Stack Developer and BCA Data Science student at Presidency University, Bengaluru."
      />

      {/* Page Header */}
      <div className="mb-8 sm:mb-12">
        <SectionLabel text="ABOUT ME" className="mb-3" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight mb-3">
          Get to Know Me
        </h1>
        <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {aboutData.introduction}
        </p>
      </div>

      {/* 1. Background Narrative & Portrait */}
      <AboutBackground />

      {/* 2. Education Card */}
      <AboutEducation />

      {/* 3. Interests Grid */}
      <AboutInterests />

      {/* 4. Career Goal Card */}
      <AboutCareerGoal />
    </div>
  );
};

export default AboutPage;
