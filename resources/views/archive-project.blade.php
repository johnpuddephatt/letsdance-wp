@extends('layouts.app', ['type' => 'index']) @section('content')
    @include('partials.header')

    <h2 class="container text-6xl font-normal font-serif mt-48 ">Projects</h2>
    <div class="container my-24 grid grid-cols-1 gap-16 lg:my-36 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-24 2xl:my-48">
        @foreach ($projects as $key => $project)
            <x-project-card :project="$project" :index="$loop->index" :class="$loop->index % 2 ? 'lg:-translate-y-1/4' : 'lg:translate-y-1/4'" />
        @endforeach
    </div>

    @include('partials.footer')
@endsection
