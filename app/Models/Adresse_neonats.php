<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adresse_neonats extends Model
{
    use HasFactory;
    protected $fillable=['neonat_id','lot','fkt','distric','region','commune'];
}
