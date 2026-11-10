import React from 'react';
import { ArrowRight, Calendar, Download, GraduationCap, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { Tag } from '../ui/Tag';
import { profile } from '../../data/profile';
import portraitImg from '../../assets/portrait.png';
import portraitWebp from '../../assets/portrait.webp';

export const HeroSection: React.FC = () => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative pt-4 sm:pt-8 lg:pt-12 pb-6 sm:pb-10 lg:pb-16"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Column (Hero Content & CTAs) */}
        <div className="flex-1 text-center lg:text-left z-10">
          <SectionLabel text="HELLO, I'M" className="mb-4 justify-center lg:justify-start" />
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-text-primary tracking-tight leading-tight mb-2"
          >
            {profile.name}
          </h1>
          <p className="text-2xl sm:text-3xl font-heading font-semibold text-brand-cyan tracking-tight mb-4">
            {profile.title}
          </p>
          <p className="text-text-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            {profile.intro}
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <Button variant="primary" to="/projects" size="md">
              <span>Explore My Work</span>
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              variant="secondary"
              href={profile.resumePath}
              download="Ashlin_Siddharth_Resume.pdf"
              size="md"
            >
              <Download className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>Download Resume</span>
            </Button>
          </div>

          {/* Info Chips */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
            <Tag className="flex items-center gap-1.5 py-1.5 px-3.5 text-xs text-text-primary border-brand-cyan/25 bg-brand-card/60 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
              <span>{profile.location}</span>
            </Tag>
            <Tag className="flex items-center gap-1.5 py-1.5 px-3.5 text-xs text-text-primary border-brand-cyan/25 bg-brand-card/60 backdrop-blur-sm">
              <GraduationCap className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
              <span>{profile.degree}</span>
            </Tag>
            <Tag className="flex items-center gap-1.5 py-1.5 px-3.5 text-xs text-text-primary border-brand-cyan/25 bg-brand-card/60 backdrop-blur-sm">
              <Calendar className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
              <span>Graduating in {profile.graduationYear}</span>
            </Tag>
          </div>
        </div>

        {/* Right Column (Portrait + Glowing Cyan Orbital Open Arc) */}
        <div className="relative flex-shrink-0 flex items-center justify-center z-10">
          <div className="relative flex items-center justify-center w-[280px] h-[300px] sm:w-[380px] sm:h-[400px] lg:w-[480px] lg:h-[500px]">
            {/* Cyan Open Arc with Orbit Dot (aria-hidden="true") */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
              viewBox="0 0 500 500"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="arc-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Glowing Open Arc: covers top & right with gap at lower-left */}
              <path
                d="M 70 140 A 215 215 0 1 1 110 400"
                stroke="#00D4FF"
                strokeWidth="2.5"
                strokeOpacity="0.75"
                strokeLinecap="round"
                filter="url(#arc-glow)"
              />
              {/* Orbit Dot at upper-left end of the arc */}
              <circle
                cx="70"
                cy="140"
                r="5.5"
                fill="#00D4FF"
                filter="url(#arc-glow)"
              />
            </svg>

            {/* Ashlin Siddharth Cutout Portrait (head breaks above ring, torso extends down) */}
            <picture className="relative z-10 flex items-end justify-center w-[260px] h-[320px] sm:w-[350px] sm:h-[430px] lg:w-[440px] lg:h-[530px] -mb-2 sm:-mb-4 lg:-mb-6">
              <source srcSet={portraitWebp} type="image/webp" />
              <img
                src={portraitImg}
                alt="Portrait of Ashlin Siddharth"
                width={440}
                height={530}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,212,255,0.18)]"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
