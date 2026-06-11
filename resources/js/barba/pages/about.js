let scrollHandler = null;

export default {
  register(barba) {
    barba.hooks.afterEnter(() => {
      if (window.location.pathname !== '/about/') return;
      setTimeout(() => {
        scrollHandler = (e) => {
          if (e.deltaY > -10 || window.scrollY !== 0) return;
          window.removeEventListener('wheel', scrollHandler);
          scrollHandler = null;
          barba.go('/');
        };
        window.addEventListener('wheel', scrollHandler, { passive: true });
      }, 500);
    });

    barba.hooks.beforeLeave(() => {
      if (scrollHandler) {
        window.removeEventListener('wheel', scrollHandler);
        scrollHandler = null;
      }
    });
  },
};
