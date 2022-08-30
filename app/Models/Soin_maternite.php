<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soin_maternite extends Model
{
    use HasFactory;
    protected $fillable=['soinmat_id','date_soin','heure_soin','diagnostique',
    'histoire_maladie','signe_physique','signe_fonctionel','temperature','fc',
    'fr','poids','taille','glasgow','conjoctives','tad','tag',
    'ddr','age_gestationnel','sa','nombre_cpn','lieu_cpn','serologie',
    'vat','injectable','peros','autres'];
}
