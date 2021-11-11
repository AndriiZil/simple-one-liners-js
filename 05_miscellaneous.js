// Check if the code is running in Node.js
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;

console.log(isNode); // true

// Check if the code is running in the browser
const isBrowser = typeof window === 'object' && typeof document === 'object';

console.log(isBrowser); // false

// Convert URL parameters to object
const getUrlParams = (query) => Array.from(new URLSearchParams(query))
    .reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v }),{});

// Examples
// getUrlParams(location.search); // Get the parameters of the current URL

getUrlParams('foo=Foo&bar=Bar'); // { foo: "Foo", bar: "Bar" }
// Duplicate key
getUrlParams('foo=Foo&foo=Fuzz&bar=Bar'); // { foo: ["Foo", "Fuzz"], bar: "Bar" }

// Detect dark mode
// const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Swap two variables
let a = 3;
let b = 5;
let c;

c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// Or
let q = 7;
let s = 9;
[q, s] = [s, q];

console.log(q); // 9
console.log(s); // 7

// Copy to clipboard
// const copyToClipboard = (text) => navigator.clipboard.writeText(text);

// Example
// console.log(copyToClipboard('Hello World'));

// Convert RGB to Hex
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

// Example
console.log(rgbToHex(0, 51, 255)); // #0033ff

// Generate a random hex color
const randomColorOne = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

// Or
const randomColorTwo = () => `#${(~~(Math.random() * (1 << 24))).toString(16)}`;

console.log(randomColorOne()); // #7e5a5f

console.log(randomColorTwo()); // #76fd7b

const randomIp = () => Array(4)
    .fill(0)
    .map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0))
    .join('.');

console.log(randomIp()); // 121.0.67.149
