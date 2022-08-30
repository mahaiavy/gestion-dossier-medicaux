<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lit_pediatrie extends Model
{
    use HasFactory;
    protected $fillable=['sallelitped_id','num_lit','etat'];
}
