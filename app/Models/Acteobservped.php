<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Acteobservped extends Model
{
    use HasFactory;
    protected $fillable=['ped_id','heure_acte','ta','actobervparaped_id',
    'observation','spo2','saignement','temperature','fc',
    'fr','conjoctives','autres','diurese','glas_gow'];
}
