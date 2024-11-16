// arr.forEach() - it takes a function in the parameter and executes the function on each element of the array
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFuncForEach);

// `function myFuncForEach(value) {}` will also work, single parameter
function myFuncForEach(value, index, array) { // we can skip the (index, array) params if they are not used inside the function
  txt += value + "<br>";
}

console.log(txt);



// arr.map() - it takes a function in the parameter and executes the function on each element of the array
// The function passed in the parameter must return something
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myMapFunction); // arr.map() creates a NEW array

function myMapFunction(value, index, array) {
  return value * 2; // MUST return something, can't execute console.log() or HTML code
}

console.log(numbers2); // [90, 8, 18, 32, 50]
//console.log(numbers1); // the original array is unchanged



// arr.filter() - it takes a function in the parameter and executes the function on each element of the array
// The function passed in the parameter must return something
const over18 = numbers1.filter(myFilterFunction); // arr.filter() creates a NEW array containing the filtered elements

function myFilterFunction(value, index, array) { // we can skip the (index, array) params if they are not used inside the function
  return value > 18; // MUST return something, can't execute console.log() or HTML code
}

console.log(over18); // [45, 25]



// ** arr.reduce() ** - this method runs a function on each array element to produce (reduce it to) a SINGLE value
// The reduce() method does NOT reduce the `original array`
// The reduce() method works from left-to-right in the array. For right-to-left there is another method `reduceRight()`
const numbersRedu = [45, 4, 9, 16, 25];

/**
 * @Params
 * total - the initial value / previously returned value
 * value - the current item value
 * index - the current item index
 * array - the array itself
 */

let sum = numbersRedu.reduce(myReduceFunction); // single value or the sum is returned

// the initial value for the `total` parameter is `0`(ZERO) by default, we can set/assign an initial value if needed
function myReduceFunction(total, value, index, array) {
  return total + value; // MUST return something, we can do any kind of calculation here like multiplication, division etc.
}

console.log(sum); // 99

// we can set an initial value for the `total` parameter instead of the default `0`
let sumWithInitValue = numbersRedu.reduce(myReduceFunction, 50); // setting the initial value of the `total` parameter to "50"

console.log(sumWithInitValue); // 149


// arr.reduceRight() - it works from right-to-left in the array
let sumFromRight = numbersRedu.reduceRight(myReduceFunction);

console.log(sumFromRight); // 99




// arr.every() - this method checks if `ALL` array values pass a test/condition and returns true/false
const numbersEvSm = [45, 4, 9, 16, 25];

let allOver15 = numbersEvSm.every(myEverySomeFunction);

function myEverySomeFunction(value, index, array) {
  return value > 15;
}

console.log(allOver15); // false, BECAUSE the array has few elements that are below 15



// arr.some() - this method checks if `ANY` array value pass a test/condition and returns true/false
let anyOver15 = numbersEvSm.some(myEverySomeFunction);

console.log(anyOver15); // true, BECAUSE the array has few elements that are above 15



// Array.from() - here `Array` is the GLOBAL array object of JavaScript
// This method creates an array from ANY `ITERABLE` object, we know objects are NOT iterable by default in JavaScript
// We know "string" is a kind of `iterable` object
let strArr = Array.from("ABCDEFG");

console.log( strArr ); // ['A', 'B', 'C', 'D', 'E', 'F', 'G']



// There are few more methods like:
// - arr.indexOf(), arr.lastIndexOf(), arr.includes(), arr.keys(), arr.entries() etc.

// - array Spread (...) - The `...` operator expands an iterable (like an array) into more elements

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];

const yearQ1 = {...q1}; // converting an array into object`{}` using the ...`spread` operator

console.log(yearQ1); // { '0': 'Jan', '1': 'Feb', '2': 'Mar' }

//const yearQ1Q2Obj = {...q1,...q2};  // THIS DOESN'T WORK, can't join multiple arrays into an object



const person = {name: "Asif", age: 30, title: "Sr. Manager"};

let personArr = Object.entries(person); // making the object iterable/array

console.log(personArr); // [ ['name', 'Asif'], ['age', 30], ['title', 'Sr. Manager'] ]



const yearQ1Q2 = [...q1,...q2]; // creating an array from 2 arrays

console.log(yearQ1Q2); // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
