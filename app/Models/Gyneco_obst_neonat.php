<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gyneco_obst_neonat extends Model
{
    use HasFactory;
    protected $fillable=['gyneconeonat_id','cpn','nombre_cpn',
    'nombre_vat','vat','carnet_sante','gs_abo_rhesus','ddr',
    'terme_ddr','gestite','parite','avortement','cesarienne',
    'mort_foetal_utero','mort_ne','premature','ictere','imf',
    'echo_obstetric','terme_echo','terme_echo','resultat_echo','scanno_pelv',
    'resultat_scanno','nombre_cesarienne','motif_cesarienne'];
}
