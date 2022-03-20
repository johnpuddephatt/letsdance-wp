@extends('layouts.app') @include('partials.header') @section('content') @if(!
have_posts())


<div
  class="container flex min-h-[65vh] flex-col items-center justify-center text-center"
>
  <img
    class="mx-auto block h-auto w-96"
    src="{{ bloginfo('template_directory') }}/public/images/missing.gif }}"
  />

  <h1 class="mt-6 font-serif text-3xl">
    What you are seeking could not be found.
  </h1>
</div>

<!-- {!! get_search_form(false) !!} -->


@endif @include('partials.footer') @endsection