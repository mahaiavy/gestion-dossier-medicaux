<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Observ_maternite extends Model
{
    use HasFactory;
    protected $fillable=['observmat_id','date_observation',
    'heure_observation','evolutions',
    'medobservmat_id','paramedobservmat_id','majorobservmat_id',
    'injectable','peros','autres'];
}
