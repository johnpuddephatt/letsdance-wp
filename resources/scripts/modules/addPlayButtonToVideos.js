'use strict';

export default function () {
  document.querySelectorAll('.is-type-video').forEach((elem) => {
    elem.classList.add('has-play-button');
    window.addEventListener('blur', function () {
      if (document.activeElement == elem.querySelector('iframe')) {
        elem.classList.remove('has-play-button');
      }
    });
  });
}
