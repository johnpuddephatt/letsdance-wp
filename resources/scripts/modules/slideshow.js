'use strict';
var simpleslider = require('simple-slider');
import Alpine from 'alpinejs';
window.Alpine = Alpine;

export default function (config) {
  if (config.withLoadingScreen) {
    document.addEventListener('DOMContentLoaded', () => {
      Alpine.store('siteLoading', true);
      Alpine.start();
    });
  } else {
    let container = document.querySelector(
      window.innerWidth > window.innerHeight
        ? '#hero-image-slider'
        : '#hero-image-slider-portrait'
    );
    container.classList.add('opacity-0');

    for (var i = container.children.length; i >= 0; i--) {
      container.appendChild(container.children[(Math.random() * i) | 0]);
    }
  }

  var sliderImagesLoaded = 0;

  let sliderImages = document.querySelectorAll(
    window.innerWidth > window.innerHeight
      ? '#hero-image-slider img'
      : '#hero-image-slider-portrait img'
  );
  let ldLoaded = false;

  let startSlideshowIfAllLoaded = function () {
    if (sliderImagesLoaded >= sliderImages.length && ldLoaded == false) {
      ldLoaded = true;
      if (config.withLoadingScreen) {
        setTimeout(() => {
          Alpine.store('siteLoading', false);
          Alpine.start();

          document.documentElement.classList.remove(
            'overflow-hidden',
            'pointer-events-none'
          );
          startSlideshow(config);
        }, 4000);
      } else {
        startSlideshow(config);
      }
    }
  };

  sliderImages.forEach((image) => {
    if (image.complete) {
      sliderImagesLoaded++;
      startSlideshowIfAllLoaded();
    } else {
      image.addEventListener('load', () => {
        sliderImagesLoaded++;
        startSlideshowIfAllLoaded();
      });
    }
  });
}

function startSlideshow(config) {
  var container = document.getElementById(
    window.innerWidth > window.innerHeight
      ? 'hero-image-slider'
      : 'hero-image-slider-portrait'
  );

  container.classList.add('transition');
  container.classList.remove('opacity-0');

  var slider = simpleslider.getSlider({
    container: container,
    prop: 'opacity',
    init: 0,
    show: 1,
    end: 0,
    unit: '',
    duration: 0.6,
    delay: 2,
    class: {
      slide: 'inset-0',
    },
  });

  slider.pause();
  setTimeout(
    () => {
      slider.resume();
    },
    config.withLoadingScreen ? 2000 : 0
  );
}
