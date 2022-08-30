<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pediatrie extends Model
{
    use HasFactory;
    protected $fillable=['nom','prenom','genre','age','lieu_naissance','religion','tel',
    'date_naissance','profession_mere','profession_pere','situation_mere'];
}
