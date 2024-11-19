// `for in` statement loops through the properties of an `Object`

const person = {fName: "Asif", lName: "Mahmud", age: 28};

for(let prop in person) {
    console.log( prop ); // fName, lName, age

    // dynamic variable syntax
    console.log( person[prop] ); // Asif, Mahmud, 28
}


// this loop method can be used for array as well, but it's not recommended.
// better use the (for), (for of) or (forEach) methods for arrays
