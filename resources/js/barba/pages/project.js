import fixSizesAttribute from '../../modules/fixSizesAttribute';
import {
  prepare as prepareMask,
  animateTo,
  cleanup as cleanupMask,
} from '../../modules/imageMask';

export default {
  transitions: [
    {
      name: 'project-open',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      before({ trigger }) {
        fixSizesAttribute();
        prepareMask(trigger);
      },
      beforeEnter({ next }) {
        const headerHeight =
          document.getElementById('site-header').clientHeight;
        next.container.style.top = `-${headerHeight}px`;
        fixSizesAttribute();

        const destImg = next.container.querySelector(
          '.project-template--featured-image',
        );
        if (destImg) {
          animateTo(destImg);
        }
      },
      afterEnter({ next }) {
        document.documentElement.scrollTop =
          document.getElementById('site-header').clientHeight;
        next.container.style.removeProperty('top');
      },
      from: { namespace: ['index'] },
      to: { namespace: ['project', 'post'] },
    },
    {
      name: 'project-close',
      sync: true,
      once() {},
      leave() {},
      enter() {},
      after() {
        cleanupMask();
      },
      from: { namespace: ['project', 'post'] },
      to: { namespace: ['index'] },
    },
  ],
};
