@include('partials.edit-link')

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