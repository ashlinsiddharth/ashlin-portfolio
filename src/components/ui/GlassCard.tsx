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
    '40': 'bg-brand-card/40',
    '50': 'bg-brand-card/50',
    '60': 'bg-brand-card/60',
  }[opacity];

  const classes = twMerge(
    clsx(
      'rounded-card border border-brand-cyan/20 backdrop-blur-md transition-all duration-300',
      opacityClass,
      hoverLift && 'hover:-translate-y-1 hover:border-brand-cyan/40 hover:shadow-glow-cyan cursor-pointer'
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
