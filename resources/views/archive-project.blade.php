@extends('layouts.app')

@section('content')

@include('partials.header')

<div class="container grid grid-cols-2 gap-6 my-24 lg:my-32 lg:gap-12">
  @foreach($projects as $key => $project)
  @include('partials.project-card')
  @endforeach
</div>

@include('partials.footer')

@endsection