@extends('layouts.app', ['type' => 'index', 'documentClass' => 'bg-linear-180 to-yellow']) @section('content')
    @include('partials.header')

    <div x-data="stickyCards" class="container  my-16 pb-96 space-y-16 lg:my-24  xl:max-w-7xl 2xl:my-64">

        <h2 class="text-6xl font-serif text-center sticky top-28">Ideas worth writing down</h2>

        @php($postIndex = 0)
        @while (have_posts())
            @php(the_post())
            {{-- @include('partials.post-card', ['aosDelay' => min($postIndex, 8) * 50]) --}}

            <x-post-card class="sticky top-64" />
            @php($postIndex++)
        @endwhile {!! get_the_posts_navigation() !!}
    </div>
    @include('partials.footer')
@endsection
