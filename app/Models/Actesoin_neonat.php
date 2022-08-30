<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actesoin_neonat extends Model
{
    use HasFactory;
    protected $fillable=['actesoinneonat_id','heure_acte','ta',
    'observation','urine','selles','temperature','fc',
    'fr','autres','vomissement','residu_gastrique','alimentation'];
}
