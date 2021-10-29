<?php
/**
 * Theme setup.
 */

namespace App;

use function Roots\asset;

/**
 * Register the theme assets.
 *
 * @return void
 */
add_action('wp_enqueue_scripts', function ()
{
    wp_enqueue_script('sage/vendor.js', asset('scripts/vendor.js')->uri() , [], null, true);
    wp_enqueue_script('sage/app.js', asset('scripts/app.js')
        ->uri() , ['sage/vendor.js'], null, true);

    wp_add_inline_script('sage/vendor.js', asset('scripts/manifest.js')
        ->contents() , 'before');

    if (is_single() && comments_open() && get_option('thread_comments'))
    {
        wp_enqueue_script('comment-reply');
    }

    wp_enqueue_style('sage/app.css', asset('styles/app.css')
        ->uri() , false, null);
}
, 100);

/**
 * Register the theme assets with the block editor.
 *
 * @return void
 */

add_action('enqueue_block_editor_assets', function ()
{
    if ($manifest = asset('scripts/manifest.asset.php')->load())
    {
        wp_enqueue_script('sage/vendor.js', asset('scripts/vendor.js')
            ->uri() , ...array_values($manifest));
        wp_enqueue_script('sage/editor.js', asset('scripts/editor.js')->uri() , ['sage/vendor.js'], null, true);
        wp_add_inline_script('sage/vendor.js', asset('scripts/manifest.js')
            ->contents() , 'before');
    }
}
, 100);

add_theme_support('editor-styles');
add_editor_style('public/styles/editor.css');

/**
 * Register the initial theme setup.
 *
 * @return void
 */
