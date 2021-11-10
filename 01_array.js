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
