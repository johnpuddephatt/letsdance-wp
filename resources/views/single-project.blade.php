@extends('layouts.app', ['type' => 'project'])

@section('content')
    @while (have_posts())
        @php(the_post())

        @include('partials.edit-link') @include('partials.header')

        <article @php(post_class())>

            <div class="container max-w-none">
                {!! get_the_post_thumbnail(null, '2by1', [
                    'class' => 'project-template--featured-image rounded-xl block w-full border border-gray-50 max-w-none! ',
                    'sizes' => '100vw',
                ]) !!}
            </div>

            <div class="page-content prose lg:prose-lg xl:prose-xl max-w-none">
                @php(the_content())
            </div>

        </article>

        @include('partials.footer', ['withBackToProjects' => true])
    @endwhile
@endsection
