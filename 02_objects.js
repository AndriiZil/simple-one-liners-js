'use strict';

// Check if multiple objects are equal
const isEqual = (...objects) => objects.every((obj) => JSON.stringify(objects[0]) === JSON.stringify(obj));

console.log(isEqual({name: 'Andrii'}, {name: 'Bob'}, {name: 'Andrii'})); // false
console.log(isEqual({name: 'Andrii'}, {name: 'Andrii'}, {name: 'Andrii'})); // true

// Extract values of a property from an array of objects
const pluck = (objects, property) => objects.map(obj => obj[property]);

console.log(pluck([
    {name: 'Andrii', age: 36},
    {name: 'Oleg', age: 25},
    {name: 'Taras', age: 28},
], 'age')); // 36, 25, 28

// Invert keys and values of an object
const invertOne = (obj) => Object.keys(obj)
    .reduce((res, k) => Object.assign(res, { [obj[k]]: k }), {});

// Or
const invertTwo = (obj) => Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));

// Example
console.log(invertOne({a: '1', b: '2', c: '3'})); // { 1: 'a', 2: 'b', 3: 'c' }
console.log(invertTwo({a: '1', b: '2', c: '3'})); // { '1': 'a', '2': 'b', '3': 'c' }

// Remove all null and undefined properties from an object
const removeNullUndefinedOne = (obj) => Object.entries(obj)
    .reduce((a, [k, v]) => (v == null ? a : ((a[k] = v), a)), {});

const removeNullUndefinedTwo = (obj) => Object.entries(obj)
    .filter(([_, v]) => v != null)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v}), {});

const removeNullUndefinedThree = (obj) => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));

const testObject = {
    id: 1,
    foo: undefined,
    bar: 42,
    text: null,
};

console.log(removeNullUndefinedOne(testObject)); // { id: 1, bar: 42 }

console.log(removeNullUndefinedTwo(testObject)); // { id: 1, bar: 42 }

console.log(removeNullUndefinedThree(testObject)); // { id: 1, bar: 42 }

// Sort an object by its properties

const sort = (obj) => Object.keys(obj).sort().reduce((p, c) => ((p[c] = obj[c]), p), {});

console.log(sort({
    white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#008000',
    blue: '#0000ff',
}));

/**
 *
 * {
      black: '#000000',
      blue: '#0000ff',
      green: '#008000',
      red: '#ff0000',
      white: '#ffffff'
    }
 */

// Check if an object is a Promise
const isPromise = (obj) => Boolean(obj) && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

console.log(isPromise(Promise.resolve())); // true

// Check if an object is an array

const isArray = (obj) => Array.isArray(obj);

console.log(isArray([])); // true
console.log(isArray([1, 2, 3])); // true
