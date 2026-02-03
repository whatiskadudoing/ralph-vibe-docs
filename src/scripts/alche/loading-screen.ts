/**
 * Alche Clone - Loading Screen
 */

import gsap from 'gsap';

export interface LoadingManager {
  setProgress: (progress: number) => void;
  hide: () => Promise<void>;
}

export function initLoadingScreen(basePath: string): LoadingManager {
  const overlay = document.getElementById('loading-overlay');
  const loadingText = document.getElementById('loading-text');
  const loadingLottie = document.getElementById('loading-lottie');
  const loadingLogo = document.getElementById('loading-logo');

  let progress = 0;

  // Animate loading text
  if (loadingText) {
    gsap.fromTo(loadingText,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
    );
  }

  // Simulate loading progress
  const progressInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(progressInterval);
    }
  }, 200);

  return {
    setProgress(p: number) {
      progress = Math.min(100, p);
    },

    async hide(): Promise<void> {
      // Wait for minimum display time
      await new Promise(resolve => setTimeout(resolve, 1500));

      if (!overlay) return;

      // Animate out
      await gsap.to(overlay, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        onComplete: () => {
          overlay.style.display = 'none';
          overlay.style.pointerEvents = 'none';
        }
      });

      // Trigger page ready event
      document.body.setAttribute('data-phase', 'ready');
      window.dispatchEvent(new CustomEvent('alche:ready'));
    }
  };
}
