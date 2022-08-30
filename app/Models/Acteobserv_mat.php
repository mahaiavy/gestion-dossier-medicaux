<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Acteobserv_mat extends Model
{
    use HasFactory;
    protected $fillable=['acteobservmat_id','heure_acte','ta',
    'observation','globe_uterin','saignement','temperature','fc',
    'fr','conjoctives','autres'];
}
