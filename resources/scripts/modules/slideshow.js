'use strict';
var simpleslider = require('simple-slider');
import Alpine from 'alpinejs';
window.Alpine = Alpine;

export default function (config) {
  if (config.withLoadingScreen) {
    Alpine.store('siteLoading', true);
    Alpine.start();
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
          setTimeout(() => {
            startSlideshow(config);
          }, 3000);
        }, 5000);
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
  const slider = simpleslider.getSlider({
    container: document.getElementById(
      window.innerWidth > window.innerHeight
        ? '#hero-image-slider img'
        : '#hero-image-slider-portrait img'
    ),
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
  if (!config.withLoadingScreen) {
    slider.change(
      Math.floor(
        Math.random() *
          document.querySelectorAll('#hero-image-slider img').length +
          1
      )
    );
  }
}
