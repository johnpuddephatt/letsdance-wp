'use strict';

export default function (config) {
  var mask =
    config.mode == 'create'
      ? document.createElement('img')
      : document.querySelector('.project-image-mask');

  if (mask) {
    if (config.mode == 'create') {
      document.body.classList.add('overflow-hidden');
      mask.src = config.target.src;
      mask.classList.add(
        'project-image-mask',
        'block',
        'rounded',
        'border',
        'border-gray-50',
        'transition-all',
        `duration-[750ms]`,
        'fixed',
        'z-10'
      );
    }

    let imgBounds = config.target.getBoundingClientRect();
    var modX;

    if (config.mode == 'update') {
      modX =
        config.transition == 'project-open'
          ? -document.body.clientWidth
          : document.body.clientWidth;
    } else {
      modX = 0;
    }

    mask.style.left = imgBounds.x + modX + 'px';
    mask.style.top = imgBounds.y + 'px';
    mask.style.width = imgBounds.width + 'px';
    mask.style.height = imgBounds.height + 'px';

    if (config.mode == 'create') {
      document.body.append(mask);
      setTimeout(() => {
        config.target.style.visibility = 'hidden';
      }, 10);
    } else {
      config.target.style.visibility = 'hidden';
      setTimeout(() => {
        document.body.classList.remove('overflow-hidden');
        config.target.style.visibility = 'visible';
        mask.remove();
      }, '750');
    }
  }
}
