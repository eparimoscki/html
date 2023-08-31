var n1 = parseFloat(prompt("Enter the first grade:"));
var n2 = parseFloat(prompt("Enter the second grade:"));
var n3 = parseFloat(prompt("Enter the third grade:"));

var weightN1 = 2;
var weightN2 = 3;
var weightN3 = 5;

var average = (n1 * weightN1 + n2 * weightN2 + n3 * weightN3) / (weightN1 + weightN2 + weightN3);

console.log("The student's average is: " + average.toFixed(2));
