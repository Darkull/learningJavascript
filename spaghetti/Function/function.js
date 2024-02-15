"use strict";

// --- How passing arguments works Value Vs Reference ---
const flight = "LH234";
const alif = {
  name: "Alif Hossain",
  passport: 234343356,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999"; // name change didn't affect original flight variable.because its a primitive data type.
  passenger.name = "Mr. " + passenger.name; // this has affected the original alif vairable

  if (passenger.passport === 234343356) {
    alert("Checked in");
  } else {
    alert("Wrong Passport!");
  }
};

checkIn(flight, alif);
console.log(flight);
console.log(alif);

// is the same as doing...
const flightName = flight;
const passenger = alif; // when we copy an object like this, we are really copying the reference to that object in the memory. They both point the same object in memory.
console.log(Math.trunc(Math.random() * 10000000));

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(alif);
checkIn(flight, alif);

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
