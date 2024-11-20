// a Set is a collection of `UNIQUE` values, each value can only occur once in a Set


// we can create a Set by Passing an array to `new Set()`
const letters = new Set( ["a","b","c","d","e"] );

console.log( letters );

console.log( typeof letters ); // object
console.log( letters instanceof Set ); // true, so `letters` is an instance of the `Set` object


// or we can create a Set like this as well and then add values
const ucLetters = new Set();

let c = "C";

ucLetters.add("A");
ucLetters.add("B");
ucLetters.add(c);
ucLetters.add("D");
ucLetters.add("E");
ucLetters.add("B"); // this is a Duplicate value, so it won't be added to the Set
ucLetters.add("F");

console.log( ucLetters );


// Loop through the Set elements
ucLetters.forEach(function(value) {
    console.log( value ); // A, B, C, D, E, F
});


// Loop through the Set elements
for(let x of letters) {
    console.log( x ); // a, b, c, d, e
}
