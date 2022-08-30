<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admission_maternite extends Model
{
    use HasFactory;
    protected $fillable=['admissionmat_id','servicemat_id','num_be','motif',
    'mode','sallemat_id','lit','date_admission','heure_admission',
    'pers_aprevenir','tel_pers_aprev'];
}
