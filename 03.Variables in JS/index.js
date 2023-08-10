
// rules for defining variables
// varibale can't start  from numbers / special
// variable is case senstive
// always use camelCase while defining variable name 

var Name = "Ibtasam";

var name = "ibtasam";

var firstNameForUser = "Muhammad";  // camelCase Variable example    camelCase mean first letter in variable always small and rest of letter is capital.
var FirstNameForUser = "Muhammad"; // Pascal Case variable example   PascalCase mean first letter in variable always capital.

// Types in programing languages

// "" or '' or `` representing to a string
var string = "123" // 123 is not a number this is string
var nu1 = 123
console.log("String", typeof (string));
console.log("num1", typeof (num));

// Boolean values can be only 0, 1 > in Javascript > True or False
var flag = false;
console.log("Flag => ", typeof (flag), flag);

console.log("!==========!");

// Converting data types in javaScript

// Math operation 

var a = "5";
var b = 5;
console.log("Sum is =>", a + " " + b);
// concat operator is +
// + operator can be done two things > 1. It can be math plus operation or 2. It can be concat operation
// How we can decide about + operator, that referring to concat or simple  math plus??? 

console.log("!==========!");


var num1 = "15";
var num2 = 4;

console.log("Type of num1 before converting is =>", typeof (num1));

// First method to convert string number into number type is parseInt()
// num1 = parseInt(num1)

// Second method to convert string number into number type is Number()
num1 = Number(num1)

console.log("Type of num1 after converting is =>", typeof (num1));

console.log("sum is =>", num1 + num2);

var num5 = "abc"
num5 = parseInt(num5)
// Answer is not a number mean NaN error because parseInt not convert the character into number
console.log(num5);


console.log("!==========!");
console.log("!==========!");


// Convert number into string??
var num3 = 12;

num3 = num3.toString()
console.log("num3  data type =>", typeof (num3));
