/**
 * Scroll Animations for Ralph Vibe Home Page
 * GSAP ScrollTrigger animations for each section
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

interface WebGLScene {
  updateProgress: (section: string, progress: number) => void;
}

export function initScrollAnimations(lenis: Lenis, webglScene?: WebGLScene) {
  // Connect Lenis to ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  // Initialize section animations
  initScrollIndicator();
  initHeroSection(webglScene);
  initStatementSection(webglScene);
  initHowItWorksSection(webglScene);
  initFeaturesSection(webglScene);
  initShowcaseSection(webglScene);
  initFAQSection(webglScene);
}

/**
 * Scroll Indicator - updates active section
 */
function initScrollIndicator() {
  const indicator = document.querySelector('[data-scroll-indicator]');
  if (!indicator) return;

  const sectionIds = ['hero', 'statement', 'how-it-works', 'features', 'showcase', 'faq'];

  sectionIds.forEach(sectionId => {
    const sectionEl = document.getElementById(sectionId);
    const indicatorItem = indicator.querySelector(`[data-section="${sectionId}"]`);

    if (!sectionEl || !indicatorItem) return;

    ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        indicator.querySelectorAll('[data-section]').forEach(el => el.classList.remove('active'));
        indicatorItem.classList.add('active');

        window.dispatchEvent(new CustomEvent('alche:section-enter', {
          detail: { section: sectionId }
        }));
      },
      onEnterBack: () => {
        indicator.querySelectorAll('[data-section]').forEach(el => el.classList.remove('active'));
        indicatorItem.classList.add('active');
      }
    });
  });
}

/**
 * Hero Section - fade out content on scroll
 */
function initHeroSection(webglScene?: WebGLScene) {
  const hero = document.getElementById('hero');
  if (!hero) return;

  const heroContent = hero.querySelector('.hero-content');
  const headline = hero.querySelector('.headline');
  const subheadline = hero.querySelector('.subheadline');

  // Initial fade in
  if (headline) {
    gsap.fromTo(headline,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
    );
  }

  if (subheadline) {
    gsap.fromTo(subheadline,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
    );
  }

  // Fade out on scroll
  if (heroContent) {
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.set(heroContent, {
          opacity: 1 - progress * 1.5,
          y: progress * 50
        });
      }
    });
  }

  // Update WebGL on scroll
  ScrollTrigger.create({
    trigger: hero,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      webglScene?.updateProgress('hero', self.progress);
    }
  });
}

/**
 * Statement Section - text reveal animation
 */
function initStatementSection(webglScene?: WebGLScene) {
  const section = document.getElementById('statement');
  if (!section) return;

  const statementTexts = section.querySelectorAll('.statement-text');
  const meta = section.querySelector('.statement-meta');

  // Animate statement text blocks
  statementTexts.forEach((text, index) => {
    const lines = text.querySelectorAll('.statement-line');

    lines.forEach((line, lineIndex) => {
      gsap.fromTo(line,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: lineIndex * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: text,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  });

  // Animate meta text
  if (meta) {
    gsap.fromTo(meta,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: meta,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Update WebGL
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      webglScene?.updateProgress('statement', self.progress);
    }
  });
}

/**
 * How It Works Section - staggered horizontal slide-in
 */
function initHowItWorksSection(webglScene?: WebGLScene) {
  const section = document.getElementById('how-it-works');
  if (!section) return;

  const steps = section.querySelectorAll('.step');
  const arrows = section.querySelectorAll('.arrow');
  const vibeCallout = section.querySelector('.vibe-callout');

  // Set initial states
  gsap.set(steps, { opacity: 0, x: -30, scale: 0.95 });
  gsap.set(arrows, { opacity: 0, scale: 0 });

  // Create timeline for staggered horizontal slide-in
  ScrollTrigger.create({
    trigger: section,
    start: 'top 75%',
    once: true,
    onEnter: () => {
      // Animate steps with stagger
      steps.forEach((step, index) => {
        gsap.to(step, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.12,
          ease: 'power3.out'
        });
      });

      // Animate arrows with stagger (delayed after steps start)
      arrows.forEach((arrow, index) => {
        // Animate the arrow appearing
        gsap.to(arrow, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          delay: 0.15 + index * 0.12,
          ease: 'back.out(2)'
        });

        // Animate the arrow line drawing
        const arrowLine = arrow.querySelector('.arrow-line');
        if (arrowLine) {
          gsap.fromTo(arrowLine,
            { strokeDasharray: '14', strokeDashoffset: '14' },
            {
              strokeDashoffset: 0,
              duration: 0.4,
              delay: 0.25 + index * 0.12,
              ease: 'power2.out'
            }
          );
        }
      });
    }
  });

  // Animate vibe callout
  if (vibeCallout) {
    gsap.fromTo(vibeCallout,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: vibeCallout,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Update WebGL
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      webglScene?.updateProgress('how-it-works', self.progress);
    }
  });
}

