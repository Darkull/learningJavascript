"use strict";

// ---------- Default Parameters ------------

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // we can also use other parameters that were set before it
) {
  // ES6

  // ES5
  //   price = price || 199;
  //   numPassengers = numPassengers || 1;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);

  bookings.push(booking);
};

createBooking(123);
console.log(bookings);

createBooking("Boeing737", undefined, 100);
