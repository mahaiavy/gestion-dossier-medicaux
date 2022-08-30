<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfert_mat extends Model
{
    use HasFactory;
    protected $fillable=['transfertmat_id','transmatservice_id','date_transmat',
    'heure_transmat'];
}
