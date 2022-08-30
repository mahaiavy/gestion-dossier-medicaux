<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('maternites', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('nom');
        //     $table->string('prenom');
        //     $table->string('genre');
        //     $table->integer('age')->unsigned();
        //     $table->string('lieu_naissance');
        //     $table->string('religion')->nullable();
        //     $table->string('tel')->nullable();
        //     $table->date('date_naissance');
        //     $table->string('profession');
        //     $table->string('piece_identite');
        //     $table->string('num_piece_identite');
        //     $table->string('situation_matrimonial');
        //     $table->timestamps();
        // });

        // Schema::create('pediatries', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('nom');
        //     $table->string('prenom');
        //     $table->string('genre');
        //     $table->integer('age')->unsigned();
        //     $table->string('lieu_naissance');
        //     $table->string('religion')->nullable();
        //     $table->string('tel')->nullable();
        //     $table->date('date_naissance');
        //     $table->string('profession_mere');
        //     $table->string('profession_pere')->nullable();
        //     $table->string('situation_mere');
        //     $table->timestamps();
        // });

        // Schema::create('neonatologies', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('nom');
        //     $table->string('prenom');
        //     $table->string('genre');
        //     $table->integer('age')->unsigned();
        //     $table->string('lieu_naissance');
        //     $table->string('religion')->nullable();
        //     $table->string('tel')->nullable();
        //     $table->date('date_naissance');
        //     $table->string('profession_mere');
        //     $table->string('profession_pere')->nullable();
        //     $table->string('situation_mere');
        //     $table->string('age_mere');
        //     $table->string('age_pere')->nullable();
        //     $table->string('niveau_instru_mere');
        //     $table->string('ethnie')->nullable();
        //     $table->string('nombre_fratrie');
        //     $table->string('nom_mere')->nullable();
        //     $table->string('nom_pere')->nullable();
        //     $table->timestamps();
        // });

        // Schema::create('salle_maternites', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('num_sallemat')->unique();
        //     $table->string('categoriemat');
        //     $table->integer('nombre_litmat')->unsigned();
           
        //     $table->timestamps();
        // });

        // Schema::create('salle_pediatries', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('num_salleped')->unique();
        //     $table->string('categorieped');
        //     $table->integer('nombre_litped')->unsigned();
           
        //     $table->timestamps();
        // });

        // Schema::create('salle_neonatologies', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('num_salleneonat')->unique();
        //     $table->string('categorieneonat');
        //     $table->integer('nombre_litneonat')->unsigned();
           
        //     $table->timestamps();
        // });

        // Schema::create('medecins', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('imm_medecin')->unique();
        //     $table->string('nom_med');
        //        $table->string('categorie');
        //     $table->string('prenom_med');
        //     $table->string('tel_medecin');
           
        //     $table->timestamps();
        // });

        // Schema::create('parameds', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->string('imm_paramed')->unique();
        //     $table->string('nom_paramed');
        //     $table->string('prenom_paramed');
        //     $table->string('tel_paramed');
           
        //     $table->timestamps();
        // });

        // Schema::create('services', function (Blueprint $table) {
        //     $table->increments('id');
          
        //     $table->string('nom_service');
           
        //     $table->timestamps();
        // });

        // Schema::create('adresse_maternites', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('maternite_id')->unsigned();
        //     $table->foreign('maternite_id','materniteid')->references('id')->on('maternites')->onDelete('cascade');
        //     $table->string('lot')->nullable();
        //     $table->string('fkt')->nullable();
        //     $table->string('distric')->nullable();
        //     $table->string('region')->nullable();
        //     $table->string('commune')->nullable();
           
        //     $table->timestamps();
        // });

        // Schema::create('adresse_pediatries', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('pediatrie_id')->unsigned();
        //     $table->foreign('pediatrie_id','pediatrieid')->references('id')->on('pediatries')->onDelete('cascade');
        //     $table->string('lot')->nullable();
        //     $table->string('fkt')->nullable();
        //     $table->string('distric')->nullable();
        //     $table->string('commune')->nullable();
        //     $table->string('region')->nullable();
           
        //     $table->timestamps();
        // });

        // Schema::create('adresse_neonats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('neonat_id')->unsigned();
        //     $table->foreign('neonat_id','neonatid')->references('id')->on('neonatologies')->onDelete('cascade');
        //     $table->string('lot')->nullable();
        //     $table->string('fkt')->nullable();
        //     $table->string('distric')->nullable();
        //     $table->string('commune')->nullable();
        //     $table->string('region')->nullable();
           
        //     $table->timestamps();
        // });

       

        // Schema::create('sortiematernites', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('sortimat_id')->unsigned();
        //     $table->foreign('sortimat_id','sortimatidid')->references('id')->on('maternites')->onDelete('cascade');
        //     $table->integer('medecinmat_id')->unsigned();
        //     $table->foreign('medecinmat_id','medecinmatid')->references('id')->on('medecins')->onDelete('cascade');
        //     $table->date('date_sortie');
        //     $table->string('diagno_sortie');
        //     $table->string('issue');
           
        //     $table->timestamps();
        // });

        //  Schema::create('admission_pediatries', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('admissionped_id')->unsigned();
        //     $table->foreign('admissionped_id','admissionped_id')->references('id')->on('pediatries')->onDelete('cascade');
        //     $table->integer('serviceped_id')->unsigned();
        //     $table->foreign('serviceped_id','serviceped')->references('id')->on('services')->onDelete('cascade');
        //     $table->integer('num_be')->nullable();
        //     $table->string('motif');
        //     $table->string('mode');
        //     $table->string('salleped_id');
        //     $table->foreign('salleped_id','salleped')->references('num_salleped')->on('salle_pediatries')->onDelete('cascade');
        //     $table->integer('lit');
        //     $table->string('etat')->default('encours');
        //     $table->date('date_admission');
        //     $table->time('heure_admission');
        //     $table->string('accompagnant')->nullable();
           
        //     $table->timestamps();
        // });

        // Schema::create('sortiepediatries', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('sortiped_id')->unsigned();
        //     $table->integer('admi_id')->unsigned();
        //     $table->foreign('sortiped_id','sortipedid')->references('id')->on('pediatries')->onDelete('cascade');
        //     $table->foreign('admi_id','admiid')->references('id')->on('admission_pediatries')->onDelete('cascade');
        //     $table->integer('medecinped_id')->unsigned();
        //     $table->foreign('medecinped_id','medecinpedid')->references('id')->on('medecins')->onDelete('cascade');
        //     $table->date('date_sortie');
        //     $table->string('diagno_sortie');
        //     $table->string('deparasitage_faire')->nullable();
        //     $table->text('bilan_sortie')->nullable();
        //     $table->string('vaccin_faire')->nullable();
        //     $table->string('issue');
           
        //     $table->timestamps();
        // });

        // Schema::create('sortieneonatologies', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('sortineonat_id')->unsigned();
        //     $table->foreign('sortineonat_id','sortineonatid')->references('id')->on('neonatologies')->onDelete('cascade');
        //     $table->integer('medecinneonat_id')->unsigned();
        //     $table->foreign('medecinneonat_id','medecinneonatid')->references('id')->on('medecins')->onDelete('cascade');
 
        //     $table->date('date_sortie');
        //     $table->string('diagno_sortie');
        //     $table->string('deparasitage_faire')->nullable();
        //     $table->text('bilan_sortie')->nullable();
        //     $table->string('vaccin_faire')->nullable();
        //     $table->string('issue');
           
        //     $table->timestamps();
        // });

        // Schema::create('admission_maternites', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('admissionmat_id')->unsigned();
        //     $table->foreign('admissionmat_id','admissionmatid')->references('id')->on('maternites')->onDelete('cascade');
        //     $table->integer('servicemat_id')->unsigned();
        //     $table->foreign('servicemat_id','servicemat')->references('id')->on('services')->onDelete('cascade');
        //     $table->integer('num_be')->nullable();
        //     $table->string('motif');
        //     $table->string('mode');
        //     $table->string('sallemat_id');
        //     $table->foreign('sallemat_id','sallemat')->references('num_sallemat')->on('salle_maternites')->onDelete('cascade');
        //     $table->integer('lit');
        //     $table->date('date_admission');
        //     $table->time('heure_admission');
        //     $table->string('pers_aprevenir')->nullable();
        //      $table->string('etat')->default('encours');
        //     $table->string('tel_pers_aprev')->nullable();
        //     $table->timestamps();
        // });

       

        // Schema::create('admission_neonats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('admissionneonat_id')->unsigned();
        //     $table->foreign('admissionneonat_id','admissionneonatid')->references('id')->on('neonatologies')->onDelete('cascade');
        //     $table->integer('serviceneonat_id')->unsigned();
        //     $table->foreign('serviceneonat_id','serviceneonat')->references('id')->on('services')->onDelete('cascade');
        //     $table->integer('num_be')->nullable();
        //     $table->string('motif');
        //     $table->string('mode');
        //     $table->string('salleneonat_id');
        //     $table->foreign('salleneonat_id','salleneonat')->references('num_salleneonat')->on('salle_neonatologies')->onDelete('cascade');
        //     $table->integer('lit');
        //     $table->date('date_admission');
        //     $table->time('heure_admission');
          
        //     $table->timestamps();
        // });

        // Schema::create('soin_maternites', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('soinmat_id')->unsigned();
        //     $table->foreign('soinmat_id','soinmatid')->references('id')->on('maternites')->onDelete('cascade');
        //     $table->date('date_soin');
        //     $table->time('heure_soin');
        //     $table->string('diagnostique');
        //       $table->string('nom_medecin');
        //     $table->text('histoire_maladie');
        //     $table->timestamps();
        //     $table->text('signe_physique')->nullable();
        //     $table->text('signe_fonctionel')->nullable();
        //     $table->integer('temperature')->nullable();
        //     $table->string('fc')->nullable();
        //     $table->string('fr')->nullable();
        //     $table->integer('poids')->nullable();
        //     $table->integer('taille')->nullable();
        //     $table->string('glasgow')->nullable();
        //     $table->string('conjoctives')->nullable();
        //     $table->string('tad')->nullable();
        //     $table->string('tag')->nullable();
        //     $table->string('ddr')->nullable();
        //     $table->integer('age_gestationnel')->nullable();
        //     $table->string('sa')->nullable();
        //     $table->integer('nombre_cpn')->nullable();
        //     $table->string('lieu_cpn')->nullable();
        //     $table->text('serologie')->nullable();
        //     $table->string('vat')->nullable();
        //     $table->string('injectable')->nullable();
        //     $table->text('peros')->nullable();
        //     $table->text('autres')->nullable();
        // });

        // Schema::create('soin_pediatries', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('soinped_id')->unsigned();
        //     $table->integer('admisoinped_id')->unsigned();
        //     $table->integer('medsoin_id')->unsigned();
        //     $table->foreign('soinped_id','soinpedid')->references('id')->on('pediatries')->onDelete('cascade');
        //     $table->foreign('admisoinped_id','admisoinpedid')->references('id')->on('admission_pediatries')->onDelete('cascade');
        //     $table->foreign('medsoin_id','medsoinid')->references('id')->on('medecins')->onDelete('cascade');
        //     $table->date('date_soin');
        //     $table->time('heure_soin');
        //     $table->string('diagnostique');
        //     $table->text('histoire_maladie');
        //     $table->text('signe_general')->nullable();
        //     $table->text('signe_physique')->nullable();
        //     $table->text('signe_fonctionel')->nullable();
        //     $table->integer('temperature')->nullable();
        //     $table->string('fc')->nullable();
        //     $table->string('fr')->nullable();
        //     $table->integer('poids')->nullable();
        //     $table->integer('taille')->nullable();
        //     $table->string('pc')->nullable();
        //     $table->string('p_sur_t')->nullable();
        //     $table->string('imc')->nullable();
        //     $table->string('p_sur_a')->nullable();
        //     $table->string('pa')->nullable();
        //     $table->string('spo2')->nullable();
        //     $table->string('t_sur_a')->nullable();
        //     $table->string('glycemie_capillaire')->nullable();
        //     $table->string('etat')->default("non fait");
        //     $table->string('injectable')->nullable();
        //     $table->string('etat_injectable')->nullable();
        //     $table->string('etat_peros')->nullable();
        //     $table->string('etat_autre')->nullable();
        //     $table->string('etat_periodique')->nullable();
        //     $table->text('peros')->nullable();
        //     $table->text('autres')->nullable();
        //     $table->text('autre_periodique')->nullable();
        //     $table->timestamps();
        // });

        // Schema::create('soin_neonatologies', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('soinneonat_id')->unsigned();
        //     $table->foreign('soinneonat_id','soinneonatid')->references('id')->on('neonatologies')->onDelete('cascade');
        //     $table->date('date_soin');
        //     $table->time('heure_soin');
        //     $table->string('diagnostique');
        //      $table->string('nom_medecin');
        //     $table->text('histoire_maladie');
        //     $table->text('signe_physique')->nullable();
        //     $table->text('signe_fonctionel')->nullable();
        //     $table->integer('temperature')->nullable();
        //     $table->string('fc')->nullable();
        //     $table->string('fr')->nullable();
        //     $table->integer('poids')->nullable();
        //     $table->integer('taille')->nullable();
        //     $table->string('ta')->nullable();
        //     $table->string('trc')->nullable();
          
        //     $table->string('age_corrige')->nullable();
        //     $table->string('sa')->nullable();
        //     $table->string('eutrique')->nullable();
        //     $table->string('hypotrophe')->nullable();
        //     $table->string('macrosome')->nullable();
        //     $table->string('injectable')->nullable();
        //     $table->text('peros')->nullable();
        //     $table->text('autres')->nullable();
        //     $table->timestamps();
        // });

        // Schema::create('observ_neonatologies', function (Blueprint $table) {
            
        //     $table->increments('id');
        //     $table->date('date_observation');
        //     $table->time('heure_observation');
        //     $table->text('evolutions');
        //     $table->string('injectable')->nullable();
        //     $table->text('peros')->nullable();
        //     $table->text('autres')->nullable();
        //     $table->integer('observneonat_id')->unsigned();
        //     $table->foreign('observneonat_id','observneonatid')->references('id')->on('neonatologies')->onDelete('cascade');
        //     $table->integer('medobservneonat_id')->unsigned();
        //     $table->foreign('medobservneonat_id','medobservneonatid')->references('id')->on('medecins')->onDelete('cascade');
        //     $table->integer('paramedobservneonat_id')->unsigned();
        //     $table->foreign('paramedobservneonat_id','paramedobservneonatid')->references('id')->on('parameds')->onDelete('cascade');
        //     $table->integer('majorobservneonat_id')->unsigned();
        //     $table->foreign('majorobservneonat_id','majorobservneonatid')->references('id')->on('parameds')->onDelete('cascade');
        //     $table->timestamps();
        // });

        // Schema::create('observationpeds', function (Blueprint $table) {
            
        //     $table->increments('id');
        //     $table->integer('observped_id')->unsigned();
        //     $table->integer('admiobserve_id')->unsigned();
        //     $table->foreign('observped_id','observpedid')->references('id')->on('pediatries')->onDelete('cascade');
        //     $table->foreign('admiobserve_id','admiobserveid')->references('id')->on('admission_pediatries')->onDelete('cascade');
        //     $table->date('date_observation');
        //     $table->time('heure_observation');
        //     $table->text('evolutions');
        //     $table->string('etat')->default('non fait');
        //     $table->string('injectable')->nullable();
        //     $table->text('peros')->nullable();
        //     $table->text('autres')->nullable();
        //     $table->integer('medobservped_id')->unsigned();
        //     $table->foreign('medobservped_id','medobservpedid')->references('id')->on('medecins')->onDelete('cascade');
        //     $table->integer('paramedobservped_id')->unsigned();
        //     $table->foreign('paramedobservped_id','paramedobservpedid')->references('id')->on('parameds')->onDelete('cascade');
        //     $table->timestamps();
        // });

        // Schema::create('observ_maternites', function (Blueprint $table) {
            
        //     $table->increments('id');
        //     $table->integer('observmat_id')->unsigned();
        //     $table->foreign('observmat_id','observmatid')->references('id')->on('maternites')->onDelete('cascade');
        //     $table->date('date_observation');
        //     $table->time('heure_observation');
        //     $table->text('evolutions');
        //     $table->string('injectable')->nullable();
        //     $table->text('peros')->nullable();
        //     $table->text('autres')->nullable();
        //     $table->integer('medobservmat_id')->unsigned();
        //     $table->foreign('medobservmat_id','medobservmatid')->references('id')->on('medecins')->onDelete('cascade');
        //     $table->integer('paramedobservmat_id')->unsigned();
        //     $table->foreign('paramedobservmat_id','paramedobservmatid')->references('id')->on('parameds')->onDelete('cascade');
        //     $table->integer('majorobservmat_id')->unsigned();
        //     $table->foreign('majorobservmat_id','majorobservmatid')->references('id')->on('parameds')->onDelete('cascade');
        //     $table->timestamps();
        // });

       
        // Schema::create('examendemande_maternites', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('exammat_id')->unsigned();
        //     $table->foreign('exammat_id','exammat')->references('id')->on('soin_maternites')->onDelete('cascade');
        //     $table->text('biologie');          
        //     $table->text('bacterologie');
        //     $table->text('imagerie');
        //     $table->timestamps();
        // });

        // Schema::create('examendemande_pediatries', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('examped_id')->unsigned();
        //     $table->foreign('examped_id','exampedid')->references('id')->on('admission_pediatries')->onDelete('cascade');
        //     $table->text('biologie');          
        //     $table->text('bacterologie');
        //     $table->text('imagerie');
        //     $table->text('explo_fonction');
        //     $table->text('autres');
        //     $table->timestamps();
        // });

        // Schema::create('examendemande_neonatologies', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('examneonat_id')->unsigned();
        //     $table->foreign('examneonat_id','examneonatid')->references('id')->on('soin_neonatologies')->onDelete('cascade');
        //     $table->text('biologie');          
        //     $table->text('bacterologie');
        //     $table->text('imagerie');
        //     $table->timestamps();
        // });

        // Schema::create('histoire_referes', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('refere_id')->unsigned();
        //     $table->foreign('refere_id','refereid')->references('id')->on('soin_neonatologies')->onDelete('cascade');
        //     $table->string('consulte_par');          
        //     $table->string('motif');
        //     $table->integer('delait_consultation');
        //     $table->text('conseil_recus');
        //     $table->text('traitement_recu');
        //     $table->string('conseil_reconsult');
        //     $table->text('autre_precision');
        //     $table->timestamps();
        // });

        // Schema::create('acteobserv_mats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('acteobservmat_id')->unsigned();
        //     $table->foreign('acteobservmat_id','acteobservmatid')->references('id')->on('observ_maternites')->onDelete('cascade');
        //      $table->integer('actobervparamat_id')->unsigned();
        //     $table->foreign('actobervparamat_id','actobervparamatid')->references('id')->on('parameds')->onDelete('cascade');
        //     $table->time('heure_acte');          
        //     $table->string('fr')->nullable();
        //     $table->string('ta')->nullable();
        //     $table->string('fc')->nullable();
        //     $table->integer('temperature')->nullable();
        //     $table->text('observation')->nullable();
        //     $table->string('conjoctives')->nullable();
        //     $table->string('globe_uterin')->nullable();
        //     $table->string('saignement')->nullable();
        //     $table->string('autres')->nullable();
            
        //     $table->timestamps();
        // });

        // Schema::create('acteobserv_peds', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('acteobservped_id')->unsigned();
        //     $table->foreign('acteobservped_id','acteobservpedid')->references('id')->on('observ_pediatries')->onDelete('cascade');
        //     $table->time('heure_acte');     
        //      $table->integer('actobervparaped_id')->unsigned();
        //     $table->foreign('actobervparaped_id','actobervparapedid')->references('id')->on('parameds')->onDelete('cascade');     
        //     $table->string('fr')->nullable();
        //     $table->string('ta')->nullable();
        //     $table->string('fc')->nullable();
        //     $table->integer('temperature')->nullable();
        //     $table->text('observation')->nullable();
        //     $table->string('conjoctives')->nullable();
        //     $table->string('spo2')->nullable();
        //     $table->string('diurese')->nullable();
        //     $table->string('glas_gow')->nullable();
        //     $table->string('saignement')->nullable();
            
        //     $table->timestamps();
        // });

        // Schema::create('acteobserv_neonats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('acteobservneonat_id')->unsigned();
        //     $table->foreign('acteobservneonat_id','acteobservneonatid')->references('id')->on('observ_neonatologies')->onDelete('cascade');
        //      $table->integer('actobervparaneonat_id')->unsigned();
        //     $table->foreign('actobervparaneonat_id','actobervparaneonatid')->references('id')->on('parameds')->onDelete('cascade');
        //     $table->time('heure_acte');          
        //     $table->string('fr')->nullable();
        //     $table->string('ta')->nullable();
        //     $table->string('fc')->nullable();
        //     $table->integer('temperature')->nullable();
        //     $table->text('observation')->nullable();
        //     $table->string('urine')->nullable();
        //     $table->string('selles')->nullable();
        //     $table->string('vomissement')->nullable();
        //     $table->string('residu_gastrique')->nullable();
        //     $table->string('alimentation')->nullable();
            
        //     $table->timestamps();
        // });

        // Schema::create('actesoin_neonats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('actesoinneonat_id')->unsigned();
        //     $table->foreign('actesoinneonat_id','actesoinneonatid')->references('id')->on('soin_neonatologies')->onDelete('cascade');
        //      $table->integer('actsoinparaneonat_id')->unsigned();
        //     $table->foreign('actsoinparaneonat_id','actsoinparaneonatid')->references('id')->on('parameds')->onDelete('cascade');
        //     $table->time('heure_acte');          
        //     $table->string('fr')->nullable();
        //     $table->string('ta')->nullable();
        //     $table->string('fc')->nullable();
        //     $table->integer('temperature')->nullable();
        //     $table->text('observation')->nullable();
        //     $table->string('urine')->nullable();
        //     $table->string('selles')->nullable();
        //     $table->string('vomissement')->nullable();
        //     $table->string('residu_gastrique')->nullable();
        //     $table->string('alimentation')->nullable();
            
        //     $table->timestamps();
        // });

        // Schema::create('actesoin_peds', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('actesoinped_id')->unsigned();
        //     $table->foreign('actesoinped_id','actesoinpedid')->references('id')->on('soin_pediatries')->onDelete('cascade');
        //     $table->integer('actsoinparaped_id')->unsigned();
        //     $table->foreign('actsoinparaped_id','actsoinparapedid')->references('id')->on('parameds')->onDelete('cascade');
        //     $table->time('heure_acte');          
        //     $table->string('fr')->nullable();
        //     $table->string('ta')->nullable();
        //     $table->integer('fc')->nullable();
        //     $table->integer('temperature')->nullable();
        //     $table->text('observation')->nullable();
        //     $table->string('autres')->nullable();
        //     $table->string('conjoctives')->nullable();
        //     $table->string('spo2')->nullable();
        //     $table->string('diurese')->nullable();
        //     $table->string('glas_gow')->nullable();
        //     $table->string('saignement')->nullable();
            
        //     $table->timestamps();
        // });

        // Schema::create('actesoin_mats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('actesoinmat_id')->unsigned();
        //     $table->foreign('actesoinmat_id','actesoinmatid')->references('id')->on('soin_maternites')->onDelete('cascade');
        //      $table->integer('actsoinparamats_id')->unsigned();
        //     $table->foreign('actsoinparamats_id','actsoinparamatsid')->references('id')->on('parameds')->onDelete('cascade');
        //     $table->time('heure_acte');          
        //     $table->string('fr')->nullable();
        //     $table->string('ta')->nullable();
        //     $table->string('fc')->nullable();
        //     $table->integer('temperature')->nullable();
        //     $table->text('observation')->nullable();
        //     $table->string('conjoctives')->nullable();
        //     $table->string('globe_uterin')->nullable();
        //     $table->string('saignement')->nullable();
            
        //     $table->timestamps();
        // });

        // Schema::create('antecedent_mats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('antcdmat_id')->unsigned();
        //     $table->foreign('antcdmat_id','antcdmatid')->references('id')->on('maternites')->onDelete('cascade');
        //     $table->text('medicaux')->nullable();          
        //     $table->text('chirugicaux')->nullable();
        //     $table->string('toxique')->nullable();
        //     $table->string('allergie')->nullable();
           
            
        //     $table->timestamps();
        // });

        // Schema::create('antecedent_peds', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('antcdped_id')->unsigned();
        //     $table->foreign('antcdped_id','antcdpedid')->references('id')->on('pediatries')->onDelete('cascade');
           
          
        //     $table->integer('nombre_fratrie')->nullable();          
        //     $table->integer('rang')->nullable();
        //     $table->string('collatereau')->nullable();
        //     $table->text('parents')->nullable();
        //     $table->text('serologie')->nullable();          
        //     $table->text('pathologie')->nullable();
        //     $table->string('dev_psychomoteur')->nullable();
        //     $table->string('sommeil')->nullable();
        //     $table->string('dernier_parasitage')->nullable();          
        //     $table->string('sociabilite')->nullable();
        //     $table->string('motricite')->nullable();
        //     $table->string('language')->nullable();
        //     $table->string('scolarite')->nullable();
        //     $table->string('vie_en_collectiv')->nullable();
        //     $table->string('proprete_diurne')->nullable();
        //     $table->string('proprete_nocturne')->nullable();     
        //     $table->integer('age_propre_diurne')->nullable();
        //     $table->integer('age_propre_noct')->nullable();      
        //     $table->string('eutocique')->nullable();
        //     $table->string('perinateaux')->nullable();
        //     $table->integer('age_de_mere')->nullable();

        //       $table->string('voie')->nullable();                    
        //     $table->string('lieu')->nullable();
        //     $table->string('terme')->nullable();          
        //     $table->integer('poid_naiss')->nullable();
        //     $table->string('liquide_amniotiq')->nullable();         
        //     $table->string('m10')->nullable();
        //     $table->string('m1')->nullable();
        //     $table->string('m5')->nullable();
        //     $table->string('cri_immed_naiss')->nullable();
        //     $table->string('perinataux')->nullable();
        //     $table->string('cpn')->nullable();
        //     $table->string('vat')->nullable(); 

        //       $table->string('carnet_vaccin')->nullable();          
           
        //     $table->string('diplome_pev')->nullable();
       

        //     $table->string('bcg')->nullable();          
        //     $table->string('po')->nullable();
        //     $table->string('semaine6')->nullable();
          
        //     $table->string('semaine10')->nullable();
        //     $table->string('semaine14')->nullable();
        //     $table->string('var')->nullable();
        //     $table->string('vaccin_hors_pev')->nullable();

        //     $table->string('allaitement')->nullable(); 
        //      $table->string('duree_allait')->nullable();                     
        //     $table->integer('age_diversification')->nullable();
        //     $table->string('sevrage_lait_mat')->nullable();          
        //     $table->string('diversification_actu')->nullable();
        //     $table->string('gouter')->nullable();
        //     $table->string('matin')->nullable();
        //     $table->string('midi')->nullable();
        //     $table->string('soir')->nullable();
                    
        //     $table->string('propre_ration')->nullable();
            
        //     $table->timestamps();
        // });

        //  Schema::create('antcd_med_pediatries', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('antcdmedped_id')->unsigned();
        //     $table->foreign('antcdmedped_id','antcdmedpedid')->references('id')->on('pediatries')->onDelete('cascade');
        //     $table->text('medicaux')->nullable();   
        //     $table->date('date_medicaux')->nullable();        
                  
        //     $table->timestamps();
        // });

        //   Schema::create('antcd_chirugi_pediatries', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('antcdchirugiped_id')->unsigned();
        //     $table->foreign('antcdchirugiped_id','antcdchirugipedid')->references('id')->on('pediatries')->onDelete('cascade');
        //     $table->text('chirugicaux')->nullable();   
        //     $table->date('date_chirugicaux')->nullable();        
                  
        //     $table->timestamps();
        // });

        //    Schema::create('antcd_allergi_pediatries', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('antcdallergiped_id')->unsigned();
        //     $table->foreign('antcdallergiped_id','antcdallergipedid')->references('id')->on('pediatries')->onDelete('cascade');
        //     $table->text('allergie')->nullable();   
        //     $table->date('date_allergie')->nullable();        
                  
        //     $table->timestamps();
        // });

        // Schema::create('antecedent_neonats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('antcdneonat_id')->unsigned();
        //     $table->foreign('antcdneonat_id','antcdneonatid')->references('id')->on('neonatologies')->onDelete('cascade');
        //     $table->string('medicaux')->nullable();          
        //     $table->string('chirugicaux')->nullable();
        //     $table->string('toxique')->nullable();
        //     $table->string('allergie')->nullable();
           
            
        //     $table->timestamps();
        // });

        // Schema::create('gyneco_obst_neonats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('gyneconeonat_id')->unsigned();
        //     $table->foreign('gyneconeonat_id','gyneconeonatid')->references('id')->on('antecedent_neonats')->onDelete('cascade');
        //     $table->string('cpn')->nullable();          
        //     $table->integer('nombre_cpn')->nullable();
        //     $table->integer('nombre_vat')->nullable();
        //     $table->string('vat')->nullable();
        //     $table->string('carnet_sante')->nullable();          
        //     $table->string('gs_abo_rhesus')->nullable();
        //     $table->string('ddr')->nullable();
        //     $table->string('terme_ddr')->nullable();
        //     $table->integer('gestite')->nullable();          
        //     $table->integer('parite')->nullable();
        //     $table->string('avortement')->nullable();
        //     $table->string('cesarienne')->nullable();
        //     $table->string('mort_foetal_utero')->nullable();          
        //     $table->string('mort_ne')->nullable();
        //     $table->string('premature')->nullable();
        //     $table->string('ictere')->nullable();
        //     $table->string('imf')->nullable();
        //     $table->string('echo_obstetric')->nullable();          
        //     $table->string('terme_echo')->nullable();
        //     $table->string('resultat_echo')->nullable();
        //     $table->string('scanno_pelv')->nullable();
        //     $table->string('resultat_scanno')->nullable();          
        //     $table->integer('nombre_cesarienne')->nullable();
        //     $table->string('motif_cesarienne')->nullable();
         
        //     $table->timestamps();
        // });

        // Schema::create('periode_neonatals', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('periodeneonat_id')->unsigned();
        //     $table->foreign('periodeneonat_id','periodeneonatid')->references('id')->on('antecedent_neonats')->onDelete('cascade');
        //     $table->integer('poid_naissance')->nullable();          
        //     $table->string('bcg_polio_o')->nullable();
        //     $table->string('vitk1')->nullable();
        //     $table->string('collyre')->nullable();
        //     $table->string('allimentation')->nullable();
           
            
        //     $table->timestamps();
        // });

        // Schema::create('sortimater_neonats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('sortimaterneonat_id')->unsigned();
        //     $table->foreign('sortimaterneonat_id','sortimaterneonatid')->references('id')->on('antecedent_neonats')->onDelete('cascade');
        //     $table->string('mode_sortie')->nullable();          
        //     $table->date('date_sortie')->nullable();
        //     $table->time('heure_sortie')->nullable();
        //     $table->string('moyen_transfert')->nullable();
        //     $table->string('lettre_transfert')->nullable();

        //     $table->string('proto_accouch')->nullable();
            
        //     $table->timestamps();
        // });

     


        // Schema::create('transfert_mats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('transfertmat_id')->unsigned();
        //     $table->foreign('transfertmat_id','transfertmatid')->references('id')->on('maternites')->onDelete('cascade');
        //     $table->integer('transmatservice_id')->unsigned();
        //     $table->foreign('transmatservice_id','transmatserviceid')->references('id')->on('services')->onDelete('cascade');
        //     $table->date('date_transmat');          
           
        //     $table->time('heure_transmat');
    
           
        
        //     $table->timestamps();
        // });

        // Schema::create('transfert_peds', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('transfertped_id')->unsigned();
        //     $table->foreign('transfertped_id','transfertpedid')->references('id')->on('pediatries')->onDelete('cascade');
        //     $table->integer('transpedservice_id')->unsigned();
        //     $table->foreign('transpedservice_id','transpedserviceid')->references('id')->on('services')->onDelete('cascade');
        //     $table->date('date_transped');          
           
        //     $table->time('heure_transped');

        //     $table->timestamps();
        // });

        // Schema::create('transfert_neonats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('transfertneonat_id')->unsigned();
        //     $table->foreign('transfertneonat_id','transfertneonatid')->references('id')->on('neonatologies')->onDelete('cascade');
        //     $table->integer('transneonatservice_id')->unsigned();
        //     $table->foreign('transneonatservice_id','transneonatserviceid')->references('id')->on('services')->onDelete('cascade');
        //     $table->date('date_transneonat');          
           
        //     $table->time('heure_transneonat');
    
           
        
        //     $table->timestamps();
        // });

        // Schema::create('protocole_accouchements', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('protocolemat_id')->unsigned();
        //     $table->foreign('protocolemat_id','protocolematid')->references('id')->on('maternites')->onDelete('cascade');
        //    $table->date('date_protocole');              
        //     $table->time('heure_protocole');
        //     $table->string('avb');          
           
        //     $table->string('sa')->nullable();
       

        //     $table->string('presentation')->nullable();          
        //     $table->string('aide_par')->nullable();
        //     $table->string('degagement')->nullable();
          
        //     $table->string('enfant')->nullable();
        //     $table->string('sexe')->nullable();
        //     $table->string('m1')->nullable();
        //     $table->string('m5')->nullable();
        //     $table->string('m10')->nullable();
        //     $table->integer('poids')->nullable();
        //     $table->integer('pc')->nullable();          
           
        //     $table->integer('pt')->nullable();
       

        //     $table->integer('taille')->nullable();          
        //     $table->string('trans_neonat')->nullable();
        //     $table->string('la')->nullable();
          
        //     $table->string('delivrance')->nullable();
        //     $table->string('cotyledon')->nullable();
        //     $table->integer('poids_cotyledon')->nullable();
        //     $table->integer('diametre_cotyl')->nullable();  
        //     $table->integer('cupule_cotyl')->nullable();
        //     $table->string('membranes')->nullable();
        //     $table->string('hematome')->nullable(); 
        //     $table->integer('poid_hematome')->nullable(); 
        //     $table->integer('cordon')->nullable();
        //     $table->integer('nombre_vaisseau')->nullable();
        //     $table->string('revise_uterine')->nullable(); 
        //     $table->string('col')->nullable();
        //     $table->string('vagin')->nullable();
        //     $table->string('perine')->nullable(); 
        //     $table->string('episiotomie')->nullable();
        //     $table->string('type_episiotom')->nullable();
        //     $table->string('retract_uterus')->nullable();
        //     $table->string('hemorragie')->nullable(); 
        //     $table->string('nom_bebe')->nullable();
        //     $table->string('accoucheur')->nullable();
        
        //     $table->timestamps();
        // });



        // Schema::create('acouchement_neonats', function (Blueprint $table) {
        //     $table->increments('id');
        //     $table->integer('accouchneonat_id')->unsigned();
        //     $table->foreign('accouchneonat_id','accouchneonatid')->references('id')->on('antecedent_neonats')->onDelete('cascade');
        //     $table->string('voie')->nullable();          
        //     $table->string('motif_cesarienne')->nullable();
        //     $table->string('instru_avb')->nullable();
        //     $table->string('lieu')->nullable();
        //     $table->string('operateur')->nullable();

        //     $table->string('fiev_peri_partum')->nullable();          
        //     $table->string('liquide_amniotiq')->nullable();
        //     $table->string('m1')->nullable();
        //     $table->string('m5')->nullable();
        //     $table->string('m10')->nullable();
        //     $table->string('cri_immed_naiss')->nullable();

        //     $table->string('cyanose')->nullable();
        //     $table->string('reanim_neonat')->nullable();
        //     $table->string('autres')->nullable();
        //     $table->timestamps();
        // });

       

      
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // Schema::dropIfExists('maternites');
        // Schema::dropIfExists('services');
        // Schema::dropIfExists('pediatries');
        // Schema::dropIfExists('neonatologies');
        // Schema::dropIfExists('salle_neonatologies');
        // Schema::dropIfExists('salle_maternites');
        // Schema::dropIfExists('salle_pediatries');
        // Schema::dropIfExists('adresse_maternites');
        // Schema::dropIfExists('adresse_pediatries');
        // Schema::dropIfExists('adresse_neonats');
        // Schema::dropIfExists('medecins');
        // Schema::dropIfExists('parameds');
        // Schema::dropIfExists('sortieneonatologies');
        // Schema::dropIfExists('sortiepediatries');
        // Schema::dropIfExists('sortiematernites');
        // Schema::dropIfExists('admission_neonats');
        // Schema::dropIfExists('admission_pediatries');
        // Schema::dropIfExists('admission_maternites');
        // Schema::dropIfExists('soin_neonatologies');
        // Schema::dropIfExists('soin_pediatries');
        // Schema::dropIfExists('soin_maternites');
        // Schema::dropIfExists('observ_maternites');
        // Schema::dropIfExists('observ_pediatries');
        // Schema::dropIfExists('observ_neonatologies');
        // Schema::dropIfExists('examendemande_neonatologies');
        // Schema::dropIfExists('examendemande_pediatries');
        // Schema::dropIfExists('examendemande_maternites');
        // Schema::dropIfExists('histoire_referes');
        // Schema::dropIfExists('acteobserv_neonats');
        // Schema::dropIfExists('acteobserv_peds');
        // Schema::dropIfExists('acteobserv_mats');
        // Schema::dropIfExists('actesoin_mats');
        // Schema::dropIfExists('actesoin_peds');
        // Schema::dropIfExists('actesoin_neonats');
        // Schema::dropIfExists('antecedent_neonats');
        // Schema::dropIfExists('antecedent_peds');
        // Schema::dropIfExists('antecedent_mats');
        // Schema::dropIfExists('gyneco_obst_neonats');
        // Schema::dropIfExists('periode_neonatals');       
        // Schema::dropIfExists('sortimater_neonats');
        // Schema::dropIfExists('acouchement_neonats');
        // Schema::dropIfExists('acouchement_peds');
        // Schema::dropIfExists('vaccin_peds');
        // Schema::dropIfExists('alliment_peds');
        // Schema::dropIfExists('transfert_mats');
        // Schema::dropIfExists('transfert_peds');
        // Schema::dropIfExists('transfert_neonats');
        // Schema::dropIfExists('protocole_accouchements');
        
    }
}
