function initScrollerGallery(gallery) {
  const sticky = document.createElement('div');
  sticky.className = 'gallery-sticky';

  const scroller = document.createElement('div');
  scroller.className = 'gallery-scroller';

  [...gallery.querySelectorAll(':scope > .wp-block-image')].forEach((fig) => {
    // Strip AOS — images are always in-view once the sticky is visible
    if (fig.dataset.aosClass) {
      fig.classList.remove(...fig.dataset.aosClass.trim().split(' '), 'transform');
    }
    fig.removeAttribute('data-aos');
    fig.removeAttribute('data-aos-class');
    scroller.appendChild(fig);
  });

  sticky.appendChild(scroller);
  gallery.appendChild(sticky);

  // Lazy images have no dimensions yet — force eager so we can measure correctly
  const imgs = [...scroller.querySelectorAll('img')];
  imgs.forEach((img) => { img.loading = 'eager'; });

  // Cached metrics — recalculated on load/resize, never on scroll
  let galleryTop = 0;
  let stickyTopPx = 0;
  let travel = 0;
  let maxTranslate = 0;

  function updateMetrics() {
    stickyTopPx = parseFloat(getComputedStyle(sticky).top) || 0;
    gallery.style.height = scroller.scrollWidth + 'px';
    galleryTop = gallery.getBoundingClientRect().top + window.scrollY;
    travel = gallery.clientHeight - sticky.clientHeight;
    maxTranslate = scroller.scrollWidth - sticky.clientWidth;
  }

  let loaded = 0;
  function onLoad() {
    if (++loaded === imgs.length) updateMetrics();
  }
  imgs.forEach((img) => {
    if (img.complete && img.naturalWidth) {
      onLoad();
    } else {
      img.addEventListener('load', onLoad, { once: true });
    }
  });

  window.addEventListener('resize', updateMetrics);

  // Scroll handler reads only window.scrollY — no reflow, batched to render cycle
  let rafId = null;
  function handleScroll() {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      const percentage = Math.max(0, Math.min(1, (window.scrollY - galleryTop + stickyTopPx) / travel));
      scroller.style.transform = `translateX(-${percentage * maxTranslate}px)`;
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.addEventListener('scroll', handleScroll, { passive: true });
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      });
    },
    { threshold: 0 },
  );

  observer.observe(gallery);
}

export default function initScrollerGalleries() {
  document.querySelectorAll('.wp-block-gallery.is-style-scroller').forEach(initScrollerGallery);
}
