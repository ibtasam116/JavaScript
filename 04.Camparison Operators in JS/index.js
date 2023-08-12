// < > == >= <=

console.log("Check greater than");
var num1 = 5
var num2 = 7

var result = num1 > num2
var result2 = num2 > num1

console.log("num1 5 > num2 7 ==> ", result);
console.log("num2 7 > num1 5 ==> ", result2);

console.log("Check less than");
var result = num1 < num2
var result2 = num2 < num1

console.log("num1 5 > num2 7 ==> ", result);
console.log("num2 7 > num1 5 ==> ", result2);


// = is assignment operator
// == is equal to operator

console.log("Check equal to");
var num3 = 5
var num4 = 5

var result3 = num3 == num4
var result4 = num3 != num4

console.log("num3 5 == num4 5 ==> ", result3);
console.log("num3 5 != num4 5 ==> ", result4);


console.log("Check greater than equal to");
var num5 = 7
var num6 = 7

var result5 = num5 >= num6

console.log("num5 7 >= num6 7", result5);

console.log("Check less than equal to");
var num7 = 2
var num8 = 6

var result6 = num7 <= num8

console.log("num7 2 <= num8 6", result6);


// === equal to operator with data types
console.log("Check data types are equal");
var num9 = "9"
var num10 = 9
var result7 = num9 === num10
console.log('num9 "9" === num10 10', result7);


// AND operator &&
// T && T  => T => 2 == 2 && 5 == 5 => T
// T && F  => F => 2 == 2 && 7 == 5 => F
// F && T  => F => 2 == 1 && 5 == 5 => F
// F && F  => F => 1 == 2 && 9 == 5 => F

// OR operator ||
// T || T  => T => 2 == 2 || 5 == 5 => T
// T || F  => T => 2 == 2 || 5 == 7 => T
// F || T  => T => 2 == 1 || 5 == 5 => T
// F || F  => F => 2 == 9 || 3 == 5 => F

console.log("Check AND Operator");
var x = 9
var y = 10
var n = 4
var m = 8

var flag = x <= y && n > m
console.log("x 9 <= y 10 && n 4 > m 8", flag);



