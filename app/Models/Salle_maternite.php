<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salle_maternite extends Model
{
    use HasFactory;
    protected $fillable=['num_sallemat','categoriemat','nombre_litmat'];
}
