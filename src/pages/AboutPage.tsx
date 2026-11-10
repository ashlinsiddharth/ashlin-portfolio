import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import Seo from '../components/layout/Seo';
import { SectionLabel } from '../components/ui/SectionLabel';
import { GlassCard } from '../components/ui/GlassCard';
import AboutInterests from '../components/about/AboutInterests';
import AboutCareerGoal from '../components/about/AboutCareerGoal';
import { Reveal } from '../components/ui/Reveal';
import { aboutData } from '../data/about';
import portraitImg from '../assets/portrait.png';
import portraitWebp from '../assets/portrait.webp';
import portrait480Webp from '../assets/portrait-480.webp';
import portrait720Webp from '../assets/portrait-720.webp';

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

      {/* 1. Framed Photo Card beside My Background Card */}
      <Reveal delayMs={50}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-8 sm:mb-12">
          {/* Framed Rounded Photo Card (portrait on darkened scenery-tinted panel) */}
          <div className="lg:col-span-4 flex">
            <GlassCard
              opacity="50"
              className="p-4 sm:p-5 w-full flex items-center justify-center overflow-hidden border border-brand-cyan/25"
            >
              <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] rounded-2xl bg-gradient-to-b from-brand-card/80 via-[#0A192F]/90 to-[#06101E] border border-brand-cyan/20 flex items-end justify-center overflow-hidden shadow-inner">
                {/* Subtle cyan backlight */}
                <div
                  className="absolute bottom-6 inset-x-8 h-28 rounded-full bg-brand-cyan/15 blur-2xl pointer-events-none"
                  aria-hidden="true"
                />
                <picture className="relative z-10 flex items-end justify-center w-full h-[290px] sm:h-[320px]">
                  <source
                    type="image/webp"
                    srcSet={`${portrait480Webp} 480w, ${portrait720Webp} 720w, ${portraitWebp} 1199w`}
                    sizes="(min-width: 1024px) 460px, (min-width: 640px) 350px, 260px"
                  />
                  <img
                    src={portraitImg}
                    alt="Portrait of Ashlin Siddharth"
                    width={250}
                    height={310}
                    loading="lazy"
                    className="w-full h-full object-contain object-bottom filter drop-shadow-[0_0_15px_rgba(0,212,255,0.15)]"
                  />
                </picture>
              </div>
            </GlassCard>
          </div>

          {/* My Background Card */}
          <div className="lg:col-span-8 flex">
            <GlassCard opacity="50" className="p-6 sm:p-8 lg:p-10 w-full flex flex-col justify-center">
              <h2 className="text-xl sm:text-2xl font-heading font-semibold text-brand-cyan mb-4 tracking-tight">
                My Background
              </h2>
              <p className="text-text-muted leading-relaxed text-base sm:text-lg">
                {aboutData.background}
              </p>
            </GlassCard>
          </div>
        </div>
      </Reveal>

      {/* 2. Three-Cell Info Strip in One Glass Strip with Dividers */}
      <Reveal delayMs={100}>
        <GlassCard opacity="50" className="p-6 sm:p-8 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-brand-cyan/20">
            {/* Cell 1: Degree & Institution */}
            <div className="pb-4 sm:pb-0 sm:pr-6 flex items-start gap-4">
              <GraduationCap className="h-6 w-6 text-brand-cyan shrink-0 mt-1" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted font-heading font-medium mb-1">
                  Education
                </p>
                <h3 className="text-base sm:text-lg font-heading font-semibold text-text-primary">
                  {aboutData.education.degree}
                </h3>
                <p className="text-sm text-text-muted mt-0.5">
                  {aboutData.education.institution}
                </p>
              </div>
            </div>

            {/* Cell 2: Expected Graduation Year */}
            <div className="py-4 sm:py-0 sm:px-6 flex items-start gap-4">
              <Calendar className="h-6 w-6 text-brand-cyan shrink-0 mt-1" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted font-heading font-medium mb-1">
                  Expected Graduation
                </p>
                <h3 className="text-base sm:text-lg font-heading font-semibold text-brand-cyan">
                  {aboutData.education.graduationYear}
                </h3>
                <p className="text-sm text-text-muted mt-0.5">
                  Graduating in {aboutData.education.graduationYear}
                </p>
              </div>
            </div>

            {/* Cell 3: Location */}
            <div className="pt-4 sm:pt-0 sm:pl-6 flex items-start gap-4">
              <MapPin className="h-6 w-6 text-brand-cyan shrink-0 mt-1" aria-hidden="true" />
              <div>
                <p className="text-xs uppercase tracking-wider text-text-muted font-heading font-medium mb-1">
                  Location
                </p>
                <h3 className="text-base sm:text-lg font-heading font-semibold text-text-primary">
                  {aboutData.education.location}
                </h3>
                <p className="text-sm text-text-muted mt-0.5">
                  Bengaluru Campus
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </Reveal>

      {/* 3. Interests Grid with Bare Icons */}
      <Reveal delayMs={100}>
        <AboutInterests />
      </Reveal>

      {/* 4. Career Goal Card */}
      <Reveal delayMs={100}>
        <AboutCareerGoal />
      </Reveal>
    </div>
  );
};

export default AboutPage;
