<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfert_ped extends Model
{
    use HasFactory;
    protected $fillable=['transfertped_id','transpedservice_id','date_transped',
    'heure_transped'];
}
