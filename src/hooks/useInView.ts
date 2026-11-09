import { useEffect, useRef, useState } from 'react';

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Lightweight IntersectionObserver hook with full reduced-motion & fallback resilience.
 * Content is never permanently hidden if observers fail or reduced-motion is active.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);

  // Initialize inView: true for SSR, missing observer, or prefers-reduced-motion
  const [inView, setInView] = useState(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return true;
    }
    try {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return true;
      }
    } catch {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (inView && triggerOnce) return;

    try {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        setInView(true);
        return;
      }
    } catch {
      setInView(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, inView]);

  return { ref, inView };
}
