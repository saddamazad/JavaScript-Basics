// `for in` statement loops through the properties of an `Object`

const person = {fName: "Asif", lName: "Mahmud", age: 28};

for(let prop in person) {
    console.log( prop ); // fName, lName, age

    // dynamic variable syntax
    console.log( person[prop] ); // Asif, Mahmud, 28
}


// this loop method can be used for array as well, but it's not recommended.
// better use the (for), (for of) or (forEach) methods for arrays

const myObj = {
    name: "Azad",
    age: 35,
    cars: [
        {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
        {name: "BMW", models: ["320", "X3", "X5"]},
        {name: "Fiat", models: ["500", "Panda"]}
    ]
};

for(let idx in myObj.cars) { // `for in` loop on Array returns the numeric index of each element
    console.log(myObj.cars[idx].name);
    
    for(let i in myObj.cars[idx].models) {
        console.log(`- ${myObj.cars[idx].models[i]}`);
    }
}
