// Map is an `iterable` Object

const fruits = new Map();

// set() method
fruits.set("Banana", 250);
fruits.set("Mango", 400);
fruits.set(786, 72000);

console.log( fruits instanceof Map ); // true, so it's a Map Object's instance

// get() method
console.log( fruits.get("Banana") ); // 250
console.log( fruits.get(786) ); // 72000


// has() method
console.log( fruits.has("Mango") ); // true


// delete() method
fruits.delete(786);

console.log( fruits ); // { 'Banana' => 250, 'Mango' => 400 }


// clear() method - removes all the elements from a map
fruits.clear();
console.log( fruits ); // Map(0) {}
