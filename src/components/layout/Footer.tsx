import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-brand-cyan/20 bg-brand-dark/80 backdrop-blur-md mt-auto py-12">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="font-heading font-bold text-lg text-text-primary tracking-tight hover:text-brand-cyan transition-colors"
            >
              {profile.name}
            </Link>
            <p className="text-xs text-text-muted mt-1 font-sans">{profile.title}</p>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-xs font-sans text-text-muted hover:text-brand-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links (GitHub and LinkedIn only) */}
          <div className="flex items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-brand-cyan/20 text-text-muted hover:text-brand-cyan hover:border-brand-cyan/60 hover:shadow-glow-cyan-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              aria-label="GitHub Profile (opens in a new tab)"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-brand-cyan/20 text-text-muted hover:text-brand-cyan hover:border-brand-cyan/60 hover:shadow-glow-cyan-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              aria-label="LinkedIn Profile (opens in a new tab)"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Copyright notice with current year computed dynamically */}
        <div className="mt-8 pt-6 border-t border-brand-border/40 text-center text-xs text-text-muted font-sans">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
