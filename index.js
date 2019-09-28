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
    constructor(pages_int, age_enum, gender_enum, race_enum, procedure_str) {
        this.pages = pages;
        this.age = age;
        this.gender = gender;
        this.race = race;
        this.procedure = procedure;
    }
}

class Frame {
   constructor(picture_str, caption_str) {
      this.picture = picture;
      this.caption = caption;
   }
}

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
	
	socket.on('userclicked', function(data){
		console.log("A USER CLICKED A BUTTON");
		console.log(data);
	});

	socket.on('disconnect',function(){
		console.log('User '+socket.id+' has logged off.');
	});

	
});