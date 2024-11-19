// randomly print numbers between min to max (both included)

function generateRandomNumber(min, max) {
    // this works fine if the min value is `1`, it doesn't work for higher `min` values
    /*return Math.floor( Math.random() * max ) + min;*/

    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

console.log( generateRandomNumber(1, 6) );
console.log( generateRandomNumber(2, 9) );
