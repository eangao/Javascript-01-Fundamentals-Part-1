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
// const now = 2037;
// const ageElmar = now - 1985;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10 -  right to left
// console.log(x, y);

// const averageAge = (ageElmar + ageSarah) / 2;
// console.log(ageElmar, ageSarah, averageAge);

/*
////////////////////////////////////////
JavaScript Fundamentals – Part 1
Coding Challenge #1
////////////////////////////////////////


Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:

§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

// /* Write your code below. Good luck! 🙂 */

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////////
// Strings and Template Literals
///////////////////////////////////////
// const firstName = "Elmar";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const elmar =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(elmar);

// // template literals - use backtext ``
// const elmarNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(elmarNew);

// console.log(`Just a regular string...`);

// // Multiple string
// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String
// multiple
// lines`);

////////////////////////////////////////
// Taking Decisions: if / else Statements
///////////////////////////////////////
// const age = 15;

// if (age >= 18) {
//   console.log("Elmar can start driving license 🚗"); //click windows + . to add emoj
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
// `Sorry Elmar, you need ${yearsLeft} more years before your driving license 🚗.`
//   );
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

////////////////////////////////////////
// JavaScript Fundamentals – Part 1
// Coding Exercise 2: CHALLENGE #2
////////////////////////////////////////

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

// /* Write your code below. Good luck! 🙂 */

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

////////////////////////////////////////
// Type Conversion and Coercion
////////////////////////////////////////

// Type Conversion
// In programming, type conversion refers to changing one data type into another. It can be explicit (forced by programmer), or implicit (done automatically
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Elmar"));
// console.log(typeof NaN); //invalid number

// console.log(String(23), 23);

// // Type Coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// let n = "1" + 1; // '11'
// n = n - 1; // 11 - 1 = 10
// console.log(n);

////////////////////////////////////////
// Truthy and Falsy Values
////////////////////////////////////////
//  5 falsy values: 0, '', undefined, null, NaN
// Everything else is truthy value
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Elmar"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// // But when exactly does JavaScript do type coercion
// // to booleans?
// // Well, it happens in two scenarios.
// // First, when using logical operators, and second in
// // a logical context, like for example,
// // in the condition of an if else statement.

// const money = 110;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// // another use case for this truthy and falsy values is
// // to check if a variable is actually defined or not.
// // And this might seem like a weird use case
// // but you will see later in the course that it actually makes
// // a lot of sense sometimes to test
// // if something actually exists or not.

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("OOPS! Height is UNDEFINED");
// }

////////////////////////////////////////
// Equality Operators: == vs. ===
// ////////////////////////////////////////
// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict) ");

// Now, besides this triple equal,
// we also have a double equal.
// So the difference is
// that this one here with the three equals
// is called the strict equality operator.
// It's strict,
// because it does not perform type coercion.
// And so it only returns
// to when both values are exactly the same.

// ==  the double equal does type coercion.
// 18 === 18;
// true;

// 18 === 19
// false

// === the triple equals does not perform type coercion.
// "18" == 18;
// true;

// if (age == 18) console.log("You just became an adult :D (loose) ");

// So as a general rule for clean code,
// avoid the loose equality operator
// as much as you can.
// So when comparing values,
// always use strict equality
// with the three equal signs,
// This is something
// that actually most JavaScript developers advise you to do.
// So it's a good rule for sure.
// Even if we actually need type conversion.
// In that case,
// it's better to convert the value manually
// before the comparison
// than relying on the double equal operator.
// Some always default to the triple equal operator
// and pretend that ==  doesn't even exist. Okay?

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {// '23' == 23
//   console.log("Cool! 23 is an amazing number!");
// }

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 23 === 23
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number!");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number!");
// } else {
//   console.log("Number is not 23 or 7");
// }

// // != loose version;    !== strict version
// if (favourite !== 23) {
//   console.log("Not 23");
// }

////////////////////////////////////////
// Boolean Logic
////////////////////////////////////////
// See pdf lecture

////////////////////////////////////////
// Logical Operators
////////////////////////////////////////

// const hasDriverLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// // const shouldDrive = hasDriverLicense && hasGoodVision;
// // if (shouldDrive) {
// //   console.log("Sarrah is able to deive!");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = true; //C
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log("Sarrah is able to deive!");
// } else {
//   console.log("Someone else should drive...");
// }

////////////////////////////////////////
// JavaScript Fundamentals – Part 1
// Coding Exercise 3: CHALLENGE #3
////////////////////////////////////////
// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("Dolphins win the trophy 🏆");
// } else if (scoreKoalas > scoreDolphins) {
//   //same as -> scoreDolphins < scoreKoala
//   console.log("Koalas win the trophy 🏆");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both win the trophy 🏆");
// }

////////////////////////////////////////
// The switch Statement
////////////////////////////////////////

// const day = "monday";

// without the break,
// the code simply continues executing

// switch
// switch (day) {
//   case "monday": //  day === 'monday
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if else statement
// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

////////////////////////////////////////
// Statements and Expressions
////////////////////////////////////////
//

// // expressions
// 3 + 4;
// 1991;
// true && false && !false;

// // statements
// if (23 > 20) {
//   const str = "23 is bigger";
// }

// // So my main goal with this lecture is really
// // that you know that statements and expressions exist,
// // and that expressions produce values,
// // and that statements are like full sentences
// // that translate our actions.

////////////////////////////////////////
// The Conditional (Ternary) Operator
// ////////////////////////////////////////
// const age = 2;
// // age >= 18
// //   ? console.log("I like to drink wine 🍷")
// //   : console.log("I like to drink water 💧");

// // And remember that an operator always produces a value.
// // So in other words an operator is an expression, right.

// const drink = age >= 18 ? "wine 🍷" : "water 💧";
// console.log(drink);

// let drink2;

// if (age >= 18) {
//   drink2 = "wine 🍷";
// } else {
//   drink2 = "water 💧";
// }

// console.log(drink2);

// // But using the ternary operator, which produces a value,
// // we can actually have conditionals
// // inside of a template literal.
// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"} `);

// // Now to finish, I just wanted to mention
// // that the ternary operator is not thought as a replacement
// // of if/else statements.
// // We still need if/else all the time.
// // For example when we have bigger blocks of code
// // that we need to execute based on a condition.
// // In that case the ternary operator is not gonna work.
// // But the ternary operator is perfect
// // when we just need to take a quick decision,

////////////////////////////////////////
// JavaScript Fundamentals – Part 1
// Coding Exercise 4: CHALLENGE #4
////////////////////////////////////////
// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

// Test data:
// § Data 1: Test for bill values 275, 40 and 430

// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// GOOD LUCK �

const bill = 430;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
