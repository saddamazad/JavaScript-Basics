
const mixedArr = ["SHA", undefined, "Azad", false, "", "Apple", 40, "k", true, "Thanks all", NaN];

let myArray = mixedArr.filter(function(value) {
    if(value) {
        return true;
    }
});

let trueArray = mixedArr.filter(Boolean); // same result like the previous function

console.log( trueArray ); // ['SHA', 'Azad', 'Apple', 40, 'k', true, 'Thanks all']
