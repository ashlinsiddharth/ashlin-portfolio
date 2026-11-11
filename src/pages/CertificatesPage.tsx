import React from 'react';
import Seo from '../components/layout/Seo';
import { SectionLabel } from '../components/ui/SectionLabel';
import { Reveal } from '../components/ui/Reveal';
import CertificateCard from '../components/certificates/CertificateCard';
import { certificates } from '../data/certificates';

export const CertificatesPage: React.FC = () => {
  return (
    <div className="w-full pt-4 pb-12 sm:py-6">
      <Seo
        title="Certificates"
        description="Course completion certificates earned by Ashlin Siddharth."
      />

      {/* Page Header */}
      <div className="mb-8 sm:mb-10">
        <SectionLabel text="CERTIFICATES" className="mb-3" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight mb-3">
          Certificates
        </h1>
        <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          Course completion certificates from online learning programs.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {certificates.map((certificate, index) => (
          <Reveal key={certificate.slug} delayMs={index * 50} className="h-full">
            <CertificateCard certificate={certificate} />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;

