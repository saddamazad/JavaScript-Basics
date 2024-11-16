// new Date(year,month,day,hours,minutes,seconds,ms)
// JavaScript counts months from 0 to 11
// JavaScript Stores Dates as Milliseconds, One day (24 hours) is 86400000 milliseconds

const d = new Date();

console.log( d ); // 2024-11-16T19:12:08.252Z
console.log( d.toString() ); // Sun Nov 17 2024 01:37:53 GMT+0600 (Bangladesh Standard Time)



// if only one parameter passed in the Date function, it'll consider that as milliseconds
// so we have to pass at-least two parameters (year,month) if we want to get dates by passing the date format, otherwise it'll calculate milliseconds
console.log(  new Date(2018)  ); /* 1970-01-01T00:00:02.018Z || since (2018) isn't a valid milliseconds, it returns the default 1970 date */

// correct
console.log(  new Date(2018, 12)  ); // 2018-12-31T18:00:00.000Z

let dateString = new Date("2018"); // if string is used in the parameter, the milliseconds issue won't happen
console.log( `String Date: ${dateString}` ); // Mon Jan 01 2018 06:00:00 GMT+0600 (Bangladesh Standard Time)

// year and month specified, rest will be default values
console.log( new Date("2018 Apr").toString() ); // Sun Apr 01 2018 00:00:00 GMT+0600 (Bangladesh Standard Time)

console.log( new Date("03/25/2015").toString() ); // Wed Mar 25 2015 00:00:00 GMT+0600 (Bangladesh Standard Time)



/* JavaScript counts months from 0 to 11 */
console.log(  new Date(2018, 11).toString()  ); // Sat Dec 01 2018 00:00:00 GMT+0600 (Bangladesh Standard Time)
console.log(  new Date(2018, 11).toUTCString()  ); // Fri, 30 Nov 2018 18:00:00 GMT
console.log(  new Date(2018, 10).toDateString()  ); // Thu Nov 01 2018
console.log(  new Date(2018, 7).toISOString()  ); // 2018-07-31T18:00:00.000Z


// Previous Century:
// One and two digit years will be interpreted as 19xx
console.log(  new Date(99, 11, 24)  ); /* 1999-12-23T18:00:00.000Z */


// 500000000000 milliseconds from January 01 1970 UTC is:    { we can pass negative(-) millisecons to get dates before 1970 }
console.log(  new Date(500000000000)  ); /* 1985-11-05T00:53:20.000Z */


