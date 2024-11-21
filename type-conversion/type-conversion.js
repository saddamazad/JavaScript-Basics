// Converting String to Number

console.log( Number("525.8") ); // 525.8

console.log( Number(" ") ); // 0

console.log( Number("") ); // 0

console.log( Number("99 88") ); // NaN, because there is a sapce between the numbers

console.log( Number("John") ); // NaN, because letters can't be converted to numbers

// we can use built-in methods

console.log( parseInt(12.8) ); // 12
console.log( parseInt("15.35") ); // 15

console.log( parseFloat("50.75") ); // 50.75
console.log( parseFloat("$70.42") ); // NaN,because there is a `$` character

// The `unary + operator` can be used to convert a variable to a number
let y = "5";
let x = + y; // here `+` is UNARY operator as it has only one operand 'y`, + converts the `y` variable into Number

console.log( x ); // 5
console.log( +y ); // 5



// Converting Numbers to String

console.log( String(100 + 25) ); // "125"

console.log( String(80) ); // "80"

// we can use the `.toString()` method to convert ANY data type to String

console.log( (500).toString() ); // "500"

console.log( x.toString() ); // "5"



// Converting Dates to Numbers & Strings

let d = new Date();

console.log( Number( d ) ); // 1732190697828, (ms)

// The date method getTime() does the same

console.log( d.getTime() ); // 1732190697828, (ms)


console.log( d ); // 2024-11-21T12:17:29.121Z

console.log( String(d) ); // "Thu Nov 21 2024 18:11:07 GMT+0600"

console.log( d.toString() ); // "Thu Nov 21 2024 18:11:07 GMT+0600"


let e = Date(); // we're not using the `new` keyword here, it can be ommited

console.log( e ); // Thu Nov 21 2024 18:11:07 GMT+0600



// Converting Booleans to Numbers & Strings

console.log( Number(false) ); // 0

console.log( Number(true) ); // 1

console.log( String(false) ); // "false"

console.log( String(true) ); // "true"

console.log( false.toString() ); // "false"

console.log( true.toString() ); // "true"



// Converting Numbers to Booleans

console.log( Boolean(1) ); // true

console.log( Boolean(0) ); // false



// Automatic Type Conversion

console.log( 5 + null ); // 5, because null is converted to 0

console.log( "5" + null ); // "5null", because null is converted to string "null"

console.log( "5" + 2 ); // "52", String gets priority when the `+` operator is used, so it converts the `2` to a String as well.

console.log( "5" - 2 ); // 3, Number get priority when the `-` operator is used, so it converts the `5` to a Number as well

console.log( "5" * "2" ); // 10, it converts both the operands to Numbers, because logically we can make subtraction(-), multiplication(*) etc. operations only on Numbers
