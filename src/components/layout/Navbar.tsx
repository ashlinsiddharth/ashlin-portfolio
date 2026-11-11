import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll and manage keyboard focus trap while drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          toggleButtonRef.current?.focus();
          return;
        }

        if (e.key === 'Tab' && drawerRef.current) {
          const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement && lastElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement && firstElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (!next) {
        toggleButtonRef.current?.focus();
      }
      return next;
    });
  };

  return (
    <header className="sticky top-3 sm:top-4 z-40 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="pointer-events-auto max-w-[1340px] mx-auto h-16 px-4 sm:px-6 flex items-center justify-between rounded-[20px] bg-brand-card/70 backdrop-blur-xl border border-brand-cyan/30 shadow-[0_4px_24px_rgba(0,212,255,0.08)]">
        {/* Brand Logo: bare large cyan "A." with name in white */}
        <Link
          to="/"
          className="shrink-0 whitespace-nowrap flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-lg"
          aria-label="Ashlin Siddharth Home"
        >
          <span className="text-brand-cyan font-heading font-bold text-2xl tracking-tighter group-hover:scale-105 transition-transform">
            A.
          </span>
          <span className="font-heading font-bold text-base sm:text-lg text-white tracking-tight">
            {profile.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center lg:gap-1.5 xl:gap-3" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative lg:px-2.5 xl:px-3 py-2 whitespace-nowrap text-sm font-sans font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-md ${
                  isActive
                    ? 'text-brand-cyan'
                    : 'text-text-muted hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-brand-cyan shadow-glow-cyan-sm"
                      aria-hidden="true"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action: Resume Button (cyan outline pill with download icon) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="whitespace-nowrap min-h-[38px] px-4 py-1.5 rounded-full border border-brand-cyan/60 text-brand-cyan hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 shadow-glow-cyan-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
            aria-label="Download Resume PDF"
          >
            <FileDown className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            className="p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-text-muted hover:text-white hover:bg-brand-card/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-brand-cyan" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-text-primary" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer: styled to match pill */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden mt-2 p-5 rounded-[20px] bg-brand-card/95 backdrop-blur-2xl border border-brand-cyan/30 shadow-2xl transition-all duration-300 pointer-events-auto max-w-[1340px] mx-auto"
        >
          <nav className="flex flex-col gap-2.5" aria-label="Mobile Navigation Links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-base font-sans font-medium transition-all ${
                    isActive
                      ? 'bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/40 shadow-glow-cyan-sm'
                      : 'text-text-muted hover:text-white hover:bg-brand-card/40'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-3 border-t border-brand-cyan/20 mt-2">
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full min-h-[44px] justify-center px-4 py-2.5 rounded-full border border-brand-cyan/60 text-brand-cyan hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all text-sm font-semibold inline-flex items-center gap-2 shadow-glow-cyan-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                onClick={() => setIsOpen(false)}
                aria-label="Download Resume PDF"
              >
                <FileDown className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
