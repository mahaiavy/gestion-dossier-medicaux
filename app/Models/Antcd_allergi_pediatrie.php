<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Antcd_allergi_pediatrie extends Model
{
    use HasFactory;
    protected $fillable=['antcdallergiped_id','allergie','date_allergie'];
}
