<?php

namespace App\Providers;

use Illuminate\Contracts\Foundation\ExceptionRenderer;
use Illuminate\Support\ServiceProvider;
use Roots\Acorn\Exceptions\Whoops\WhoopsExceptionRenderer;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(ExceptionRenderer::class, WhoopsExceptionRenderer::class);
    }
}
