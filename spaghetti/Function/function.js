"use strict";

// ------------- Closures -----------------
// const secureBooking = function () {
//   let passengerCount = 0;
//   console.log("secure booking executed");

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// // Global Scope
// // secureBooking = </f>
// // booker = <f>

// // Call Stack -- order in which functins were called.
// // Scope Chain -- Order in which functions are written in code
// console.dir(booker);

// ---------------------- Practise ---------------------------
// Calculate the average score for each team, using the test data below

// const calculateAvg = function (value1, value2, value3) {
//   const average = (value1 + value2 + value3) / 3;
//   console.log(average);
// };

// calculateAvg(96, 108, 89);
// calculateAvg(88, 91, 110);

// Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// const dolphinScore = 0;
// const koalaScore = -1;

// if (dolphinScore === koalaScore) {
//   console.log("The match was a draw");
//   // TRUE && TRUE
// } else if (dolphinScore > koalaScore && dolphinScore >= 100) {
//   console.log("The match was won by dolphins");
// } else if (dolphinScore < koalaScore && koalaScore >= 100) {
//   console.log("The match was won by koala");
// } else {
//   console.log("something went wrong!");
// }

// --------- UNDERSTAND ( AND && ) ( OR || ) -----------
// const dolphinScore = 900;
// const koalaScore = 90;

// // TRUE && FALSE = FALSE
//   dolphinScore > koalaScore && dolphinScore <= 100

//   // TRUE || False  =  TRUE
//   dolphinScore > koalaScore || dolphinScore >= 100

// const string = "2";
// const number = 2;

// ------------- IIFE -----------------==
// const runOnce = function () {
//   //   console.log("This will never run again.");
// };
// // but we can run this later at any point
// runOnce();

// // so to run a function only once we can do this
// (function () {
//   console.log("This will never run again");
// })();
// // by adding parenthesis we avoided an error aswell as converted it to an expression

// // arrow function
// (() => console.log("This will also never run again"))();

// // const or let inside of a codeblock, encapsulates variables.
// {
//   const isPrivate = "this variable is only accesible from this codeblock";
//   var isPrivateVar = "while this is accessible from outside too";
// }

// console.log(isPrivateVar);
// console.log(isPrivate); // isPrivate is not defined

// ---------- Coding Challenge #1 ---------------------
// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     const answerStore = Number(
//       prompt(`${this.question} \n ${this.options.join("\n")}`)
//     );

//     if (answerStore <= 3 && answerStore === 0) {
//       this.answers[0]++;
//     } else if (answerStore === 1) {
//       this.answers[1]++;
//     } else if (answerStore === 2) {
//       this.answers[2]++;
//     } else if (answerStore === 3) {
//       this.answers[3]++;
//     } else {
//       console.log("Enter a number between 0 and 3");
//     }
//     // update answer property,
//     // if 3, then add 1 at position 3 of array,
//     // check if input is number and it's between 0 and 3
//     this.displayResults();
//     this.displayResults("string");
//   },
//   displayResults(type = "array") {
//     if (type === "array") {
//       console.log(this.answers);
//     } else if (type === "string") {
//       console.log(`Poll results are ${this.answers.join(", ")}`);
//     }
//   },
// };
// document
//   .querySelector(".poll")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll)); // question, why () without calling returned undefined!
// // addeventlistener like functions will always point to the element that it;s attached to.. to fix this, we can use .bind(poll)

// // test data
// // § Data 1: [5, 2, 3]
// // § Data 2: [1, 5, 3, 9, 6, 1]

// poll.displayResults.call({ answers: [3, 4, 5] }, "string");
// poll.displayResults.call({ answers: [3, 4, 5] });

// ---------- The Bind Method --------------
// const biman = {
//   airline: "Biman Bangladesh Airlines",
//   iataCode: "BM",
//   bookings: [],
//   //   book: function() {}   old way of writing
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     console.log(this.bookings);
//   },
// };

// const novoAir = {
//   airline: "NovoAir",
//   iataCode: "NA",
//   bookings: [],
// };

// const USBangla = {
//   airline: "US Bangla Airlines",
//   iataCode: "USB",
//   bookings: [],
// };

// // const book = biman.book;
// // book.call(biman, 734, "Alif Hossain");
// // book.call(novoAir, 834, "Mim Akhter");

// const bookNA = biman.book.bind(novoAir);
// const bookUSB = biman.book.bind(USBangla);
// const bookBM = biman.book.bind(biman);

// bookNA(938, "Shamim Shorkar");
// bookUSB(234, "Arif Azad");
// bookBM(234, "Alif Hossain");

// // we can just one argument.. the other may be defined
// const bookNA717 = biman.book.bind(novoAir, 717);
// bookNA717("Mr. Kashem");

