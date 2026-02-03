/**
 * Alche Clone - Header & Navigation
 */

import gsap from 'gsap';

export function initHeader() {
  initHamburgerMenu();
  initSoundToggle();
  initNavHover();
}

function initHamburgerMenu() {
  const hamburger = document.querySelector('[data-hamburger]');
  const sideMenu = document.querySelector('[data-side-menu]');
  const backdrop = document.querySelector('[data-backdrop]');
  const menu = document.querySelector('[data-menu]');

  if (!hamburger || !sideMenu) return;

  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;

    if (isOpen) {
      sideMenu.classList.add('is-open');
      hamburger.classList.add('is-active');
      document.body.style.overflow = 'hidden';

      // Animate menu items
      const items = menu?.querySelectorAll('.SideMenu__menu_item');
      if (items) {
        gsap.fromTo(items,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.2 }
        );
      }
    } else {
      sideMenu.classList.remove('is-open');
      hamburger.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  };

  hamburger.addEventListener('click', toggleMenu);
  backdrop?.addEventListener('click', () => {
    if (isOpen) toggleMenu();
  });

  // Close on escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) toggleMenu();
  });
}

function initSoundToggle() {
  const toggle = document.querySelector('[data-sound-toggle]');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const isMuted = toggle.getAttribute('data-muted') === 'true';
    toggle.setAttribute('data-muted', isMuted ? 'false' : 'true');

    // Dispatch event for sound manager
    window.dispatchEvent(new CustomEvent('alche:sound-toggle', {
      detail: { muted: !isMuted }
    }));
  });
}

function initNavHover() {
  const navItems = document.querySelectorAll('.Header__nav_item a');

  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      window.dispatchEvent(new CustomEvent('alche:hover'));
    });
  });
}
