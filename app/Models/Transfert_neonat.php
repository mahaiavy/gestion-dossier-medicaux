<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transfert_neonat extends Model
{
    use HasFactory;
    protected $fillable=['transfertneonat_id','transneonatservice_id','date_transneonat',
    'heure_transneonat'];
}
