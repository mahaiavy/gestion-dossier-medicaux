<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admission_pediatrie extends Model
{
    use HasFactory;
    protected $fillable=['admissionped_id','serviceped_id','num_be','motif',
    'mode','salleped_id','lit','etat','date_admission','heure_admission',
    'accompagnant'];
}
