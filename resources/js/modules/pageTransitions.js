import aos from './aos';
import fixSizesAttribute from './fixSizesAttribute';
import addPlayButtonToVideos from './addPlayButtonToVideos';
import slideShow from './slideshow';
import initScrollerGalleries from './scrollerGallery';

function initProjectCardTransitions() {
  document.querySelectorAll('.project-item').forEach((card) => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      if (img) img.style.viewTransitionName = 'hero-image';
    });
  });
}

function initHomeScrollHandler() {
  let handler = (e) => {
    if (e.deltaY < 10) return;
    window.removeEventListener('wheel', handler);
    window.removeEventListener('touchmove', handler);
    handler = null;
    window.location.href = '/about/';
  };
  window.addEventListener('wheel', handler, { passive: true });
  window.addEventListener('touchmove', handler, { passive: true });
}

function initAboutScrollHandler() {
  setTimeout(() => {
    let handler = (e) => {
      if (e.deltaY > -10 || window.scrollY !== 0) return;
      window.removeEventListener('wheel', handler);
      handler = null;
      window.location.href = '/';
    };
    window.addEventListener('wheel', handler, { passive: true });
  }, 500);
}

window.addEventListener('pageswap', (e) => {
  // Always store page type so the inline pagereveal handler can read it
  sessionStorage.setItem(
    'transitionFrom',
    document.documentElement.dataset.pageType || 'standard',
  );

  // Prevent orphaned hero transition when leaving a project/post page
  if (e.viewTransition) {
    const pageType = document.documentElement.dataset.pageType;
    if (pageType === 'project' || pageType === 'post') {
      const heroImg = document.querySelector(
        '.project-template--featured-image',
      );
      if (heroImg) heroImg.style.viewTransitionName = 'none';
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const pageType = document.documentElement.dataset.pageType;

  fixSizesAttribute();
  addPlayButtonToVideos();
  initScrollerGalleries();
  aos(document.querySelectorAll('[data-aos]'));

  if (pageType === 'index') {
    initProjectCardTransitions();
  }

  if (pageType === 'home') {
    const isFirstVisit = !sessionStorage.getItem('hasVisited');
    sessionStorage.setItem('hasVisited', '1');
    slideShow({ withLoadingScreen: isFirstVisit });
    initHomeScrollHandler();
  }

  console.log(window.location.href);

  if (window.location.pathname == '/about/') {
    initAboutScrollHandler();
  }

  if (pageType === 'simple') {
    const wrapper = document.querySelector('.simple-wrapper');
    if (wrapper) wrapper.style.minHeight = window.innerHeight + 'px';
  }
});
