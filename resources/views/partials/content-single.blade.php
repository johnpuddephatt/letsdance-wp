<article @php(post_class())>
  <header class="container">
    <h1 class="entry-title">
      {!! $title !!}
    </h1>

    {{-- @include('partials/entry-meta') --}}
  </header>

  <div class="container entry-content">
    @php(the_content())
  </div>

</article>