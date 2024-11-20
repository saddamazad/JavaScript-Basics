
const letters = new Set( ["a","b","c"] );

let e = "e";

// add() method
letters.add("d");
letters.add(e);


// values() method
console.log( letters.values() ); // { 'a', 'b', 'c', 'D', 'E' } - SetIterator


// has() method
console.log( letters.has("d") ); // true


for( let val of letters.values() ) {
    console.log( val );
}
// 'a', 'b', 'c', 'D', 'E'
