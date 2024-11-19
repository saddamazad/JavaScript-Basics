const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function countVowels(sentence) {
    let count = 0;

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

