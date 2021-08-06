<a class="edit-link" target="_blank" href="{!! get_edit_post_link() !!}">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
</a>

<article @php(post_class())>
  <header class="container container--wide">

    <div class="project--navigation">
      <a class="project--back" href="/projects/"><span>&larr;</span> Back to all projects</a>
      <a class="project--back-to-home" href="/">Back to home</a>
    </div>

    {!! get_the_post_thumbnail(null, '2by1-xl', ['class' => "project--header-image"]) !!}

    <h1 class="project--excerpt">{!! $post->post_excerpt !!}</h1>

    <p class="project--title">{!! $title !!}</p>

  </header>

  <div class="container entry-content">
    @php(the_content())
  </div>

</article>