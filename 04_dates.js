// `h` is an hour number between 0 and 23
const suffixAmPm = (h) => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;

// Add “am/pm” suffix to an hour
console.log(suffixAmPm(0)); // '12am'
console.log(suffixAmPm(5)); // '5am'
console.log(suffixAmPm(12)); // '12pm'
console.log(suffixAmPm(15)); // '3pm'
console.log(suffixAmPm(23)); // '11pm'

// Calculate the number of different days between two dates
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

diffDays(new Date('2014-12-19'), new Date('2020-01-01')); // 1839

// Check if a date is valid
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

console.log(isDateValid("December 17, 1995 03:24:00")); // true
