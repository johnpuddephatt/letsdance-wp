// External modules
import barba from '@barba/core';
import barbaCss from '@barba/css';
import Alpine from 'alpinejs';
// // Internal Modules
import aos from './modules/aos';
import slideShow from './modules/slideshow';
import imageMask from './modules/imageMask';
import fadeInProjectImages from './modules/fadeInProjectImages';

aos(document.querySelectorAll('[data-aos]'));

window.Alpine = Alpine;
Alpine.start();

window.barba = barba;
barba.use(barbaCss);

document.body.addEventListener('keyup', function (e) {
  if (e.which === 9) {
    document.body.classList.remove('no-focus-outline');
  }
});

barba.hooks.afterLeave(() => {
  if (barba.history.previous) {
    // aos();
  }
});

barba.init({
  debug: false,
  views: [
    {
      namespace: 'home',
      beforeEnter() {
        slideShow({
          withLoadingScreen: !barba.history.previous,
        });
      },
    },
  ],
  transitions: [
    {
      name: 'fade',
    },
    {
      name: 'slide-right',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      to: {
        namespace: 'simple',
      },
    },
    {
      name: 'slide-up',
      sync: true,
      once() {},
      leave() {},
      beforeEnter() {},
      from: {
        namespace: 'home',
      },
      to: {
        namespace: 'standard',
      },
    },
    {
      name: 'slide-down',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      from: {
        namespace: ['project', 'standard'],
      },
      to: {
        namespace: 'home',
      },
    },
    {
      name: 'slide-left',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      from: {
        namespace: 'simple',
      },
    },
    {
      name: 'project-open',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      beforeOnce() {
        document.querySelectorAll('.is-type-video').forEach((elem) => {
          elem.classList.add('has-play-button');
          window.addEventListener('blur', function () {
            console.log('blur', document.activeElement);
            if (document.activeElement == elem.querySelector('iframe')) {
              elem.classList.remove('has-play-button');
            }
          });
        });
        fadeInProjectImages();
      },
      before(e) {
        var imageElement =
          e.trigger.classList && e.trigger.classList.contains('project-item')
            ? e.trigger.querySelector('img')
            : document.querySelector(`a[href*="${e.next.url.href}"] img`);

        if (imageElement) {
          imageMask({
            target: imageElement,
            mode: 'create',
            transition: 'project-open',
          });
        }
      },
      beforeEnter() {
        // window.scrollTo(0, 0);
        imageMask({
          target: document.querySelector('.project-template--featured-image'),
          mode: 'update',
          transition: 'project-open',
        });

        fadeInProjectImages();

        document.querySelectorAll('.is-type-video').forEach((elem) => {
          elem.classList.add('has-play-button');
          window.addEventListener('blur', function () {
            if (document.activeElement == elem.querySelector('iframe')) {
              elem.classList.remove('has-play-button');
            }
          });
        });
      },
      afterLeave() {
        // barba.wrapper.scrollTop = 0;
      },
      to: {
        namespace: 'project',
      },
    },
    {
      name: 'project-close',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      before() {
        imageMask({
          target: document.querySelector('.project-template--featured-image'),
          mode: 'create',
          transition: 'project-close',
        });
      },
      beforeEnter(e) {
        imageMask({
          target: document.querySelector(
            `a[href*="${e.current.url.path}"] img`
          ),
          mode: 'update',
          transition: 'project-close',
        });
      },
      afterLeave() {
        // barba.wrapper.scrollTop = 0;
      },
      from: {
        namespace: 'project',
      },
    },
  ],
});
