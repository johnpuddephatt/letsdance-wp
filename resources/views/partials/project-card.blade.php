<a class="col-span-1 no-underline duration-500 group project-item" href="{{ get_permalink($project->ID) }}" data-aos
    data-aos-class="translate-y-8 opacity-0">
    <div class="transition-transform transform group-hover:scale-101">
        {!! get_the_post_thumbnail($project->ID, '2by1', ['class' => "block rounded border border-gray-50"]) !!}
    </div>
    <h3 class="mt-4 mb-1.5 text-base antialiased font-semibold leading-none text-gray-700 lg:mb-2 lg:text-lg">
        {!!
        $project->post_title !!}
    </h3>
    <p class="font-serif text-2xl antialiased leading-tight text-gray-800 lg:leading-none lg:text-3xl">{!!
        $project->post_excerpt
        !!}
    </p>

</a>