<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Protocole_accouchement extends Model
{
    use HasFactory;
    protected $fillable=['protocolemat_id','date_protocole','heure_protocole',
    'avb','sa','presentation','aide_par','degagement',
    'enfant','sexe','m1','m5','m10','poids','pc',
    'pt','taille','trans_neonat','la','delivrance',
    'cotyledon','poids_cotyledon','diametre_cotyl','membranes','hematome',
    'cordon','nombre_vaisseau','revise_uterine','col','vagin','perine',
    'episiotonomie','type_episiotom','retract_uterus','hemorragie','nom_bebe','accoucheur'];
}
