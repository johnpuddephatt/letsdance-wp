<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', function () {
    return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});

add_filter('body_class', function($classes) {
    return array_merge($classes, [
        'no-focus-outline',
        'overflow-x-hidden',
        'min-h-screen',
        'relative'
    ]);
});

// add_filter( 'wp_calculate_image_sizes', function() {
//     return 'foo';
// }, 10, 6 );

