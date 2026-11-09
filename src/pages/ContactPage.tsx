import React from 'react';
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import Seo from '../components/layout/Seo';
import { SectionLabel } from '../components/ui/SectionLabel';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { contactInfo, contactIntro } from '../data/contact';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full pt-4 pb-12 sm:py-6">
      <Seo
        title="Contact"
        description="Get in touch with Ashlin Siddharth for full stack development, AI/ML projects, and professional inquiries."
      />

      {/* Page Header */}
      <div className="mb-8 sm:mb-10">
        <SectionLabel text="GET IN TOUCH" className="mb-3" />
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary tracking-tight mb-3">
          Let's Connect
        </h1>

        {/* [OWNER TO CONFIRM]: Provisional intro text for Contact page */}
        <p className="text-text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          {contactIntro}
        </p>
      </div>

      {/* Contact Layout: 12-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Primary Contact Action: Email Card (Option A: Direct Email Link Only) */}
        <div className="lg:col-span-7">
          <GlassCard
            opacity="50"
            className="p-6 sm:p-8 border border-brand-cyan/20 flex flex-col justify-between h-full"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan mb-5 shadow-glow-cyan-sm">
                <Mail className="h-6 w-6" aria-hidden="true" />
              </div>

              <h2 className="text-2xl font-heading font-bold text-text-primary tracking-tight mb-2">
                Send a Direct Email
              </h2>

              <p className="text-text-muted text-sm sm:text-base leading-relaxed mb-6">
                Feel free to reach out directly with project proposals, technical questions, or collaboration ideas.
              </p>

              {/* Email Address Highlight Box */}
              <div className="p-4 rounded-card bg-brand-dark/60 border border-brand-cyan/20 mb-6">
                <p className="font-mono text-xs uppercase tracking-wider text-text-muted mb-1">
                  Email Address
                </p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="font-mono text-base sm:text-lg text-brand-cyan hover:underline break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
                  aria-label={`Send email to ${contactInfo.email}`}
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div>
              <Button
                variant="primary"
                href={`mailto:${contactInfo.email}`}
                className="w-full sm:w-auto gap-2"
                aria-label={`Open email client to message ${contactInfo.email}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>Send an Email</span>
              </Button>

              <p className="text-xs text-text-muted mt-3">
                Messages sent via this link will go directly to my personal inbox at{' '}
                <span className="text-text-primary font-mono">{contactInfo.email}</span>.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* Channels & Location Sidebar */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-5">
          {/* LinkedIn Card */}
          <GlassCard
            hoverLift={true}
            opacity="50"
            className="p-5 sm:p-6 border border-brand-cyan/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan">
                  <Linkedin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary text-base">
                    LinkedIn
                  </h3>
                  <p className="text-xs text-text-muted font-mono">Professional Network</p>
                </div>
              </div>

              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-brand-cyan hover:bg-brand-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan transition-colors"
                aria-label="Visit Ashlin Siddharth on LinkedIn (opens in a new tab)"
              >
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </GlassCard>

          {/* GitHub Card */}
          <GlassCard
            hoverLift={true}
            opacity="50"
            className="p-5 sm:p-6 border border-brand-cyan/20 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan">
                  <Github className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-text-primary text-base">
                    GitHub
                  </h3>
                  <p className="text-xs text-text-muted font-mono">Repositories & Code</p>
                </div>
              </div>

              <a
                href={contactInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-brand-cyan hover:bg-brand-cyan/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan transition-colors"
                aria-label="Visit Ashlin Siddharth on GitHub (opens in a new tab)"
              >
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </GlassCard>

          {/* Location Card */}
          <GlassCard opacity="50" className="p-5 sm:p-6 border border-brand-cyan/20">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-text-primary text-base">
                  Location
                </h3>
                <p className="text-sm text-text-muted">{contactInfo.location}</p>
              </div>
            </div>
          </GlassCard>

          {/* Response Commitment Note */}
          <GlassCard opacity="40" className="p-4 border border-brand-cyan/15 bg-brand-card/30">
            <div className="flex items-start gap-2.5">
              <MessageSquare className="h-4 w-4 text-brand-cyan shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-text-muted leading-relaxed">
                I aim to respond to inquiries within 24–48 business hours. Looking forward to connecting!
              </p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
