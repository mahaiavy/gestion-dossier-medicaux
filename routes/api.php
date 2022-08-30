<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user/connected/{user}', [App\Http\Controllers\PatientController::class, 'verifyUser']);
Route::post('/pediatrie/add', [App\Http\Controllers\PatientController::class, 'store']);
Route::get('/pediatrie/patient', [App\Http\Controllers\PatientController::class, 'index']);
Route::get('/pediatrie/patient/{id}/dossier', [App\Http\Controllers\PatientController::class, 'dossier']);
Route::get('/pediatrie/patient/{id}/antecedent', [App\Http\Controllers\PatientController::class, 'antecedent']);
Route::get('/pediatrie/patient/salle', [App\Http\Controllers\PatientController::class, 'listesalle']);
Route::get('/pediatrie/patient/salle/lit/{id}', [App\Http\Controllers\PatientController::class, 'litdispo']);
Route::post('/pediatrie/patient/salle/ajout', [App\Http\Controllers\PatientController::class, 'ajoutsalle']);
Route::get('/pediatrie/patient/salle/edit', [App\Http\Controllers\PatientController::class, 'editsalle']);

Route::get('/pediatrie/consultation', [App\Http\Controllers\ConsultationController::class, 'index']);
Route::get('/pediatrie/consultation/{id}/dossier', [App\Http\Controllers\ConsultationController::class, 'dossier']);
Route::put('/pediatrie/consultation/ferme/{id}', [App\Http\Controllers\ConsultationController::class, 'ferme']);
Route::post('/pediatrie/consultation/add', [App\Http\Controllers\ConsultationController::class, 'store']);
Route::get('/pediatrie/consultation/{id}/show', [App\Http\Controllers\ConsultationController::class, 'show']);
Route::get('/pediatrie/consultation/{id}', [App\Http\Controllers\ConsultationController::class, 'patient']);
Route::get('/pediatrie/consultation/soin/{id}', [App\Http\Controllers\ConsultationController::class, 'soin']);
Route::put('/pediatrie/consultation/soin/edit/{id}', [App\Http\Controllers\ConsultationController::class, 'update']);
Route::put('/pediatrie/consultation/soininjectable/edit/{id}', [App\Http\Controllers\ConsultationController::class, 'updateEtatInjectable']);
Route::post('/pediatrie/antecedent/add', [App\Http\Controllers\ConsultationController::class, 'antecedent']);

Route::get('/pediatrie/surveillance/{id}/show', [App\Http\Controllers\SurveillanceController::class, 'show']);
Route::get('/pediatrie/maintenant', [App\Http\Controllers\SurveillanceController::class, 'maintenant']);
Route::get('/pediatrie/surveillance/liste', [App\Http\Controllers\SurveillanceController::class, 'liste']);
Route::get('/pediatrie/surveillance/liste/{nom}', [App\Http\Controllers\SurveillanceController::class, 'findListe']);
Route::get('/pediatrie/surveillance/soin/{id}', [App\Http\Controllers\SurveillanceController::class, 'soin']);
Route::post('/pediatrie/surveillance/acte/add', [App\Http\Controllers\SurveillanceController::class, 'addActe']);
Route::get('/pediatrie/surveillance/acte/{id}/show', [App\Http\Controllers\SurveillanceController::class, 'showActe']);



















Route::prefix('chrr.vakinankaratra.com')->group(function () {
    Route::middleware('auth:api')->get('/home', function () {
        return view('layouts.base');
    });
});

Route::get('conversations', [App\Http\Controllers\ConversationController::class, 'index'])->name('conversations');
Route::get('conversations/{user}', [App\Http\Controllers\ConversationController::class, 'show'])->name('conversations.show');
Route::post('conversations', [App\Http\Controllers\ConversationController::class, 'sendMessage']);