// Map holds 'key-value' pairs where the `keys` can be ANY `datatype`(not only String)
// Map remembers the original `insertion order` of the keys

// we can create a Map by `Passing` an Array to `new Map()` constructor Object
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300], // key-value pairs
    ["oranges", 200]
]);

console.log( fruits ); // { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }



// we can create a Map like this as well and then add/set the key-value pairs
const vegitables = new Map();

// Set Map Values
vegitables.set("Potato", 300); // key-value pairs
vegitables.set("Bean", 200);
vegitables.set(25, 150); // key-value pairs

console.log( vegitables ); // { 'Potato' => 300, 'Bean' => 200, 25 => 150 }


console.log( fruits.size ); // 3



// we can assign Objects as key in a Map
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const newFruits = new Map();

// Add Elements to the Map
newFruits.set(apples, 400);
newFruits.set(bananas, 300); // set the `bananas` object as key
newFruits.set(oranges, 200);

console.log( newFruits.get("apples") ); // undefined, we assigned an Object as key, NOT a string
console.log( newFruits.get(apples) ); // 500
