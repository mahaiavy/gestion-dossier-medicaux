import React from 'react';
import ReactDOM from 'react-dom';
// import Echo from 'laravel-echo';

class Home extends React.Component {
   
    componentDidMount()
    {
        
        // const client = require('pusher-js');
        window.Echo.private('user')
        .listen('.UserEvent', (e) => {
          
            console.log(e);
        });

    //     window.io=require('socket.io-client');
       
    //     new Echo({
    //         broadcaster: 'socket.io',
    //   host:window.location.hostname + ':6001'
    //     //  host:process.env.MIX_APP_URL + ':6001'
    //      }).private("private-user.2")
    //         .listen("UserEvent",function(data){
              
    //      console.log(data);
    //      alert("sss");
    //    });
     
       
//        Echo.private("user.2").listen("UserEvent",function(data){
           
//       alert("sssss");
// console.log(data);
//         });
 // Enable pusher logging - don't include this in production
//  Pusher.logToConsole = true;
    
//  var pusher = new Pusher('100df36a50600cccaf1a', {
//    cluster: 'eu',
//    client:client,
//    forceTLS:true
// // //    encrypted:true
//  });

//  var channel = pusher.subscribe('user.1');
//  channel.bind('UserEvent', function(data) {
//    alert(JSON.stringify(data));
//  });
    };
 
render(){
    return (
      
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="text-blue-400 card-header">OEEEEEEEEE</div>  
        

                     
                    </div>
                </div>
            </div>
        </div>
    );
}
   
}

export default Home;

if (document.getElementById('example')) {
    ReactDOM.render(<Home />, document.getElementById('example'));
}