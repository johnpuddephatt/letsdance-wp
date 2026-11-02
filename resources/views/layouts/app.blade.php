<!doctype html>
<html @php(language_attributes()) class="{{ $documentClass ?? '' }}"
    data-page-type="{{ get_page_template_slug() ? str_replace('.blade.php', '', str_replace('template-', '', get_page_template_slug())) : $type ?? 'standard' }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- Preload the serif so it's cached before navigating away from the homepage (which doesn't use it) --}}
    <link rel="preload" href="{{ \Illuminate\Support\Facades\Vite::asset('resources/fonts/SaisonMix-Medium.woff2') }}"
        as="font" type="font/woff2" crossorigin>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">

    @php(do_action('get_header'))
    @php(wp_head())
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script>
        window.addEventListener('pagereveal', function(e) {
            if (!e.viewTransition) return;
            var fromType = sessionStorage.getItem('transitionFrom') || 'standard';
            sessionStorage.removeItem('transitionFrom');
            var toType = document.documentElement.dataset.pageType || 'standard';
            var type = null;
            if (fromType === toType) type = null;
            else if (fromType === 'home') type = 'slide-up';
            else if (toType === 'home') type = 'slide-down';
            else if (toType === 'simple') type = 'slide-left';
            else if (fromType === 'simple') type = 'slide-right';
            else if ((fromType === 'project' || fromType === 'post') && toType === 'index') type = 'project-close';
            else if (fromType === 'index' && (toType === 'project' || toType === 'post')) type = 'project-open';
            if (type) {
                document.documentElement.dataset.transition = type;
                e.viewTransition.finished.then(function() {
                    delete document.documentElement.dataset.transition;
                });
            }
        });
    </script>
</head>

<body @php(body_class(' min-h-screen  no-focus-outline  '))>
    @php(wp_body_open())
    <div x-data role="document">

        @if (is_page_template('template-home.blade.php'))
            @include('partials.loading')
        @endif

        <a class="sr-only focus:not-sr-only" href="#main">
            {{ __('Skip to content', 'sage') }}
        </a>

        {{-- @include('sections.header') --}}

        <main id="main" class=" outline-none" tabindex="-1">
            @yield('content')
        </main>

        {{-- @include('sections.footer') --}}

    </div>

    @php(do_action('get_footer'))
    @php(wp_footer())
</body>

</html>
