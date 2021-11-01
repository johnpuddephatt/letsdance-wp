@extends('layouts.app')

@section('content')

@include('partials.header')

<div class="container grid grid-cols-1 gap-16 my-16 lg:my-24 lg:grid-cols-2 lg:my-32 lg:gap-x-16 lg:gap-y-24">
  @foreach($projects as $key => $project)
  @include('partials.project-card')
  @endforeach
</div>

@include('partials.footer')

@endsection