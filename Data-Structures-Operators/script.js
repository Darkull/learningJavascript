"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// #444 Destructuring Objects

// ........................
const { name, openingHours, starterMenu } = restaurant;
console.log(name, openingHours, starterMenu);

const {
  name: restaurantName,
  openingHours: hours,
  starterMenu: menuItem,
} = restaurant;
console.log(restaurantName, hours, menuItem);

// Default Values
// menuTest is not in the array/object
const { menuTest = [], starterMenu: starters = [] } = restaurant;
console.log(menuTest, starters);

// Mutating variables
let a = 111;
let b = 999;
let c = 1;
const obj = { a: 23, b: 7, c: 14 };

({ a, b, c } = obj);
console.log(a, b, c);

// TODO: Nested Objects
const {
  fri: { open: abc, close: cba },
} = openingHours;
console.log(abc, cba);

// #fff Destructuring Array

// const [dalmon, doraemon] = restaurant.starterMenu;
// console.log(dalmon, doraemon);

// const arr = [2, 3, 4];
// const [as, y] = arr;
// console.log(as, y);

// let [first, second] = restaurant.categories;
// console.log(first, second);

// Switching Variables
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second); // Output = Pizzeria Italian
//not defined error TODO: error script.js:63 Uncaught ReferenceError: first is not defined TODO: Need fixing.

// Array Mutation TODO: Important
// [first, second] = [second, first];
// console.log(first, second); // Output = Italian Pizzeria

// // Calling method from ordering food function
// console.log(restaurant.order(3, 1));

// const [menu1, menu2] = restaurant.order(3, 1);
// console.log(menu1, menu2);

// // nested destructuring

// const nested = [2, 3, [4, 5]];

// // simplly getting the values from nested arrays
// const [i, , j] = nested;
// console.log(i, j);

// // get individual value from the nested array
// const [xa, , [xb, xc]] = nested;
// console.log(xa, [xb]);
