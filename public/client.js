var create_button = document.getElementById("create_btn");
console.log("WORKING");
var example = {
	"1": 1,
	"2": 2,
	"3": 3,
	"Name": "John"
};

function test(){
	localStorage.setItem('myStorage', JSON.stringify(example));
	console.log("CLICKED");

	console.log(window.localStorage.getItem('myStorage'));
}

console.log(create_button.innerHTML);
create_button.addEventListener("click",test);



//create_button.onclick = test();




