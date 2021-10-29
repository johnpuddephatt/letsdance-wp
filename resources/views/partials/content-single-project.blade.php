@include('partials.edit-link')

<article @php(post_class())>
  <header class="container container--wide">

    <div class="flex items-center justify-between h-20">
      <a class="antialiased font-semibold text-gray-500 no-underline lowercase lg:text-base" href="/projects/"><span
          class="font-system">&larr;</span> See all projects</a>
      <a class="w-8 h-8 transition transform rounded-full lg:w-12 lg:h-12 hover:rotate-90 hard-gradient bg-gradient-to-tr from-blue to-cyan"
        aria-label="Back to home" href="/"></a>
    </div>
  </header>

  <div class="container container--wide">
    {!! get_the_post_thumbnail(null, '2by1', [
    'class' => "project-template--featured-image",
    'sizes' => '(max-width: 1024px) 100vw, 1280px'
    ]) !!}
  </div>

  <div class="container">
    <div class="ml-auto mr-0 prose page-content max-w-none">
      @php(the_content())
    </div>
  </div>

</article>

@include('partials.footer', ['withBackToProjects' => true])