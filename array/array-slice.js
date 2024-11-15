// The `slice()` method slices(cuts) out a piece of an array into a `new array`
// The `slice()` method does not remove any elements from the source/original array.

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

/**
 * @params
 * startIndex (required) - the start position(index) of the slice/cut
 * endIndex (optional) - up to the end position(index) of the slice/cut (But not including)
 */
const citrus = fruits.slice(3); // it'll slice/cut the array starting at index (3) and return the remaining elements

console.log(citrus); // ['Apple', 'Mango']




const citrus2 = fruits.slice(1, 4); // it'll slice/cut the array starting at index(1) and end the slice/cut `BEFORE` index(4) and return the sliced elements as a new array

console.log(citrus2); // ['Orange', 'Lemon', 'Apple']
