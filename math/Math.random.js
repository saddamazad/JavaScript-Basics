// Math.random() returns a `random number` between 0 (inclusive),  and 1 (exclusive)
// Math.random() `always` returns a number `lower` than 1


// Math.random() used with Math.floor() can be used to return `random integers`

// Returns a random integer from 0 to 9:
Math.floor( Math.random() * 10 );

// Returns a random integer from 0 to 10:
Math.floor( Math.random() * 11 );

// Returns a random integer from 0 to 99:
Math.floor( Math.random() * 100 );

// Returns a random integer from 0 to 100:
Math.floor( Math.random() * 101 );


// Returns a random integer from `1` to 10:
Math.floor( Math.random() * 10 ) + 1;

// Returns a random integer from `1` to 100:
Math.floor( Math.random() * 100 ) + 1;



// This function always returns a random number between min (included) and max (excluded)
function getRndmInteger(min, max) {
    return Math.floor( Math.random() * (max - min) ) + min;
}


// This function always returns a random number between min and max (both included)
function getRndmIntegerInc(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

console.log( getRndmIntegerInc(10, 20) ); // 17, 19, `10`, 12, `20`, 18 (min 10, max 20 included in the random numbers)

console.log( getRndmInteger(10, 20) ); // 13, 11, 14, `10`, 18, 12 (min 10 included in the random numbers, BUT not the max 20)
