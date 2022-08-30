<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adresse_pediatrie extends Model
{
    use HasFactory;
    protected $fillable=['pediatrie_id','lot','fkt','distric','region','commune'];
}
