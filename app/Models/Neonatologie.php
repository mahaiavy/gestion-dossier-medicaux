<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Neonatologie extends Model
{
    use HasFactory;
    protected $fillable=['nom','prenom','genre','age','lieu_naissence','religion','tel',
    'date_naissance','profession_mere','profession_pere','situation_mere','age_mere',
    'age_pere','niveau_instru_mere','ethnie','nombre_fratrie','nom_mere','nom_pere'];
}
