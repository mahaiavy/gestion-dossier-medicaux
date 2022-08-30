<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Observ_neonatologie extends Model
{
    use HasFactory;
    protected $fillable=['observneonat_id','date_observation','heure_observation','evolutions',
    'medobservneonat_id','paramedobservneonat_id','majorobservneonat_id',
    'injectable','peros','autres'];
}
