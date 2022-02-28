<a
  class="col-span-1 no-underline duration-500 group project-item"
  href="{{ get_permalink($project->ID) }}"
  data-aos
  data-aos-class="translate-y-8 opacity-0"
>
  <div class="transition-transform transform group-hover:scale-101">
    {!! get_the_post_thumbnail($project->ID, '2by1', [ 'class' => "block rounded
    border border-gray-50", 'sizes' => ' (min-width: 1536px) calc((1536px -
    4rem) / 2), (min-width: 1280px) calc((1280px - 4rem) / 2), (min-width:
    1024px) calc((1024ppx - 4rem) / 2), 90vw' ]) !!}
  </div>
  <h2
    class="mt-4 mb-1.5 text-base antialiased font-semibold leading-none text-gray-700 lg:mb-2 lg:text-lg 2xl:text-xl"
  >
    {!! $project->post_title !!}
  </h2>
  <p
    class="font-serif text-2xl antialiased leading-tight text-gray-800 lg:leading-tight lg:text-3xl"
  >
    {!! $project->post_excerpt !!}
  </p>
</a>
