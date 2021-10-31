{{--
Template Name: Home Template
--}}

@extends('layouts.app')

@section('content')
<div class="relative flex flex-col max-h-screen min-h-screen overflow-hidden">
  <!-- Desktop -->
  <section class="relative flex-1 overflow-hidden portrait:hidden" id="hero-image-slider">
    @foreach($slides as $slide)
    {!! get_the_post_thumbnail($slide->ID, '16by9-xxl', ['class' => "inset-0 absolute h-full w-full
    object-cover
    object-center"]) !!}
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

  @include('partials.header')
</div>
@endsection