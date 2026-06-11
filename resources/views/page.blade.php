@extends('layouts.app', ['type' => 'index']) @section('content')
    @include('partials.header')

    <div class="py-16 page-content prose lg:prose-lg xl:prose-xl max-w-none"> {{ the_content() }}
    </div>
@endsection
