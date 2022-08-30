<?php

namespace App\Http\Controllers;

use App\Models\Admission_pediatrie;
use App\Models\Adresse_pediatrie;
use App\Models\Antecedent_ped;
use DateTime;
use Illuminate\Auth\AuthManager;
use App\Models\Pediatrie;
use App\Models\Soin_pediatrie;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class ConsultationController extends Controller
{

    private $auth;

    public function __construct(AuthManager $auth)
    {
        // $this->middleware('auth:api');
        $this->auth=$auth;
    }
    
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    
        $patient = DB::select('select * from(select admission_pediatries.id as admission_id, pediatries.id as id, nom ,prenom,
        age,genre,lieu_naissance,religion,tel,date_naissance,profession_mere,profession_pere,situation_mere,pediatrie_id,lot,fkt,commune,
        distric,region,admissionped_id,num_be,mode,motif,salleped_id,etat,lit,date_admission,heure_admission,accompagnant from pediatries inner join adresse_pediatries on pediatries.id=adresse_pediatries.pediatrie_id 
         inner join admission_pediatries on pediatries.id=admission_pediatries.admissionped_id 
          ) as nom_famille where etat="encours" group by admissionped_id');
        //   $patient[2]=DB::select('select num_salleped, categorieped from salle_pediatries 
        //   inner join pediatries on pediatries.id=salle_pediatries.num_salleped ');
        
        return response()->json($patient);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function patient($id)
    {
            
        $patient = DB::table('pediatries')
                    ->join('admission_pediatries','admission_pediatries.admissionped_id','=','pediatries.id')
                    ->select('admission_pediatries.*','pediatries.*')
                    ->where('admission_pediatries.id',$id)
                    ->get();
                    return response()->json($patient) ;

    }

    public function dossier($id)
    {
        
        $admissionId=array();
        $sorties[]=array();
        $examens[]=array();
        $observations[]= array();
        $actes[]= array();
        $soins[]= array();
        $actesoins[]=  array();
        $dossiers[]=  array();

        $antecedent=DB::table('antecedent_peds')          
        ->join('pediatries','pediatries.id','=','antecedent_peds.antcdped_id')              
       ->select('pediatries.*','antecedent_peds.*')
       ->where("antecedent_peds.antcdped_id",'=',$id)
       ->get();

       $antecedentmedicaux=DB::table('antcd_med_pediatries')          
       ->join('pediatries','pediatries.id','=','antcd_med_pediatries.antcdmedped_id')              
      ->select('pediatries.*','antcd_med_pediatries.*')
      ->where("antcd_med_pediatries.antcdmedped_id",'=',$id)
      ->get();

      $antecedentchirugicaux=DB::table('antcd_chirugi_pediatries')          
      ->join('pediatries','pediatries.id','=','antcd_chirugi_pediatries.antcdchirugiped_id')              
     ->select('pediatries.*','antcd_chirugi_pediatries.*')
     ->where("antcd_chirugi_pediatries.antcdchirugiped_id",'=',$id)
     ->get();
    
     $antecedentallergie=DB::table('antcd_allergi_pediatries')          
     ->join('pediatries','pediatries.id','=','antcd_allergi_pediatries.antcdallergiped_id')              
    ->select('pediatries.*','antcd_allergi_pediatries.*')
    ->where("antcd_allergi_pediatries.antcdallergiped_id",'=',$id)
    ->get();

    $transfert=DB::table('transfert_peds')          
    ->join('pediatries','pediatries.id','=','transfert_peds.transfertped_id')  
    ->join('services','services.id','=','transfert_peds.transpedservice_id')            
   ->select('pediatries.*','services.*','transfert_peds.*')
   ->where("transfert_peds.transpedservice_id",'=',$id)
   ->get();

        $admissions = DB::table('admission_pediatries')
        ->join('services','services.id', '=', 'admission_pediatries.serviceped_id') 
        ->join('pediatries', 'pediatries.id', '=', 'admission_pediatries.admissionped_id')  
        ->join('salle_pediatries', 'salle_pediatries.id', '=', 'admission_pediatries.salleped_id')  
        ->select('services.*','salle_pediatries.*','pediatries.*','admission_pediatries.*')
       ->where('admission_pediatries.admissionped_id',$id)
        ->where('admission_pediatries.etat','fermer')
       ->get();
      
       foreach ($admissions as $admission) {
           
           $admissionId[]=$admission->id;

          
       }

       foreach ($admissionId as $key=> $admId) {

        $sortie= DB::table('sortiepediatries')
        ->join('admission_pediatries','admission_pediatries.id', '=', 'sortiepediatries.admi_id') 
        ->join('pediatries', 'pediatries.id', '=', 'sortiepediatries.sortiped_id')  
        ->join('medecins', 'medecins.id', '=', 'sortiepediatries.medecinped_id') 
        ->select('medecins.*','pediatries.*','admission_pediatries.*','sortiepediatries.*') 
        ->where('sortiepediatries.sortiped_id',$id)
        ->where('sortiepediatries.admi_id',$admId)
        ->get();        

            $examen= DB::table('examendemande_pediatries')          
            ->join('admission_pediatries','admission_pediatries.id','=','examendemande_pediatries.examped_id')              
        ->select('admission_pediatries.*','examendemande_pediatries.*')
        ->where("examendemande_pediatries.examped_id",'=',$admId)
        ->get();


           $observation=DB::table('observationpeds')
           ->join('pediatries', 'pediatries.id', '=', 'observationpeds.observped_id') 
            ->join('admission_pediatries','admission_pediatries.id','=','observationpeds.admiobserve_id')   
            ->join('medecins', 'medecins.id', '=', 'observationpeds.medobservped_id')  
            ->join('parameds', 'parameds.id', '=', 'observationpeds.paramedobservped_id')   
           ->select('medecins.*','parameds.*','pediatries.*','admission_pediatries.*','observationpeds.*')
            ->where('observationpeds.observped_id','=',$id)
           ->where("observationpeds.admiobserve_id",'=',$admId)
           ->get();

            
            $acte= DB::table('acteobservpeds')          
            ->join('observationpeds','observationpeds.id','=','acteobservpeds.ped_id')  
            ->join('parameds','parameds.id','=','acteobservpeds.actobervparaped_id')              
           ->select('observationpeds.*','parameds.*','acteobservpeds.*')
           ->where("observationpeds.admiobserve_id",'=',$admId)
           ->where('observationpeds.observped_id','=',$id)
           ->get();

        
  
           $soin= DB::table('soin_pediatries')
           ->join('pediatries', 'pediatries.id', '=', 'soin_pediatries.soinped_id') 
            ->join('admission_pediatries','admission_pediatries.id','=','soin_pediatries.admisoinped_id')   
            ->join('medecins', 'medecins.id', '=', 'soin_pediatries.medsoin_id')    
           ->select('medecins.*','pediatries.*','admission_pediatries.*','soin_pediatries.*')
            ->where('soin_pediatries.soinped_id','=',$id)
           ->where("soin_pediatries.admisoinped_id",'=',$admId)
           ->get();

            $actesoin=DB::table('actesoin_peds')          
            ->join('soin_pediatries','soin_pediatries.id','=','actesoin_peds.actesoinped_id')     
            ->join('parameds','parameds.id','=','actesoin_peds.actsoinparaped_id')            
           ->select('soin_pediatries.*','parameds.*','actesoin_peds.*')
           ->where('soin_pediatries.soinped_id','=',$id)
           ->where("soin_pediatries.admisoinped_id",'=',$admId)
           ->get();

       

           $dossiers[$key]['antecedent']= $antecedent;
           $dossiers[$key]['antecedentmed']= $antecedentmedicaux;
           $dossiers[$key]['antecedentchirugi']=$antecedentchirugicaux;
           $dossiers[$key]['allergie']=$antecedentallergie;
           $dossiers[$key]['transfert']=$transfert;
           $dossiers[$key]['admission']=$admissions;
           $dossiers[$key]['sortie']=$sortie;
           $dossiers[$key]['examen']=$examen;
           $dossiers[$key]['observation']=$observation;
           $dossiers[$key]['acteobservation']=$acte;
           $dossiers[$key]['soin']=$soin;
           $dossiers[$key]['actesoin']=$actesoin;
           
       }

          
 
                    return response()->json($dossiers) ;

    }

    public function ferme(Request $request, $id)
    {
            
        $patient = DB::table('admission_pediatries')
                    ->where('admission_pediatries.admissionped_id',$id)
                    ->where('admission_pediatries.etat','encours')
                    ->get();
  $etat=   $patient-> update([
         'etat'=>$request->etat
     ])   ;     
                    return response()->json($etat) ;

    }

    public function soin($id)
    {
            
        $patient = DB::table('soin_pediatries')
                    ->join('admission_pediatries','admission_pediatries.id','=','soin_pediatries.admisoinped_id')
                    ->select('admission_pediatries.*','soin_pediatries.*')
                    ->where('soin_pediatries.admisoinped_id',$id)
                    ->get();
                    return response()->json($patient) ;

    }


        /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function antecedent(Request $request)
    {

      
       
       $serologie=implode("\n",$request->serologie);
        try {

            $antcd= new Antecedent_ped([
                'antcdped_id'=>$request->antcdped_id,
                'nombre_fratrie'=>$request->nombre_fratrie,
                'rang'=>$request->rang,
                'collatereau'=>$request->collatereau,
                'parents'=>$request->parents,
                'serologie'=>$serologie,
                'pathologie'=>$request->pathologie,
                'dev_psychomoteur'=>$request->dev_psychomoteur,
                'sommeil'=>$request->sommeil,
                'dernier_parasitage'=>$request->dernier_parasitage,
                'sociabilite'=>$request->sociabilite,
                'motricite'=>$request->motricite,
                'language'=>$request->language,
                'scolarite'=>$request->scolarite,
                'vie_en_collectiv'=>$request->vie_en_collectiv,
                'proprete_diurne'=>$request->proprete_diurne,
                'proprete_nocturne'=>$request->proprete_nocturne,
                'age_propre_diurne'=>$request->age_propre_diurne,
                'age_propre_noct'=>$request->age_propre_noct,
                'eutocique'=>$request->eutocique,
                'perinateaux'=>$request->perinateaux,
                'age_de_mere'=>$request->age_de_mere,
                'voie'=>$request->voie,
                'lieu'=>$request->lieu,
                'terme'=>$request->terme,
                'poid_naiss'=>$request->poid_naiss,
                'liquide_amniotiq'=>$request->liquide_amniotiq,
                'm10'=>$request->m10,
                'm1'=>$request->m1,
                'm5'=>$request->m5,
                'cri_immed_naiss'=>$request->cri_immed_naiss,
                'perinataux'=>$request->perinataux,
                'cpn'=>$request->cpn,
                'vat'=>$request->vat,
                'carnet_vaccin'=>$request->carnet_vaccin,
                'diplome_pev'=>$request->diplome_pev,
                'bcg'=>$request->bcg,
                'po'=>$request->po,

                'semaine6'=>$request->semaine6,
                'semaine10'=>$request->semaine10,
                'semaine14'=>$request->semaine14,
                'var'=>$request->var,
                'vaccin_hors_pev'=>$request->vaccin_hors_pev,
                'allaitement'=>$request->allaitement,
                'duree_allait'=>$request->duree_allait,
                'age_diversification'=>$request->age_diversification,
                'sevrage_lait_mat'=>$request->sevrage_lait_mat,
                'diversification_actu'=>$request->diversification_actu,
                'gouter'=>$request->gouter,
                'matin'=>$request->matin,
                'midi'=>$request->midi,
                'soir'=>$request->soir,
                'propre_ration'=>$request->propre_ration,
               
                
                ]);
               $status= $antcd->save(); 
             return  response()->json("success");
             
         } catch (QueryException $e) {
            return response()->json($e) ;
        }
        

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $date= new DateTime();
        $heure= $date->format('H:i:s');
        $dates= $date->format('Y-m-d');
  
    //  $medsoin_id= Auth::user()->id;

     
        try {

            $soinped= new Soin_pediatrie([
                'soinped_id'=>$request->soinped_id,
                'admisoinped_id'=>$request->admisoinped_id,
                'date_soin'=>$dates,
                'heure_soin'=>$heure,
                'diagnostique'=>$request->diagnostique,
                'medsoin_id'=>1,          
                'histoire_maladie'=>$request->histoire_maladie,
                'signe_general'=>$request->signe_general,
                'signe_physique'=>$request->signe_physique,
                'signe_fonctionel'=>$request->signe_fonctionel,
                'temperature'=>$request->temperature,
                'fc'=>$request->fc,
                'fr'=>$request->fr,
                'poids'=>$request->poids,
                'taille'=>$request->taille,
                'pc'=>$request->pc,
                'p_sur_t'=>$request->p_sur_t,
                'imc'=>$request->imc,
                'p_sur_a'=>$request->p_sur_a,
                'pa'=>$request->pa,
                'spo2'=>$request->spo2,
                't_sur_a'=>$request->t_sur_a,
                'glycemie_capillaire'=>$request->glycemie_capillaire,              
                'injectable'=>$request->injectable,
                'peros'=>$request->peros,
                'autres'=>$request->autres,
                'autre_periodique'=>$request->autre_periodique,
                               
                ]);
               $status= $soinped->save(); 
               return response()->json("success") ;
             
         } catch (QueryException $e) {
            return response()->json($e) ;
        }
        

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       $patient=Pediatrie::find($id);
       return response()->json($patient);
    }

      /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function fiche($id)
    {

     
         
$patient = DB::table('soin_pediatries')
->join('pediatries', 'pediatries.id', '=', 'soin_pediatries.soinped_id') 
->join('examendemande_pediatries', 'examendemande_pediatries.examped_id', '=', 'soin_pediatries.id') 
->join('actesoin_peds', 'actesoin_peds.actesoinped_id', '=', 'soin_pediatries.id')          
->select('pediatries.*', 'examendemande_pediatries.*','actesoin_peds.*')
->where("soin_pediatries.soinped_id",'=',$id)
->get();

        if($patient){
            return response()->json("okoko");
        }else{
            return response()->json("non non");
        }
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $patient=Pediatrie::find($id);
        return response()->json($patient);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $patient=Soin_pediatrie::findOrFail($id);
        $patient->update([
            'etat'=>$request->etat,
        ]);
        return $patient;
    }

    public function updateEtatInjectable(Request $request, $id)
    {
        $patient=Soin_pediatrie::findOrFail($id);
      
        if ($request->etat_injectable) { 
        
            $etat_injectable=!$patient->etat_injectable;  
                    $patient->update([
                        'etat_injectable'=>$etat_injectable,
                    ]);
                

        return $patient;
        }elseif($request->etat_peros) {  
            
            $etat_peros=!$patient->etat_peros; 
                    $patient->update([
                        'etat_peros'=>$etat_peros,
                    ]);
                
            
           
            return $patient;
        }elseif($request->etat_autre) {  
       
        $etat_autre=!$patient->etat_autre;
                    $patient->update([
                        'etat_autre'=>$etat_autre,
                    ]);
                      

            return $patient;
      
    }elseif ($request->etat_periodique) {

       $etat_periodique=!$patient->etat_periodique;
        $patient->update([
            'etat_periodique'=>$etat_periodique,
        ]);
          

return $patient;
    }else{
        return $patient;
    }
}

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $patient=Pediatrie::findOrFail($id);
        $status=  $patient->delete();
          return $status;
    }
}
