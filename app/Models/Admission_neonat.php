<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admission_neonat extends Model
{
    use HasFactory;
    protected $fillable=['admissionneonat_id','serviceneonat_id','num_be','motif',
    'mode','salleneonat_id','lit','date_admission','heure_admission'];
}
