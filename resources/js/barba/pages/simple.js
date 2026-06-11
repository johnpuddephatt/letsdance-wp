export default {
  view: {
    namespace: 'simple',
    beforeEnter() {
      document.querySelector('.simple-wrapper').style.minheight =
        window.innerHeight + 'px';
    },
  },
  transitions: [
    {
      name: 'slide-left',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      to: { namespace: 'simple' },
    },
    {
      name: 'slide-right',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      from: { namespace: 'simple' },
    },
  ],
};
