@props(['post', 'index'])

<a {{ $attributes->class('group post-item block  grid-cols-2 overflow-hidden bg-white no-underline  rounded-xl  lg:grid shadow-xl h-96') }}
    href="{{ get_permalink() }}" data-aos data-aos-class="translate-y-8 opacity-0" data-aos-delay="{{ $aosDelay ?? 0 }}">
    <div class="flex-none transform transition-transform group-hover:scale-101">
        @if (has_post_thumbnail())
            {!! get_the_post_thumbnail(null, '2by1', ['class' => 'block h-full object-cover']) !!}
        @else
            <img src="@asset('resources/images/placeholder.png')" alt="{{ the_title() }}" class="h-full object-cover" />
        @endif
    </div>
    <header class="p-8 self-center ">
        <h2
            class="mt-4 mb-4 text-balance font-bold text-xl leading-tight text-gray-800 antialiased lg:text-3xl lg:leading-tight">
            @php(the_title())
        </h2>
        <div class="entry-summary mb-5 font-serif  text-gray-700 antialiased lg:text-lg 2xl:text-xl">
            @php(the_excerpt())
        </div>

        {{-- @include('partials/entry-meta') --}}
    </header>
</a>
