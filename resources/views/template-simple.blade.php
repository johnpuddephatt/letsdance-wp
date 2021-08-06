{{--
  Template Name: Simple Template
--}}

@extends('layouts.app')

@section('content')

<div class="simple-page">
  <a class="back-to-home" aria-label="Back"
    href="javascript:barba.history.previous ? barba.go(barba.history.previous.url) : barba.go('/')">×</a>
  <div class="container page-content">
    {{ the_content() }}
  </div>
</div>

@endsection