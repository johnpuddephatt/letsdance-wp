// External modules
import barba from '@barba/core';
import barbaCss from '@barba/css';

require('intersection-observer');
var simpleslider = require('simple-slider');
// // const imagesLoaded = require('imagesLoaded');

// // Internal Modules
const aos = require('./modules/aos');

window.barba = barba;

barba.use(barbaCss);

barba.init({
  debug: true,
  views: [
    {
      namespace: 'home',
      beforeEnter() {
        startSlideshow();
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
      enter() {},
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
        namespace: 'standard',
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
      to: {
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

if (document.getElementById('hero-image-slider')) {
  document.addEventListener('scroll', function () {
    var scrolled = false;
    if (document.documentElement.scrollTop < 10) {
      document.documentElement.classList.remove('scrolled');
      scrolled = false;
    } else if (!scrolled) {
      document.documentElement.classList.add('scrolled');
      scrolled = true;
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var sliderImagesLoaded = 0;
    var sliderImages = document.querySelectorAll('#hero-image-slider img');
    var ldLoaded = false;

    function imageLoaded() {
      sliderImagesLoaded++;
      if (sliderImagesLoaded >= sliderImages.length && ldLoaded == false) {
        ldLoaded = true;
        document.documentElement.scrollTop = -100;
        setTimeout(() => {
          document.documentElement.classList.remove('js-loading');
          document.documentElement.scrollTop = -100;
        }, 2000);
      }
    }
    document.documentElement.classList.add('js-loading');
    sliderImages.forEach((image) => {
      image.addEventListener('load', imageLoaded(image));
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  aos('[data-aos]', 'aos-animate');
});
