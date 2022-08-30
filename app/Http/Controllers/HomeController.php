<?php

namespace App\Http\Controllers;


use App\Models\Admission_pediatrie;
use App\Models\Adresse_pediatrie;
use App\Models\Antecedent_ped;
use App\Models\Pediatrie;
use App\Models\Soin_pediatrie;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use DateTime;
use Illuminate\Http\Request;
use Pusher\Pusher;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $date= new DateTime();
        $dates= $date->format('Y-m-d');
        $users= User::select('name','id')->where('id','!=',Auth::user()->id)->get();
        $userconnecte= User::select('name','id')->where('id',Auth::user()->id)->get();

       
        $patient = DB::table('admission_pediatries')
        ->join('pediatries', 'pediatries.id', '=', 'admission_pediatries.admissionped_id')         
        ->select('pediatries.*', 'admission_pediatries.*')
        ->where("admission_pediatries.date_admission",'=',$dates)
        ->where("pediatries.id",'=',5)
        ->get();
    //    $date= new DateTime();
    //    $dates= $date->format('d-m-Y H:i:s');

       
        return view('welcome',[
            'date'=>$dates,
            'patient'=> $patient
        ]); 
    }

    public function getUserConnected()
    {
       return Auth::user();
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
  
     $medsoin_id= Auth::user()->id;

     
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


    public function maintenant()
    {
        $date= new DateTime();
        $dates= $date->format('d-m-Y H:i:s');
        return response()->json($dates);
    }

    public function show(int $id)
    {
        $users= User::select('name','id')->where('id','!=',Auth::user()->id)->get();
       
        return view('home',compact('users')); 
    }

    public function sendMessage(Request $request)
    {
        
        $received_id=$request->received_id;
        $messages=$request->messages;
        return response()->json("received_id = ".$received_id." and ".$messages);
        // $options=array(
        //     "cluster"=>"eu",
        //     // "useTLS"=>true
        //     "encrypted"=>true
        // );
        // $pusher=new Pusher(
        //     env("PUSHER_APP_KEY"),
        //     env("PUSHER_APP_SECRET"),
        //     env("PUSHER_APP_ID"),
        //     $options
        // );
        // $data=["from"=>$from,"to"=>$to];
        // $pusher->trigger("my-channel","my-event",$data);
    }
}
