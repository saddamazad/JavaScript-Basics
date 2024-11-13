
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
