<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Projects extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'archive-project'
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function with()
    {
        return [
            'projects' => get_posts([
                'post_type' => 'project',
                'numberposts' => -1
            ]),
        ];
    }
}
