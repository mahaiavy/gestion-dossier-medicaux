<?php

use Illuminate\Support\Facades\Route;

use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
});


// Route::get('/', function () {
//         return view('layouts.base');
//     });
    

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index']);
Route::get('/user/connected', [App\Http\Controllers\HomeController::class, 'getUserConnected']);

// Route::post('/pediatrie/consultation/add', [App\Http\Controllers\HomeController::class, 'store']);

Route::middleware('auth:api')->get('/chrr.vakinankaratra.com', function () {
        return view('layouts.base');
    });

    Route::middleware('auth')->get('/chrr.vakinankaratra.com/{path}', function () {
        return view('layouts.base');
    })->where('path','.*');


Auth::routes();


