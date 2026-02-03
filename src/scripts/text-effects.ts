/**
 * Text Effects - Sci-fi inspired text animations
 * Scramble effect with Japanese/Chinese characters
 * Locks container dimensions to prevent layout shift
 */

// Character sets for scramble effect - mixed sci-fi feel
const CHARS = {
  japanese: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
  chinese: '的一是不了人我在有他这为之大来以个中上们到说国和地也子时道出而要于就下得可你年生自会那后能对着事其里所去行过家十用发天如然作方成者多日都三小军二无同主经长儿母',
  symbols: '#$%&*+=-',
  numbers: '0123456789',
  latin: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
};

const ALL_CHARS = CHARS.japanese + CHARS.chinese + CHARS.symbols + CHARS.latin;

/**
 * Extract text from HTML, converting <br> tags to newlines
 */
function extractTextWithBreaks(element: HTMLElement): string {
  // Clone the element to avoid modifying the original
  const clone = element.cloneNode(true) as HTMLElement;
  // Replace <br> with a placeholder that survives textContent extraction
  clone.querySelectorAll('br').forEach(br => {
    br.replaceWith('\n');
  });
  return clone.textContent || '';
}

/**
 * Convert text with newlines to HTML with <br> tags
 */
function textToHTML(text: string): string {
  // Escape HTML entities and convert newlines to <br>
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\n/g, '<br>');
}

interface ScrambleOptions {
  duration?: number;
  chars?: string;
  onComplete?: () => void;
}

/**
 * Scramble text animation - preserves multi-line layout
 */
export function scrambleText(
  element: HTMLElement,
  finalText: string,
  options: ScrambleOptions = {}
): () => void {
  const {
    duration = 800,
    chars = ALL_CHARS,
    onComplete,
  } = options;

  const originalText = finalText;
  const textLength = originalText.length;
  let animationId: number;
  const startTime = performance.now();

  // Store original styles
  const originalStyles = {
    width: element.style.width,
    height: element.style.height,
    minWidth: element.style.minWidth,
    minHeight: element.style.minHeight,
    overflow: element.style.overflow,
  };

  // Store original HTML (might have <br>, <em>, etc.)
  const originalHTML = element.innerHTML;

  // Measure and lock the container dimensions BEFORE changing content
  const rect = element.getBoundingClientRect();

  element.style.width = `${rect.width}px`;
  element.style.height = `${rect.height}px`;
  element.style.minWidth = `${rect.width}px`;
  element.style.minHeight = `${rect.height}px`;
  element.style.overflow = 'hidden';

  function animate(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // How many characters should be fully revealed
    const revealedCount = Math.floor(progress * textLength);

    // Build display string - preserve newlines and spaces
    let displayText = '';
    for (let i = 0; i < textLength; i++) {
      const char = originalText[i];
      if (char === '\n') {
        displayText += '\n';
      } else if (char === ' ') {
        displayText += ' ';
      } else if (i < revealedCount) {
        displayText += char;
      } else {
        displayText += chars[Math.floor(Math.random() * chars.length)];
      }
    }

    // Use innerHTML with <br> tags for proper line breaks
    element.innerHTML = textToHTML(displayText);

    if (progress < 1) {
      animationId = requestAnimationFrame(animate);
    } else {
      // Final state - restore original HTML and styles
      element.innerHTML = originalHTML;
      element.style.width = originalStyles.width;
      element.style.height = originalStyles.height;
      element.style.minWidth = originalStyles.minWidth;
      element.style.minHeight = originalStyles.minHeight;
      element.style.overflow = originalStyles.overflow;
      onComplete?.();
    }
  }

  animationId = requestAnimationFrame(animate);

  // Return cancel function
  return () => {
    cancelAnimationFrame(animationId);
    element.innerHTML = originalHTML;
    element.style.width = originalStyles.width;
    element.style.height = originalStyles.height;
    element.style.minWidth = originalStyles.minWidth;
    element.style.minHeight = originalStyles.minHeight;
    element.style.overflow = originalStyles.overflow;
  };
}

/**
 * Scramble text on hover - works on parent element, targets text inside
 */
