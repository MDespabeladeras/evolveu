console.log("in  basic.js");

const btnAdd = document.getElementById("btnAdd");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result1 = document.getElementById("result1");

const btnSubtract = document.getElementById("btnSubtract");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
const result2 = document.getElementById("result2");

const btnMultiply = document.getElementById("btnMultiply");
const input5 = document.getElementById("input5");
const input6 = document.getElementById("input6");
const result3 = document.getElementById("result3");

const btnDivide = document.getElementById("btnDivide");
const input7 = document.getElementById("input7");
const input8 = document.getElementById("input8");
const result4 = document.getElementById("result4");

console.log("btnAdd", btnAdd);
btnAdd.addEventListener("click", onAdd);

console.log("btnMultiply", btnMultiply);
btnMultiply.addEventListener("click", onMultiply);

console.log("btnSubtract", btnSubtract);
btnSubtract.addEventListener("click", onSubtract);

console.log("btnDivide", btnDivide);
btnDivide.addEventListener("click", onDivide);

function onAdd() {
	console.log("in onAdd");
	let v1 = Number(input1.value);
	let v2 = Number(input2.value);
	let result1 = v1 + v2;
	console.log('value:', v1);
	console.log('value:', v2);
	console.log("result1", result1);
	var answer = document.getElementById("result1");
	answer.textContent = "result is " + result1;
}

function onSubtract() {
	console.log("in onSubtract");
	let v3 = Number(input3.value);
	let v4 = Number(input4.value);
	let result2 = v3 - v4;
	console.log('value:', v3);
	console.log('value:', v4);
	console.log("result2", result2);
	var answer = document.getElementById("result2");
	answer.textContent = "result is " + result2;
}

function onMultiply() {
	console.log("in onMultiply");
	let v5 = Number(input5.value);
	let v6 = Number(input6.value);
	let result3 = v5 * v6;
	console.log('value:', v5);
	console.log('value:', v6);
	console.log("result3", result3);
	var answer = document.getElementById("result3");
	answer.textContent = "result is " + result3;
}

function onDivide() {
	console.log("in onDivide");
	let v7 = Number(input7.value);
	let v8 = Number(input8.value);
	let result4 = v7 / v8;
	console.log('value:', v7);
	console.log('value:', v8);
	console.log("result4", result4);
	var answer = document.getElementById("result4");
	answer.textContent = "result is " + result4;
}

// Canadian Tax Calculation
    // 15% on the first $47,630 of taxable income, plus
    // 20.5% on the next $47,629 of taxable income (on the portion of taxable income over 47,630 up to $95,259), plus
    // 26% on the next $52,408 of taxable income (on the portion of taxable income over $95,259 up to $147,667), plus
    // 29% on the next $62,704 of taxable income (on the portion of taxable income over 147,667 up to $210,371), plus
    // 33% of taxable income over $210,371

function calc() {
	// var value = parseInt(document.querySelector("#value").value);
	let value = Number(document.getElementById("inputValue").value);
	// const calculate = 0;
			if (value <= 47630) {
				result = (value * .15);
			}
			else if (value > 47630 && value <= 95259) {
				result = ((value -47630) * .205) + (47629 * .15);
			}
			else if (value > 95259 && value <= 147667) {
				result = ((value - 95259) * .26) + (47629 * .205) + (47630 * .15);
			}
			else if (value > 147667 && value <= 210371) {
				result = ((value - 147667) * .29) + (52408 * .26) + (47629 * .205) + (47630 * .15);
			}
			else {
				result = (value - 210371) * .33 + (62704 * .29) + (52408 * .26) + (47629 * .205) + (47630 * .15);
			}	
			
			// document.querySelector("#result").innerHTML = calculate;		
		
			const answer = document.getElementById("result");
			answer.textContent = "Total tax is: $ " + result;
}



// Working With Arrays
const buttonAdd = document.getElementById("buttonAdd");
console.log("buttonAdd", buttonAdd);
buttonAdd.addEventListener("click", onAdd2);

const buttonShow = document.getElementById("buttonShow");
console.log("buttonShow", buttonShow);
buttonShow.addEventListener("click", onShow);

const buttonTotal = document.getElementById("buttonTotal");
console.log("buttonTotal", buttonTotal);
buttonTotal.addEventListener("click", onTotal);

const buttonClear = document.getElementById("buttonClear");
console.log("buttonClear", buttonClear);
buttonClear.addEventListener("click", onClear);


function onAdd2() {
	console.log("in onAdd");
	const myarray = [2, 4, 6];
	// console.log(myarray);
	let v10 = Number(input10.value);
	console.log(v10);
	if(isNaN(v10)) {
		return "Not a number!";
	}
	myarray.push(v10);
	console.log(myarray);
	document.getElementById("demo").innerHTML = v10 + " has been added to the array!";
}
	
	function onShow() {
	console.log("in onShow");
	const myarray = [2, 4, 6];
	// console.log(myarray);
	let v10 = Number(input10.value);
	// console.log(v10);
	if(isNaN(v10)) {
		return "Not a number!";
	}
	myarray.push(v10);
	// console.log(myarray);	
	document.getElementById("demo1").innerHTML = myarray;
	}

	
	function onTotal() {
		console.log("in onTotal");
		const myarray = [2, 4, 6];
		// console.log(myarray);
		let v10 = Number(input10.value);
		// console.log(v10);
		if(isNaN(v10)) {
			return "Not a number!";
		}
		myarray.push(v10);
		
		var total = 0;
		for(var i = 0; i < myarray.length; i++) {
			total += parseInt(myarray[i]);
		}
		// console.log(total);
		document.getElementById("demo2").innerHTML = total;
	}


	function onClear() {
		console.log("in onClear");
		const myarray = [2, 4, 6];
		// console.log(myarray);
		let v10 = Number(input10.value);
		// console.log(v10);
		if(isNaN(v10)) {
			return "Not a number!";
		}
		myarray.push(v10);
		document.getElementById("demo3").innerHTML = [];
	}


//Working with Dictionaries
const buttonLookup = document.getElementById("buttonLookup");
console.log("buttonLookup", buttonLookup);
buttonLookup.addEventListener("click", onLookup);

function onLookup(val) {
	console.log("in onLookup");
	var result = "";
	var lookup = {
		"BC": "British Columbia",
		"AB": "Alberta",
		"SK": "Saskatchewan",
		"MN": "Manitoba",
		"ON": "Ontario",
		"QE": "Quebec",
		"NB": "New Brunswick",
		"NS": "Nova Scotia",
		"PEI": "Prince Edward Island",
		"NL": "Newfoundland and Labrador",
		"YU": "Yukon",
		"NT": "Northwwest Territories",
		"NU": "Nunavut",	
	};
	result = lookup[val];
	return result;
	document.getElementById("demo4").innerHTML = result;
}


























