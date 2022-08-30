<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Examendemande_maternite extends Model
{
    use HasFactory;
    protected $fillable=['exammat_id','biologie',
    'bacterologie','imagerie'];
}
