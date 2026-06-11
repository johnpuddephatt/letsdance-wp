<!doctype html>
<html @php(language_attributes())>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @php(do_action('get_header'))
    @php(wp_head())
    @vite(['resources/css/app.css', 'resources/js/app.js'])
  </head>

  <body @php(body_class(' "min-h-screen  no-focus-outline  overflow-x-hidden  overflow-y-scroll tracking-tighter'))>
    @php(wp_body_open())

    <div x-data role="document" data-barba="wrapper">

      @if(is_page_template('template-home.blade.php'))
        @include('partials.loading')
      @endif

      <a class="sr-only focus:not-sr-only" href="#main">
        {{ __('Skip to content', 'sage') }}
      </a>

      {{-- @include('sections.header') --}}

      <main
        id="main"
        class="bg-white outline-none"
        tabindex="-1"
        data-barba="container"
        data-barba-namespace="{{ get_page_template_slug() ? str_replace('.blade.php', '', str_replace('template-', '', get_page_template_slug())) : ($type ?? 'standard') }}"
      >
        @yield('content')
      </main>

      {{-- @include('sections.footer') --}}

    </div>

    @php(do_action('get_footer'))
    @php(wp_footer())
  </body>
</html>