// // with event listeners
// biman.planes = 300;
// biman.buyPlane = function () {
//   //   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// // biman.buyPlane(); // here this keyword is biman

// // document.querySelector(".buy").addEventListener("click", biman.buyPlane);
// // for this to point to biman object we can use the bind method
// document
//   .querySelector(".buy")
//   .addEventListener("click", biman.buyPlane.bind(biman));

// // partial application
// // const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 100));

// // const addVAT = addTax.bind(null, 0.23);
// // // addVAT = value => value + value * 23;
// // console.log(addVAT(100));

// // const calculateTaxValue = (rate, value) => value * rate;
// // console.log(calculateTaxValue(0.2, 100));

// // const calculateVATValue = calculateTaxValue.bind(null, 0.5);
// // console.log(calculateVATValue(500)); // should return 500

// const addTaxRate = function (rate) {
//   return function (value) {
//     console.log(rate * value);
//   };
// };

// addTaxRate(0.1)(200);
// // challenge complete

// -------------------- Side Challenges  -----------------------
// const dolphinsScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];

// // Calculate average scores
// const calculateAvg = function (value1, value2, value3) {
//   const average = (value1 + value2 + value3) / 3;
//   console.log(average);
// }; // you have created the function 10/10

// // but we have to declare the function, and store the average values in a variable.

// calculateAvg(96, 108, 89); // this is wrong, it's neither a function or a variable.
// to declare a variable you must use const, var or let
// to call a function you must use callback () parenthesis
// now this is a function callback. we are calling this function in other words executing them.
// now we must put the values inside of the parenthesis
// now we got the output: 97.66666666666667 by calling this function
// now u try to call the function, i will be watching ur screen

// are you watching?

//    calculateAvg = [88, 91, 110];

// let winner;
// if (dolphinsAvgScore > koalasAvgScore) {
//   winner = 'Dolphins';
// } else (koalasAvgScore > dolphinsAvgScore) {
//   winner = 'Koalas';
// }

// console.log("The winner of the competition is:", winner);

// // challenge 3
// //Dolphins score 96, 108 and 89.
// // Calculate the average score for each team
// // are you watching?
// // we are going to calculate the average for dolphins

// // doing it in a variable.
// const dolphinAverage = (96 + 108 + 89) / 3; // formula to calculate average
// console.log(dolphinAverage); // output: 97.66666666666667

// // doing it in a function
// // first, we declared the function, used 3 parameters value1-value3.. it can recieve only three values..
// const calculateAvg = function (value1, value2, value3) {
//   const average = (value1 + value2 + value3) / 3;
//   console.log(average);
// };

// calculateAvg(96, 108, 89); //
// // output is: 97.66666666666667
// // are you watching?
// // this was calculated for team dolphins, we can calculate for team koala instead of writing a long ass code like this > const dolphinAverage = (96 + 108 + 89) / 3;
// calculateAvg(88, 91, 110);
// // output: 96.33333333333333
// // Koalas score 88, 91 and 110

// // Compare the team's average scores to determine the winner of the competition,
// // from our past code 1 challenge, it's the same as that.
// // use if else statement to do it.

// // and print it to the console. Don't forget that there can be a draw, so test for that
// // same thing, but leave draw for later.. first just do simple comparsion and see who wins.. we will work on draw later!
// // good luck >:)
// // as well (draw means they have the same average score)

// // watching this carefully. gonna teach you how function works.
// // lets create a very simple function, which recieved a name and prints it to the console.
// // first we decalre a variable, then we store the function values inside of it.

// const functionToPrintName = function (firstName, lastName) {
//   console.log(`your first name is ${firstName} and lastname is ${lastName}`); // do you understand what I did?
// }; // then we declare the function. Inside of the parenthesis we put parameters for the function. to explain a parameter, it's kind of placeholder.. u will understand soon! inside of the curly braces, we do our thing, telling function what to do basically.
// // let's print the names. we use backtick inside of console.log(``)
// // to print variables, or do mathematical operations..
// // now we can call this function as much time as we want, using different peoples names.

// functionToPrintName("Alif", "Hossain");
// functionToPrintName("Rajib", "Shawon");
// remember the parameters in the function? that can take two values..
// now while we call the function we can pass on two arguments.. here  'Alif', 'Hossain' and 'Rajib', 'Shawon'
// I am gonna execute them now

// output:
// your first name is Alif and lastname is Hossain
// your first name is Rajib and lastname is Shawon
// do you understand?
// we can do more with the function.. for example in the challenge,
// it's asking to calculate the average for each time.. if we use variables then it will take us forever! but with function we can just create one and call as many time as needed.. for as many team as they want.

// for team 2

// // bmi calculator #1

// const markHeight = 1.69;
// const markWeight = 78;

// const johnHeight = 1.95;
// const johnWeight = 92;

