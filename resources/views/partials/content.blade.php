<a
  class="group post-item block grid-cols-2 gap-8 no-underline duration-500 lg:grid lg:gap-16"
  href="{{ get_permalink() }}"
  data-aos
  data-aos-class="translate-y-8 opacity-0"
>
  <div class="flex-none transform transition-transform group-hover:scale-101">
    @if(has_post_thumbnail())
 {!! get_the_post_thumbnail(null, '2by1', ['class'
    => 'block rounded']) !!} @else <img src="{{ bloginfo('template_directory') }}/public/images/placeholder.png" alt="{{ the_title() }}"" />
@endif
  </div>
  <header>
    <h2
      class="mt-4 mb-2 font-serif text-2xl leading-tight text-gray-800 antialiased lg:text-3xl lg:leading-tight"
    >
      {!! $title !!}
    </h2>
    <div
      class="entry-summary mb-5 font-semibold text-gray-700 antialiased lg:text-lg 2xl:text-xl"
    >
      @php(the_excerpt())
    </div>

    @include('partials/entry-meta')
  </header>
</a>
