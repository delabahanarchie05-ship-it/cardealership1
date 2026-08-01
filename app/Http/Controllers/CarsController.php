<?php

namespace App\Http\Controllers;

use App\Models\cars;
use Illuminate\Http\Request;
use Inertia\Inertia;
class CarsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         return Inertia::render('dashboard',[
            'cars' => cars::query()->latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:20',
            'model' => 'required|string|max:100',
            'year' => 'required|string|max:30',
            'color' => 'nullable|string|max:20',
            'price' => 'required|numeric|min:0',
        ]);

        $cars = cars::create($validatedData);
        return redirect()->route('dashboard')->with('success', 'Car created successfully.');
    
    }

    /**
     * Display the specified resource.
     */
    // public function show(cars $cars)
    // {
    //     //
    // }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(cars $cars)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, cars $cars)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:20',
            'model' => 'required|string|max:100',
            'year' => 'required|string|max:30',
            'color' => 'nullable|string|max:20',
            'price' => 'required|numeric|min:0',
        ]);

        $cars->update($validatedData);
        return redirect()->route('dashboard')->with('success', 'Car updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(cars $cars)
    {
        $cars->delete();
        return redirect()->route('dashboard')->with('success', 'Car deleted successfully.');
    }
}
