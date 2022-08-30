<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salle_neonatologie extends Model
{
    use HasFactory;
    protected $fillable=['num_salleneonat','categorieneonat','nombre_litneonat'];
}
