@extends('layouts.app')

@section('content')

@include('partials.header')

<div class="container">
  @foreach($projects as $key => $project)
  @include('partials.project-card', ['classes' => 'mb-8'])
  @endforeach
</div>

@endsection