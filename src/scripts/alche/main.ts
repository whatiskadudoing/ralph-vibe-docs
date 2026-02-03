/**
 * Alche Effects - Main Entry Point
 * Initializes smooth scroll, scroll animations, and sound manager
 */

import { initScrollAnimations } from './scroll-animations';
import { initSoundManager } from './sound-manager';
import { initLenis } from './smooth-scroll';

// Get base path for assets
const BASE_PATH = import.meta.env.BASE_URL || '/';

export async function initAlche() {
  console.log('[Alche] Initializing...');

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.log('[Alche] Reduced motion preferred, skipping animations');
    triggerReady();
    return;
  }

  // Initialize smooth scroll
  const lenis = initLenis();

  // Initialize sound manager
  initSoundManager(BASE_PATH);

  // Initialize scroll-triggered animations
  // Note: WebGL is handled by WebGLBackground.astro component directly
  initScrollAnimations(lenis);

  // Small delay to ensure everything is ready
  await new Promise(resolve => setTimeout(resolve, 1500));

  triggerReady();
  console.log('[Alche] Initialization complete');
}

function triggerReady() {
  // Set body attribute
  document.body.setAttribute('data-phase', 'ready');

  // Dispatch ready event for loading screen
  window.dispatchEvent(new CustomEvent('alche:ready'));
}

// Auto-init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAlche);
} else {
  initAlche();
}
