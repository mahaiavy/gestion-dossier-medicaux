<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Antcd_chirugi_pediatrie extends Model
{
    use HasFactory;
    protected $fillable=['antcdchirugiped_id','chirugicaux','date_chirugicaux'];
}
