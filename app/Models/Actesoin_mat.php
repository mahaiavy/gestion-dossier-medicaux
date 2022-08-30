<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actesoin_mat extends Model
{
    use HasFactory;
    protected $fillable=['actesoinmat_id','heure_acte','ta',
    'observation','globe_uterin','saignement','temperature','fc',
    'fr','conjoctives','autres'];
}
