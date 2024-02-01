"use strict";

const restaurant = {
  name: "Rohim Restora",
  location: "Mirpur 1, Dhaka, Bangladesh",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Dal vat", "roti-porota", "Dal-porota", "ChaiTea", "Pani Vat"],
  mainMenu: ["Chicken Curry", "Biriyani", "Kacchi"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = "20:00",
  }) {
    console.log(
      `Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  //   orderPizza: function (mainIng, ...optionalIng) {
  //     console.log(`here is your delicious pizza with ${mainIng} and ${optionalIng}`);
  //   },

  orderPizza: function (mainIng, ...optionalIng) {
    console.log(mainIng);
    console.log(optionalIng);
  },
};

// ----------------- nullish coalescing operator ----------------------

// ----------------- short circuting ----------------------

// console.log(23 || "alif");
// console.log(undefined || null || 0 || "hello world" || 23);

// // const category2 = restaurant.categoriesNOTEXIST
// //   ? restaurant.categoriesNOTEXIST
// //   : 10;
// // console.log(category2);

// restaurant.categoriesNOTEXIST = "something"; // now it exists, but we can do this by short circuting too
// const category2 = restaurant.categoriesNOTEXIST
//   ? restaurant.categoriesNOTEXIST
//   : 10;
// console.log(category2);

// and operator &&
// console.log("hello" && 34 && null && 0 && "alif");

// if (restaurant.orderPizza) {
//   console.log("it exists");
// } else {
//   console.log("it doesn't exists");
// }

// restaurant.orderPizza && console.log("it exists");

// -------------- Rest patterns and parameters ---------------

// restaurant.orderPizza("mushroom", "onion", "chess", "tomato");

// const xIngrediets = [
//   prompt(`pizza main ingredient?`),
//   prompt(`pizza optional ingredient?`),
// ];

// console.log(xIngrediets);

// restaurant.orderPizza(...xIngrediets);

// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a, b, others);

// const [item1, , item3, ...others] = [
//   ...restaurant.categories,
//   ...restaurant.mainMenu,
// ];

// console.log(item1, item3, others);

// const { fri, ...weekdays } = restaurant.openingHours;
// console.log(fri, weekdays);

// const add = function (...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);
// ------------- Spread Operator --------------------------

// const newRestaurant = {
//   founder: "Alif Hossain",
//   foundedIn: 2002,
//   ...restaurant,
// };

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Asif Hossain";

// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// REAL WORLD EXAMPLE

// const ingredients = [
//   prompt("Let's make pasta! Ingredietnt 1?:"),
//   prompt("Let's make pasta! Ingredietnt 2?:"),
//   prompt("Let's make pasta! Ingredietnt 3?:"),
// ];
// console.log(ingredients);

// // console.log(
// //   restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
// // );

// console.log(restaurant.orderPasta(...ingredients));

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "delecious kacchi"]
// const copyCategories = [...restaurant.categories];

// const mergedArr = [...newMenu, ...copyCategories]
// console.log(mergedArr);

// const programmerName = 'Alif Hosssain';
// const letters = [...programmerName, "", "E", "N", "D"];
// console.log(letters);

// --------------- Destructuring Objects ------------------------

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'mirpur 2, dhaka',
//     mainIndex: 'lol',
//     starterIndex: 0,
// })

// restaurant.orderDelivery({
//     address: "hotel le duna",
//     starterIndex: 1,
// })

// const {openingHours} = restaurant;

// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);

// let a = 200;
// let b = 300;

// const obj = {a: 3, b: 2, c: 1};

// ({a, b} = obj);

// console.log(a, b);

// console.log(obj);

// const {name, categories, mainMenu, openingHours} = restaurant;
// console.log(name, categories, mainMenu, openingHours);

// const {name: changedName, categories: changedCategory, mainMenu: changedMainMenu, openingHours: changedOpeningHours} = restaurant;
// console.log(changedName, changedCategory, changedMainMenu, changedOpeningHours);

// defautl value

// const {menu = [], starterMenu: againMenu} = restaurant;
// console.log(menu, againMenu);

// --------------- Destructuring Arrays --------------------------

// console.log(restaurant.order(3, 1));

// const [starterMenu, mainMenu] = restaurant.order(3, 1);
// console.log(starterMenu, mainMenu);

// const nested = ["a", "b", [3, 4]];

// const [i, , j] = nested;

// console.log(i, j);

// const [ab, ac, [ad, ae]] = nested;
// console.log(ab, ac, ad, ae);

// const [p, q, r=1] = [7, 8];
// console.log(p, q, r);

// const arr = [3,4,6];
// const [x, y, z] = arr;

// console.log(x, y, z);
// console.log(x);

// let [first, , second] = restaurant.categories;

// // const temp = first;
// // first = second;
// // second = temp;

// // console.log(second, first);

// [first, second] = [second, first]

// console.log(first, second);
