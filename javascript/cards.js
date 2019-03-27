//The Basic DOM
console.log("in dom.js");
const showbtn = document.getElementById("showbtn");
const addbtn = document.getElementById("addbtn");
const deletebtn = document.getElementById("deletebtn");
const ol = document.querySelector("ol");

showbtn.addEventListener("click", function() {
	console.log(mylist);
})

addbtn.addEventListener("click", function() {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode("ITEM_ADD"));
	ol.appendChild(li);
})

deletebtn.addEventListener("click", function() {
	const mylist = document.getElementById("mylist");
	mylist.removeChild(mylist.childNodes[0]);
})





//Working with Cards
 div = document.getElementById("cards");
 count = 0; //initialize card count to zero

btnAddCard = document.getElementById("btnaddcard");
btnAddCard.addEventListener("click", onAddCard);

// Function to create new div (new card):
function createCard (){
	count++;
	let newDiv = document.createElement("div"); //create new card
	newDiv.className = "newcard";
	let newH2 = document.createElement("h2");  //create new header
	let newH2Text = document.createTextNode("Card" + " " + count); //text for header
	let fullH2 = newH2.appendChild(newH2Text); //full header

	let btnAddBefore = document.createElement("button"); //creating add before button and text
	btnAddBefore.textContent = "Add Before";
	let btnAddAfter = document.createElement("button"); //creating add after button and text
	btnAddAfter.textContent = "Add After";
	let btnDelete = document.createElement("button"); //create delete button and text
	btnDelete.textContent = "Delete";

	newDiv.appendChild(fullH2); 						//append full H2 to the new card
	newDiv.appendChild(btnAddBefore); 					//append buttons to new card (newDiv)
	newDiv.appendChild(btnAddAfter);
	newDiv.appendChild(btnDelete);

	btnAddBefore.addEventListener("click", onAddBefore);
	btnAddAfter.addEventListener("click", onAddAfter);
	btnDelete.addEventListener("click", onDelete);
	return newDiv;
}

// Function for add Card button:
function onAddCard(event) {
	newDiv = createCard();
	console.log('addcard', event.target);
	targetBtn = event.target.parentElement;				//define targetBtn as a variable of clicking on Add Card Btn
	targetBtn.appendChild(newDiv); 						//append newDiv (new card) to cards div
}

// Function for the Add Before button:
function onAddBefore(event) {
	newDiv = createCard();
	console.log('addbefore', event.target);
	targetBtn = event.target.parentElement; 
	targetBtn.parentNode.insertBefore(newDiv, targetBtn); //add before current card (use targetBtn to add before the targetBtn pushed)
}

// Function for Add after button:
function onAddAfter (event) {
	newDiv = createCard();
	console.log('addafter', event.target);
	targetBtn = event.target.parentElement;
	targetBtn.parentNode.insertBefore(newDiv, targetBtn.nextSibling); //add after current card (read up on insertBefore, nextSibling - W3Schools, MDN)
}

// Function for Delete Button:
function onDelete(event) {
	console.log('delete', event.target);
	targetBtn = event.target.parentElement; 
	targetBtn.parentNode.removeChild(event.target.parentNode);				//remove parent of button being clicked
}









