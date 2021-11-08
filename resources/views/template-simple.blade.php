{{--
Template Name: Simple Template
--}}

@extends('layouts.app')

@section('content')

<div class="flex flex-col items-start justify-center min-h-screen antialiased text-white simple-wrapper bg-blue ">
  <a class="fixed font-serif text-5xl leading-none transition top-2 right-3 lg:top-8 lg:right-12 opacity-80 focus:outline-white hover:opacity-100"
    aria-label="Back"
    href="javascript:barba.history.previous ? barba.go(barba.history.previous.url) : barba.go('/')">×</a>
  <div class="container max-w-4xl mt-40 mb-32 duration-300 transform">
    <hr class="w-40 mb-8 border-t-4 border-white ">
    <div
      class="mx-auto prose-sm prose md:prose max-w-none md:max-w-none xl:prose-lg xl:max-w-none prose-light md:prose-light xl:prose-light">
      {{ the_content() }}
    </div>
  </div>
</div>

@endsection