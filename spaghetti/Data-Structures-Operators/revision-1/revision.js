"use strict";




const restaurant =  {
    name: 'Rohim Restora',
    location: 'Mirpur 1, Dhaka, Bangladesh',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Dal vat', 'roti-porota', 'Dal-porota', 'ChaiTea', 'Pani Vat'],
    mainMenu: ['Chicken Curry', 'Biriyani', 'Kacchi'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.starterMenu[mainIndex]]
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

/////////////////////// mutating variables while destructuring objects
let a = 200;
let b = 300;

const obj = {a: 3, b: 2, c: 1};
const {a: d, b: e} = obj;
console.log(d, e);


///////////////// Object DESTRUCTURING
// const {name, location, categories, starterMenu, mainMenu, openingHours} = restaurant;
// console.log(locations);

// const {name: name2, starterMenu, openingHours, lmao = 'lol'} = restaurant;
// console.log(lmao);

// const {menu = [], starterMenu: againMenu} = restaurant;
// console.log(menu, againMenu);

///////////////// ARRAY DESTRUCTURING

// console.log('test');
// console.log('test');

// const arr = [2, 3, 4];
// const a = arr[0];
// console.log(a);


// // destructuring assignment
// const [x, y, z] = arr;
// console.log(x, z);
// console.log(x, z);

// // switching variables
// let [first, ,third] = restaurant.categories;
// console.log(first, third);

// // normal
// // const temp = first;
// // first = third;
// // third = temp;
// // console.log(first, third);

// //best method
// [first, third] = [third, first]
// console.log(first, third);

// // immediately destructuring an function with multiple variables
// console.log(restaurant.order(0, 2));
// const [starterMenuItem, mainMenuItem] = restaurant.order(0, 2);
// console.log(starterMenuItem, mainMenuItem);

// // nester array (one array inside another )
// const nested = ["a", "b", [3, 4]];
// const [i, , j] = nested;
// console.log(i, j);

// // get the values inside the nested array as individual value?
// const [aa, ab, [ac, ad]] = nested;
// console.log(aa, ab, ac, ad);

// // set defaults, how to not get undefined
// const [p = 1, q = 1, r = 1] = [7, 8];
// console.log(p, q, r);
// // output: 7 8 undefined
