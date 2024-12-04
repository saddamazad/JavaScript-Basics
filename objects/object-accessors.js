// Getter and Setter are memory efficient instead of the regular functions/methods inside an Object

// The actual/initialized Object doesn't store the function definations when they are defined using getter and setter
// - instead the Object just stores the result returned by the getter or setter

// These functions are only activated/accessible when they are called/used from the actual Object which is initialized


const myObject = {
    firstName: "Saddam",
    lastName: "Azad",
    age: 33,
    language: "",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set lang(lang) {
        this.language = lang;
    }
}

console.log( myObject );

console.log( myObject.fullName ); // we are accessing the Getter like a `property` (NOT like a method)


myObject.lang = "BN"; // setting value for a `property` using the Setter

console.log( myObject );


// add Setter and Getter from outside the Object defination/literal

Object.defineProperty(myObject, "bio", {
    get : function () {
        return this.lastName + " is " + this.age + " years old and speaks " + this.language;
    }
});

Object.defineProperty(myObject, "setAge", {
    set : function (value) {
        this.age = value;
    }
});


console.log( myObject.bio );


myObject.setAge = 30;

console.log( myObject.bio );
