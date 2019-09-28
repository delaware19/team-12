//HTML ELEMENTS------------------------------
var create_button = document.getElementById("test_btn");

//Child Information Page
var demographics = document.getElementById("Demographics");
var childinformationSubmit_btn = document.getElementById("childinformation_btn");

//Create Story Page
var selectedimg = document.getElementById("selected_img");//this.files[0]
var addPage_button = document.getElementById("addPage_btn");
//var selectedimg = document.getElementById("selected_img");



var socket = io.connect('http://localhost:3000');
socket.on('connect',function(){
	SOCKET_ID = socket.io.engine.id; //gives the variable 'SOCKET_ID' to the client, the socket 
									//connection unique id (to idenify client-speciifc player)
});

class Story {
    constructor(frames_Frame, childname_str, age_enum, childgender_enum, race_enum, ethnicity_enum, parentgender_enum) {
        this.frames_Frame = frames_Frame;
        this.childname_str = childname_str;
        this.age_enum = age_enum;
        this.childgender_enum = childgender_enum;
        this.race_enum = race_enum;
        this.ethnicity_enum = ethnicity_enum;
        this.parentgender_enum = parentgender_enum;
    }
}

class Frame {
   constructor(imgpath_str, caption_str) {
      this.imgpath_str = imgpath_str;
      this.caption_str = caption_str;
   }
}

function createStory(){
	var name_input = document.getElementById("childName").value;
	var age_input = document.getElementById("childAge").value;
	var race_input = document.getElementById("race").value;
	var ethnicity_input = document.getElementById("ethnicity").value;
	var childgender_input = document.getElementById("childGender").value;
	var ethnicity_input = document.getElementById("parentName").value;
	var parentgender_input = document.getElementById("parentGender").value;

	console.log(name_input,age_input,race_input,ethnicity_input);

	return new Story([], name_input, age_input, childgender_input, race_input, ethnicity_input, parentgender_input);
}

var current_story = null;
function generateNewStory(){
	current_story = createStory();
	console.log(current_story);
}

var listOfFrames = [];
function createFrame(){
	var selected_img = document.getElementById("selected_img");
	var inputted_caption = document.getElementById("caption_input");

	if(selectedimg.src.length>0 && inputted_caption.length>0){
		new_frame = new Frame(selected_img.src, inputted_caption);
		return new_frame;
	}
	else{
		return null;
	}
	console.log("No Frame was created");
}

function addToListOfFrames(){
	if(createFrame!=null){
		listOfFrames.push(createFrame());
		console.log(listOfFrames)
	};
}

function endStory(){
	return listOfFrames()
	console.log(listOfFrames)
}
//localStorage.setItem('myStorage', JSON.stringify(example));
childinformationSubmit_btn.addEventListener("click", generateNewStory);


// addPage_button.addEventListener("click", function(){
// 	socket.emit('addedPage');
// });

//Updates the page constantly
socket.on('updatePage',function(){
	console.log("Updating page");
});

console.log("WORKING");
console.log(demographics);

//create_button.onclick = test();




