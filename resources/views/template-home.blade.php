{{--
Template Name: Home Template
--}}

@extends('layouts.app')

@section('content')
<div class="relative flex flex-col max-h-screen min-h-screen overflow-hidden">
  <section class="relative flex-1 overflow-hidden" data-simple-slider id="hero-image-slider">
    <!-- Desktop -->
    @foreach($slides as $slide)
    {!! get_the_post_thumbnail($slide->ID, '16by9-xxl', ['class' => "portrait:hidden inset-0 absolute h-full w-full
    object-cover
    object-center"]) !!}
    @endforeach
    <!-- Mobile -->
    @foreach($slides as $slide)
    {!! get_the_post_thumbnail($slide->ID, '9by16-xxl', ['class' => "hidden portrait:block inset-0 absolute h-full
    w-full object-cover
    object-center"]) !!}
    @endforeach

  </section>
  @include('partials.header')
</div>
@endsection