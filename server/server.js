
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected')

  socket.emit('welcome', {
    from: "Admin",
    text: "Welcome to the chat app",
    createdAt: new Date().getTime()
  })

  socket.broadcast.emit('joinedChat', {
    from: 'admin',
    text: 'A new person has entered the chat room',
    createdAt: new Date().getTime()
  })

  socket.on('createMessage', (message)=>{
    console.log('a new message', message);
    // io.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // })
    // socket.broadcast.emit('newMessage',{
    //   from: message.from,
    //     text: message.text,
    //     createdAt: new Date().getTime()
    // })
  })

  socket.on('learn', (lesson)=>{
    console.log('hopefully you are learning todays lesson: ', lesson)
  })

  socket.on('disconnect', () => {
    console.log('Client disconnected')
  })

});

server.listen(port, function(){
  console.log(`live on port ${port}`);
});
