import barba from '@barba/core';
import slideShow from '../../modules/slideshow';

let scrollHandler = null;

export default {
  view: {
    namespace: 'home',
    beforeEnter() {
      // const wrapper = document.querySelector('.home-wrapper');
      // const nav = document.getElementById('site-header');
      // const setHeight = () => {
      //   wrapper.style.height = window.innerHeight - nav.offsetHeight + 'px';
      // };
      // setHeight();
      // window.addEventListener('resize', setHeight);
      slideShow({
        withLoadingScreen: !barba.history.previous,
      });
    },
    afterEnter() {
      // setTimeout(() => {
      scrollHandler = (e) => {
        if (e.deltaY < 10) return;
        window.removeEventListener('wheel', scrollHandler);
        window.removeEventListener('touchmove', scrollHandler);
        scrollHandler = null;
        barba.go('/about');
      };
      window.addEventListener('wheel', scrollHandler, { passive: true });
      window.addEventListener('touchmove', scrollHandler, { passive: true });
      // }, 500);
    },
    beforeLeave() {
      if (scrollHandler) {
        window.removeEventListener('wheel', scrollHandler);
        window.removeEventListener('touchmove', scrollHandler);
        scrollHandler = null;
      }
    },
  },
  transitions: [
    {
      name: 'slide-up',
      sync: true,
      once() {},
      leave() {},
      beforeEnter() {},
      from: { namespace: 'home' },
      to: { namespace: ['index', 'standard'] },
    },
    {
      name: 'slide-down',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      from: { namespace: ['project', 'standard', 'index'] },
      to: { namespace: 'home' },
    },
  ],
};
