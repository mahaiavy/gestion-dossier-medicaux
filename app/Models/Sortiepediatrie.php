<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sortiepediatrie extends Model
{
    use HasFactory;
    protected $fillable=['sortiped_id','admi_id','medecinped_id','date_sortie','diagno_sortie',
    'issue','deparasitage_faire','bilan_sortie','vaccin_faire'];
}
