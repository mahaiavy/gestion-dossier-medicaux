const express=require('express');
const app=express();
const server=require('http').createServer(app);

const io=require('socket.io')(server,{
    cors:{origin:"*"}
});


io.on('connection',(socket)=>{
    console.log('connection');

    // socket.on('sendMessage',(message)=>{
    //     console.log(message);
    // //    io.sockets.emit('sendMessageClient',message); 
    // socket.broadcast.emit('sendMessageClient',message); 
    // });

   

    socket.on('disconnect',(socket)=>{
        console.log('Disconnect');
    });
})

server.listen(5000,()=>{
    console.log('server is running ');
});
