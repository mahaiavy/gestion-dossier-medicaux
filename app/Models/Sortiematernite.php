<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sortiematernite extends Model
{
    use HasFactory;
    protected $fillable=['sortimat_id','medecinmat_id','date_sortie','diagno_sortie','issue'];
}
