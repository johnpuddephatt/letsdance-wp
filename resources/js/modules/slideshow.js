'use strict';
import Alpine from 'alpinejs';
import initSlider from './slider';

export default function ({ withLoadingScreen }) {
  const sliders = Array.from(document.querySelectorAll('[data-slider]'));
  if (sliders.length === 0) return;

  const instances = new Map(sliders.map((c) => [c, initSlider(c)]));

  if (!withLoadingScreen) {
    sliders.forEach((c) => {
      c.addEventListener('slider:ready', () => instances.get(c).start(100));
    });
    return;
  }

  Alpine.store('siteLoading', true);
  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') Alpine.store('siteLoading', false);
  });

  let readyCount = 0;
  let timerFired = false;

  function maybeOpenSite() {
    if (readyCount < sliders.length || !timerFired) return;
    Alpine.store('siteLoading', false);
    document.documentElement.classList.remove(
      'overflow-hidden',
      'pointer-events-none',
    );
    sliders.forEach((c) => instances.get(c).start(2000));
  }

  setTimeout(() => {
    timerFired = true;
    maybeOpenSite();
  }, 4000);

  sliders.forEach((c) => {
    c.addEventListener('slider:ready', () => {
      readyCount++;
      maybeOpenSite();
    });
  });
}
