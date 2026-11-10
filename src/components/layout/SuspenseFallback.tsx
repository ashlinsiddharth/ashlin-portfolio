import React from 'react';

export const SuspenseFallback: React.FC = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex items-center justify-center min-h-screen w-full"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-brand-cyan/20 border-t-brand-cyan animate-spin" />
        <span className="font-mono text-xs text-brand-cyan tracking-wider uppercase">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default SuspenseFallback;
