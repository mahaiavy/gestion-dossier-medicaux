<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Antecedent_ped extends Model
{
    use HasFactory;
    protected $fillable=['antcdped_id',
    'nombre_fratrie','rang','collatereau',
    'parents','serologie','pathologie','dev_psychomoteur','sommeil',
    'dernier_parasitage','sociabilite','motricite','language','scolarite',
    'vie_en_collectiv','proprete_diurne','age_propre_diurne','proprete_nocturne','age_propre_noct',
    'eutocique','perinateaux','age_de_mere','voie','lieu',
    'terme','poid_naiss','liquide_amniotiq','m1','m5',
    'm10','cri_immed_naiss','perinataux','cpn','vat','allaitement','age_diversification',
    'sevrage_lait_mat','diversification_actu','gouter','propre_ration'];
}
