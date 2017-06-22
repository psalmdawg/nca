console.log('s')

var socket = io();
socket.on('connect', function(){
  console.log('connected to server')


});

socket.on('disconnect', function(){
  console.log('** Disconnected from server **')
})


socket.on('newMessage', function(msg){
  console.log('new message =>', msg)
})

// socket.on('learn', function(lesson){
//   console.log('hopefully you are learning todays lesson: ', lesson)
// })
