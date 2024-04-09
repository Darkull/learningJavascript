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
};


///////////////// ARRAY DESTRUCTURING

console.log('test');
console.log('test');

const arr = [2, 3, 4];
const a = arr[0];
console.log(a);


// destructuring assignment
const [x, y, z] = arr;
console.log(x, z);
console.log(x, z);

// switching variables
let [first, ,third] = restaurant.categories;
console.log(first, third);

// normal
// const temp = first;
// first = third;
// third = temp;
// console.log(first, third);

//best method
[first, third] = [third, first]
console.log(first, third);

// immediately destructuring an function with multiple variables
console.log(restaurant.order(0, 2));
const [starterMenuItem, mainMenuItem] = restaurant.order(0, 2);
console.log(starterMenuItem, mainMenuItem);
