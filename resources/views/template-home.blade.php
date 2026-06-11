{{-- Template Name: Home Template 
--}}
@extends('layouts.app')
@section('content')
    <div class="  h-screen flex flex-col ">

        <div class="container max-w-none pt-4 sm:pt-6 lg:pt-8 xl:pt-10 2xl:pt-12  flex-1">
            <div class="home-wrapper h-full relative rounded-xl flex flex-col overflow-hidden ">
                <!-- Desktop -->
                <section class="relative flex-1 overflow-hidden bg-white portrait:hidden!" id="hero-image-slider">
                    @foreach ($slides as $slide)
                        {!! get_the_post_thumbnail($slide->ID, '16by9-xxl', [
                            'class' => 'inset-0 absolute h-full w-full object-cover object-center',
                        ]) !!}
                    @endforeach
                </section>

                <!-- Mobile -->
                <section class="relative flex-1 hidden! overflow-hidden bg-black portrait:block!"
                    id="hero-image-slider-portrait">
                    @foreach ($slides as $slide)
                        {!! get_the_post_thumbnail($slide->ID, '9by16-xxl', [
                            'class' => 'inset-0 absolute h-full w-full object-cover object-center',
                        ]) !!}
                    @endforeach
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
