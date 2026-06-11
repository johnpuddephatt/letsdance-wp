<?php

/**
 * Theme setup.
 */

namespace App;

use Illuminate\Support\Facades\Vite;

add_filter('block_editor_settings_all', function ($settings) {
    $style = Vite::asset('resources/css/editor.css');

    $settings['styles'][] = [
        'css' => "@import url('{$style}')",
    ];

    return $settings;
});

add_action('admin_head', function () {
    if (! get_current_screen()?->is_block_editor()) {
        return;
    }

    if (! Vite::isRunningHot()) {
        $dependencies = json_decode(Vite::content('editor.deps.json'));

        foreach ($dependencies as $dependency) {
            if (! wp_script_is($dependency)) {
                wp_enqueue_script($dependency);
            }
        }
    }
    echo Vite::withEntryPoints([
        'resources/js/editor.js',
    ])->toHtml();
});

add_filter('theme_file_path', function ($path, $file) {
    return $file === 'theme.json'
        ? public_path('build/assets/theme.json')
        : $path;
}, 10, 2);

/**
 * Disable on-demand block asset loading so all block styles are always present.
 * This prevents missing stylesheets during Barba.js page transitions.
 *
 * @link https://core.trac.wordpress.org/ticket/61965
 */
add_filter('should_load_separate_core_block_assets', '__return_false');

add_action('after_setup_theme', function () {
    remove_theme_support('block-templates');

    register_nav_menus([
        'primary_navigation' => __('Primary Navigation', 'sage'),
    ]);

    remove_theme_support('core-block-patterns');

    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('responsive-embeds');
    add_theme_support('wp-block-styles');
    add_theme_support('align-wide');
    add_theme_support('custom-units');
    add_theme_support('custom-line-height');
    add_theme_support('custom-spacing');

    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'script',
        'style',
    ]);

    add_theme_support('customize-selective-refresh-widgets');

    add_image_size('16by9-xxxl', 2560, 1440, true);
    add_image_size('16by9-xxl', 2000, 1125, true);
    add_image_size('16by9-xl', 1600, 900, true);
    add_image_size('16by9-l', 1200, 675, true);
    add_image_size('16by9', 800, 450, true);
    add_image_size('16by9-s', 400, 225, true);
    add_image_size('16by9-xs', 240, 135, true);

    add_image_size('9by16-xxl', 1125, 2000, true);
    add_image_size('9by16-xl', 900, 600, true);
    add_image_size('9by16-l', 675, 1200, true);
    add_image_size('9by16', 450, 800, true);
    add_image_size('9by16-s', 225, 400, true);
    add_image_size('9by16-xs', 135, 240, true);

    add_image_size('2by1-xxxl', 2560, 1280, true);
    add_image_size('2by1-xxl', 2000, 1000, true);
    add_image_size('2by1-xl', 1600, 800, true);
    add_image_size('2by1-l', 1200, 600, true);
    add_image_size('2by1', 800, 400, true);
    add_image_size('2by1-s', 480, 240, true);
    add_image_size('2by1-xs', 240, 120, true);

    add_image_size('3by1-2xl', 2560, 853, true);
    add_image_size('3by1-xl', 1620, 540, true);
    add_image_size('3by1-l', 1200, 400, true);
    add_image_size('3by1', 810, 270, true);
    add_image_size('3by1-s', 420, 140, true);
    add_image_size('3by1-xs', 240, 80, true);

    add_image_size('4by3-xxxl', 2560, 1920, true);
    add_image_size('4by3-xxl', 1600, 1200, true);
    add_image_size('4by3-xl', 1200, 900, true);
    add_image_size('4by3-l', 960, 720, true);
    add_image_size('4by3', 800, 600, true);
    add_image_size('4by3-s', 640, 480, true);
    add_image_size('4by3-xs', 320, 240, true);

    add_image_size('square-xxl', 1600, 1600, true);
    add_image_size('square-xl', 1200, 1200, true);
    add_image_size('square-l', 960, 960, true);
    add_image_size('square', 800, 800, true);
    add_image_size('square-s', 640, 640, true);
    add_image_size('square-xs', 320, 320, true);

    add_filter('image_size_names_choose', function ($sizes) {
        return array_merge($sizes, [
            'square-xl' => __('Square'),
            '16by9-xxl' => __('16:9'),
            '3by1-xl'   => __('3:1'),
            '2by1-xl'   => __('2:1'),
            '4by3-xl'   => __('4:3'),
        ]);
    });

    show_admin_bar(false);

    add_theme_support('soil', [
        'clean-up' => [
            'disable_gutenberg_block_css' => false,
        ],
        'nice-search',
        'relative-urls',
        'js-to-footer',
        'disable-asset-versioning',
        'disable-trackbacks',
    ]);
}, 20);

add_action('wp_head', function () {
    echo '<meta name="apple-mobile-web-app-capable" content="yes">';
});

add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>',
    ];

    register_sidebar(['name' => __('Primary', 'sage'), 'id' => 'sidebar-primary'] + $config);
    register_sidebar(['name' => __('Footer', 'sage'),  'id' => 'sidebar-footer']  + $config);
});

function slug_post_type_template()
{
    $page_type_object = get_post_type_object('post');
    $page_type_object->template = [
        ['core/post-featured-image', ['className' => 'post-template--featured-image', 'align' => 'wide', 'lock' => ['remove' => true, 'move' => true]]],
        ['core/group', ['align' => 'wide', 'className' => 'post-template--header', 'lock' => ['remove' => true, 'move' => true]], [
            ['core/post-title',   ['className' => 'post-template--title',  'placeholder' => 'Post title', 'lock' => ['remove' => true, 'move' => true]]],
            ['core/post-excerpt', ['className' => 'post-template--excerpt', 'moreText' => 'null', 'showMoreOnNewLine' => true, 'lock' => ['remove' => true, 'move' => true]]],
       
        ]],
    ];
}
add_action('init', 'App\slug_post_type_template');
