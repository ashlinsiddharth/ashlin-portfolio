import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  active = false,
  className,
  ...props
}) => {
  const classes = twMerge(
    clsx(
      'inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium transition-all duration-200',
      active
        ? 'bg-brand-cyan text-brand-dark shadow-glow-cyan-sm'
        : 'bg-brand-card/60 text-text-muted border border-brand-cyan/25 hover:border-brand-cyan/60 hover:text-text-primary'
    ),
    className
  );

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export default Tag;
