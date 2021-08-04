<header class="header" role="banner">
  <div class="container container--wide header__inner">
    <div class="header__left">
      <a class="site-title" href="{{ home_url('/') }}">
        {{ $siteName }}
      </a>
      <span class="site-strapline">{{ get_bloginfo('description') }}</span>
    </div>
    <div class="header__right">
      @if (has_nav_menu('primary_navigation'))
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
      @endif </div>
  </div>
</header>