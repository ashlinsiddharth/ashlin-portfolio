import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Tag } from '../ui/Tag';
import { aboutData } from '../../data/about';
import portraitImg from '../../assets/portrait.png';

export const AboutBackground: React.FC = () => {
  return (
    <GlassCard opacity="50" className="p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
        {/* Portrait with Glowing Cyan Ring */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div
            className="relative flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-brand-cyan/50 shadow-glow-cyan overflow-hidden bg-brand-card/30"
            aria-hidden="true"
          >
            <img
              src={portraitImg}
              alt="Portrait of Ashlin Siddharth"
              width={224}
              height={245}
              loading="eager"
              className="w-auto h-44 sm:h-52 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        {/* Narrative & Information Strip */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-heading font-semibold text-brand-cyan mb-3">
            My Background
          </h2>
          <p className="text-text-muted leading-relaxed text-base sm:text-lg mb-6">
            {aboutData.background}
          </p>

          {/* Information Strip */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3">
            <Tag className="flex items-center gap-1.5 py-1.5 px-3.5 text-xs text-text-primary border-brand-cyan/25 bg-brand-card/60 backdrop-blur-sm">
              <GraduationCap className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
              <span>
                {aboutData.education.degree}, {aboutData.education.institution}
              </span>
            </Tag>
            <Tag className="flex items-center gap-1.5 py-1.5 px-3.5 text-xs text-text-primary border-brand-cyan/25 bg-brand-card/60 backdrop-blur-sm">
              <Calendar className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
              <span>Graduating in {aboutData.education.graduationYear}</span>
            </Tag>
            <Tag className="flex items-center gap-1.5 py-1.5 px-3.5 text-xs text-text-primary border-brand-cyan/25 bg-brand-card/60 backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5 text-brand-cyan shrink-0" aria-hidden="true" />
              <span>{aboutData.education.location}</span>
            </Tag>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default AboutBackground;

