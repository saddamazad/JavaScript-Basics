// Splice = সংযুক্ত করান, গেরো দিয়ে দড়ির দুই মুখ যুক্ত করা।
/* Using the `splice()` method we can add/remove elements `ANYWHERE` in the array without leaving any "holes" in the array */

// splice(newElementInsertIndex, removeNumOfElements, $newElement1, newElement2, ...)
/* ###  `splice()` maintains the array indexes after updating the array, it changes the Array that the `splice()` method is applied on  ### */


const fruits = ["Banana", "Orange", "Apple", "Mango"];

/**
 * @params
 * The first parameter (2) defines the position where new elements should be added (spliced in).
 * The second parameter (0) defines how many elements should be removed.
 * The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
 * 
 * @returns - ##  The splice() method `returns an array` with the `deleted items`  ##
 */
fruits.splice(2, 0, "Lemon", "Kiwi"); // add "Lemon" & "Kiwi" to the array starting at index 2, and update the remaining elements index

console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']



const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Guava", "Pineapple"];

// Add two new elements to the array starting from the index `2` and then remove 3 elements AFTER the new elements
let removedFruits = fruits2.splice(2, 3, "Lemon", "Kiwi");

console.log(fruits2); // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Pineapple']

console.log(removedFruits); // ['Apple', 'Mango', 'Guava'] - removed



// With `clever` parameter setting, we can use splice() to remove elements without leaving "holes" in the array

const fruits3 = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];

// Add new element to index `2` and remove 1 element - DON'T pass the element to be added or the 3rd parameter
fruits3.splice(2, 1); // since we didn't pass the 3rd parameter to add the element, it won't add any element BUT it'll remove that (1) element at index (2)

console.log(fruits3); // ['Banana', 'Orange', 'Mango', 'Pineapple']




// ###  toSpliced()  ###
/*
 * The difference between the `toSpliced()` method and the `splice()` method is that 
 * the `toSpliced()` method creates a new array, keeping the original array unchanged, while the `splice()` method altered the original array.
 */
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(1, 2); // start at index (1) and remove (2) elements

// two elements removed from the `months` array and a new array returned
console.log(spliced); // ['Jan', 'Apr'] -    "Feb" & "Mar" removed

// the original `months` array is unchanged
console.log(months); // ['Jan', 'Feb', 'Mar', 'Apr']
