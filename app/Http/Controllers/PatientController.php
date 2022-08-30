<?php

namespace App\Http\Controllers;

use App\Models\Admission_pediatrie;
use App\Models\Adresse_pediatrie;
use App\Models\Lit_pediatrie;
use App\Models\Pediatrie;
use App\Models\Salle_pediatrie;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        // $patient = DB::table('pediatries')
        // ->join('adresse_pediatries', 'pediatries.id', '=', 'adresse_pediatries.pediatrie_id')  
        // ->select('nom','adresse_pediatries.fkt')
        // ->groupByRaw('adresse_pediatries.fkt')
        // ->get();
    
        $patient = DB::select('select * from(select pediatries.id, nom ,prenom,
       age,genre,lieu_naissance,religion,tel,date_naissance,profession_mere,profession_pere,situation_mere,pediatrie_id,lot,fkt,commune,
       distric,region,admissionped_id,num_be,mode,motif,date_admission,heure_admission,accompagnant from pediatries inner join adresse_pediatries on pediatries.id=adresse_pediatries.pediatrie_id 
        inner join admission_pediatries on pediatries.id=admission_pediatries.admissionped_id 
         ) as nom_famille group by admissionped_id');

        
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
        $existes="";
        try {

            $pats=Pediatrie::all();
            foreach($pats as $patien){
              if($patien->nom==$request->nom && $patien->prenom==$request->prenom && 
              $patien->date_naissance==$request->date_naissance && $patien->lieu_naissance==$request->lieu_naissance &&
               $patien->genre==$request->genre){
                   $existes="existe";
                   return response()->json("existe") ;
              }              
            };




            if($existes!="existe"){

                $patient= new Pediatrie([
                    'nom'=>$request->nom,
                    'prenom'=>$request->prenom,
                    'genre'=>$request->genre,
                    'age'=>$request->age,
                    'lieu_naissance'=>$request->lieu_naissance,
                    'date_naissance'=>$request->date_naissance,
                    'profession_mere'=>$request->profession_mere,
                    'profession_pere'=>$request->profession_pere,
                    'situation_mere'=>$request->situation_mere,
                    'religion'=>$request->religion,
                    'tel'=>$request->tel,
                    
                    ]);
                   $status= $patient->save(); 
    
                   try {
                    $admission= new Admission_pediatrie([
                        'admissionped_id'=>$patient->id,
                        'num_be'=>$request->num_be,
                        'motif'=>$request->motif,
                        'mode'=>$request->mode,
                        'serviceped_id'=>1,
                        'date_admission'=>$request->date_admission,
                        'heure_admission'=>$request->heure_admission,
                        'salleped_id'=>$request->salleped_id,
                        'lit'=>$request->lit,
                        'accompagnant'=>$request->accompagnant]);
                        
            
                        $status2= $admission->save(); 

                        try {
                            $adresse= new Adresse_pediatrie([
                                'pediatrie_id'=>$patient->id,
                                'lot'=>$request->lot,
                                'fkt'=>$request->fkt,
                                'distric'=>$request->distric,
                                'commune'=>$request->commune,
                                'region'=>$request->region]);
                                
                    
                                $status3= $adresse->save(); 
                                return response()->json("success") ;
                              
                           } catch (QueryException $es) {
                          
                            $i=1;
                                       
                            $patiente=Pediatrie::findOrFail($patient->id);
                            $status=  $patiente->delete();
                            $patients=Pediatrie::all();
                            foreach($patients as $patien){
                              
                                $patien->update(['id'=>$i]);
                                $i++;
                            }
                            return response()->json($es) ;
                           }
    
                      
                   } catch (QueryException $es) {
                  
                    $i=1;
                               
                    $patiente=Pediatrie::findOrFail($patient->id);
                    $status=  $patiente->delete();
                    $patients=Pediatrie::all();
                    foreach($patients as $patien){
                      
                        $patien->update(['id'=>$i]);
                        $i++;
                    }
                    return response()->json($es) ;
                   }

            }else{
                return response()->json("existe") ;
            }

             
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
       
    }

    public function listesalle()
    {
       $salle=Salle_pediatrie::all();
       return response()->json($salle);
    }

    public function litdispo($id)
    {
       $salle=DB::table('lit_pediatries')
                ->join('salle_pediatries','salle_pediatries.id','=','lit_pediatries.sallelitped_id')
                ->select('salle_pediatries.*','lit_pediatries.*')
                ->where('lit_pediatries.sallelitped_id',$id)
                ->where('lit_pediatries.etat','disponible')
                ->get();
       return response()->json($salle);
    }

    public function ajoutsalle(Request $request)
    {
        $existes="";
        $salles=Salle_pediatrie::all();
        foreach($salles as $salle){
            if($salle->num_salleped==$request->num_salleped && $salle->categorieped==$request->categorieped ){
                 $existes="existe";
               
            }              
          };

     
       $nblit= $request->nombre_litped;
       

        if ($existes=="existe") {
            return response()->json("existe") ;
        }else{
            $sall=Salle_pediatrie::create($request->all());
            if ($sall) {
                for ($i=1; $i <=$nblit ; $i++) { 
     
                    $lit=Lit_pediatrie::create([
                     'sallelitped_id'=>$request->num_salleped,
                     'num_lit'=>$i,
                     'etat'=>"disponible",
                    ]);
                }
                return response()->json($sall);
            }else{
                return response()->json("erreur au serveur! echec d'ajout");
            }
           
        }
      
       
      
     
    }

    public function antecedent($id)
    {
        $patient = DB::table('antecedent_peds')
        ->join('pediatries', 'pediatries.id', '=', 'antecedent_peds.antcdped_id')  
        ->select('pediatries.*','antecedent_peds.*')
        ->where('antecedent_peds.antcdped_id',$id)
        ->get();
        return response()->json($patient);
    }

    public function verifyUser($user)
    {
        $userconnecte= User::select('id','name','email','password')
                    ->where('email',$user)
                    // ->where('password',$user->password)
                    ->get();
        return $userconnecte;
    }

      /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function dossier($id)
    {
        
         
        $patient = DB::table('pediatries')
        ->join('admission_pediatries', 'pediatries.id', '=', 'admission_pediatries.admissionped_id')   
        ->join('adresse_pediatries', 'pediatries.id', '=', 'adresse_pediatries.pediatrie_id')       
        ->select('pediatries.*', 'admission_pediatries.*')
        ->select('pediatries.*', 'adresse_pediatries.*')
        ->where("admission_pediatries.admissionped_id",'=',$id)
        ->where("adresse_pediatries.pediatrie_id",'=',$id)
        ->get();

        
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
