var express = require('express');
var app = express();
var socket = require('socket.io');

var server = app.listen(3000, function(req,res){
	console.log('server online');
});

const Age ={
    TODDLER:"TODDLER", 
    CHILD:"CHILD", 
    TEEN:"TEEN", 
    ADULT:"ADULT"
}

const Gender ={
    MALE: "MALE",
    FEMALE: "FEMALE",
    OTHER: "OTHER"
}

const Race={
    AMERICAN_INDIAN: "AMERICAN_INDIAN",
    WHITE: "WHITE",
    BLACK: "BLACK",
    ASIANPACIFIC_ISLANDER: "ASIANPACIFIC_ISLANDER",
    LATIN_SPANISH: "LATIN_SPANISH"
}

class Story {
    constructor(frames_Frame, age_enum, gender_enum, race_enum, procedure_str) {
        this.frames_Frame = frames_Frame;
        this.age_enum = age_enum;
        this.gender_enum = gender;
        this.race_enum = race;
        this.procedure_str = procedure_str;
    }
}

class Frame {
   constructor(imgpath_str, caption_str) {
      this.imgpath_str = imgpath_str;
      this.caption_str = caption_str;
   }
}

/*Example of JSON for child story

var story1 = {
	AGE:"INFANT",
	GENDER: "MALE",
	RACE: "WHITE",
	FRAME1:{
		IMGPATH: "./test1.jpg",
		CAPTION: "Other Children may like the same toys as me"
	},

	FRAME2:{
		IMGPATH: "./test2.jpg",
		CAPTION: "I can share by giving some toys"
	},

	FRAME3:{
		IMGPATH: "./test3.jpg",
		CAPTION: "Say hi to the person"
	}
}
*/

//Static Files
app.use(express.static('public'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/public/Demographics.html');
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

	socket.on('userclicked', function(data){
		console.log("A USER CLICKED A BUTTON");
		console.log(data);
	});

	setInterval(function(){
		socket.emit('updatePage');
		console.log("WORKING");
	},1000);

	socket.on('addedPage', function(){
		console.log("ADDING PAGE");
	});

	socket.on('disconnect',function(){
		console.log('User '+socket.id+' has logged off.');
	});

	
});