
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
