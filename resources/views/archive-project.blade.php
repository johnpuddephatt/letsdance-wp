@extends('layouts.app', ['type' => 'index']) @section('content')
@include('partials.header')

<div
  class="container my-16 grid grid-cols-1 gap-16 lg:my-24 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-24 2xl:my-32"
>
  @foreach($projects as $key => $project)
 @include('partials.project-card')

@endforeach
</div>

@include('partials.footer') @endsection