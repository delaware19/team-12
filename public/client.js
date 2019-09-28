var create_button = document.getElementById("test_btn");
var socket = io.connect('http://localhost:3000');
socket.on('connect',function(){
	SOCKET_ID = socket.io.engine.id; //gives the variable 'SOCKET_ID' to the client, the socket 
									//connection unique id (to idenify client-speciifc player)
});


console.log("WORKING");
var example = {
	"1": 1,
	"2": 2,
	"3": 3,
	"Name": "John"
};

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




