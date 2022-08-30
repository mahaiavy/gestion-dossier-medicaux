<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Soin_pediatrie extends Model
{
    use HasFactory;
    protected $fillable=['soinped_id','medsoin_id','admisoinped_id','date_soin','heure_soin','diagnostique',
    'histoire_maladie','signe_general','signe_physique','signe_fonctionel','temperature','fc',
    'fr','poids','taille','pc','p_sur_t','imc','p_sur_a',
    'pa','spo2','t_sur_a','glycemie_capillaire','etat','etat_injectable','etat_peros','etat_autre','etat_periodique','injectable','peros','autres','autre_periodique'];
}
