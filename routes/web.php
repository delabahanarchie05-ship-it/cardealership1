<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarsController;
Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    //Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get('dashboard', [CarsController::class, 'index'])->name('dashboard');
    Route::post('cars', [CarsController::class, 'store'])->name('cars.store');
    Route::put('cars/{car}', [CarsController::class, 'update'])->name('cars.update');
    Route::delete('cars/{car}', [CarsController::class, 'destroy'])->name('cars.destroy');
});

require __DIR__.'/settings.php';
