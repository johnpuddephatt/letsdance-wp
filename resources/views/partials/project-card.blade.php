<a class="{{ !($key % 3) ? 'col-span-2' : NULL  }} lg:col-span-1 pb-12 no-underline duration-500 group project-item"
    href="{{ get_permalink($project->ID) }}" data-aos data-aos-class="translate-y-8 opacity-0">
    <div class="transition-transform transform group-hover:scale-101">
        {!! get_the_post_thumbnail($project->ID, '2by1', ['class' => "block rounded border border-gray-50"]) !!}
    </div>
    <h3 class="mt-4 mb-2 text-sm antialiased font-semibold leading-none text-gray-700 lg:text-lg">{!!
        $project->post_title !!}
    </h3>
    <p class="font-serif text-xl antialiased leading-none text-gray-800 lg:text-3xl">{!!
        $project->post_excerpt
        !!}
    </p>

</a>