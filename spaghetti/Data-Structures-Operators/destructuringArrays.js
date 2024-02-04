"use strict";

// example for enhanced object literals
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekDays[1]]: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   [`day: ${3 + 4}`]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const { tue, fri, sat } = openingHours;
// console.log(tue, fri);
// console.log(openingHours);
// -------------- END ---------------

const restaurant = {
  name: "Rohim Restora",
  location: "Mirpur 1, Dhaka, Bangladesh",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Dal vat", "roti-porota", "Dal-porota", "ChaiTea", "Pani Vat"],
  mainMenu: ["Chicken Curry", "Biriyani", "Kacchi"],

  orderfunction(starterIndex, mainIndex) {
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

  //   openingHours,

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
    tue: {
      close: 10,
    },
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIng, ...optionalIng) {
    console.log(mainIng);
    console.log(optionalIng);
  },
};

// ------------------- Optional Chaining (.) ------------------
// if (restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon);
// } else {
//   console.log("restaurant doesn't exits");
// }

// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon);
// }

// // =========== OPTIONAL CHAINING ===============
// // IF certain property doesn't exist, undefine returned immediately

// console.log(restaurant.openingHour?.mon?.open);
// // if .mon exists only then .open property will be read. else undefined will be returend
// a property exists if only it's not null or undefined

// EXAMPLE
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "CLOSED";
//   console.log(`on ${day} we open at ${open}`);
// }

// methods
console.log(restaurant.orderPizzaa?.(0, 1) ?? "method does not exists");

// arrays
const user = [
  {
    name: "alif",
    email: "darkulpro@gmail.com",
  },
];

// console.log(user[1]?.email ?? "user array is empty");

// alternatively
if (user.length > 0) console.log(user[0]?.name);
else console.log("user array empty");

// ======== GARBANGE =======
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open;
//   const close = restaurant.openingHours[day]?.close;
//   console.log(close);
//   if (restaurant.openingHours.open) {
//     console.log(`on ${day} we open at ${open}`);
//   } else if (restaurant.openingHours[day]?.close) {
//     console.log(`on ${day} we close at ${close}`);
//   }
// }
// ======== GARBANGE =======

// ------------------- Enhanced Object Literals ------------------
// up above

// ------------------- Looping Arrays: The FOR-OF Loop ---------------

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // for (let food_menu of menu.entries()) console.log(food_menu);

// // for (let food_menu of menu.entries());
// // console.log([...menu.entries()]);

// for (let food_menu of menu.entries()) {
//   console.log(`${food_menu[0] + 1}: ${food_menu[1]}`);
// }

// for (let food_menu of menu.entries())
//   console.log(`${food_menu[0] + 1}: ${food_menu[1]}`);

// let fruits = ["apple", "banana", "orange"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// const player1Single = game.players[0];

// for (let heroTheSuperstar of player1Single) {
//   console.log(heroTheSuperstar);
// }

// ============================================
// const loopTest = [...game.scored];
// console.log(loopTest);

// for (let toast of loopTest) {
//   console.log(toast);
// }
// ---------- GARBAGE ----------------------
// ============================================

// ----------------- Coding Challenge 01 ----------------------
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // condition 1
// const players1 = game.players[0];
// const players2 = game.players[1];

// // condition 2
// const [gk] = game.players[0];
// console.log(gk);

// const [, ...fieldPlayers] = game.players[0];
// console.log(fieldPlayers);

// // condition 3
// const allPlayers = game.players;
// console.log(allPlayers);

// // condition 4
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// // condition 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// condition 6

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 2, 3);  // example

// const printGoals = function (...playerName) {
//   console.log(`Goals Scored: ${playerName.length} by ${playerName}`);
// };

// printGoals("alif", "darkul", "asif");

// // condition 7
// const winnerTeam = game.team1;
// console.log(winnerTeam);

// const { team1: highChanceWin, team2 } = game.odds;

// winnerTeam &&
//   console.log(`${winnerTeam} has won with the odds of ${highChanceWin}`);

// ----------------- logical assignment operator ----------------------

// const res1 = {
//   name: "Capri Restaurant",
//   numGuests: 0,
// };

// const res2 = {
//   name: "Alif Restaurant",
//   owner: "Alif Hossain",
// };

// checking if res has numGuests, if not then add one
// res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 30;

// // we can also do this with logical assignment operator
// res1.numGuests ||= 10;
// res2.numGuests ||= 30;

// remember the 0 problem? it is a falesy value. we can  use nullish coalescing operator
// with logical operator to fix it
// res1.numGuests ??= 10;
// res2.numGuests ??= 20;

// if there is a owner, we will replace it to anonymous

// res1.owner = res1.owner && "<ANONYMOUS>";
// res2.owner = res2.owner && "<ANONYMOUS>";

// // using the logical assignment operator and

// res1.owner &&= "anonymous";
// res2.owner &&= "anonymous";

// console.log(res1, res2);
// ----------------- nullish coalescing operator ----------------------
// restaurant.numbguests = 0;
// const guests = restaurant.numbguests ?? 10;
// console.log(guests);

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
