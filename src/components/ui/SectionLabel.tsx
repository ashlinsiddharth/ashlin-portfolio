import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  text?: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  text,
  className,
  ...props
}) => {
  const displayText = label ?? text ?? '';

  return (
    <div
      className={twMerge(
        'inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-brand-cyan',
        className
      )}
      {...props}
    >
      <span className="h-0.5 w-3 rounded-full bg-brand-cyan" aria-hidden="true" />
      <span>{displayText}</span>
    </div>
  );
};

export default SectionLabel;
