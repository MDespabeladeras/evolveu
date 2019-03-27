
// console.log("Hello from the functions.js v1");

// function myFunction() {
// 	console.log("Hello from myFunction");
// }

// myFunction();
// myFunction();


// console.log("Hello from functions.js v2");

// function myFunction2(xx, yy) {
// 	console.log("Hello from myFunction2", xx, yy);
// 	const value_to_return = xx + "-" + yy;
// 	return value_to_return;
// }

// const value1 = myFunction2("Rocks","Rings");
// const value2 = myFunction2("Coding", "Fun");

// console.log("v1:", value1);
// console.log("v2:", value2);

// const func = myFunction2;

// console.log(func("Hello","World"));


// Add Numbers: #1
// function my_add(x,y,z) {
// 		return x+y+z;
// }
// 	const ans12 = my_add(1,2,3);
// 	console.log('my_add answer 1:',ans12);
// 	console.log('my_add answer 2:',my_add(2,22,222));


// Create Email Address: #2
function my_email(v1,v2,v3) {
	return v1 + v2 + v3;
}
const ans14 = my_email('jane.','smith','@evolveu.ca');
console.log('my_email answer 1:', ans14);

const ans15 = my_email('bill.','jones','@evolveu.ca')
console.log('my_email answer 2:', ans15);


// Array Sum: #3
const numbers = [5,10,15,20].reduce(add);
function add(accumulator, a) {
	return accumulator + a;
}
console.log(numbers);
console.log(numbers);
console.log(numbers);


// String Search: #4
const string_array = [
'this is a string',
'that is also a string',
'what about this',
'what about that',];

	const search1 = "this";
	const search2 = "is";

	const ans1 = look_for_string(string_array, search1);
	const ans2 = look_for_string(string_array, search2);

console.log("We found '", search1, "' in", ans1, "lines");
console.log("We found '", search2, "' in", ans2, "lines");


function look_for_string(stringArray, searchWord) {	
	let count = 0;
	for (var i = 0; i < string_array.length; i++) {
		if (string_array[i].search(searchWord) >= 0) {
			count += 1;
		}
	} 
	return count;
}

