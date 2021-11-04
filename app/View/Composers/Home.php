<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Home extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'template-home'
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function with()
    {
        return [
            'slides' => get_posts([
                'post_type' => 'slide',
                'numberposts' => -1,
                'orderby' => 'menu_order'
            ]),
        ];
    }
}
