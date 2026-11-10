import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverLift?: boolean;
  className?: string;
  opacity?: '40' | '50' | '60';
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  hoverLift = false,
  className,
  opacity = '50',
  ...props
}) => {
  const opacityClass = {
    '40': 'bg-[linear-gradient(135deg,rgba(0,212,255,0.06)_0%,rgba(15,42,77,0.5)_40%,rgba(15,42,77,0.35)_100%)]',
    '50': 'bg-[linear-gradient(135deg,rgba(0,212,255,0.08)_0%,rgba(15,42,77,0.6)_40%,rgba(15,42,77,0.45)_100%)]',
    '60': 'bg-[linear-gradient(135deg,rgba(0,212,255,0.10)_0%,rgba(15,42,77,0.7)_40%,rgba(15,42,77,0.55)_100%)]',
  }[opacity];

  const classes = twMerge(
    clsx(
      'rounded-card border border-brand-cyan/25 backdrop-blur-md transition-all duration-300',
      opacityClass,
      hoverLift && 'hover:-translate-y-1 hover:border-brand-cyan/50 hover:shadow-glow-cyan-sm cursor-pointer'
    ),
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default GlassCard;
