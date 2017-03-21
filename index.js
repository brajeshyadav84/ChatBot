var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var connectedCount = 0;
app.get('/', function(req, res){

  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  connectedCount += 1;
  alert(connectedCount);
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

// io.on("disconnect", function(){
// 	connectedCount -= 1;
// });

http.listen(port, function(){
  console.log('listening on *:' + port);
});