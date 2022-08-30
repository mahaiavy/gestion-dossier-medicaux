<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Observationped extends Model
{
    use HasFactory;
    protected $fillable=['observped_id','admiobserve_id','date_observation',
    'heure_observation','evolutions','etat',
    'medobservped_id','paramedobservped_id','majorobservped_id',
    'injectable','peros','autres'];
}
