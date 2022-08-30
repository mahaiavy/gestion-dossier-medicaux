<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Periode_neonatal extends Model
{
    use HasFactory;
    protected $fillable=['periodeneonat_id','poid_naissance','bcg_polio_o',
    'vitk1','collyre','allimentation'];
}
