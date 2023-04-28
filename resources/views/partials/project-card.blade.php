<a
  class="group project-item col-span-1 no-underline duration-500"
  href="{{ get_permalink($project->ID) }}"
  data-aos
  data-aos-class="translate-y-8 opacity-0"
>
  <div class="group-hover:scale-101 transition-transform transform">
    {!! get_the_post_thumbnail($project->ID, '2by1', [ 'class' => "block rounded
    border border-gray-50", 'sizes' => ' (min-width: 1536px) calc((1536px -
    4rem) / 2), (min-width: 1280px) calc((1280px - 4rem) / 2), (min-width:
    1024px) calc((1024ppx - 4rem) / 2), 90vw' ]) !!}
  </div>
  <h2
    class="mt-4 mb-0.5 text-xl antialiased font-semibold leading-none text-black lg:mb-1 lg:text-xl 2xl:text-2xl"
  >
    {!! $project->post_title !!}
  </h2>
  <p
    class="font-serif text-gray-800 text-lg antialiased leading-tight lg:leading-tight lg:text-xl"
  >
    {!! $project->post_excerpt !!}
  </p>
</a>
