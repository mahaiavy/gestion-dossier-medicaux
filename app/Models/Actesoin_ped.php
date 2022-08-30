<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actesoin_ped extends Model
{
    use HasFactory;
    protected $fillable=['actesoinped_id','actsoinparaped_id','heure_acte','ta',
    'observation','spo2','saignement','temperature','fc',
    'fr','conjoctives','autres','diurese','glas_gow'];
}
