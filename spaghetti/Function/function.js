"use strict";

// --- Functions accepting callback functions  ---
// oneWord replaces all the spaces in a word
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

upperFirstWord("hello my name is Alif Hossain");

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformer string: ${fn(str)}`);
  console.log(`Transformed by: name property is ${fn.name}`);
};

transformer("Hello guy how are you?", upperFirstWord); // upperFirstWord is an callback function. we call them later on the transformer function!
transformer("Hello guy how are you?", oneWord);

const danger = function () {
  console.log("⚠️");
};

document.body.addEventListener("click", danger); // here addEvenetListener is an higher order function while the danger is a callback function

// js uses callback all the time

["alif", "asif", "shamim", "ninja"].forEach(danger);

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
