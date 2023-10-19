/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Elmar");
console.log(23);

let firstName = "Elmar";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Varialbe name convention
let jonas_matilda = "JM";
let $function = 27;

let person = "Elmar";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Elmar");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// Mutable - can be change
let age = 30;
age = 31;

// Imutable - cannot be change
const birthYear = 1991;
// birthYear = 1990;

// cannot be initialize
// const job;

//Old way to defining a variable prior to ES6
var job = "Programmer";
job = "Teacher";

// YOu should not that you should always properly declare variables, okay?
// Never just write a variable like this
// without really declaring it.
lastName = "Angao";
console.log(lastName);


////////////////////////////////////////
// OPERATOR
///////////////////////////////////////

// Math Operator
const now = 2037;
const ageElmar = now - 1985;
const ageSarah = now - 2018;
console.log(ageElmar, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageElmar * 2, ageElmar / 10, 2 ** 3);

const firstName = "Elmar";
const lastName = "Angao";
console.log(firstName + " " + lastName);

// Assignment Operator
let x = 10 + 5; // 15
x += 10; // x = x + 10  = 25
x *= 4; //x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

// Comparison operator
console.log(ageElmar > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

////////////////////////////////////////
// Operator Precedence
///////////////////////////////////////
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const now = 2037;
const ageElmar = now - 1985;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 -  right to left
console.log(x, y);

const averageAge = (ageElmar + ageSarah) / 2;
console.log(ageElmar, ageSarah, averageAge);
