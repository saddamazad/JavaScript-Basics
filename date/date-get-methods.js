const d = new Date();

console.log( d.getTime() ); // 1731789956419 milliseconds since January 1, 1970

/* Date.now() is a static method of the Date object */
console.log( Date.now() ); // 1731791154709 milliseconds since January 1, 1970

console.log( d.getFullYear() ); // 2024

console.log( d.getMonth() ); // 10, (November) - JavaScript counts month from 0 to 11

console.log( d.getDate() ); // 25

console.log( d.getDay() ); // 0, (Sunday) - JavaScript counts days from 0 to 6 || week starts from Sunday(0)

console.log( d.getHours() ); // 15 (it gives value in 24 hour format, that's `3`PM in 12 hour format)

console.log( d.getMinutes() ); // 54, minutes

console.log( d.getSeconds() ); // 38, seconds

console.log( d.getMilliseconds() ); // 632, ms >> 1000 milliseconds = 1 second


// The get methods above return `Local time` / Browser time


// To get the UTC date/time we have to use the getUTC... functions, UTC time is the same as GMT (Greenwich Mean Time)
// - getUTCHours(), getUTCMinutes(), getUTCMonth(), getUTCDay() etc.


// The `getTimezoneOffset()` method returns the difference (in minutes) between local time an UTC time
let diff = d.getTimezoneOffset();

console.log( `The difference is ${diff} minutes` ); // -360 mins  (360/60 = 6 hours)

