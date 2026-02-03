/**
 * Alche Clone - Smooth Scroll with Lenis
 */

import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export function initLenis(): Lenis {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    touchMultiplier: 2,
  });

  // Animation frame loop
  function raf(time: number) {
    lenisInstance?.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Add lenis class to html
  document.documentElement.classList.add('lenis', 'lenis-smooth');

  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function scrollTo(target: string | number | HTMLElement, options?: {
  offset?: number;
  duration?: number;
  immediate?: boolean;
}) {
  lenisInstance?.scrollTo(target, options);
}
