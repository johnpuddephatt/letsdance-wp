@include('partials.edit-link') @include('partials.header')

<article @php(post_class())>
  <div class="container">
    {!! get_the_post_thumbnail(null, '2by1', [ 'class' =>
    "project-template--featured-image mt-12 2xl:mt-24", 'sizes' => '(min-width:
    1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px,
    (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw' ]) !!}
  </div>

  <div class="container">
    <div
      class="page-content prose ml-auto mr-0 max-w-none lg:prose-lg xl:prose-xl"
    >
      @php(the_content())
    </div>
  </div>
</article>

@include('partials.footer', ['withBackToProjects' => true])
