<header
  class="z-40 transition-transform delay-75 transform bg-white border-t border-gray-50  @if(isset($is_home) && $is_home) portrait:bg-black portrait:bg-opacity-50 portrait:border-t-0 portrait:absolute left-0 right-0 bottom-0 portrait:border-t-none  portrait:text-white @endif"
  :class="{'translate-y-full transition-none' : $store.siteLoading}" role="banner">
  <div class="container flex items-center justify-between h-12 lg:h-20 max-w-none">
    <div>
      <a class="block mr-3 text-xl antialiased font-bold leading-none text-gray-800  no-underline lg:text-2xl md:inline @if(isset($is_home) && $is_home) portrait:text-white @endif"
        href="{{ home_url('/') }}">
        {{ $siteName }}
      </a>
      <span class="hidden text-lg antialiased font-semibold leading-none text-gray-600 lowercase lg:inline">{{
        get_bloginfo('description')
        }}</span>
    </div>
    <div>

      @if (has_nav_menu('primary_navigation'))
      {!! wp_nav_menu([
      'theme_location' => 'primary_navigation',
      'menu_class' =>
      (isset($is_home) && $is_home) ? 'portrait:hidden text-gray-600 gap-4 antialiased lg:text-gray-800 font-bold
      lg:text-lg
      lowercase m-0 flex z-10 flex-row content-end' : 'text-gray-600 gap-4 antialiased lg:text-gray-800 font-bold
      lg:text-lg
      lowercase m-0 flex z-10 flex-row content-end',
      'echo' => false]) !!}
      @endif
    </div>
  </div>
</header>