export function initScrambleHover(selector: string = '[data-scramble]') {
  const elements = document.querySelectorAll<HTMLElement>(selector);

  elements.forEach((element) => {
    // Extract text preserving <br> as newlines
    const originalText = extractTextWithBreaks(element).trim();
    let cancelFn: (() => void) | null = null;
    let isAnimating = false;

    // Store original for restoration
    element.dataset.originalText = originalText;

    const handleEnter = () => {
      if (isAnimating || !originalText) return;
      isAnimating = true;

      cancelFn = scrambleText(element, originalText, {
        duration: 350,
        onComplete: () => {
          isAnimating = false;
        },
      });
    };

    const handleLeave = () => {
      if (cancelFn) {
        cancelFn();
        cancelFn = null;
      }
      isAnimating = false;
    };

    // Listen on parent link/button/card if exists
    const parent = element.closest('a, button, .feature-card, .step, .showcase-card, .tab');
    if (parent) {
      parent.addEventListener('mouseenter', handleEnter);
      parent.addEventListener('mouseleave', handleLeave);
    } else {
      element.addEventListener('mouseenter', handleEnter);
      element.addEventListener('mouseleave', handleLeave);
    }
  });
}

/**
 * Scramble text reveal on scroll (IntersectionObserver)
 * Preserves multi-line layout
 */
export function initScrambleReveal(selector: string = '[data-scramble-reveal]') {
  const elements = document.querySelectorAll<HTMLElement>(selector);

  elements.forEach((element) => {
    // Use data attribute if set, otherwise extract text preserving <br> as newlines
    const text = element.dataset.scrambleReveal || extractTextWithBreaks(element).trim();
    if (!text) return;

    // Store original HTML
    const originalHTML = element.innerHTML;
    element.dataset.originalHtml = originalHTML;

    // Measure dimensions while content is visible
    const rect = element.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(element);

    // Store dimensions
    element.dataset.origWidth = `${rect.width}`;
    element.dataset.origHeight = `${rect.height}`;

    // Hide with opacity only (keep layout)
    element.style.opacity = '0';

    // Store text for animation
    element.dataset.finalText = text;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const text = element.dataset.finalText || element.dataset.scrambleReveal || '';
          const origWidth = element.dataset.origWidth;
          const origHeight = element.dataset.origHeight;

          // Lock dimensions before animation
          if (origWidth) element.style.width = `${origWidth}px`;
          if (origHeight) element.style.height = `${origHeight}px`;
          element.style.minWidth = element.style.width;
          element.style.minHeight = element.style.height;
          element.style.overflow = 'hidden';

          // Make visible
          element.style.opacity = '1';

          // Animate
          scrambleText(element, text, {
            duration: 900,
            onComplete: () => {
              // Restore original HTML and clean up styles
              const originalHTML = element.dataset.originalHtml;
              if (originalHTML) {
                element.innerHTML = originalHTML;
              }
              element.style.width = '';
              element.style.height = '';
              element.style.minWidth = '';
              element.style.minHeight = '';
              element.style.overflow = '';
            },
          });

          observer.unobserve(element);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
}

/**
 * Auto-apply scramble hover to common interactive elements
 */
export function initAutoScramble() {
  // Apply to interactive text elements that don't already have data-scramble
  const selectors = [
    '.card-link .link-text',
    '.footer-link span',
    '.example-link span',
    '.install-links a',
    '.slot-button span',
    '.action-links a span',
  ];

  const elements = document.querySelectorAll<HTMLElement>(selectors.join(', '));

  elements.forEach((el) => {
    if (!el.hasAttribute('data-scramble') && !el.hasAttribute('data-scramble-reveal')) {
      el.setAttribute('data-scramble', '');
    }
  });
}

/**
 * Initialize all text effects
 */
export function initTextEffects() {
  // Small delay to ensure DOM is ready
  requestAnimationFrame(() => {
    initAutoScramble();
    initScrambleHover();
    initScrambleReveal();
  });

  // Expose scrambleText globally for use by other scripts
  (window as any).scrambleText = scrambleText;
}
