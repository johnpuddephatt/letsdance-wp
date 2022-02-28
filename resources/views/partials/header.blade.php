<header
  id="site-header"
  @if(isset($is_home) && $is_home)
    class="bottom-0 left-0 right-0 z-40 transition delay-300 transform portrait:transition-none portrait:absolute portrait:bg-black portrait:bg-opacity-60 portrait:text-white"
  @else
    class="z-40 bg-white"
  @endif   "
  :class="{'translate-y-full transition-none' : $store.siteLoading}"
  role="banner"
>
  <div class="container flex items-center justify-between h-20 max-w-none">
    <div class="flex items-center">
      <a
        class="@if(isset($is_home) && $is_home)
portrait:text-white
@endif mr-3 flex items-center gap-1 text-lg font-bold leading-none text-gray-800 no-underline antialiased md:inline-flex lg:gap-2 lg:text-2xl "
        href="{{ home_url('/') }}"
      >
        <span
          class="inline-block w-8 h-8 transition transform rounded-full hard-gradient bg-gradient-to-tl from-blue to-cyan hover:rotate-90 lg:h-8 lg:w-8"
          aria-label="Back to home"
          href="/"
        ></span>

        <div 
        @if(isset($is_home) && $is_home)
        @else
          class="hidden md:block"
        @endif
        >
          <span> {{ $siteName }}</span>
          <span
            class="ml-1.5 hidden text-lg font-semibold lowercase leading-none text-gray-500 antialiased lg:inline-block"
            >{{ get_bloginfo('description') }}</span
          >
        </div>
      </a>
    </div>
    <div>
      @if(has_nav_menu('primary_navigation'))
 {!! wp_nav_menu([ 'theme_location'
      => 'primary_navigation', 'menu_class' => (isset($is_home) && $is_home) ?
      'portrait:hidden text-gray-600 gap-4 antialiased lg:text-gray-800
      font-bold lg:text-lg lowercase m-0 flex z-10 flex-row content-end' :
      'text-gray-600 gap-4 antialiased lg:text-gray-800 font-bold
      text-sm lg:text-lg lowercase m-0 flex z-10 flex-row content-end', 'echo'
      => false]) !!}
@endif
    </div>
  </div>
</header>
