var express = require('express');
var app = express();
var socket = require('socket.io');

var server = app.listen(3000, function(req,res){
	console.log('server online');
});

//Static Files
app.use(express.static('public'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/public/ChooseCreate.html');
	console.log('working server');
})


//Socket Setup
var io = socket(server);

io.on('connection',function(socket){
	console.log('User '+socket.id+' has logged on.');
	

	socket.on('disconnect',function(){
		console.log('User '+socket.id+' has logged off.');
	})
});