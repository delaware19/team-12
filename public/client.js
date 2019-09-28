//HTML ELEMENTS------------------------------
var create_button = document.getElementById("test_btn");

//Create Story Page
var selectedimg = document.getElementById("selected_img");//this.files[0]



var socket = io.connect('http://localhost:3000');
socket.on('connect',function(){
	SOCKET_ID = socket.io.engine.id; //gives the variable 'SOCKET_ID' to the client, the socket 
									//connection unique id (to idenify client-speciifc player)
});

class Story {
    constructor(frames_Frame, childname_str, age_enum, gender_enum, race_enum, procedure_str) {
        this.frames_Frame = frames_Frame;
        this.childname_str = childname_str;
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

function createStory(){
	var name_input = document.getElementById("childName").value;
	var age_input = document.getElementById("childAge").value;
	var race_input = document.getElementById("race");
	var ethnicity_input = document.getElementById("ethnicity");
	var gender_input = document.getElementById("gender");
	var ethnicity_input = document.getElementById("parentName");
	var gender_input = document.getElementById("parentGender");

	return Story([]);

}

var listOfFrames = [];
function createFrame(){
	var selected_img = document.getElementById("selected_img");
	var inputted_caption = document.getElementById("caption_input");

	if(selectedimg.src.length>0 && inputted_caption.length>0){
		new_frame = Frame(selected_img.src, inputted_caption);
		return new_frame;
	}
	console.log("No Frame was created");
}



console.log("WORKING");
// var example = {
// 	"1": 1,
// 	"2": 2,
// 	"3": 3,
// 	"Name": "John"
// };

function test(){
	//localStorage.setItem('myStorage', JSON.stringify(example));
	console.log("CLICKED");

	//console.log(window.localStorage.getItem('myStorage'));
	socket.emit('userclicked',{
		"username":"john"
	});
}


console.log(create_button.innerHTML);
create_button.addEventListener("click",test);



//create_button.onclick = test();




