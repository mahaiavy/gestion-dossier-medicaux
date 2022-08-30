<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Antecedent_mat extends Model
{
    use HasFactory;
    protected $fillable=['antcdmat_id','medicaux','chirugicaux',
    'toxique','allergie'];
}
