<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Mon Application</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
         <link href="{{ asset('wysihtml5/css/bootstrap-wysihtml5.css') }}" rel="stylesheet"> 
     
    </head>
   <body>

        <div id="example">
        
        </div>
       
        <div class="container">
            <div class="row justify-content-center">
              <div class="mr-5 card">
                  <div class="card-header">
        Listes connectes
                  </div>
                  <div class=" card-body">
                    <ul class="list">
                        <li class=""><a href="" class="">Koto</a></li>
                        <li><a href="">Bema</a></li>
                    </ul>
                  </div>
                
              </div>
                
               <form action="" method="post">
                  <textarea class="disable form-control"  id="contenues" cols="30" rows="10"></textarea>
                  <input class="mt-2 mb-3 form-control" type="text" id="messages">
                  <button id="envoyer" class="btn btn-info form-control" type="submit">Envoyer</button>
               </form>
            </div>
        </div>









        <div class="widget-box">
          <div class="widget-title"> <span class="icon"> <i class="icon-align-justify"></i> </span>
            <h5>wysihtml5</h5>
          </div>
          <div class="widget-content">
            <div class="control-group">
              <form>
                <div class="controls">
                  <textarea class="textarea_editor span12" rows="6" placeholder="Enter text ..."></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>

        {{ $date  }}
        {{  $patient   }}
       

        <script src="{{ mix('js/app.js') }}" ></script>
        <script src="{{ asset('wysihtml5/js/wysihtml5-0.3.0.js') }}" ></script>
        <script src="{{ asset('wysihtml5/js/bootstrap-wysihtml5.js') }}" ></script>
       
        <script>
 
 $('.textarea_editor').wysihtml5();
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
                      var from_id=2;
                      var to_id=1;
                     
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
                          
                          $('#messages').val('');
                      })
                      .fail(function(){
                              alert('tsy tafa');
                      });
          
          });
          
                
                </script>
    </body>
</html>
