

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    
    <!-- Fonts -->
    
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="font_awesome/css/font_awesome.min.css">
</head>
<body>
    <div id="app">
     
        <nav class="bg-white shadow-sm navbar navbar-expand-md navbar-light " id="c_nav">
        {{-- <div >
                <img src="/images/logo.PNG" title="logo_MNP" alt="logo_MNP" class="mr-2 logo_CHRR"/>
            </div> --}}
            <div class="container " >
                <div class="col-md-12 d-flex justify-content-center align-items-center" id="logo_nav">
                <p class="navbar-brand " id="MNP_log">
                    {{-- {{ config('app.name', 'Laravel') }} --}}
                    CHRR<br>Centre Hospitalier de Réference Régional
                </p>
              </div>
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
                            {{-- <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li> --}}
                            @if (Route::has('register'))
                                {{-- <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li> --}}
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
          
        </nav>
    

{{-- script --}}
<script src="{{ asset('js/app.js') }}" defer></script>

    
  
    
{{-- /script --}}
        <main class="py-4 contenu">
          <div class="container mt-5" id="b_log">
    <div class="row justify-content-center">
        <div class="col-md-9 col-lg-9 col-sm-10">
            <div class="card " id="c_log">
                <div class="card-header" id="h_log">
                <span><i class="fa fa-user fa-5x"></i></span>
                </div>

                <div class="mt-5 card-body">
                    <div class="d-flex justify-content-between ">

                        <div class="mt-40 logo_CHRR justify-content-center">
                         
                          <img src="/images/logo.PNG" title="logo_MNP" alt="logo_MNP" class=""/> 
                        </div>

                        <div class="col-md-9">

                            <form method="POST" action="{{ route('register') }}">
                                @csrf
        
                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Nom') }}</label>
        
                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
        
                                        @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
        
                                 {{-- prenom --}}
        
                                 <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __(' Prénom') }}</label>
        
                                    <div class="col-md-6">
                                        <input id="prenom" type="text" class="form-control @error('prenom') is-invalid @enderror" name="prenom" value="{{ old('prenom') }}" required autocomplete="prenom">
        
                                        @error('prenom')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                {{-- prenom --}}
        
                                 {{-- imm --}}
        
                                 <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __(' Immatricule') }}</label>
        
                                    <div class="col-md-6">
                                        <input id="imm" type="text" class="form-control @error('imm') is-invalid @enderror" name="imm" value="{{ old('imm') }}" required autocomplete="imm">
        
                                        @error('imm')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                {{-- imm --}}
        
                                {{-- profession --}}
        
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __(' Profession') }}</label>
        
                                    <div class="col-md-6">
                                        <input id="profession" type="text" class="form-control @error('profession') is-invalid @enderror" name="profession" value="{{ old('profession') }}" required autocomplete="profession">
        
                                        @error('profession')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                {{-- profession --}}
        
                                  {{-- service --}}
        
                                  <div class="form-group row">
                                      
                                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __(' Service') }}</label>
        
                                    <div class="col-md-6">
                                        <input id="service" type="text" class="form-control @error('service') is-invalid @enderror" name="service" value="{{ old('service') }}" required autocomplete="service">
        
                                        @error('service')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                                {{-- service --}}
        
                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-mail ') }}</label>
        
                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email">
        
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
                               
        
                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Mot de pass') }}</label>
        
                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password">
        
                                        @error('password')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>
                                </div>
        
                                <div class="form-group row">
                                    <label for="password-confirm" class="col-md-4 col-form-label text-md-right">{{ __('Confirmé') }}</label>
        
                                    <div class="col-md-6">
                                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                                    </div>
                                </div>
        
                                <div class="mb-0 form-group row">
                                    <div class="col-md-12 justify-content-between d-flex">
                                        <a  class=" btn btn-info" href="{{ route('login') }}">{{ __('Annuler') }}</a>
                                        <button type="submit" class="btn btn-success">
                                            {{ __('Enregistrer') }}
                                        </button>
                                       
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                  
                   
              
                </div>
            </div>
        </div>
    </div>
</div>
        </main>
    </div>
</body>
</html>






{{-- rerererrerer --}}

