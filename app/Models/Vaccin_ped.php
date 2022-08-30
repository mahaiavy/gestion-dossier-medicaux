<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vaccin_ped extends Model
{
    use HasFactory;
    protected $fillable=['vaccinped_id','carnet_vaccin','diplome_pev',
    'bcg','po','semaine6','semaine10','semaine14',
    'var','vaccin_hors_pev'];
}
