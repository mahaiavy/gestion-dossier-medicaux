<?php

namespace App\Http\Controllers;

use App\Events\UserEvent;
use App\Events\NewMessageEvent;
use App\Models\Message;
use App\Models\User;
use App\Repository\ConversationRepository;
use Illuminate\Auth\AuthManager;
use Illuminate\Http\Request;
use Pusher\Pusher;
use Illuminate\Support\Facades\Auth;

class ConversationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

     private $r;
     private $auth;

    public function __construct(ConversationRepository $reposito,AuthManager $auth)
    {
        $this->middleware('auth');
        $this->r=$reposito;
        $this->auth=$auth;
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
      
       return Message::all();
        // return view('messages.conversation',[
        //     'users'=>$this->r->getConversation($this->auth->user()->id),
        // ]); 
    }

    public function show(User $user)
    {
       
        return view('messages.conversation',[
            'users'=>$this->r->getConversation($this->auth->user()->id),
            'user'=>$user
        ]); 
    }

    public function update(Request $request,$id){
        $message=Message::findOrFail($id);
        $message->update($request->all());
        return $message;
    }

    public function delete(Request $request,$id){
        $message=Message::findOrFail($id);
      $status=  $message->delete();
        return $status;
    }

    public function sendMessage(Request $request)
    {
        $users=Auth::user();
        $messages=Message::create($request->all());
        
        $from_id=$request->from_id;
        $to_id=$request->to_id;
        $content=$request->content;
    
    //   $valiny=  broadcast(new UserEvent($users));
      
      
     return response()->json($messages);
      
        // $options=array(
        //     "cluster"=>"eu",
        //     "useTLS"=>true
        //     // "encrypted"=>true
        // );
        // $pusher=new Pusher(
        //     env("PUSHER_APP_KEY"),
        //     env("PUSHER_APP_SECRET"),
        //     env("PUSHER_APP_ID"),
        //     $options
        // );
        // $data=["from_id"=>$from_id,"to_id"=>$to_id,"content"=>$content];
        // $pusher->trigger("my-channel","my-event",$data);
    }
}
