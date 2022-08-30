<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Examendemande_neonatologie extends Model
{
    use HasFactory;
    protected $fillable=['examneonat_id','biologie',
    'bacterologie','imagerie'];
}
