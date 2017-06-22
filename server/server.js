
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

  socket.emit('createMessage', {
    from: 'Pauly',
    text: 'what is going down?',
    createdAt: new Date()

  })

  socket.on('newMessage', (message)=>{
    console.log('a new message', message)
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
