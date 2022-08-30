@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
      <div class="mr-5 card">
          <div class="card-header">
Listes connectes
          </div>
         

        <div class="list-group">
            
          @foreach ($users as $user)
          
          <a class="list-group-item" href="{{ route('conversations.show',$user->id) }}">{{ $user->name }}</a>
         
          @endforeach
        </div>
         
       
        
      </div>
        
       <form action="" method="post">
          <textarea class="disable form-control"  id="contenues" cols="30" rows="10" ></textarea>
          <input class="mt-2 mb-3 form-control" type="text" name="" id="messages">
          <button id="envoyer" class="btn btn-info form-control" type="submit">Envoyer</button>
       </form>
    </div>
</div>
@endsection
