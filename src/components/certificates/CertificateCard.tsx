import React from 'react';
import { ArrowRight, Award } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import type { Certificate } from '../../types';

export interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <GlassCard
      hoverLift={true}
      opacity="50"
      className="p-6 sm:p-7 flex flex-col justify-between h-full group border border-brand-cyan/20 hover:border-brand-cyan/50 transition-all duration-300"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <Award className="h-6 w-6 text-brand-cyan shrink-0" aria-hidden="true" />
          <time
            dateTime={certificate.issueDateISO}
            className="font-mono text-xs text-text-muted shrink-0"
          >
            {certificate.issueDateDisplay}
          </time>
        </div>

        <p className="text-xs font-heading font-semibold uppercase tracking-wider text-brand-cyan mb-2">
          {certificate.issuer}
        </p>

        <h2 className="text-xl font-heading font-semibold text-text-primary group-hover:text-brand-cyan transition-colors tracking-tight leading-snug mb-6">
          {certificate.title}
        </h2>
      </div>

      <div className="pt-2">
        <Button
          variant="secondary"
          size="md"
          to={`/certificates/${certificate.slug}`}
          className="w-full sm:w-auto"
        >
          <span>View Certificate</span>
          <ArrowRight
            className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Button>
      </div>
    </GlassCard>
  );
};

export default CertificateCard;

