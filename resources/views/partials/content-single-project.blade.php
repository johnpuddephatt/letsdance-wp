@include('partials.edit-link') @include('partials.header')

<article @php(post_class())>
  <!-- <header class="containerm max-w-none">
    <div class="flex items-center justify-between h-20">
      <a
        class="antialiased font-semibold text-gray-500 no-underline lowercase lg:text-base"
        href="/projects/"
        ><span class="font-system">&larr;</span> See all projects</a
      >
      <a
        class="w-8 h-8 transition transform rounded-full lg:w-12 lg:h-12 hover:rotate-90 hard-gradient bg-gradient-to-tr from-blue to-cyan"
        aria-label="Back to home"
        href="/"
      ></a>
    </div>
  </header> -->

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
