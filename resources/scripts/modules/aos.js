'use strict';

export default function (elems) {
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    var options = {
      threshold: [0.1],
    };

    var callback = function (elements, observer) {
      elements.forEach((elem) => {
        if (
          elem.intersectionRatio >=
          (elem.target.dataset['aos-ratio'] ?? options.threshold)
        ) {
          elem.target.classList.remove(
            ...elem.target.dataset.aosClass.trim().split(' ')
          );
          observer.unobserve(elem.target);
        }
      });
    };

    let fadeIn = function (element) {
      element.classList.add(
        'transform',
        '!delay-0',
        '!duration-0',
        ...element.dataset.aosClass.trim().split(' ')
      );
      let img = element.querySelector('img');

      if (img.complete) {
        // We need a small timeout here otherwise the classes aren't on the element long enough to have any effect.
        setTimeout(() => {
          element.classList.remove('!duration-0', '!delay-0');
          observer.observe(element);
        }, 50);
      } else {
        img.addEventListener('load', () => {
          element.classList.remove('!duration-0', '!delay-0');
          observer.observe(element);
        });
      }
    };

    var observer = new IntersectionObserver(callback, options);

    if (elems instanceof NodeList) {
      elems.forEach((element) => {
        fadeIn(element);
      });
    } else {
      fadeIn(elems);
    }
  }
}
