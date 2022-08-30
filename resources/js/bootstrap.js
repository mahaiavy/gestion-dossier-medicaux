window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    // require('bootstrap/dist/js/bootstrap.bundle.min'); 
    require('bootstrap');
    // require('mdb-react-ui-kit');
    // require('mdb-ui-kit');
    // require('socket.io');
    require('mdbreact');
  
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

//   import Echo from 'laravel-echo';

// //    window.Pusher = require('pusher-js');
 

window.io=require('socket.io-client');
window.adresseIP=window.location.hostname;
console.log('====================================');
console.log(adresseIP);
console.log('====================================');

//  window.Echo = new Echo({
//      broadcaster: 'socket.io',
//      host:window.location.hostname + ':6001',
//      authEndpoint:'/broadcasting/auth',
//      auth:{
//          headers:{
//             'X-CSRF-TOKEN':$('meta[name="csrf-token"]').attr('content')
//          },
//      },
    // key: process.env.MIX_PUSHER_APP_KEY,
    // cluster: process.env.MIX_PUSHER_APP_CLUSTER,
    // forceTLS: true
//    encrypted:true

//  transports:['websocket'],

//   });
