const DIRECTIONS = {
  left: {
    from: 'translateX(-100%)',
    to: 'translateX(100%)',
    textFrom: 'translateX(-840px)',
  },
  right: {
    from: 'translateX(100%)',
    to: 'translateX(-100%)',
    textFrom: 'translateX(840px)',
  },
  up: {
    from: 'translateY(-100%)',
    to: 'translateY(100%)',
    textFrom: 'translateY(-840px)',
  },
  down: {
    from: 'translateY(100%)',
    to: 'translateY(-100%)',
    textFrom: 'translateY(840px)',
  },
};

export default function initSlider(
  container,
  { duration = 500, delay = 3000 } = {},
) {
  const slides = Array.from(
    container.querySelectorAll(':scope > [data-slide]'),
  );

  waitForImages(container, () => {
    queueMicrotask(() =>
      container.dispatchEvent(new CustomEvent('slider:ready')),
    );
  });

  if (slides.length < 2) return { start: () => {} };

  slides.forEach((slide) => {
    const dir = DIRECTIONS[slide.dataset.enter] ?? DIRECTIONS.left;
    slide.style.transition = 'none';
    slide.style.transform = dir.from;
    slide.style.zIndex = '0';
  });

  let current = 0;
  let animating = false;

  function animateIn(slide, dir) {
    const text = slide.querySelector('h2');
    slide.style.transition = 'none';
    slide.style.transform = dir.from;
    if (text) {
      text.style.transition = 'none';
      text.style.transform = dir.textFrom;
    }
    slide.getBoundingClientRect();
    const t = `transform ${duration}ms ease`;
    slide.style.transition = t;
    slide.style.transform = '';
    if (text) {
      text.style.transition = t;
      text.style.transform = '';
    }
  }

  function enterFirst() {
    const slide = slides[0];
    const dir = DIRECTIONS[slide.dataset.enter] ?? DIRECTIONS.left;
    slide.style.zIndex = '1';
    animateIn(slide, dir);
  }

  function advance() {
    if (animating) return;
    animating = true;

    const nextIndex = (current + 1) % slides.length;
    const outgoing = slides[current];
    const incoming = slides[nextIndex];
    const dir = DIRECTIONS[incoming.dataset.enter] ?? DIRECTIONS.left;

    incoming.style.zIndex = '2';
    animateIn(incoming, dir);

    outgoing.style.transition = `transform ${duration}ms ease`;
    outgoing.style.transform = dir.to;

    setTimeout(() => {
      outgoing.style.transition = 'none';
      outgoing.style.transform = '';
      outgoing.style.zIndex = '0';
      incoming.style.zIndex = '1';
      current = nextIndex;
      animating = false;
    }, duration);
  }

  function start(startDelay = 0) {
    setTimeout(() => {
      enterFirst();
      setTimeout(() => {
        advance();
        setInterval(advance, duration + delay);
      }, duration + delay);
    }, startDelay);
  }

  return { start };
}

function waitForImages(container, onReady) {
  const images = Array.from(container.querySelectorAll('img'));
  if (images.length === 0) {
    onReady();
    return;
  }

  let remaining = images.length;
  function onLoad() {
    if (--remaining === 0) onReady();
  }
  images.forEach((img) =>
    img.complete ? onLoad() : img.addEventListener('load', onLoad),
  );
}
