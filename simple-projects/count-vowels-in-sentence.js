const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
    let count = 0;

    // we know "string" is also a SPECIAL type of `iterable object`
    // the Array.from() method `creates an array` from an iterable object, we used this in the (array) chapter
    const letters = Array.from(sentence);

    letters.forEach(function(value, index, array) {
        if( vowels.includes(value) ) {
            count++;
        }
    });

    return count;
}

let sentence = "I love JavaScript, React, WordPress and PHP";

console.log( countVowels(sentence) ); // 7

