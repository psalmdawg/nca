console.log('s')

var socket = io();
socket.on('connect', function(){
  console.log('connected to server')

  socket.emit('newMessage', {
    from: 'Jessica',
    text: 'Hey sexy boy'
  });
});

socket.on('disconnect', function(){
  console.log('** Disconnected from server **')
})


socket.on('createMessage', function(email){
  console.log('new message =>', email)
})

// socket.on('learn', function(lesson){
//   console.log('hopefully you are learning todays lesson: ', lesson)
// })
