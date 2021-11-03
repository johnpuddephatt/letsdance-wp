'use strict';

export default function (config, barbaEvent) {
  var mask =
    config.mode == 'create'
      ? document.createElement('img')
      : document.querySelector('.project-image-mask');

  if (mask) {
    if (config.mode == 'create') {
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
        'z-[99999]'
      );
    }

    var modX, modY;

    if (config.mode == 'update') {
      modX =
        config.transition == 'project-open'
          ? -document.body.clientWidth
          : document.body.clientWidth;
    } else {
      modX = 0;
    }

    // @todo - move this out of imageMask?
    if (config.mode == 'update' && config.transition == 'project-close') {
      modY = config.target.parentNode.offsetTop;
      barbaEvent.next.container.style.top = `-${
        modY - document.querySelector('main header').clientHeight
      }px`;
    }

    let imgBounds = config.target.getBoundingClientRect();

    mask.style.left = imgBounds.x + modX + 'px';
    mask.style.top = imgBounds.y + 'px';
    mask.style.width = imgBounds.width + 'px';
    mask.style.height = imgBounds.height + 'px';

    if (config.mode == 'create') {
      document.body.append(mask);
    }

    setTimeout(() => {
      config.target.style.visibility = 'hidden';
    }, 100);
  }
}
