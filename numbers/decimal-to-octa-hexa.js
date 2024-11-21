
// Deciamla numbers base is `10` - Because tehre are TEN numbers 0,1,2,3,4,5,6,7,8,9
// Binary numbers base is `2` - Because there are TWO numbers 0 & 1
// Octal numbers base is `8` - Because tehre are EIGHT numbers 0,1,2,3,4,5,6,7
// Hexadecimal numbers base is `16` - Because there are SIXTEEN numbers 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
// - A = 10, B = 11, C = 12, D = 13, E = 14, F = 15


let myNumber = 32;

// we can convert Decimal numbers to Binary, Octal, Hexadecimal etc. using the `toString()` function by passing the number system's base in the parameter

console.log( myNumber.toString(2) ); // 100000, Binary value - Pass the number system base in the parameter
console.log( myNumber.toString(16) ); // 20, Hexadecimal value
console.log( myNumber.toString(8) ); // 40, Octal value



// convert `binary` to decimal

let bin32 = 0b100000; // `0b`(zero b) is the prefix to declare/identify a binary number

console.log( bin32.toString(10) ); // 32



// convert `octal` to decimal

let oct32 = 0o40; // `0o`(zero o) is the prefix to declare/identify an octal number

console.log( oct32.toString(10) ); // 32



// convert `hexadecimal` to decimal

let hex32 = 0x20; // `0x`(zero x) is the prefix to declare/identify a hexadecimal number

console.log( oct32.toString(10) ); // 32
