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
    
</head>
<body>

    <div id="app">
        <nav class="bg-white shadow-sm navbar navbar-expand-md navbar-light">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="mr-auto navbar-nav">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="ml-auto navbar-nav">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif
                            
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }}
                                </a>

                                <div class="mr-20 dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">

            {{ auth()->id() }}

           
            
           
            @yield('content')

        </main>
    </div>
        <!-- Scripts -->
        
        <script src="{{ asset('js/app.js') }}" ></script>
      
    <script>

const userId='{{ auth()->id() }}';
//  Echo.private('user.'+userId)
//     .listen('.user.create',(data)=>{
//         alert(userId);
// console.log(data);
//             });
       


  // Enable pusher logging - don't include this in production
//   Pusher.logToConsole = true;
    
//     var pusher = new Pusher('100df36a50600cccaf1a', {
//       cluster: 'eu',
//       //forceTLS:true
//       encrypted:true
//     });
   
//     var channel = pusher.subscribe('my-channel');
//     channel.bind('my-event', function(data) {
//       alert(JSON.stringify(data));
//     });


        $('#envoyer').click(function(e){
          
            e.preventDefault();
            var from_id=$('#from_id').val();
            var to_id=$('#to_id').val();
           
            var content= $('#messages').val();
         var soratra="";
           soratra= $('#contenues').text();
           if(soratra!=""){
            soratra=soratra+"\n"+content;
          $('#contenues').text(soratra);
           }else{
           
          $('#contenues').text(content);
           }
          
          
            $.ajax({
                headers:{
                'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
            },
            type:"POST",
            url:"/conversations",
            data:{from_id:from_id,to_id:to_id,content:content},
            cache:false,
    
            })
            .done(function(response){
                console.log(response);  
                $.each(response,function(key,value)
                {
                    console.log(response);                      
                                  
                }) ;
              
                
                $('#messages').val('');
            })
            .fail(function(){
                    alert('tsy tafa');
            });

});

      
      </script>
</body>
</html>
