@extends('layouts.app') @section('content') @include('partials.header')

<div
  class="container my-16 space-y-16 lg:my-24 lg:space-y-24 xl:max-w-7xl 2xl:my-64"
>
  @if(! have_posts())


  <x-alert type="warning">
    {!! __('Sorry, no results were found.', 'sage') !!}
  </x-alert>

  {!! get_search_form(false) !!}
@endif @while(have_posts())
 @php(the_post())
  @includeFirst(['partials.content-' . get_post_type(), 'partials.content'])

@endwhile {!! get_the_posts_navigation() !!}
</div>
@include('partials.footer') @endsection