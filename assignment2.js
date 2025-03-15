let greaterThan = Number(20) > e;  // d converted to number
let lessThan = Number(15) < e;
let greaterThanOrEqualTo = Number(12) >= e;
let lessThanOrEqualTo = Number(15) <= e;
let strictEquality = Number(15) === e;

console.log("d > e: " + greaterThan);
console.log("d < e: " + lessThan);
console.log("d >= e: " + greaterThanOrEqualTo);
console.log("d <= e: " + lessThanOrEqualTo);
console.log("d === e: " + strictEquality);

// c. Declare new variables to store the result/s of the following operations:

// 1. Subtract all the values of the declared variables.
let subtractionResult = a - b - c - Number(d) - e;
console.log("Subtraction result: " + subtractionResult);

// 2. Multiply the values of variable a and c, then divide by constant e.
let multiplicationAndDivision = (a * c) / e;
console.log("Multiplication of a and c, divided by e: " + multiplicationAndDivision);

let exponentiation = Math.pow(e, c);
console.log("Exponentiation (e^c): " + exponentiation);

c = 3;
console.log("Reassigned value of c: " + c);
