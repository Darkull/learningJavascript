"use strict";

// ---------- The Bind Method --------------
const biman = {
  airline: "Biman Bangladesh Airlines",
  iataCode: "BM",
  bookings: [],
  //   book: function() {}   old way of writing
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    console.log(this.bookings);
  },
};

const novoAir = {
  airline: "NovoAir",
  iataCode: "NA",
  bookings: [],
};

const USBangla = {
  airline: "US Bangla Airlines",
  iataCode: "USB",
  bookings: [],
};

// const book = biman.book;
// book.call(biman, 734, "Alif Hossain");
// book.call(novoAir, 834, "Mim Akhter");

const bookNA = biman.book.bind(novoAir);
const bookUSB = biman.book.bind(USBangla);
const bookBM = biman.book.bind(biman);

bookNA(938, "Shamim Shorkar");
bookUSB(234, "Arif Azad");
bookBM(234, "Alif Hossain");

// we can just one argument.. the other may be defined
const bookNA717 = biman.book.bind(novoAir, 717);
bookNA717("Mr. Kashem");

// with event listeners
biman.planes = 300;
biman.buyPlane = function () {
  //   console.log(this);

  this.planes++;
  console.log(this.planes);
};

// biman.buyPlane(); // here this keyword is biman

// document.querySelector(".buy").addEventListener("click", biman.buyPlane);
// for this to point to biman object we can use the bind method
document
  .querySelector(".buy")
  .addEventListener("click", biman.buyPlane.bind(biman));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 100));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 23;
console.log(addVAT(100));

const calculateTaxValue = (rate, value) => value * rate;
console.log(calculateTaxValue(0.2, 100));

const calculateVATValue = calculateTaxValue.bind(null, 0.5);
console.log(calculateVATValue(500)); // should return 500

// -------------------- Side Challenges  -----------------------
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
