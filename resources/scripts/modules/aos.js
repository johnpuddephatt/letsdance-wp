'use strict';

module.exports = function (scrollItemSelector, scrollItemVisibleClass) {
  if (
    'IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype
  ) {
    document.body.classList.add('aos');

    var options = {
      threshold: [0.25],
    };

    var images = document.querySelectorAll(scrollItemSelector);

    var callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.25) {
          entry.target.classList.add(scrollItemVisibleClass);
          observer.unobserve(entry.target);
        }
      });
    };

    var observer = new IntersectionObserver(callback, options);

    images.forEach((image) => {
      observer.observe(image);
    });
  }
};
