<?php

namespace App\Http\Controllers;

use App\Author;
use Illuminate\Support\Facades\Artisan;

class ConfigurationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function migrate()
    {
        Artisan::call('migrate');
        return response('Migrated Successfully', 200);
    }
}
