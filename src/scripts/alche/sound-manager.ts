/**
 * Alche Clone - Sound Manager
 */

import { Howl, Howler } from 'howler';

interface Sounds {
  bgm?: Howl;
  hover?: Howl;
  click?: Howl;
  missionIn?: Howl;
  worksIn?: Howl;
  typing?: Howl;
}

let sounds: Sounds = {};
let isMuted = false;

export function initSoundManager(basePath: string) {
  // Load sounds
  sounds = {
    bgm: new Howl({
      src: [`${basePath}/sounds/bgm.mp3`],
      loop: true,
      volume: 0.3,
      preload: true
    }),
    hover: new Howl({
      src: [`${basePath}/sounds/hover.mp3`],
      volume: 0.5,
      preload: true
    }),
    click: new Howl({
      src: [`${basePath}/sounds/click.mp3`],
      volume: 0.5,
      preload: true
    }),
    missionIn: new Howl({
      src: [`${basePath}/sounds/mission_in.mp3`],
      volume: 0.6,
      preload: true
    }),
    worksIn: new Howl({
      src: [`${basePath}/sounds/works_in.mp3`],
      volume: 0.6,
      preload: true
    }),
    typing: new Howl({
      src: [`${basePath}/sounds/typing.mp3`],
      volume: 0.4,
      preload: true
    })
  };

  // Listen for sound toggle
  window.addEventListener('alche:sound-toggle', ((e: CustomEvent) => {
    isMuted = e.detail.muted;
    Howler.mute(isMuted);

    if (!isMuted && sounds.bgm && !sounds.bgm.playing()) {
      sounds.bgm.play();
    }
  }) as EventListener);

  // Listen for hover events
  window.addEventListener('alche:hover', () => {
    if (!isMuted) sounds.hover?.play();
  });

  // Listen for click events
  window.addEventListener('alche:click', () => {
    if (!isMuted) sounds.click?.play();
  });

  // Listen for section changes
  window.addEventListener('alche:section-enter', ((e: CustomEvent) => {
    if (isMuted) return;

    const section = e.detail.section;
    if (section === 'mission') {
      sounds.missionIn?.play();
    } else if (section === 'works') {
      sounds.worksIn?.play();
    }
  }) as EventListener);

  return {
    play(name: keyof Sounds) {
      if (!isMuted && sounds[name]) {
        sounds[name]?.play();
      }
    },
    stop(name: keyof Sounds) {
      sounds[name]?.stop();
    },
    mute(muted: boolean) {
      isMuted = muted;
      Howler.mute(muted);
    }
  };
}
