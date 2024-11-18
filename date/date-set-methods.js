// Set Date methods are used for setting a part of a date
// Set Date methods let us set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object

const d = new Date();

console.log( d.getFullYear() ); // 2024


console.log( d.setFullYear(2020) ); // 1605708434341 ms, Year is set to 2020

console.log( d.getFullYear(), d.getMonth(), d.getDate() ); // 2020, 10, 19


console.log( d.setFullYear(2022, 10, 27) ); // 1669558034341 ms, here 10 = November


// Sun Dec 18 2022 20:10:28 GMT+06
console.log( d.setMonth(11) ); // 1672150181097 ms, here 11 = December



// Thu Dec 15 2022 00:05:16 GMT+06
console.log( 'Date: ' + d.setDate(15) ); // Date: 1671113760217, it's `December` because above we've set the month to 11(Dec)

//console.log( d.getDate(), d.getMonth(), d.getFullYear() ); // 15, 11(Dec), 2022 - current date  >>>  Becuase we've set the date, month and year above

/*  ####  The setDate() method can also be used to `add days` to a date  ####  */

// adding 50 days to the current date, so it would be (`15` + 50) = 65
console.log( d.setDate(d.getDate() + 50) ); // 1675433983864 ms,  **  it's actually `d.setDate(65)`  **

//console.log( new Date(1675433983864) ); // 2023-02-03T14:19:43.864Z, now date is set to `2023-02-03`



// Fri Feb 03 2023 20:13:00 GMT+0600 (Bangladesh Standard Time)
console.log( d.setHours(20) ); // 1675441718618 ms

//console.log( new Date(1675441718618) );


/* #####  Dates can easily be `compared`  ##### */

let text = "";
const today = new Date();
const someday = new Date();

someday.setFullYear(2050, 0, 14); // 0 = January

if (someday > today) {
  text = "Today is before January 14, 2050.";
} else {
  text = "Today is after January 14, 2050.";
}

console.log( text );
