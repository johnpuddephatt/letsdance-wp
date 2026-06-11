import aos from '../modules/aos';

function injectMissingStyles(data) {
  const nextDoc = new DOMParser().parseFromString(data.next.html, 'text/html');
  const loads = [];

  nextDoc.querySelectorAll('link[rel="stylesheet"]').forEach((link) => {
    const id = link.getAttribute('id');
    if (id && document.getElementById(id)) return;
    const href = link.getAttribute('href');
    if (!id && href && document.querySelector(`link[href="${href}"]`)) return;
    const newLink = document.createElement('link');
    newLink.rel = 'stylesheet';
    if (id) newLink.id = id;
    if (href) newLink.href = href;
    const media = link.getAttribute('media');
    if (media) newLink.media = media;
    loads.push(
      new Promise((resolve) => {
        newLink.onload = resolve;
        newLink.onerror = resolve;
      }),
    );
    document.head.appendChild(newLink);
  });

  nextDoc.querySelectorAll('style[id]').forEach((style) => {
    if (document.getElementById(style.id)) return;
    const newStyle = document.createElement('style');
    newStyle.id = style.id;
    newStyle.textContent = style.textContent;
    document.head.appendChild(newStyle);
  });

  return loads.length ? Promise.all(loads) : undefined;
}

function shouldRunAos(data) {
  return !(
    data.next.namespace === 'standard' &&
    (data.current.namespace === 'project' || data.current.namespace === 'post')
  );
}

export function registerHooks(barba) {
  barba.hooks.beforeEnter((data) => {
    const stylesReady = injectMissingStyles(data);

    if (data.next.container && shouldRunAos(data)) {
      aos(data.next.container.querySelectorAll('[data-aos]'));
    }

    return stylesReady;
  });

}
