'use strict';

// Compare two arrays
const isEqualOne = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const isEqualTwo = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

console.log(isEqualOne([1, 2, 3], [3, 2, 1])); // false
console.log(isEqualOne([1, 2, 3], [1, 2, 3])); // true

console.log(isEqualTwo([1, 2, 3], [1, 2, 3])); // true
console.log(isEqualTwo([1, 2, 3], [1, '2', 3])); // true

// Convert an array of objects to a single object
const toObjectOne = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

const toObjectTwo = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));

console.log(toObjectOne([
    {id: 1, name: 'Andrii', age: 36},
    {id: 2, name: 'Bobby', age: 24},
    {id: 3, name: 'Elena', age: 23},
], 'id'));

console.log(toObjectTwo([
    {id: 1, name: 'Andrii', age: 36},
    {id: 2, name: 'Bobby', age: 24},
    {id: 3, name: 'Elena', age: 23},
], 'name'));

// Count by the properties of an array of objects
const countBy = (arr, prop) => arr.reduce((prev, cur) => ((prev[cur[prop]] = ++prev[cur[prop]] || 1), prev), {});

console.log(countBy([
    {branch: 'audi', model: 'q8', year: '2019'},
    {branch: 'audi', model: 'rz7', year: '2020'},
    {branch: 'ford', model: 'mustang', year: '2019'},
    {branch: 'ford', model: 'explorer', year: '2020'},
    {branch: 'bmw', model: 'q8', year: '2020'},
], 'branch')); // { audi: 2, ford: 2, bmw: 1 }

// Check if array is not empty
const isNotEmpty = (arr) => Array.isArray(arr) && arr.length > 0;

// Examples
console.log(isNotEmpty([])); // false
console.log(isNotEmpty([1, 2, 3])); // true

// Remove duplicate values in an array

const removeDuplicates = (arr) => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 4, 5])); // [ 1, 2, 3, 4, 5 ]

// Flatten an array
const flatArr = [1, 2, [3, 4], [5, [6]]];
const flat1 = (arr) => [].concat.apply([], arr.map((a) => (Array.isArray(a) ? flat1(a) : a)))

console.log(flat1(flatArr)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(flatArr.flat(Infinity)); // [ 1, 2, 3, 4, 5, 6 ]

const flat2 = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat2(b)] : [...a, b]), []);
console.log(flat2(flatArr)); // [ 1, 2, 3, 4, 5, 6 ]

// Remove falsy values from array
const removeFalsy = (arr) => arr.filter(Boolean);

console.log(removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]));
// [ 'a string', true, 5, 'another string' ]