add_action('after_setup_theme', function ()
{
    add_image_size('16by9-xxxl', 3000, 1688, true);
    add_image_size('16by9-xxl', 2000, 1125, true);
    add_image_size('16by9-xl', 1600, 900, true);
    add_image_size('16by9-l', 1200, 675, true);
    add_image_size('16by9', 800, 450, true);
    add_image_size('16by9-s', 400, 225, true);
    add_image_size('16by9-xs', 240, 135, true);

    add_image_size('2by1-xxxl', 3000, 1500, true);
    add_image_size('2by1-xxl', 2000, 1000, true);
    add_image_size('2by1-xl', 1600, 800, true);
    add_image_size('2by1-l', 1200, 600, true);
    add_image_size('2by1', 800, 400, true);
    add_image_size('2by1-s', 480, 240, true);
    add_image_size('2by1-xs', 240, 120, true);

    add_image_size('3by1-2xl', 3000, 1000, true);
    add_image_size('3by1-xl', 1620, 540, true);
    add_image_size('3by1-l', 1200, 400, true);
    add_image_size('3by1', 810, 270, true);
    add_image_size('3by1-s', 420, 140, true);
    add_image_size('3by1-xs', 240, 80, true);

    // add_image_size( 'twothirds-2xl', 1500, 1000, true );
    // add_image_size( 'twothirds-xl', 1200, 800, true );
    // add_image_size( 'twothirds-l', 900, 600, true );
    // add_image_size( 'twothirds', 640, 420, true );
    // add_image_size( 'twothirds-s', 450, 300, true );
    // add_image_size( 'twothirds-xs', 240, 160, true );
    
    add_image_size('4by3-xxxl', 3000, 2250, true);
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

    add_filter('image_size_names_choose', function ($sizes)
    {
        return array_merge($sizes, array(
            'square-xl' => __('Square') ,
            '16by9-xxl' => __('16:9') ,
            '3by1-xl' => __('Wide')
        ));
    });

    show_admin_bar(false);

    /**
     * Enable features from the Soil plugin if activated.
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil', ['clean-up' => ['disable_gutenberg_block_css' => false,
    // 'disable_emojis' => true,
    // 'clean_html5_markup' => true
    ], 'nav-walker', 'nice-search', 'relative-urls', 'js-to-footer',
    // 'disable-rest-api',
    'disable-asset-versioning', 'disable-trackbacks', ]);

    /**
     * Disable full-site editing support.
     *
     * @link https://wptavern.com/gutenberg-10-5-embeds-pdfs-adds-verse-block-color-options-and-introduces-new-patterns
     */
    // remove_theme_support('block-templates');
    
    /**
     * Register the navigation menus.
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus(['primary_navigation' => __('Primary Navigation', 'sage') ]);

    /**
     * Register the editor color palette.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-color-palettes
     */
    // add_theme_support('editor-color-palette', []);
    
    /**
     * Register the editor color gradient presets.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-gradient-presets
     */
    // add_theme_support('editor-gradient-presets', []);
    
    /**
     * Register the editor font sizes.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-font-sizes
     */
    // add_theme_support('editor-font-sizes', []);
    
    /**
     * Register relative length units in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#support-custom-units
     */
    add_theme_support('custom-units');

    /**
     * Enable support for custom line heights in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#supporting-custom-line-heights
     */
    add_theme_support('custom-line-height');

    /**
     * Enable support for custom block spacing control in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#spacing-control
     */
    add_theme_support('custom-spacing');

    /**
     * Disable custom colors in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-custom-colors-in-block-color-palettes
     */
    // add_theme_support('disable-custom-colors');
    
    /**
     * Disable custom color gradients in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-custom-gradients
     */
    // add_theme_support('disable-custom-gradients');
    
    /**
     * Disable custom font sizes in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-custom-font-sizes
     */
    // add_theme_support('disable-custom-font-sizes');
    
    /**
     * Disable the default block patterns.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-the-default-block-patterns
     */

    // add_theme_support('core-block-patterns');
    add_theme_support('wp-block-styles');

    /**
     * Enable plugins to manage the document title.
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Enable post thumbnail support.
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable wide alignment support.
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#wide-alignment
     */
    add_theme_support('align-wide');

    /**
     * Enable responsive embed support.
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#responsive-embedded-content
     */
    add_theme_support('responsive-embeds');

    /**
     * Enable HTML5 markup support.
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', ['caption', 'comment-form', 'comment-list', 'gallery', 'search-form', 'script', 'style']);

    /**
     * Enable selective refresh for widgets in customizer.
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');
}
, 20);

/**
 * Register the theme sidebars.
 *
 * @return void
 */
add_action('widgets_init', function ()
{
    $config = ['before_widget' => '<section class="widget %1$s %2$s">', 'after_widget' => '</section>', 'before_title' => '<h3>', 'after_title' => '</h3>'];

    register_sidebar(['name' => __('Primary', 'sage') , 'id' => 'sidebar-primary'] + $config);

    register_sidebar(['name' => __('Footer', 'sage') , 'id' => 'sidebar-footer'] + $config);
});

function create_slide_post_type()
{
    register_post_type('slide', array(
        'labels' => array(
            'name' => __('Slides') ,
            'singular_name' => __('Slide') ,
            'add_new_item' => __('Add New Slide') ,
            'edit_item' => 'Edit slide'
        ) ,
        'hierarchical' => true,
        'public' => true,
        'has_archive' => false,
        'rewrite' => array(
            'slug' => 'slide',
        ) ,
        'menu_icon' => 'dashicons-images-alt',
        'menu_position' => 4,
        'show_in_rest' => true,
        'supports' => array(
            'title',
            'thumbnail',
            'page-attributes'
        ) ,
    ));
}

add_action('init', 'App\create_slide_post_type');

function create_project_post_type()
{
    register_post_type('project', array(
        'labels' => array(
            'name' => __('Projects') ,
            'singular_name' => __('Project') ,
            'add_new_item' => __('Add New Project') ,
            'edit_item' => 'Edit project'
        ) ,
        'hierarchical' => true,
        'public' => true,
        'has_archive' => true,
        'rewrite' => array(
            'slug' => 'projects',
        ) ,
        'menu_icon' => 'dashicons-image-filter',
        'menu_position' => 4,
        'show_in_rest' => true,
        'supports' => array(
            'title',
            'thumbnail',
            'excerpt',
            'page-attributes',
            'editor',
            'revisions'
        ) ,
        'template' => [
            ['core/post-featured-image',
                [
                    'className' => 'project-template--featured-image',
                    'align' => 'wide',
                    'lock' => ['remove' => true, 'move' => true]
                ]
            ],
            ['core/group',
                [
                    'align' => 'wide',
                    'className' => 'project-template--header',
                    'lock' => ['remove' => true, 'move' => true]
                ],
                [
                    ['core/post-title',
                        [
                            'className' => 'project-template--title',
                            'lock' => ['remove' => true, 'move' => true]
                        ]
                    ],
                    ['core/group',
                        [
                            'align' => 'project-template--header-right',
                            'className' => 'lg:w-2/3',
                            'lock' => ['remove' => true, 'move' => true]
                        ],
                        [
                            ['core/post-excerpt',
                                [
                                    'className' => 'project-template--excerpt',
                                    'moreText' => null,
                                    'lock' => ['remove' => true, 'move' => true]
                                ]
                            ],
                            ['core/paragraph',
                                [
                                    'className' => 'project-template--intro',
                                    'placeholder' => 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                                    'lock' => ['move' => true]
                                ]
                            ],
                        ]
                    ]
                ]
            ],
        ]
    ));
}

add_action('init', 'App\create_project_post_type');