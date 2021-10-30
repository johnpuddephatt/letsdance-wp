{{--
Template Name: Home Template
--}}

@extends('layouts.app')

@section('content')
<div class="flex flex-col h-full">
  <section class="relative flex-1 overflow-hidden" data-simple-slider id="hero-image-slider">
    @foreach($slides as $slide)
    {!! get_the_post_thumbnail($slide->ID, 'large', ['class' => "inset-0 absolute h-full w-full object-cover
    object-center"]) !!}
    @endforeach
  </section>
  @include('partials.header')
</div>
@endsection