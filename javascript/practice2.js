function calculateArea() {

var base = document.getElementsByName('width')[0].value;
var height = document.getElementsByName('height')[0].value;
var out = (1/2) * parseFloat(base) * parseFloat(height);

document.getElementsByName('output')[0].value= out;

}