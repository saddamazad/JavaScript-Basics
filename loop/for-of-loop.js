// `for of` statement loops through the values of an `iterable object` or an array

/* #### Looping over an Array #### */

const cars = ["BMW", "Volvo", "Mini"];

for (let carItem of cars) {
    console.log( carItem );
}


/* #### Looping over a String/`Iterable` Object #### */

let language = "JavaScript"; // we know string is a built-in `iterable object`

for (let letter of language) {
    console.log( letter );
}
