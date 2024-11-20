// The `constructor` property returns the constructor function for all variables
// It tells us which function is used in the JS core to create something (string, number, array, function, date etc.)

console.log( "Azad".constructor ); // function String()

console.log( (380).constructor ); // function Number()

console.log( false.constructor ); // function Boolean()


// now we can identify which one is an Array and which one is an Object

console.log( [1,2,3].constructor ); // function Array()

console.log( {name: "Azad", age: 33}.constructor ) // function Object()


console.log( new Date().constructor ); // function Date()

console.log( new Set().constructor ); // function Set()

console.log( new Map().constructor ); // function Map()

console.log( function() {}.constructor ); // function Function()



const myArray = [1, 2, 3, 4];
//console.log( typeof myArray ); // object

// How to recognize an Array?
if( myArray.constructor === Array ) {
    console.log(`This is an Array`);
}

console.log( myArray.constructor.toString() ); // "function Array() { [native code] }"

// Manually we can look for the 'Array' word in the converted "string" of the constructor property
if( myArray.constructor.toString().indexOf('Array') > -1 ) {
    // 'Array' word found in the returned String value of the constructor property
}


// How to recognize a Date?
let today = new Date();

if( today.constructor === Date ) {
    console.log(`This is a Date type variable`);
}


// Recognize an `Array` using the built-in `Array.isArray()` method
const fruits = ["apples", "bananas", "oranges"];

console.log( Array.isArray(fruits) ); // true

// Recognize an Array using the `instanceof` operator
console.log( fruits instanceof Array ); // true
