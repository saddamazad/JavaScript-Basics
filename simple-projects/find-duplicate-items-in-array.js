const numbers = [1, 3, 5, 8, 4, 1, 6, 3, 7, 5];

const duplicates = numbers.filter(function(value, index, array) {
    // arr.indexOf() returns the index of the first occurance in the array of the value provided
    return numbers.indexOf(value) !== index;
});

console.log( duplicates );