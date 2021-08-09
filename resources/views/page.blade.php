@extends('layouts.app')

@section('content')
@include('partials.header')
@while(have_posts()) @php(the_post())
@include('partials.page-header')
@includeFirst(['partials.content-page', 'partials.content'])
@endwhile
@endsection