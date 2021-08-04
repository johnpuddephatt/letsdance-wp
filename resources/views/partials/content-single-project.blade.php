<a class="edit-link" target="_blank" href="{!! get_edit_post_link() !!}">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
</a>

<article @php(post_class())>
  <header class="container container--wide">

    <div>
      <a href="/projects/">&larr; Back to all projects</a>
    </div>

    {!! get_the_post_thumbnail(null, '16by9-xl', ['class' => ""]) !!}

    <h1 class="entry-title">
      {!! $post->post_excerpt !!}
    </h1>

    <p>{!! $title !!}</p>

  </header>

  <div class="container entry-content">
    @php(the_content())
  </div>

</article>