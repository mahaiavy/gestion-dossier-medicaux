<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePediatrieBase extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        

        Schema::create('pediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nom');
            $table->string('prenom');
            $table->string('genre');
            $table->integer('age')->unsigned();
            $table->string('lieu_naissance');
            $table->string('religion')->nullable();
            $table->string('tel')->nullable();
            $table->date('date_naissance');
            $table->string('profession_mere');
            $table->string('profession_pere')->nullable();
            $table->string('situation_mere');
            $table->timestamps();
        });


        Schema::create('salle_pediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('num_salleped');
            $table->string('categorieped');
            $table->integer('nombre_litped')->unsigned();
           
            $table->timestamps();
        });

        Schema::create('lit_pediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sallelitped_id')->unsigned();
            $table->foreign('sallelitped_id','sallelitpedid')->references('id')->on('salle_pediatries')->onDelete('cascade');
            $table->integer('num_lit');                  
            $table->string('etat');

            $table->timestamps();
        });

        Schema::create('medecins', function (Blueprint $table) {
            $table->increments('id');
            $table->string('imm_medecin')->unique();
            $table->string('nom_med');
               $table->string('categorie');
            $table->string('prenom_med');
            $table->string('tel_medecin');
           
            $table->timestamps();
        });

        Schema::create('parameds', function (Blueprint $table) {
            $table->increments('id');
            $table->string('imm_paramed')->unique();
            $table->string('nom_paramed');
            $table->string('prenom_paramed');
            $table->string('tel_paramed');
           
            $table->timestamps();
        });

        Schema::create('services', function (Blueprint $table) {
            $table->increments('id');
          
            $table->string('nom_service');
           
            $table->timestamps();
        });

        Schema::create('adresse_pediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('pediatrie_id')->unsigned();
            $table->foreign('pediatrie_id','pediatrieid')->references('id')->on('pediatries')->onDelete('cascade');
            $table->string('lot')->nullable();
            $table->string('fkt')->nullable();
            $table->string('distric')->nullable();
            $table->string('commune')->nullable();
            $table->string('region')->nullable();
           
            $table->timestamps();
        });

        Schema::create('admission_pediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('admissionped_id')->unsigned();
            $table->foreign('admissionped_id','admissionped_id')->references('id')->on('pediatries')->onDelete('cascade');
            $table->integer('serviceped_id')->unsigned();
            $table->foreign('serviceped_id','serviceped')->references('id')->on('services')->onDelete('cascade');
            $table->integer('num_be')->nullable();
            $table->string('motif');
            $table->string('mode');
            $table->integer('salleped_id')->unsigned();
            $table->foreign('salleped_id','sallepedid')->references('id')->on('salle_pediatries')->onDelete('cascade');
            $table->integer('lit');
            $table->string('etat')->default('encours');
            $table->date('date_admission');
            $table->time('heure_admission');
            $table->string('accompagnant')->nullable();
           
            $table->timestamps();
        });

        Schema::create('sortiepediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sortiped_id')->unsigned();
            $table->integer('admi_id')->unsigned();
            $table->foreign('sortiped_id','sortipedid')->references('id')->on('pediatries')->onDelete('cascade');
            $table->foreign('admi_id','admiid')->references('id')->on('admission_pediatries')->onDelete('cascade');
            $table->integer('medecinped_id')->unsigned();
            $table->foreign('medecinped_id','medecinpedid')->references('id')->on('medecins')->onDelete('cascade');
            $table->date('date_sortie');
            $table->string('diagno_sortie');
            $table->string('deparasitage_faire')->nullable();
            $table->text('bilan_sortie')->nullable();
            $table->string('vaccin_faire')->nullable();
            $table->string('issue');
           
            $table->timestamps();
        });

        Schema::create('soin_pediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('soinped_id')->unsigned();
            $table->integer('admisoinped_id')->unsigned();
            $table->integer('medsoin_id')->unsigned();
            $table->foreign('soinped_id','soinpedid')->references('id')->on('pediatries')->onDelete('cascade');
            $table->foreign('admisoinped_id','admisoinpedid')->references('id')->on('admission_pediatries')->onDelete('cascade');
            $table->foreign('medsoin_id','medsoinid')->references('id')->on('medecins')->onDelete('cascade');
            $table->date('date_soin');
            $table->time('heure_soin');
            $table->string('diagnostique');
            $table->text('histoire_maladie');
            $table->text('signe_general')->nullable();
            $table->text('signe_physique')->nullable();
            $table->text('signe_fonctionel')->nullable();
            $table->integer('temperature')->nullable();
            $table->string('fc')->nullable();
            $table->string('fr')->nullable();
            $table->integer('poids')->nullable();
            $table->integer('taille')->nullable();
            $table->string('pc')->nullable();
            $table->string('p_sur_t')->nullable();
            $table->string('imc')->nullable();
            $table->string('p_sur_a')->nullable();
            $table->string('pa')->nullable();
            $table->string('spo2')->nullable();
            $table->string('t_sur_a')->nullable();
            $table->string('glycemie_capillaire')->nullable();
            $table->string('etat')->default("non fait");
            $table->string('injectable')->nullable();
            $table->boolean('etat_injectable')->default(false);
            $table->boolean('etat_peros')->default(false);
            $table->boolean('etat_autre')->default(false);
            $table->boolean('etat_periodique')->default(false);
            $table->text('peros')->nullable();
            $table->text('autres')->nullable();
            $table->text('autre_periodique')->nullable();
            $table->timestamps();
        });

        Schema::create('observationpeds', function (Blueprint $table) {
            
            $table->increments('id');
            $table->integer('observped_id')->unsigned();
            $table->integer('admiobserve_id')->unsigned();
            $table->foreign('observped_id','observpedid')->references('id')->on('pediatries')->onDelete('cascade');
            $table->foreign('admiobserve_id','admiobserveid')->references('id')->on('admission_pediatries')->onDelete('cascade');
            $table->date('date_observation');
            $table->time('heure_observation');
            $table->text('evolutions');
            $table->string('etat')->default('non fait');
            $table->string('injectable')->nullable();
            $table->text('peros')->nullable();
            $table->text('autres')->nullable();
            $table->integer('medobservped_id')->unsigned();
            $table->foreign('medobservped_id','medobservpedid')->references('id')->on('medecins')->onDelete('cascade');
            $table->integer('paramedobservped_id')->unsigned();
            $table->foreign('paramedobservped_id','paramedobservpedid')->references('id')->on('parameds')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('examendemande_pediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('examped_id')->unsigned();
            $table->foreign('examped_id','exampedid')->references('id')->on('admission_pediatries')->onDelete('cascade');
            $table->text('biologie');          
            $table->text('bacterologie');
            $table->text('imagerie');
            $table->text('explo_fonction');
            $table->text('autres');
            $table->timestamps();
        });

        Schema::create('acteobservpeds', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ped_id')->unsigned();
            $table->foreign('ped_id','pedid')->references('id')->on('observationpeds')->onDelete('cascade');
            $table->time('heure_acte');     
             $table->integer('actobervparaped_id')->unsigned();
            $table->foreign('actobervparaped_id','actobervparapedid')->references('id')->on('parameds')->onDelete('cascade');     
            $table->string('fr')->nullable();
            $table->string('ta')->nullable();
            $table->string('fc')->nullable();
            $table->integer('temperature')->nullable();
            $table->text('observation')->nullable();
            $table->string('conjoctives')->nullable();
            $table->string('spo2')->nullable();
            $table->string('diurese')->nullable();
            $table->string('glas_gow')->nullable();
            $table->string('saignement')->nullable();
            
            $table->timestamps();
        });

        Schema::create('actesoin_peds', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('actesoinped_id')->unsigned();
            $table->foreign('actesoinped_id','actesoinpedid')->references('id')->on('soin_pediatries')->onDelete('cascade');
            $table->integer('actsoinparaped_id')->unsigned();
            $table->foreign('actsoinparaped_id','actsoinparapedid')->references('id')->on('parameds')->onDelete('cascade');
            $table->time('heure_acte');          
            $table->string('fr')->nullable();
            $table->string('ta')->nullable();
            $table->integer('fc')->nullable();
            $table->integer('temperature')->nullable();
            $table->text('observation')->nullable();
            $table->string('autres')->nullable();
            $table->string('conjoctives')->nullable();
            $table->string('spo2')->nullable();
            $table->string('diurese')->nullable();
            $table->string('glas_gow')->nullable();
            $table->string('saignement')->nullable();
            
            $table->timestamps();
        });

        Schema::create('antecedent_peds', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('antcdped_id')->unsigned();
            $table->foreign('antcdped_id','antcdpedid')->references('id')->on('pediatries')->onDelete('cascade');
           
          
            $table->integer('nombre_fratrie')->nullable();          
            $table->integer('rang')->nullable();
            $table->string('collatereau')->nullable();
            $table->text('parents')->nullable();
            $table->text('serologie')->nullable();          
            $table->text('pathologie')->nullable();
            $table->string('dev_psychomoteur')->nullable();
            $table->string('sommeil')->nullable();
            $table->string('dernier_parasitage')->nullable();          
            $table->string('sociabilite')->nullable();
            $table->string('motricite')->nullable();
            $table->string('language')->nullable();
            $table->string('scolarite')->nullable();
            $table->string('vie_en_collectiv')->nullable();
            $table->string('proprete_diurne')->nullable();
            $table->string('proprete_nocturne')->nullable();     
            $table->integer('age_propre_diurne')->nullable();
            $table->integer('age_propre_noct')->nullable();      
            $table->string('eutocique')->nullable();
            $table->string('perinateaux')->nullable();
            $table->integer('age_de_mere')->nullable();

              $table->string('voie')->nullable();                    
            $table->string('lieu')->nullable();
            $table->string('terme')->nullable();          
            $table->integer('poid_naiss')->nullable();
            $table->string('liquide_amniotiq')->nullable();         
            $table->string('m10')->nullable();
            $table->string('m1')->nullable();
            $table->string('m5')->nullable();
            $table->string('cri_immed_naiss')->nullable();
            $table->string('perinataux')->nullable();
            $table->string('cpn')->nullable();
            $table->string('vat')->nullable(); 

              $table->string('carnet_vaccin')->nullable();          
           
            $table->string('diplome_pev')->nullable();
       

            $table->string('bcg')->nullable();          
            $table->string('po')->nullable();
            $table->string('semaine6')->nullable();
          
            $table->string('semaine10')->nullable();
            $table->string('semaine14')->nullable();
            $table->string('var')->nullable();
            $table->string('vaccin_hors_pev')->nullable();

            $table->string('allaitement')->nullable(); 
             $table->string('duree_allait')->nullable();                     
            $table->integer('age_diversification')->nullable();
            $table->string('sevrage_lait_mat')->nullable();          
            $table->string('diversification_actu')->nullable();
            $table->string('gouter')->nullable();
            $table->string('matin')->nullable();
            $table->string('midi')->nullable();
            $table->string('soir')->nullable();
                    
            $table->string('propre_ration')->nullable();
            
            $table->timestamps();
        });

        Schema::create('antcd_med_pediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('antcdmedped_id')->unsigned();
            $table->foreign('antcdmedped_id','antcdmedpedid')->references('id')->on('pediatries')->onDelete('cascade');
            $table->text('medicaux')->nullable();   
            $table->date('date_medicaux')->nullable();        
                  
            $table->timestamps();
        });

          Schema::create('antcd_chirugi_pediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('antcdchirugiped_id')->unsigned();
            $table->foreign('antcdchirugiped_id','antcdchirugipedid')->references('id')->on('pediatries')->onDelete('cascade');
            $table->text('chirugicaux')->nullable();   
            $table->date('date_chirugicaux')->nullable();        
                  
            $table->timestamps();
        });

           Schema::create('antcd_allergi_pediatries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('antcdallergiped_id')->unsigned();
            $table->foreign('antcdallergiped_id','antcdallergipedid')->references('id')->on('pediatries')->onDelete('cascade');
            $table->text('allergie')->nullable();   
            $table->date('date_allergie')->nullable();        
                  
            $table->timestamps();
        });

        Schema::create('transfert_peds', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('transfertped_id')->unsigned();
            $table->foreign('transfertped_id','transfertpedid')->references('id')->on('pediatries')->onDelete('cascade');
            $table->integer('transpedservice_id')->unsigned();
            $table->foreign('transpedservice_id','transpedserviceid')->references('id')->on('services')->onDelete('cascade');
            $table->date('date_transped');          
           
            $table->time('heure_transped');

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    
        Schema::dropIfExists('services');
        Schema::dropIfExists('pediatries');
        Schema::dropIfExists('salle_pediatries');
        Schema::dropIfExists('adresse_pediatries');
        Schema::dropIfExists('medecins');
        Schema::dropIfExists('parameds');
        Schema::dropIfExists('sortiepediatries');
        Schema::dropIfExists('admission_pediatries');
        Schema::dropIfExists('soin_pediatries');
        Schema::dropIfExists('acteobservpeds');
        Schema::dropIfExists('examendemande_pediatries');
        Schema::dropIfExists('observationpeds');
        Schema::dropIfExists('actesoin_peds');
        Schema::dropIfExists('antecedent_peds');     
        Schema::dropIfExists('acouchement_peds');
        Schema::dropIfExists('vaccin_peds');
        Schema::dropIfExists('alliment_peds');
        Schema::dropIfExists('transfert_peds');
    }
}
