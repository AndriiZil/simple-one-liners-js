'use strict';

const crypto = require('crypto');

const isRelative = (path) => !/^([a-z]+:)?[\\/]/i.test(path);

// Check if a path is relative
console.log(isRelative('/foo/bar/baz')); // false
console.log(isRelative('C:\\foo\\bar\\baz')); // false
console.log(isRelative('foo/bar/baz.txt')); // true
console.log(isRelative('foo.md')); // true

// Make the first character of a string lowercase
const lowercaseFirst = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

console.log(lowercaseFirst('Hello World')); // 'hello World'

// Repeat a string
const repeat = (str, numberOfTimes) => str.repeat(numberOfTimes);

// Check if a string is a hexadecimal color
const isHexColor = (color) => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);

// Examples
console.log(isHexColor('#012')); // true
console.log(isHexColor('#A1B2C3')); // true
console.log(isHexColor('012')); // false
console.log(isHexColor('#GHIJKL')); // false

// Generate a random string using the Node crypto module
const randomStr = (len = 64) => crypto.randomBytes(32)
    .toString('hex')
    .slice(0, len);

console.log(randomStr(15)); // 73dce85790345eae6f6baa87981373d7e8c0b31d4730b773855c9dcfadf12b45

// Generate a random string
const randomString = () => Math.random().toString(36).slice(2);

console.log(randomString()); // 3v5zvd7fr1j
console.log(randomString()); // aedvlk0se6m
console.log(randomString()); // sis9t2cpaja

// Convert a string to camelCase

const toCamelCase = (str) => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ''));

console.log(toCamelCase('background-color')); // backgroundColor
console.log(toCamelCase('-webkit-scrollbar-thumb')); // WebkitScrollbarThumb
console.log(toCamelCase('_hello_world')); // HelloWorld
console.log(toCamelCase('hello_world')); // helloWorld