import Alpine from 'alpinejs';
import './modules/pageTransitions';
import stickyCards from './modules/stickyCards';

window.Alpine = Alpine;

Alpine.data('stickyCards', stickyCards);

const isHomePage = document.documentElement.dataset.pageType === 'home';
Alpine.store(
  'siteLoading',
  isHomePage && !sessionStorage.getItem('hasVisited'),
);
Alpine.start();

document.body.addEventListener('keyup', (e) => {
  if (e.which === 9) {
    document.body.classList.remove('no-focus-outline');
  }
});
