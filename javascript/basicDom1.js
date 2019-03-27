console.log("Hello from Javascript");
console.log("Document one", document);


function onButtonPushed() {
	console.log("Hello from the function");	
}
const btnPushed = document.getElementById("idBtnPushed");
console.log("comment", btnPushed);
btnPushed.addEventListener("click", onButtonPushed);
console.log(idH1);

//Adding Event Listeners
const firstH1 = document.getElementById("idH1");
firstH1.addEventListener("click", clickingIt);
	function clickingIt() {
		if(idH1.textContent==="Hello World") {
			idH1.textContent="Hello Universe";
		} else {
			idH1.textContent="Hello World";
		}
}
console.log(idH1.textContent);

const firstH3 = document.getElementById("idH3");
firstH3.addEventListener("mouseover", mouseOverIt);
	function mouseOverIt() {
		if(idH3.textContent==="Hello Alberta") {
			idH3.textContent="Hello Saskatchewan";
		} else {
			idH3.textContent="Hello Alberta";
		}
}
console.log(idH3.textContent);

const firstH4 = document.getElementById("idH4");
firstH4.addEventListener("mouseout", mouseOutIt);
	function mouseOutIt() {
		if(idH4.textContent==="Hello Calgary") {
			idH4.textContent="Hello Saskatoon";
		} else {
			idH4.textContent="Hello Calgary";
		}
}
console.log(idH4.textContent);


// Adding Elements
const firstH5 = document.getElementById("idH5");
firstH5.addEventListener("click", firstH6);
function firstH6() {
	let myMesaage = document.createElement("H5"); //creates the tag
	myMesaage.textContent="New message";  //puts text in the tag
	document.body.appendChild(myMesaage);  //puts the message in the body
}
// let NewTitle=document.createElement("Title");
// NewTitle.textContent="I am a magician";
// document.head.appendChild(NewTitle);