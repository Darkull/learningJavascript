"use strict";

// example for enhanced object literals
// const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
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

//  ---------------------- String methods practice ---------------------

//  ---------------------- Coding Challenge #4 ---------------------

//  ---------------------- Working with string #3 ---------------------

//  ---------------------- Working with string #2 ---------------------
const airline = "Darku Air Bangladesh";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "aLIf HoSSaiN"; // Alif Hossain
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() +
  passengerLower.slice(1, 5) +
  passengerLower[5].toUpperCase() +
  passengerLower.slice(6);

console.log(passengerCorrect);

// function
const passengerName = function (name) {
  const passenger = `${name}`;
  const passengerLower = passenger.toLocaleLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);
};

passengerName("aLif HoSsain");

// comparing user input email
const email = "alifhossainbits@gmail.com";

const loginEmail = "   AlifHossainBits@GMAIL.CoM  \n";
const lowerEmail = loginEmail.toLowerCase();
const trimmeredEmail = lowerEmail.trim();
console.log(trimmeredEmail);

// in one go
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// compare mail and normal..
console.log(email === normalizedEmail);

const checkMail =

//  ---------------------- Working with string #1 ---------------------
// const airline = "Darku Air Bangladesh";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane.length);
// console.log(airline.length);
// console.log("HelloWorld".length);

// console.log(airline.indexOf("ad"));
// console.log(airline.lastIndexOf("ad"));

// // extract part of string using slice method
// console.log(airline.slice(0, 5)); // its a sub string, doesnt change main string
// // it's impossible to mutate strings because they are primitives

// // without hard coding
// console.log(airline.slice(airline.lastIndexOf("u"), airline.indexOf("D")));
// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// console.log(airline.slice(-4));
// console.log(airline.slice(0));
// console.log(airline.slice(1, 0));

// write a function, that recieves an airplane seat and logs to the console wheather it's middle seat or not

// const middleSeatCheck = function (seatNum) {
//   const middleSeats = new Set(["C1", "C2", "D1", "D2"]);
//   //   if (middleSeats.has(`${seatNum}`)) {
//   //     console.log(`${seatNum} is a Middle Seat`);
//   //   } else {
//   //     console.log(`${seatNum} is not a Middle Seat`);
//   //   }

//   // using ternary operator
//   middleSeats.has(`${seatNum}`)
//     ? console.log(`${seatNum} is a Middle Seat`)
//     : console.log(`${seatNum} is not a Middle Seat`);
// };

// middleSeatCheck("C1");

// jonas solution ( my version )
// const middleSeatCheck = function (seatNum) {
//   // C and D are Middle Seats
//   const CD =
//     seatNum.slice(seatNum.lastIndexOf(-1)) === "D" ||
//     seatNum.slice(seatNum.lastIndexOf(-1)) === "C";

//   CD
//     ? console.log(`${seatNum} is a Middle Seat`)
//     : console.log(`${seatNum} is not a Middle Seat`);
// };

// middleSeatCheck("22C");
// middleSeatCheck("45A");

// Jonas Solution

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === "C" || s === "D") console.log(`${seat} is a Middle Seat`);
//   else console.log(`${seat} is not a Middle Seat`);
// };

// checkMiddleSeat("3D");

// why string method works?
// console.log(typeof new String("AlifHossain").slice(1));
// object

//  ---------------------- Coding Challenge #3 ---------------------

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// 1
// for (const x of gameEvents.values()) console.log(x);

// console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2
// gameEvents.delete(64);
// console.log(gameEvents.has(64));

