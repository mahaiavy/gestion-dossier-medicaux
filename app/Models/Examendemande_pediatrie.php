<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Examendemande_pediatrie extends Model
{
    use HasFactory;
    protected $fillable=['examped_id','biologie',
    'bacterologie','imagerie'];
}
