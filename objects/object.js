// Objects should be declared with `const` keyword
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    sleep: function() {
        console.log(`${this.firstName} is sleeping`);
    }
};

console.log( person.firstName + " " + person.lastName );

console.log( person["eyeColor"] ); // "blue" - calling `property` like array index

person.sleep(); // calling methods/functions of the Object


// Add New Property
person.weight = "90 lbs";

console.log( person ); // `weight` property added


// Change/update existing property's value
person.eyeColor = "brown";

console.log( person );


// Delete property
delete person.age;

console.log( person ); // `age` property deleted


let player = {name: "Tamim", type: "Opening Batsman"};

// we can empty an object by setting it to `null`
player = null;

console.log( player ); // null

console.log( typeof player ); // object, though the Object is set to null BUT it's still an Object
