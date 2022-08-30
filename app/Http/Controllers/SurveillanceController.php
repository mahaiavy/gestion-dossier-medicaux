<?php

namespace App\Http\Controllers;

use App\Models\Actesoin_ped;
use App\Models\Admission_pediatrie;
use App\Models\Adresse_pediatrie;
use DateTime;
use App\Models\Antecedent_ped;
use App\Models\Pediatrie;
use App\Models\Soin_pediatrie;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class SurveillanceController extends Controller
{
       /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    
      
    }

    public function maintenant()
    {
        $date= new DateTime();
        $dates= $date->format('d-m-Y H:i:s');
        return response()->json($dates);
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

  

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
     
        try {

            $soinped= new Soin_pediatrie([
                'soinped_id'=>$request->soinped_id,
                'date_soin'=>"2021-12-01",
                'heure_soin'=>"15:22:44",
                'diagnostique'=>$request->diagnostique,
                'nom_medecin'=>"Richard",
            
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
                'autre_priodique'=>$request->autre_priodique,
                
               
                
                ]);
               $status= $soinped->save(); 
               return response()->json("success") ;
             
         } catch (QueryException $e) {
            return response()->json($e) ;
        }
        

    }



    public function addActe(Request $request)
    {

        $traitement = DB::table('actesoin_peds')   
        ->select('actesoin_peds.*')
        ->where('actesoin_peds.actesoinped_id',$request->actesoinped_id)
        ->get();

        $date= new DateTime();
        $heure= $date->format('H:i:s');
        $dates= $date->format('Y-m-d');
     

        if ($traitement) {
            
        }
        try {

            $soinped= new Actesoin_ped([
                'actesoinped_id'=>$request->actesoinped_id,
                'heure_acte'=>$heure,
                'actsoinparaped_id'=>1,          
                'fr'=>$request->fr,
                'fc'=>$request->fc,
                'ta'=>$request->ta,           
                'temperature'=>$request->temperature,           
                'conjoctives'=>$request->conjoctives,
                'spo2'=>$request->spo2,
                'diurese'=>$request->diurese,
                'glas_gow'=>$request->glas_gow,
                'saignement'=>$request->saignement,
                'observation'=>$request->observation,
                'autres'=>$request->autres,
              
                
               
                
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
        $traitement = DB::table('soin_pediatries')
        ->join('pediatries', 'pediatries.id', '=', 'soin_pediatries.soinped_id')  
        ->join('admission_pediatries', 'admission_pediatries.id', '=', 'soin_pediatries.admisoinped_id')        
        ->select('pediatries.*', 'admission_pediatries.*', 'soin_pediatries.*')
        ->where("soin_pediatries.etat",'=','non fait')
        ->where("soin_pediatries.soinped_id",'=',$id)
        ->get();
             
       return response()->json($traitement);
    }

    public function showActe($id)
    {
        $traitement = DB::table('actesoin_peds')
        ->join('soin_pediatries', 'soin_pediatries.id', '=', 'actesoin_peds.actesoinped_id')       
        ->select('soin_pediatries.*', 'actesoin_peds.*')
        ->where("actesoin_peds.actesoinped_id",'=',$id)
        ->get();
             
       return response()->json($traitement);
    }

      /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function liste()
    {

        $listeSurveillance[]=  array();
        $traitement = DB::table('soin_pediatries')
        ->join('pediatries', 'pediatries.id', '=', 'soin_pediatries.soinped_id')  
        ->join('admission_pediatries', 'admission_pediatries.id', '=', 'soin_pediatries.admisoinped_id')        
        ->select('pediatries.*', 'admission_pediatries.*', 'soin_pediatries.*')
        ->where('admission_pediatries.etat','encours')
        ->get();

      foreach ($traitement as $soin) {
         if ($soin->etat=="non fait") {
            $traite = DB::table('soin_pediatries')
            ->join('pediatries', 'pediatries.id', '=', 'soin_pediatries.soinped_id')  
            ->join('admission_pediatries', 'admission_pediatries.id', '=', 'soin_pediatries.admisoinped_id')        
            ->select('pediatries.*', 'admission_pediatries.*', 'soin_pediatries.*')
            ->where('admission_pediatries.etat','encours')
            ->where('soin_pediatries.soinped_id',$soin->soinped_id)
            ->get();

            $listeSurveillance[]= $traite;
         }else {
            $traite = DB::table('observationpeds')
            ->join('pediatries', 'pediatries.id', '=', 'observationpeds.observped_id')  
            ->join('admission_pediatries', 'admission_pediatries.id', '=', 'observationpeds.admiobserve_id') 
            ->join('medecins', 'medecins.id', '=', 'observationpeds.medobservped_id')  
            ->join('parameds', 'parameds.id', '=', 'observationpeds.paramedobservped_id')         
            ->select('pediatries.*', 'admission_pediatries.*', 'soin_pediatries.*')
            ->where('admission_pediatries.etat','encours')
            ->where('observationpeds.observped_id',$soin->soinped_id)
            ->get();
            $listeSurveillance[]= $traite;
         }
      }

        return response()->json($listeSurveillance);

        
    }

    public function findListe($nom)
    {

        $traitement = DB::table('soin_pediatries')
        ->join('pediatries', 'pediatries.id', '=', 'soin_pediatries.soinped_id')  
        ->join('admission_pediatries', 'admission_pediatries.id', '=', 'soin_pediatries.admisoinped_id')        
        ->select('pediatries.*', 'admission_pediatries.*', 'soin_pediatries.*')
        ->where('admission_pediatries.etat','encours')
        ->where('pediatries.nom','like','%'.$nom.'%')
        ->get();

        return response()->json($traitement);

        
    }

    public function soin($id)
    {
        $patient=Soin_pediatrie::find($id);
        return response()->json($patient);

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
        $patient=Pediatrie::findOrFail($id);
        $patient->update($request->all());
        return $patient;
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
