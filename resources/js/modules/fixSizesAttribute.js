'use strict';

export default function () {
  document.querySelectorAll('.alignfull > img').forEach((img) => {
    img.setAttribute('sizes', '100vw');
  });

  document.querySelectorAll('.alignwide > img').forEach((img) => {
    img.setAttribute('sizes', '(min-width: 1280px) 1280px, 100vw');
  });

  document
    .querySelectorAll('.wp-block-gallery.alignwide img')
    .forEach((img) => {
      img.setAttribute('sizes', '(min-width: 1280px) 640px, 50vw');
    });
}
