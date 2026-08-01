<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cars extends Model
{
    /** @use HasFactory<\Database\Factories\CarsFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'model',
        'year',
        'color',
        'price',
    ];
}
