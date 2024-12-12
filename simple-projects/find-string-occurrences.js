// How many times "ipsum" is used in this sentence and what is the position of the first occurrence

let sentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// `match()` method returns an array containing the results of matching a string against a string (or a regular expression)

let matches = sentence.match(/ipsum/ig); // case in-sensitive and find all occurrences / global search

let occurrences = matches ? matches.length : 0;

console.log( occurrences ); // 4


let position = sentence.search(/ipsum/i); // case in-sensitive

console.log( position ); // 6
