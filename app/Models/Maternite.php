<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Maternite extends Model
{
    use HasFactory;
    protected $fillable=['nom','prenom','genre','age','lieu_naissence','religion','tel',
    'date_naissance','profession','piece_identite','num_piece_identite','situation_matrimonial'];
}
