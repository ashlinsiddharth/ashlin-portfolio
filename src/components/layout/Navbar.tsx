import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, FileDown } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { profile } from '../../data/profile';
import Button from '../ui/Button';

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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-brand-dark/70 border-b border-brand-cyan/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan rounded-md"
          aria-label="Ashlin Siddharth Home"
        >
          <span className="h-7 w-7 rounded-md bg-brand-cyan text-brand-dark font-heading font-bold text-sm flex items-center justify-center shadow-glow-cyan-sm group-hover:scale-105 transition-transform">
            A.
          </span>
          <span className="font-heading font-bold text-base sm:text-lg text-text-primary tracking-tight">
            {profile.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-1.5 text-sm font-sans font-medium transition-all duration-200 border-b-2 rounded-t-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan ${
                  isActive
                    ? 'text-text-primary border-brand-cyan shadow-glow-cyan-sm'
                    : 'text-text-muted border-transparent hover:text-text-primary hover:border-brand-cyan/40'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Action: Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-1.5"
            aria-label="View Resume PDF"
          >
            <FileDown className="h-3.5 w-3.5 text-brand-cyan" aria-hidden="true" />
            <span>Resume</span>
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            ref={toggleButtonRef}
            type="button"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation-drawer"
            className="p-2 rounded-md text-text-muted hover:text-text-primary hover:bg-brand-card/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-brand-cyan" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-text-primary" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="md:hidden fixed inset-x-0 top-16 bg-brand-dark/95 backdrop-blur-xl border-b border-brand-cyan/30 shadow-2xl py-6 px-6 transition-all duration-300"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile Navigation Links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-lg text-base font-sans font-medium transition-all ${
                    isActive
                      ? 'bg-brand-card/70 text-text-primary border-l-4 border-brand-cyan shadow-glow-cyan-sm'
                      : 'text-text-muted hover:text-text-primary hover:bg-brand-card/40'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-brand-border mt-2">
              <Button
                variant="secondary"
                size="md"
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center gap-2"
                onClick={() => setIsOpen(false)}
                aria-label="View Resume PDF"
              >
                <FileDown className="h-4 w-4 text-brand-cyan" aria-hidden="true" />
                <span>Download Resume</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
