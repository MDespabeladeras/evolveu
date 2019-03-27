console.log("Hello world");
console.log("Document, document");
console.log("Document.body");
console.log("idh1",idH1);

function onclick() {
	console.log("You pushed the button");
}

var firstH1= document.getElementById("idH1");
firstH1.addEventListener("click", clickingIt);
	function clickingIt() {
		if(idH1.textContent==="Hello World") {
			idH1.textContent="Hello Universe";
		} else {
			idH1.textContent="Hello World";
		}
}
console.log(idH1.textContent);


var firstH3= document.getElementById("idH3");
firstH3.addEventListener("mouseover", mouseOverIt);
	function mouseOverIt() {
		if(idH3.textContent==="Hello Alberta") {
			idH3.textContent="Hello Saskatchewan";
		} else {
			idH3.textContent="Hello Alberta";
		}
}
console.log(idH3.textContent);

var firstH4= document.getElementById("idH4");
firstH4.addEventListener("mouseout", mouseOut);
function mouseOut() {
	if(idH4.textContent==="Hello Calgary") {
		idH4.textContent="Hello Saskatoon"
	} else {
		idH4.textContent="Hello Calgary";
	}
}
console.log(idH4.textContent);


// var button = document.getElementById("btnPushme");
// button.addEventListener("click", onButtonClicked);
// function onButtonClicked() {
// 	if ()
// }






