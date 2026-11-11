import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import Seo from '../components/layout/Seo';
import NotFoundPage from './NotFoundPage';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { SectionLabel } from '../components/ui/SectionLabel';
import { certificates } from '../data/certificates';

export const CertificateViewerPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const certificate = certificates.find((c) => c.slug === slug);

  if (!certificate) {
    return <NotFoundPage />;
  }

  return (
    <div className="w-full pt-4 pb-12 sm:py-6">
      <Seo
        title={certificate.title}
        description={`${certificate.title} certificate issued by ${certificate.issuer} on ${certificate.issueDateDisplay}.`}
      />

      {/* Back to Certificates Link */}
      <div className="mb-6">
        <Button variant="secondary" to="/certificates" size="sm">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          <span>Back to Certificates</span>
        </Button>
      </div>

      {/* Certificate Header & Primary Action */}
      <div className="mb-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <SectionLabel text="CERTIFICATE" className="mb-3" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight mb-4 max-w-4xl">
            {certificate.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm sm:text-base text-text-muted">
            <span className="font-medium text-brand-cyan">{certificate.issuer}</span>
            <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-text-muted">
              <Calendar className="h-4 w-4 text-brand-cyan shrink-0" aria-hidden="true" />
              <time dateTime={certificate.issueDateISO}>{certificate.issueDateDisplay}</time>
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <Button
            variant="primary"
            size="md"
            href={certificate.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Open PDF in New Tab</span>
            <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* Embedded Native PDF Viewer */}
      <GlassCard opacity="50" className="p-3 sm:p-4 border border-brand-cyan/25">
        <object
          data={`${certificate.pdfPath}#view=FitH`}
          type="application/pdf"
          aria-label={`${certificate.title} PDF document`}
          className="w-full h-[480px] sm:h-[620px] lg:h-[780px] rounded-xl bg-brand-dark/80 block"
        >
          <div className="flex flex-col items-center justify-center text-center h-[320px] sm:h-[420px] p-6 rounded-xl border border-brand-cyan/20 bg-brand-dark/60">
            <p className="text-text-muted text-sm sm:text-base mb-5 max-w-md">
              Your browser can&apos;t display this PDF inline.
            </p>
            <Button
              variant="secondary"
              size="md"
              href={certificate.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open PDF</span>
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </object>
      </GlassCard>

      <p className="mt-4 text-xs sm:text-sm text-text-muted leading-relaxed">
        On some mobile browsers only the first page shows here. Use Open PDF in New Tab to see every page.
      </p>
    </div>
  );
};

export default CertificateViewerPage;

