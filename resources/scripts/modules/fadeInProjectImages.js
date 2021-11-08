'use strict';
import aos from './aos';

export default function () {
  let images = document.querySelectorAll('.wp-block-image');
  images.forEach((image) => {
    image.classList.add('duration-1000', 'transform');
    image.dataset.aosClass = 'opacity-0 translate-y-16';
    aos(image);
    // if (image.complete) {

    // } else {
    //   image.addEventListener('load', () => {
    //     aos(image);
    //   });
    // }
  });
}
