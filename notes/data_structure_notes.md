# Spread Operator

- Itterables: arrays, strings, maps, sets. Not Objects.
- multiple values, separated by a comma only expected when passing arguments into a function or building a new array

# Rest Pattern And Parameters

## SPREAD, because on LEFT side of = (assignment operator)

` const arrr = [1, 2, 3, 4, 5];
  const sprdArr = [1, 2, ...[84, 42]];
  console.log(sprdArr);`

## REST, because on LEFT side of =

`const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);
const [pizza, , risotto, ...otherFoods] = [
...restaurant.mainMenu,
...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFoods);`

- Rest element must be the last element.
- thats why, there can be only one rest element in any destructuring assignment.
