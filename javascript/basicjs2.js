



function onButtonClicked() {
	console.log("I'm in the button click event");
	let x = Number(document.getElementBy Id("inp").value);
	console.log(x+1);
}
document.getElementById("btn1").addEventListener("click", onButtonClicked);

