<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Pediatrie') }}</title>

    <!-- Fonts -->


    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('fullcalendar/fullcalendar.css') }}" rel="stylesheet">
    
</head>

<body class="bg-gray-200">
  {{-- {{dd( Auth::user()->name) }} --}}

  {{-- <audio preload="auto" id="son"><source src="beep.mp3" type="audio/mp3"/>
  </audio> --}}

<div class="h-screen bg-gray-200 " >


  <nav class="entete navbar navbar-expand-md fixed-top row">
    {{-- {/* row sous nave */} --}}
                                               
              {{-- {/* titre */} --}}
    
                  <div class=" offset-2 col-sm-6">
    
                      <div class="font-bold text-gray-200 "> DOSSIERS MEDICAUX INFORMATISES</div>
    
                  </div>
                 
          
                      <div class="text-xs font-bold text-yellow-400 xs-hide s-hide col-sm-2 align-items-center justify-content-center d-flex">Le Logiciel des dossiers medicaux pour simplifier votre gestion quotidienne</div>
                   
                      {{-- {/* login */} --}}
                      <div class="dropdown col-sm-2 justify-content-end d-flex align-items-center deconnecte">
                          <div class="relative mr-10" type="button">
                                <span class="absolute text-xs text-white rounded-full left-2 bg-danger badges">1</span>
    
                                <span><i class="text-lg text-gray-300 fa fa-bell text-xxl"></i></span>
                          </div>
         
                          <span><i class="pr-2 text-gray-300 fa fa-user "></i></span>
          
                          <a  class="pr-5 text-gray-300 dropdown-toggle hover:text-white" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            {{ Auth::user()->name }}
                          </a>
          
                          <div class="w-5 mr-20 dropdown-menu " >
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                              document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                          </div>
          
                      </div>
    
                </nav>
{{-- Root --}}

<div id="root"></div>
{{-- fin Root --}}
</div>


      <!-- Scripts -->
      <script src="{{ asset('js/app.js') }}" ></script>
      <script src="{{ asset('fullcalendar/fullcalendar.min.js') }}" ></script>

      <script>



        (function () {

          // $('#son')[0].play();


  
})()
      </script>
         
</body>
</html>