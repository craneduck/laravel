<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Modelのエラーを検出
        /** @var Application */
        $app = $this->app;
        Model::shouldBeStrict(! $app->isProduction());

        // wayfinderでサブディレクトリを使うためにのためにAPP_URLをforceRootUrl()に設定
        // https://github.com/laravel/wayfinder/pull/105
        /** @var string */
        $appUrl = config('app.url');
        URL::forceRootUrl($appUrl);
    }
}
