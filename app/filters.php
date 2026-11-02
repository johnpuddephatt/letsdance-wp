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
add_filter("excerpt_more", function () {
    return null;
    // return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});

add_filter("big_image_size_threshold", "__return_false");

add_filter('render_block', function ($content, $block) {
    if ($block['blockName'] === 'core/image' && is_single()) {
        $content = preg_replace(
            '/class="wp-block-image/',
            'data-aos data-aos-class="opacity-0 translate-y-16" class="wp-block-image',
            $content,
            1
        );
    }
    return $content;
}, 10, 2);

remove_filter("get_the_excerpt", "wp_trim_excerpt");


// add_filter( 'wp_calculate_image_sizes', function() {
//     return 'foo';
// }, 10, 6 );

add_filter(
    "the_content",
    function ($content) {
        if (is_singular() && in_the_loop() && is_main_query()) {
            $content = preg_replace(
                "<!-- wp:post-featured-image(.*?)-->",
                "",
                $content
            );

            $content = str_replace("<>", "", $content);
        }
        return $content;
    },
    1
);

add_filter(
    "the_content",
    function ($content) {
        if (is_singular() && in_the_loop() && is_main_query()) {
            return preg_replace(
                "#https://player\.vimeo\.com/video/(\d+)\?#i",
                'https://player.vimeo.com/video/$1?color=bdece1&title=0&byline=0&portrait=0&',
                $content
            );
        }
        return $content;
    },
    99
);

add_filter('wp_img_tag_add_auto_sizes', '__return_false');

