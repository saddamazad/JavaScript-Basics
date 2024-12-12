
function longestString(arr) {
    let longestWord = "";

    for(let val of arr) {
        if(val.length > longestWord.length) {
            longestWord = val;
        }
    }

    //return longestWord;

    return [longestWord, arr.indexOf(longestWord)];
}

const names = ["Azad", "Sabbir", "Hamidur", "Rasel"];

//let longestName = longestString(names);

//console.log( longestName );

//console.log( names.indexOf(longestName) );

console.log( longestString(names) );
