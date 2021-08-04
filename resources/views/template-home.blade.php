{{--
  Template Name: Home Template
--}}

@extends('layouts.app')

@section('content')
<section class="section section--hero" data-simple-slider id="hero-image-slider">
  @foreach($slides as $slide)
  {!! get_the_post_thumbnail($slide->ID, 'large', ['class' => "section--hero--slide"]) !!}
  @endforeach
</section>
@include('partials.header')

@endsection