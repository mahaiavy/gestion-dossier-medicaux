<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paramed extends Model
{
    use HasFactory;
    protected $fillable=['imm_paramed','nom_paramed','prenom_paramed','tel_paramed'];
}
