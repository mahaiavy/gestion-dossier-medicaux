<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Histoire_refere extends Model
{
    use HasFactory;
    protected $fillable=['refere_id','consult_par',
    'motif','delait_consultation','conseil_recus','traitement_recu',
    'conseil_reconsult','autre_precision'];
}