/**
 * Features Section - cards reveal on scroll
 */
function initFeaturesSection(webglScene?: WebGLScene) {
  const section = document.getElementById('features');
  if (!section) return;

  const cards = section.querySelectorAll('.feature-card');
  const comparisonTable = section.querySelector('.comparison-table-container');

  // Animate feature cards with stagger
  cards.forEach((card, index) => {
    gsap.fromTo(card,
      { opacity: 0, y: 60, rotateX: -10 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Animate comparison table
  if (comparisonTable) {
    gsap.fromTo(comparisonTable,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: comparisonTable,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate comparison rows
    const rows = comparisonTable.querySelectorAll('.comparison-row');
    rows.forEach((row, index) => {
      gsap.fromTo(row,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: comparisonTable,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }

  // Update WebGL - Features uses light theme
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      webglScene?.updateProgress('features', self.progress);
    }
  });
}

/**
 * Showcase Section - staggered slide-up reveal (Alche-style)
 */
function initShowcaseSection(webglScene?: WebGLScene) {
  const section = document.getElementById('showcase');
  if (!section) return;

  const cards = section.querySelectorAll('.showcase-card');
  const header = section.querySelector('.showcase-header');

  // Set initial states
  gsap.set(cards, { opacity: 0, y: 50 });

  // Animate header
  if (header) {
    gsap.fromTo(header,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }

  // Staggered slide-up reveal for cards (Alche pattern)
  cards.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        // Main card animation
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power2.out',
          onStart: () => {
            card.classList.add('visible');
          }
        });

        // Animate internal elements with stagger
        const cardNumber = card.querySelector('.card-number');
        const cardCategory = card.querySelector('.card-category');
        const cardTitle = card.querySelector('.card-title');
        const cardDescription = card.querySelector('.card-description');
        const cardLink = card.querySelector('.card-link');
        const visualNumber = card.querySelector('.visual-number');

        const elements = [cardNumber, cardCategory, cardTitle, cardDescription, cardLink].filter(Boolean);

        elements.forEach((el, i) => {
          gsap.fromTo(el,
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: index * 0.1 + 0.1 + i * 0.05,
              ease: 'power2.out'
            }
          );
        });

        // Animate the large visual number
        if (visualNumber) {
          gsap.fromTo(visualNumber,
            { opacity: 0, scale: 0.8 },
            {
              opacity: 0.3,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1 + 0.2,
              ease: 'power2.out'
            }
          );
        }
      }
    });
  });

  // Hover effects for cards
  cards.forEach(card => {
    const visualNumber = card.querySelector('.visual-number');

    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -4, duration: 0.3, ease: 'power3.out' });
      if (visualNumber) {
        gsap.to(visualNumber, { opacity: 0.5, scale: 1.05, duration: 0.3, ease: 'power3.out' });
      }
      window.dispatchEvent(new CustomEvent('alche:hover'));
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.3, ease: 'power3.out' });
      if (visualNumber) {
        gsap.to(visualNumber, { opacity: 0.3, scale: 1, duration: 0.3, ease: 'power3.out' });
      }
    });
  });

  // Update WebGL
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      webglScene?.updateProgress('showcase', self.progress);
    }
  });
}

/**
 * FAQ Section - items fade in sequentially
 */
function initFAQSection(webglScene?: WebGLScene) {
  const section = document.getElementById('faq');
  if (!section) return;

  const faqItems = section.querySelectorAll('.faq-item');

  // Stagger fade in FAQ items
  faqItems.forEach((item, index) => {
    gsap.fromTo(item,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Animate the expand/collapse of details
  faqItems.forEach(item => {
    const summary = item.querySelector('.faq-summary');
    if (!summary) return;

    summary.addEventListener('click', () => {
      window.dispatchEvent(new CustomEvent('alche:click'));
    });
  });

  // Update WebGL
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    onUpdate: (self) => {
      webglScene?.updateProgress('faq', self.progress);
    }
  });
}
