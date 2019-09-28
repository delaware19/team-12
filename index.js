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
});


//Socket Setup
var io = socket(server);

var testdata= '{"name":"john"}';
var jsonObj = JSON.parse(testdata);
var jsonContent = JSON.stringify(jsonObj);
console.log(jsonContent);

io.on('connection',function(socket){
	console.log('User '+socket.id+' has logged on.');
	setInterval(function(){
		console.log("Printing");
	}, 1000);

	socket.on('disconnect',function(){
		console.log('User '+socket.id+' has logged off.');
	});

	
});