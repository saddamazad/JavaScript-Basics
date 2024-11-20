
const fruits = new Map([
    ["apples", 300],
    ["grapes", 400], // key-value pairs
    ["oranges", 200]
]);

fruits.forEach(function(value, key) { // 1st param is `value`, 2nd one is `key`
    console.log(`${key} = ${value}`);
});


// `entries()` method returns an `iterator object` with the [key,values] in a map
let fruitsIterator = fruits.entries();

/*
for(let expFol of fruitsIterator) {
    console.log( expFol ); // [ 'apples', 300 ], [ 'grapes', 400 ], [ 'oranges', 200 ]

    console.log( expFol[0] ); // apples, grapes, oranges
    console.log( expFol[1] ); // 300, 400, 200
}
*/

// we can rewrite the above loop like this to directly get the `key` and `value` from the Element
for(let [key, value] of fruitsIterator) {
    console.log( `Destructured: ${key} = ${value}` );
}


// `keys()` method returns an `iterator object` with the Keys in a map
for (let key of fruits.keys()) {
    console.log( key ); // apples, grapes, oranges
}


// `values()` method returns an `iterator object` with the Values in a map
for (let value of fruits.values()) {
    console.log( value ); // 300, 400, 200
}

