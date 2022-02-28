<div
  class="mt-8 flex flex-row items-center gap-2 text-sm lg:gap-4 lg:text-base"
>
  <p
    class="byline author vcard flex flex-row items-center gap-1 font-bold text-gray-500 antialiased lg:gap-2"
  >
    {!! get_avatar(get_the_author_meta('ID'), 48, 'blank', '', ['class' => 'w-6
    lg:w-8 rounded-full']) !!}
    <span>
      <!-- <a href="{{ get_author_posts_url(get_the_author_meta('ID')) }}" rel="author" class="fn"> -->
      {{ get_the_author() }}
      <!-- </a> -->
    </span>
  </p>
  <span class="inline-block text-gray-200 line-through"
    >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
  >
  <time class="updated text-gray-500" datetime="{{ get_post_time('c', true) }}">
    {{ get_the_date() }}
  </time>
</div>
