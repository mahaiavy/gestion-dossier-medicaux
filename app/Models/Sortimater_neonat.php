<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sortimater_neonat extends Model
{
    use HasFactory;
    protected $fillable=['sortimaterneonat_id','mode_sortie','date_sortie',
    'heure_sortie','moyen_transfert','lettre_transfert','proto_accouch'];
}
