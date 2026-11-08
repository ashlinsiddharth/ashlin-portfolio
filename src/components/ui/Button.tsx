import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  to,
  target,
  rel,
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = clsx(
    'inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark',
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none'
  );

  const sizeStyles = {
    sm: 'px-4 py-1.5 text-xs tracking-wide',
    md: 'px-6 py-2.5 text-sm tracking-wide',
    lg: 'px-8 py-3 text-base tracking-wide',
  }[size];

  const variantStyles = {
    primary:
      'bg-brand-cyan text-brand-dark shadow-glow-cyan-sm hover:shadow-glow-cyan hover:bg-[#22dcff] active:scale-[0.98]',
    secondary:
      'bg-transparent border border-brand-cyan/40 text-text-primary hover:border-brand-cyan hover:bg-brand-card/40 hover:shadow-glow-cyan-sm active:scale-[0.98]',
  }[variant];

  const combinedClasses = twMerge(baseStyles, sizeStyles, variantStyles, className);

  if (to) {
    return (
      <Link to={to} className={combinedClasses} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button disabled={disabled} className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
