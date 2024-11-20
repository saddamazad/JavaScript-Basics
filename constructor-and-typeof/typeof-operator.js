// The typeof `operator` returns the 'data type' of a variable or an expression

console.log( typeof 1234n ); // bigint

console.log( typeof Symbol() ); // symbol

console.log( typeof x ); // undefined, since `x` var isn't defined yet



console.log( typeof null ); // object,  that's weird :)

console.log( typeof {name:'John', age: 32} ); // object

console.log( typeof [1,2,3,4] ); // object,  `Array` is also an object in JS



console.log( typeof new Map() ); // object

console.log( typeof new Set() ); // object

console.log( typeof function (){} ); // function,  it's also an object internally in JS, BUT function is a SPECIAL type object

console.log( typeof 3.14 ); // number

console.log( typeof "John" ); // string

console.log( typeof false ); // boolean
