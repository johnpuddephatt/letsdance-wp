// External modules
import barba from '@barba/core';
import barbaCss from '@barba/css';

require('intersection-observer');
var simpleslider = require('simple-slider');
// // const imagesLoaded = require('imagesLoaded');

// // Internal Modules
const aos = require('./modules/aos');

document.body.classList.remove('no-js');

aos('.project-item', 'in-view');

document.body.addEventListener('keyup', function (e) {
  if (e.which === 9) {
    document.body.classList.remove('no-focus-outline');
  }
});

window.barba = barba;

barba.use(barbaCss);

barba.hooks.enter(() => {
  aos('.project-item', 'in-view');
});

barba.init({
  debug: true,
  views: [
    {
      namespace: 'home',
      beforeEnter() {
        launchSlideshowWhenImagesLoaded(!barba.history.previous);
      },
    },
  ],
  transitions: [
    {
      name: 'fade',
      once() {},
      leave() {},
      enter() {},
    },
    {
      name: 'slide-in',
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
      name: 'slide-out',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      from: {
        namespace: 'simple',
      },
    },
    {
      name: 'zoom-in',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      before(e) {
        if (e.trigger.classList.contains('project-item')) {
          let img = e.trigger.querySelector('.project-item--image');
          let imgBounds = img.getBoundingClientRect();
          let mask = document.createElement('img');
          mask.src = img.src;
          mask.classList.add('project-image-mask');
          mask.style.left = imgBounds.x + 'px';
          mask.style.top = imgBounds.y + 'px';
          mask.style.width = imgBounds.width + 'px';
          mask.style.height = imgBounds.height + 'px';
          document.body.append(mask);
        }
      },
      beforeEnter() {
        window.scrollTo(0, 0);
        let imgBounds = document
          .querySelector('.project--header-image')
          .getBoundingClientRect();
        let mask = document.querySelector('.project-image-mask');
        mask.style.left = imgBounds.x + 'px';
        mask.style.top = imgBounds.y + 'px';
        mask.style.width = imgBounds.width + 'px';
        mask.style.height = imgBounds.height + 'px';
        setTimeout(() => {
          mask.remove();
        }, 1000);
      },
      afterLeave() {
        // barba.wrapper.scrollTop = 0;
      },
      to: {
        namespace: 'project',
      },
    },
    {
      name: 'zoom-out',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      before() {
        let img = document.querySelector('.project--header-image');
        let imgBounds = img.getBoundingClientRect();
        let mask = document.createElement('img');
        mask.src = img.src;
        mask.classList.add('project-image-mask');
        mask.style.left = imgBounds.x + 'px';
        mask.style.top = imgBounds.y + 'px';
        mask.style.width = imgBounds.width + 'px';
        mask.style.height = imgBounds.height + 'px';
        document.body.append(mask);
      },
      beforeEnter(e) {
        document
          .querySelectorAll('.project-item')
          .forEach((item) => item.classList.add('in-view', 'no-transition'));

        let imgBounds = document
          .querySelector(
            `a[href*="${e.current.url.path}"] .project-item--image`
          )
          .getBoundingClientRect();

        let mask = document.querySelector('.project-image-mask');
        mask.style.left = imgBounds.x + 'px';
        mask.style.top = imgBounds.y + 'px';
        mask.style.width = imgBounds.width + 'px';
        mask.style.height = imgBounds.height + 'px';
        setTimeout(() => {
          mask.remove();
        }, 1000);
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

function startSlideshow() {
  simpleslider.getSlider({
    container: document.getElementById('hero-image-slider'),
    prop: 'opacity',
    init: 0,
    show: 1,
    end: 0,
    unit: '',
    duration: 0.6,
    delay: 2,
  });
}

// if (document.getElementById('hero-image-slider')) {
//   document.addEventListener('DOMContentLoaded', function () {
//     launchSlideshowWhenImagesLoaded(true);
//   });
// }

let launchSlideshowWhenImagesLoaded = function (withLoadingScreen = false) {
  var sliderImagesLoaded = 0;
  let sliderImages = document.querySelectorAll('#hero-image-slider img');
  let ldLoaded = false;

  let checkIfAllLoaded = function () {
    if (sliderImagesLoaded >= sliderImages.length && ldLoaded == false) {
      ldLoaded = true;
      if (withLoadingScreen) {
        setTimeout(() => {
          document.documentElement.classList.remove('js-loading');
          setTimeout(() => {
            startSlideshow();
          }, 1200);
        }, 2000);
      } else {
        startSlideshow();
      }
    }
  };

  if (withLoadingScreen) {
    document.documentElement.classList.add('js-loading');
  }

  sliderImages.forEach((image) => {
    if (image.complete) {
      sliderImagesLoaded++;
      checkIfAllLoaded();
    } else {
      image.addEventListener('load', (image) => {
        sliderImagesLoaded++;
        checkIfAllLoaded();
      });
    }
  });
};