// 3
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${Math.round(
//     time / gameEvents.size
//   )} minutes `
// );

// // 4

// for (const [minute, event] of gameEvents.entries()) {
//   const firstHalf = minute <= 45 ? "First half" : "Second half";
//   console.log(`${firstHalf} ${minute} : ${event}`);
// }

// for (const [minute, event] of gameEvents) {
//   const half = minute <= 45 ? "FIRST HALF" : "SECOND HALF";
//   console.log(`[${half}] ${minute}: ${event}`);
// }

// 4

//  ---------------------- Which data structure to use ---------------------

//  ---------------------- Maps Fundamentals ---------------------
// const rest = new Map();
// rest.set("alif hossain", "khabar hotel");
// console.log(rest.set(1, "Mirpur, Dhaka"));
// rest.set(2, "London, UK");

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are close");
// console.log(rest);

// // get method
// // console.log(rest.get(2));
// // console.log(rest.get(true));

// const time = 11;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has(1));

// // we can also delete from maps
// rest.delete(1);
// console.log(rest.has(1));
// // rest.clear();
// console.log(rest.size); // length for maps and sets
// console.log(rest);

// // rest.set([1, 2], "test");
// // console.log(rest.get([1, 2]));

// const arry = [1, 2];
// rest.set(arry, "test");
// console.log(rest.get(arry));

// // maps also works with dom elements. cuz dom is a special kind of object?

// const objectMaps = new Map();

// objectMaps.set(document.querySelector("h1"), "heading");
// console.log(objectMaps);

//  ---------------------- Data Structure Sets ---------------------
// const orderSet = new Set(["Pasta", "Pizza", "Risotto", "Pizza", "Pasta"]);
// console.log(orderSet);

// console.log(new Set("stringIterable")); // string are iterable

// console.log(orderSet.size); // it's not length like arrays
// console.log(orderSet.has("Pizza"));

// console.log(orderSet.add("Garlic Bread"));
// console.log(orderSet.delete("Pizza"));
// console.log(orderSet);
// // orderSet.clear();

// for (const x of orderSet) console.log(x);

// // Example
// const staff = ["chef", "manager", "chef", "waiter", "waiter", "chef"];
// const staffUnique = [...new Set(staff)]; // converting set to array
// console.log(staffUnique);
// // converting set to array

//  ---------------------- CODING CHALLENGE #2 ---------------------

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33, // more likely to win
//     x: 3.25, // chances to draw
//     team2: 6.5, // to lose
//   },
// };

// 2.1
// for (const [goalIndex, playerName] of game.scored.entries())
//   console.log(`Goal ${goalIndex + 1}: ${playerName}`);

// 2.2
// const oddx = game.odds;
// console.log(oddx);
// const odd = Object.values(game.odds);
// console.log(odd);

// const odds = Object.values(game.odds);

// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// 2.3
// const [team1, draw, team2] = odds; // can be used as array
// or
// const { team1, x: draw, team2 } = game.odds;
// console.log(`Odd of Victory ${game.team1}: ${team1}`);
// console.log(`Odd of draw ${draw}`);
// console.log(`Odd of Victory ${game.team2}: ${team2}`);

//how jonas did 2.3
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// 2.4

// const scorers = {};
// for (const player of game.scored) {

// }
//   // BONUS
//   // So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {
//   alif: 1,
// };
// for (const player of game.scored) {
//   console.log(player);
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// problem here, dont understand anything after scorers[player]

// // 2.1
// // Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [index, player] of game.scored.entries())
//   console.log(`Goal ${index + 1}: scored by ${player}`);

// //   2.2
// // Use a loop to calculate the average odd and log it to the console (We already
// // studied how to calculate averages, you can go check if you don't remember)
// let average = 0;
// const odds = Object.values(game.odds);
// for (const odd of odds) average += odd;
// console.log(average);
// average /= odds.length;
// console.log(average);
// console.log();

// ///////////////////////////// Challenge 1 retried

// // 1
// const player1 = game.players[0];
// const player2 = game.players[1];
// console.log(player2);

// console.log(`this is darkul, putting a code inside here`);

// // 2
// const [gk] = player1;
// console.log(gk);
// const [, ...fieldPlayers] = player1;
// console.log(fieldPlayers); // .s

// // 3
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// // 4
// const players1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// // 5
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6
// const printGoals = function (...players) {
//   console.log(`goal scored ${players.length} by ${players}`);
// };
// printGoals("alif", "rocky", "sadman");

// // 7
// // true , true || true
// const winnerTeam = (team1 < team2 && game.team1) || game.team2;
// console.log(`${winnerTeam} has more chances of winning.`);

//

//

//

// ----------- Looping Objects: Object Keys, Values, And Entries -------

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `we are open ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property Values
// const values = Object.values(restaurant.openingHours);
// console.log(values);

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

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
// console.log(restaurant.orderPizzaa?.(0, 1) ?? "method does not exists");

// // arrays
// const user = [
//   {
//     name: "alif",
//     email: "darkulpro@gmail.com",
//   },
// ];

// // console.log(user[1]?.email ?? "user array is empty");

// // alternatively
// if (user.length > 0) console.log(user[0]?.name);
// else console.log("user array empty");

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
// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

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
