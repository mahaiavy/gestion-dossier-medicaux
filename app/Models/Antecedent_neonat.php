<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Antecedent_neonat extends Model
{
    use HasFactory;
    protected $fillable=['antcdneonat_id','medicaux','chirugicaux',
    'toxique','allergie'];
}
