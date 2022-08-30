<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sortieneonatologie extends Model
{
    use HasFactory;
    protected $fillable=['sortineonat_id','medecinneonat_id','date_sortie','diagno_sortie',
    'issue','deparasitage_faire','bilan_sortie','vaccin_faire'];
}
