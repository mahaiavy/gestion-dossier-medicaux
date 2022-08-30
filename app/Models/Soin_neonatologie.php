<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soin_neonatologie extends Model
{
    use HasFactory;
    protected $fillable=['soinneonat_id','date_soin','heure_soin','diagnostique',
    'histoire_maladie','signe_physique','signe_fonctionel','temperature','fc',
    'fr','poids','taille','ta','trc','age_corrige','sa',
    'eutrique','hypotrophe','macrosome','injectable','peros','autres'];
}
