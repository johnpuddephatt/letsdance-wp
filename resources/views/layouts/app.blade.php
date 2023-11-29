<div x-data role="document" data-barba="wrapper">



  <main id="main" class="bg-white main" tabindex="-1" data-barba="container"
    data-barba-namespace="{{ get_page_template_slug() ? str_replace('.blade.php','',str_replace('template-','', get_page_template_slug())) : ($type ?? 'standard') }}">
    @yield('content')
  </main>
</div>
