<div x-data role="document" data-barba="wrapper">

  <a class="sr-only focus:not-sr-only" href="#main">
    {{ __('Skip to content') }}
  </a>

  @if(is_page_template( 'template-home.blade.php' ))
  @include('partials.loading')
  @endif

  <main id="main" class="main" tabindex="-1" data-barba="container"
    data-barba-namespace="{{ get_page_template_slug() ? str_replace('.blade.php','',str_replace('template-','', get_page_template_slug())) : ($type ?? 'standard') }}">
    @yield('content')
  </main>
</div>

</div>