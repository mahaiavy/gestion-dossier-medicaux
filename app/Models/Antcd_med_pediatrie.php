<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Antcd_med_pediatrie extends Model
{
    use HasFactory;
    protected $fillable=['antcdmedped_id','medicaux','date_medicaux'];
}
