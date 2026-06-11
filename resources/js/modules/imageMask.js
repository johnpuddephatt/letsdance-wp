'use strict';

let maskEl = null;

export function prepare(trigger) {
  if (!(trigger instanceof Element)) return;

  const img = trigger.querySelector('img');
  if (!img) return;

  const bounds = img.getBoundingClientRect();

  maskEl = document.createElement('img');
  maskEl.src = img.currentSrc || img.src;
  Object.assign(maskEl.style, {
    position: 'fixed',
    zIndex: '99999',
    left: `${bounds.left}px`,
    top: `${bounds.top}px`,
    width: `${bounds.width}px`,
    height: `${bounds.height}px`,
    objectFit: 'cover',
    margin: '0',
    borderRadius: '0.25rem',
    pointerEvents: 'none',
  });

  document.body.appendChild(maskEl);
}

export function animateTo(destImg) {
  if (!maskEl) return;

  destImg.style.opacity = '0';

  const bounds = destImg.getBoundingClientRect();

  // The next container has translateX(100%) from barba-css at this point in the
  // transition. Subtract innerWidth to get the image's true final left position.
  const left = bounds.left - window.innerWidth;

  const reveal = () => {
    cleanup();
    destImg.style.opacity = '';
  };

  requestAnimationFrame(() => {
    maskEl.style.transition =
      'left 500ms ease, top 500ms ease, width 500ms ease, height 500ms ease';
    maskEl.style.left = `${left}px`;
    maskEl.style.top = `${bounds.top}px`;
    maskEl.style.width = `${bounds.width}px`;
    maskEl.style.height = `${bounds.height}px`;

    maskEl.addEventListener('transitionend', reveal, { once: true });
    setTimeout(reveal, 600); // fallback if transitionend doesn't fire
  });
}

export function cleanup() {
  setTimeout(() => {
    if (maskEl) {
      maskEl.remove();
      maskEl = null;
    }
  }, 300);
}
