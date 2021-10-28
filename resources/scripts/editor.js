import '@wordpress/edit-post';
const { subscribe, select } = wp.data;
import domReady from '@wordpress/dom-ready';
import { unregisterBlockStyle, registerBlockStyle } from '@wordpress/blocks';

domReady(() => {
  unregisterBlockStyle('core/image', 'rounded');

  // registerBlockStyle('core/button', {
  //   name: 'outline',
  //   label: 'Outline',
  // });

  // See https://wordpress.stackexchange.com/questions/388015/gutenberg-how-to-register-a-custom-block-style-for-specific-post-type-only
  const unsubscribe = subscribe(() => {
    const postType = select('core/editor').getCurrentPostType();
    if (postType) {
      unsubscribe();
      if ('project' === postType) {
        // See https://wordpress.stackexchange.com/questions/339436/removing-panels-meta-boxes-in-the-block-editor for list of meta boxes
        wp.data.dispatch('core/edit-post').removeEditorPanel('post-excerpt');
        wp.data.dispatch('core/edit-post').removeEditorPanel('featured-image');
      }
    }
  });
});
