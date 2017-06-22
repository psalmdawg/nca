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
  var li = $('<li></li>')
  li.text(`${msg.from}: ${msg.text}`)

  $('#messages').append(li)
})


// socket.on('welcome', function(msg){
//   console.log('APP msg :', msg)
// })
//
// socket.on('joinedChat', function(msg){
//   console.log('broadcast msg :', msg)
// })

// socket.emit('createMessage', {
//   from: 'Frank',
//   text: 'Hi I am feeling good'
// }, function(data){
//   console.log('got the msg', data)
// })

$('#message-form').on('submit', function(e){
  e.preventDefault();
  socket.emit('createMessage', {
    from: "User",
    text: $('[name=message]').val()
  }, function(){

  })
})
