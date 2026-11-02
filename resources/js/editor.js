import '@wordpress/edit-post';
const { subscribe, select } = wp.data;
import domReady from '@wordpress/dom-ready';
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';

domReady(() => {
  unregisterBlockStyle('core/image', 'rounded');
  registerBlockStyle('core/gallery', { name: 'scroller', label: 'Scroller' });

  const unsubscribe = subscribe(() => {
    const postType = select('core/editor').getCurrentPostType();
    if (postType) {
      unsubscribe();
      if ('project' === postType) {
        wp.data.dispatch('core/edit-post').removeEditorPanel('post-excerpt');
      }
    }
  });

  addFilter('i18n.gettext', 'letsdance/placeholders', (translation, text) => {
    if (text === 'No excerpt found') {
      return 'Add a short description of this project…';
    }
    return translation;
  });
});
