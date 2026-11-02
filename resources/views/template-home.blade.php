{{-- Template Name: Home Template 
--}}
@extends('layouts.app')
@section('content')

    @php
        $colorPairs = [
            ['bg-sky', 'text-sky-dark'],
            ['bg-lilac', 'text-lilac-dark'],
            ['bg-faun', 'text-faun-dark'],
            ['bg-yellow', 'text-yellow-dark'],
            ['bg-lime', 'text-lime-dark'],
            ['bg-pink', 'text-pink-dark'],
            ['bg-teal', 'text-teal-dark'],
            ['bg-gray', 'text-gray-dark'],
        ];
        $lines = [
            'We turn complicated into clear',
            'We build things that work for everyone',
            'We help organisations work out what they stand for',
            'We care about getting it right',
            'We build websites that work for people',
            'We are small by design',
            'We help people tell their story',
            'We work with people trying to change the world',
            'We’ll help you be who you want to be',
        ];
        shuffle($lines);
        shuffle($slides);
        $leftSlides = array_values(array_filter($slides, fn($k) => $k % 2 === 0, ARRAY_FILTER_USE_KEY));
        $rightSlides = array_values(array_filter($slides, fn($k) => $k % 2 !== 0, ARRAY_FILTER_USE_KEY));
    @endphp

    <div class="  h-screen flex flex-col ">

        <div class="container max-w-none pt-4 sm:pt-6 lg:pt-8 xl:pt-10 2xl:pt-12  flex-1">
            <div class="home-wrapper h-full relative  grid grid-cols-2 gap-12  ">
                <!-- Desktop -->
                <section class="relative flex-1  rounded-xl overflow-hidden  portrait:hidden!">
                    <div data-slider class="w-full h-full">
                        @foreach ($leftSlides as $slide)
                            <div data-slide data-enter="down"
                                class="inset-0 absolute animate-rotate-hue-subtle flex items-center justify-center p-24 {{ $colorPairs[$loop->index % count($colorPairs)][0] }}">

                                <h2
                                    class="text-4xl max-w-4xl text-balance {{ $colorPairs[$loop->index % count($colorPairs)][1] }}  text-center font-bold lowercase">

                                    {{ $lines[$loop->index % 6] }}
                                </h2>

                            </div>
                            <div data-slide data-enter="left" class="inset-0 absolute overflow-hidden">
                                {!! get_the_post_thumbnail($slide->ID, 'full', [
                                    'class' => 'inset-0 absolute h-full w-full object-cover object-center',
                                ]) !!}
                            </div>
                        @endforeach
                    </div>
                </section>

                <section class="relative flex-1  rounded-xl overflow-hidden  portrait:hidden!">
                    <div data-slider class="w-full h-full">
                        @foreach ($rightSlides as $slide)
                            <div data-slide data-enter="right" class="inset-0 absolute overflow-hidden">
                                {!! get_the_post_thumbnail($slide->ID, 'full', [
                                    'class' => 'inset-0 absolute h-full w-full object-cover object-center',
                                ]) !!}
                            </div>
                            <div data-slide data-enter="up"
                                class="inset-0 absolute flex items-center justify-center  animate-rotate-hue-subtle p-24 {{ $colorPairs[($loop->index + 3) % count($colorPairs)][0] }}">

                                <h2
                                    class="text-4xl max-w-4xl text-balance {{ $colorPairs[($loop->index + 3) % count($colorPairs)][1] }}  text-center font-bold lowercase">
                                    {{ $lines[($loop->index + 3) % 6] }}
                                </h2>
                            </div>
                        @endforeach
                    </div>
                </section>

            </div>
            @php($navigation = \Log1x\Navi\Navi::make()->build('primary_navigation'))
            @if ($navigation->isNotEmpty())
                <ul
                    class="max-w-none container bottom-20 absolute justify-end inset-0 bg-black/60 text-white antialiased font-bold text-4xl hidden portrait:flex lowercase m-0 z-10 pb-12 flex-col content-end">
                    @foreach ($navigation->toArray() as $item)
                        <li class="menu-item  block py-4 lg:py-0 lg:px-4 {{ $item->active ? ' current-menu-item' : '' }}">
                            <a
                                href="{{ $item->url }}"@if ($item->target) target="{{ $item->target }}" @endif>{{ $item->label }}</a>
                        </li>
                    @endforeach
                </ul>
            @endif
        </div>
        @include('partials.header', ['is_home' => true])
    </div>
@endsection
