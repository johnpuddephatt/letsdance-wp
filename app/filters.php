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
    return null;
    // return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});

remove_filter('get_the_excerpt', 'wp_trim_excerpt');



add_filter('body_class', function($classes) {
    return array_merge($classes, [
        'min-h-screen',
        'no-focus-outline',
        'overflow-x-hidden',
    ]);
});

// add_filter( 'wp_calculate_image_sizes', function() {
//     return 'foo';
// }, 10, 6 );


add_filter( 'the_content', function ( $content ) {
    if ( is_singular() && in_the_loop() && is_main_query() ) {
        $content = str_replace('<!-- wp:post-featured-image {"align":"wide","className":"project-template\u002d\u002dfeatured-image","lock":{"remove":true,"move":true}} /-->', '', $content);
        $content = str_replace('<!-- wp:post-featured-image {"align":"wide","className":"post-template\u002d\u002dfeatured-image","lock":{"remove":true,"move":true}} /-->', '', $content);
    }
    return $content;
}, 1);


add_filter( 'the_content', function ( $content ) {
    if ( is_singular() && in_the_loop() && is_main_query() ) {
        return preg_replace('#https://player\.vimeo\.com/video/(\d+)\?#i', 'https://player.vimeo.com/video/$1?color=bdece1&title=0&byline=0&portrait=0&', $content);
    }
    return $content;
}, 99);