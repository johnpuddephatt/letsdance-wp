// External modules
import barba from '@barba/core';
import barbaCss from '@barba/css';
import Alpine from 'alpinejs';
// // Internal Modules
import aos from './modules/aos';
import slideShow from './modules/slideshow';
import imageMask from './modules/imageMask';
import fixSizesAttribute from './modules/fixSizesAttribute';
import fadeInProjectImages from './modules/fadeInProjectImages';
// import addPlayButtonToVideos from './modules/addPlayButtonToVideos';

window.Alpine = Alpine;
Alpine.start();

window.barba = barba;
barba.use(barbaCss);

document.body.addEventListener('keyup', function (e) {
  if (e.which === 9) {
    document.body.classList.remove('no-focus-outline');
  }
});

barba.hooks.beforeEnter((data) => {
  // don't run aos when exiting a single project page – it conflicts with the image Mask!
  if (
    data.next.container &&
    !(data.next.namespace == 'standard' && data.current.namespace == 'project')
  ) {
    aos(data.next.container.querySelectorAll('[data-aos]'));
  }
});

barba.init({
  debug: true,
  views: [
    {
      namespace: 'home',
      beforeEnter() {
        document.documentElement.classList.add('h-fill');
        slideShow({
          withLoadingScreen: !barba.history.previous,
        });
      },
    },
  ],
  transitions: [
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
        fadeInProjectImages();
      },
      before(e) {
        e.next.container.style.transform = 'translate-x(99999px)';
        e.current.container.style.top =
          -document.documentElement.scrollTop + 'px';

        fixSizesAttribute();
        var imageElement =
          e.trigger.classList && e.trigger.classList.contains('project-item')
            ? e.trigger.querySelector('img')
            : document.querySelector(`a[href*="${e.next.url.href}"] img`);

        if (imageElement) {
          imageMask(
            {
              target: imageElement,
              mode: 'create',
              transition: 'project-open',
            },
            e
          );
        }
      },
      beforeEnter(e) {
        fadeInProjectImages();
        fixSizesAttribute();
        imageMask(
          {
            target: document.querySelector('.project-template--featured-image'),
            mode: 'update',
            transition: 'project-open',
          },
          e
        );
      },

      afterEnter() {
        document.querySelector(
          '.project-template--featured-image'
        ).style.visibility = 'visible';
        document.querySelector('.project-image-mask').remove();
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
      before(e) {
        imageMask({
          target: document.querySelector('.project-template--featured-image'),
          mode: 'create',
          transition: 'project-close',
        });
      },
      beforeEnter(e) {
        imageMask(
          {
            target: document.querySelector(
              `a[href*="${e.current.url.path}"] img`
            ),
            mode: 'update',
            transition: 'project-close',
          },
          e
        );
      },
      afterEnter(e) {
        let imageMaskTarget = document.querySelector(
          `a[href*="${e.current.url.path}"] img`
        );
        document.documentElement.scrollTop =
          imageMaskTarget.parentNode.offsetTop -
          document.querySelector('main header').clientHeight;
        imageMaskTarget.style.visibility = 'visible';
        document.querySelector('.project-image-mask').remove();
      },
      // afterLeave(e) {
      // barba.wrapper.scrollTop = 0;
      // },
      from: {
        namespace: 'project',
      },
    },
  ],
});
