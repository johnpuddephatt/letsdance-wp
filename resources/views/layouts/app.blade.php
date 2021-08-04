<div class="max-w-3xl mx-auto layout" role="document" data-barba="wrapper">

  <a class="sr-only focus:not-sr-only" href="#main">
    {{ __('Skip to content') }}
  </a>



  @if(is_page_template( 'template-home.blade.php' ))
  <section class="section section--loading">
    <div class="loading-message">
      we help good people<br />say good things
    </div>
  </section>
  @endif

  <main id="main" class="main" tabindex="-1" data-barba="container"
    data-barba-namespace="{{ get_page_template_slug() ? str_replace('.blade.php','',str_replace('template-','', get_page_template_slug())) : ($type ?? 'standard') }}">
    @yield('content')
  </main>

  @include('partials.footer')
</div>

</div>