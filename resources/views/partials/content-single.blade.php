@include('partials.edit-link')
<article @php(post_class())>
  @include('partials.header')

  <div class="container">
    @if(has_post_thumbnail())
 {!! get_the_post_thumbnail(null, '2by1', [ 'class'
    => "post-template--featured-image mt-12 2xl:mt-24", 'sizes' => '(min-width:
    1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px,
    (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw' ]) !!} @else <img
    class="post-template--featured-image mt-12 2xl:mt-24" src="{{ bloginfo('template_directory') }}/public/images/placeholder.png" alt="{{ the_title() }}"" />
@endif
  </div>

  <div class="container">
    <div
      class="page-content prose ml-auto mr-0 max-w-none lg:prose-lg xl:prose-xl"
    >
      @php(the_content())
    </div>
  </div>
</article>

@include('partials.footer', ['withBackToBlog' => true])
