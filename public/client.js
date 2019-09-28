var socket = io.connect('http://localhost:3000');
var create_button = document.getElementById("create_btn");
console.log("WORKING");
var example = {
	"1": 1,
	"2": 2,
	"3": 3,
	"Name": "John"
};

socket.on('connect', function(){
	console.log("CONNECTED");
});

function test(){
	localStorage.setItem('myStorage', JSON.stringify(example));
	console.log("CLICKED");

	console.log(window.localStorage.getItem('myStorage'));
}

console.log(create_button.innerHTML);
create_button.addEventListener("click",test);
//socket.emit('msg', {})
//socket.on('msg', function(){
