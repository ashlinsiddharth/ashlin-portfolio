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
      className="relative pt-6 sm:pt-10 lg:pt-16 pb-12 sm:pb-16 lg:pb-24"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-14">
        {/* Left Column (Hero Content & CTAs) */}
        <div className="flex-1 text-center lg:text-left">
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

        {/* Right Column (Portrait + Glowing Cyan Orbital Ring + Decorative Moon) */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          {/* Decorative Moon (Desktop Only, aria-hidden="true") */}
          <div
            className="hidden lg:block absolute -top-10 -left-10 w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-100/90 via-sky-50 to-blue-200/90 shadow-[0_0_50px_rgba(0,212,255,0.45),0_0_20px_rgba(255,255,255,0.7)] pointer-events-none select-none z-0"
            aria-hidden="true"
          >
            {/* Crater-like atmospheric gradient */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(140,180,220,0.35)_0%,transparent_45%),radial-gradient(circle_at_65%_65%,rgba(120,160,200,0.3)_0%,transparent_50%)]" />
          </div>

          {/* Cyan Ring with Soft Glow & Orbit Dot */}
          <div
            className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full border border-brand-cyan/50 shadow-glow-cyan"
          >
            <span
              className="absolute top-10 left-6 sm:top-12 sm:left-8 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-brand-cyan shadow-[0_0_12px_#00D4FF]"
              aria-hidden="true"
            />

            {/* Ashlin Siddharth Cutout Portrait */}
            <picture className="relative z-10 flex items-center justify-center w-[240px] h-[260px] sm:w-[290px] sm:h-[320px] lg:w-[340px] lg:h-[380px]">
              <source srcSet={portraitWebp} type="image/webp" />
              <img
                src={portraitImg}
                alt="Portrait of Ashlin Siddharth"
                width={380}
                height={416}
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