// const marksBmi = markWeight / (markHeight * markHeight);
// console.log(marksBmi); // output: 27

// const johnBmi = johnWeight / (johnHeight * johnHeight);
// console.log(johnBmi); // output: 24

// // clearly mark has higher bmi
// // now we can use boolean values to see if john or mark has higher bmi.
// // boolean values are either true or false.
// // we can use conditional operator or if else statement to check if john or mark has higher bmi
// // do you know about boolean values? what about if else statement?
// // alright check this

// // let me tell you this,
// if (marksBmi > johnBmi) {
//   console.log(`mark has higher bmi of ${marksBmi}`); // right, this one will be executed. because marksBmi is higher, and our condition is if marksBmi is higher then execute this
// } else {
//   // else execute this... let's see!!
//   console.log(`john has higher bmi of ${johnBmi}`); // this ?
// }

// // this is the output: mark has higher bmi of 27.309968138370508
// // do you understand now? I will give you the code

// // do you understand what I did here?
// // when my mic gets fixed I can.. explain better.. it can be after 5/6 hours :p
// // tell me what the result will be? which one of those two is going to be executed?
// //

// ---------- The Call and Apply Method ----------------
// const biman = {
//   airline: "Biman Bangladesh Airlines",
//   iataCode: "BM",
//   bookings: [],
//   //   book: function() {}   old way of writing
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//     console.log(this.bookings);
//   },
// };

// biman.book(737, "Alif Hossain");
// biman.book(349, "Asif Hossain");

// const novoAir = {
//   airline: "NovoAir",
//   iataCode: "NA",
//   bookings: [],
// };

// const book = biman.book;
// book(23, "alif");  // this will return undefined. because this.something is not defined here.
// it's just a regular function call

// const book = biman.book;
// // books(456, "Namid");  // broprob:
// biman.book(3434, "sattar");

// book.call(novoAir, 234, "Darkul");
// // a function is really just an object.. objects have methods and function can have methods too

// book.call(biman, 345, "Rajib Hasan Shawon");

// const USBangla = {
//   airline: "US Bangla Airlines",
//   iataCode: "USB",
//   bookings: [],
// };

// book.call(USBangla, 888, "Mr. Sakib");

// // Apply Method
// const flightData = [900, "Islam Nomin"];
// book.apply(novoAir, flightData);
// // but we can use call and spread operator. so it's not used anymore
// book.call(novoAir, ...flightData);

// -------- Functions Returning Functions  ---------
// create a function that returns a new function
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

// const greeterHey = greet("Hey"); // greeterHey is the value of greet. so it's also a function. and we can use it outside.

// greeterHey("Alif"); // output: Hey, Alif

// greet("Assalamu alaikum,")("Alif");
// // we call greet function, after calling we have another returned function inside of it. so we can call it again.

// rewriting using only arrow function
// const greet = (greet) => (name) => console.log(`${greet}, ${name}`);

// greet("hi")("alif");

// --- Functions accepting callback functions  ---
// oneWord replaces all the spaces in a word
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// upperFirstWord("hello my name is Alif Hossain");

// // higher order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformer string: ${fn(str)}`);
//   console.log(`Transformed by: name property is ${fn.name}`);
// };

// transformer("Hello guy how are you?", upperFirstWord); // upperFirstWord is an callback function. we call them later on the transformer function!
// transformer("Hello guy how are you?", oneWord);

// const danger = function () {
//   console.log("⚠️");
// };

// document.body.addEventListener("click", danger); // here addEvenetListener is an higher order function while the danger is a callback function

// js uses callback all the time

// ["alif", "asif", "shamim", "ninja"].forEach(danger);

// --- How passing arguments works Value Vs Reference ---
// const flight = "LH234";
// const alif = {
//   name: "Alif Hossain",
//   passport: 234343356,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = "LH999"; // name change didn't affect original flight variable.because its a primitive data type.
//   passenger.name = "Mr. " + passenger.name; // this has affected the original alif vairable

//   if (passenger.passport === 234343356) {
//     alert("Checked in");
//   } else {
//     alert("Wrong Passport!");
//   }
// };

// checkIn(flight, alif);
// console.log(flight);
// console.log(alif);

// // is the same as doing...
// const flightName = flight;
// const passenger = alif; // when we copy an object like this, we are really copying the reference to that object in the memory. They both point the same object in memory.

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(alif);
// checkIn(flight, alif);

// ---------- Default Parameters ------------

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers // we can also use other parameters that were set before it
// ) {
//   // ES6

//   // ES5
//   //   price = price || 199;
//   //   numPassengers = numPassengers || 1;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);

//   bookings.push(booking);
// };

// createBooking(123);
// console.log(bookings);

// createBooking("Boeing737", undefined, 100);
