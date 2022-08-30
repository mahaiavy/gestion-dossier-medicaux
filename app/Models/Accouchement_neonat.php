<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accouchement_neonat extends Model
{
    use HasFactory;
    protected $fillable=['accouchneonat_id','voie','motif_cesarienne',
    'instru_avb','lieu','operateur','fiev_peri_partum','liquide_amniotiq',
    'm10','m5','m1','cri_immed_naiss','cyanose','reanim_neonat','autres'];
}
