import React from 'react';
import { useInView } from '../../hooks/useInView';

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
}

/**
 * Reusable Reveal wrapper component with subtle fade-up transition (300-500ms).
 * Fully respects prefers-reduced-motion: renders immediately with zero movement.
 * Failsafe: Content remains completely visible if observer is unsupported.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  durationMs = 400,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: `${durationMs}ms`,
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;

