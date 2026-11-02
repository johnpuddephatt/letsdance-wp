@extends('layouts.app', ['type' => 'project', 'documentClass' => '  bg-linear-180 to-faun'])

@section('content')
    @while (have_posts())
        @php(the_post())

        @include('partials.edit-link') @include('partials.header')

        <article @php(post_class())>

            <div class="container text-center max-w-4xl my-24">
                <h2 class="font-bold text-zinc-600 text-2xl mb-8">{{ the_title() }}</h2>

                <div class="font-serif text-6xl">{{ the_excerpt() }}</div>
            </div>
            <div class=" container max-w-none ">
                <div class="bg-white rounded-xl  shadow-2xl">
                    {!! get_the_post_thumbnail(null, '2by1', [
                        'class' => 'project-template--featured-image rounded-t-xl',
                        'sizes' => '100vw',
                    ]) !!}
                    <div class="page-content prose lg:prose-lg xl:prose-xl max-w-none">
                        @php(the_content())
                    </div>
                </div>
            </div>

        </article>

        @include('partials.footer', ['withBackToProjects' => true])
    @endwhile
@endsection
