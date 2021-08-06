@extends('layouts.app')

@section('content')

@include('partials.header')

<div class="container container--wide projects--grid">
  @foreach($projects as $key => $project)
  @include('partials.project-card', ['classes' => 'mb-8'])
  @endforeach
</div>

@endsection