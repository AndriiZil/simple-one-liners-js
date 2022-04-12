'use strict';

// Check if a number is even or odd

const isEvent = (num) => num % 2 === 0;

console.log(isEvent(12)); // true
console.log(isEvent(5)); // false

// Get a random integer between two numbers
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(random(1, 8)); // 7
console.log(random(5, 10)); // 10

// Get average value of arguments
const average = (...args) => args.reduce((a, b) => a + b) / args.length;

console.log(average(1, 2, 3, 4, 2, 6)); // 3

// Truncate a number to a fixed decimal point

const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);

console.log(round(1.005, 2)); // 1.01
console.log(round(1.555, 2)); // 1.56