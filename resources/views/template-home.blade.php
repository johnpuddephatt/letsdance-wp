{{--
Template Name: Home Template
--}}

@extends('layouts.app')

@section('content')
<div class="relative flex flex-col overflow-hidden bg-black home-wrapper">
  <!-- Desktop -->
  <section class="relative flex-1 overflow-hidden portrait:hidden" id="hero-image-slider">
    @foreach($slides as $slide)
    {!! get_the_post_thumbnail($slide->ID, '16by9-xxl', [
    'class' => "inset-0
    absolute
    h-full
    w-full
    object-cover
    object-center"
    ]) !!}
    @endforeach
  </section>

  <!-- Mobile -->
  <section class="relative flex-1 hidden overflow-hidden portrait:block" id="hero-image-slider-portrait">
    @foreach($slides as $slide)
    {!! get_the_post_thumbnail($slide->ID, '9by16-xxl', ['class' => "inset-0 absolute h-full
    w-full object-cover
    object-center"]) !!}
    @endforeach
  </section>

  @if (has_nav_menu('primary_navigation'))
  {!! wp_nav_menu([
  'theme_location' => 'primary_navigation',
  'menu_class' => 'max-w-none container bottom-20 absolute justify-end inset-0 bg-black bg-opacity-60 text-white
  antialiased font-bold text-4xl hidden portrait:flex lowercase m-0 z-10 pb-12 flex-col content-end',
  'echo' => false]) !!}
  @endif

  @include('partials.header', ['is_home' => true])
</div>
@endsection