// Arrow functions allow us to write shorter function syntax

function regHello() { // normal/regular function
    return "Hello World!";
}

const helloFuncExp = function() { // function expression
    return "Hello World!";
}


// Arrow Function
ArrowHello = () => {
    return "Hello World!";
}

console.log( ArrowHello() ); // "Hello World!"


// If the function has only ONE statement, and the statement RETURNS a value, we can remove the brackets and the return keyword
hello = () => "Hello World!";

console.log( hello() ); // "Hello World!"


// Arrow function with parameters
helloWithParams = (val1, val2) => "Hello " + val1 + " " + val2;

console.log( helloWithParams("Args Ln", 28) ); // "Hello Args Ln 28"


// if the function has only ONE parameter, we can skip the parentheses as well
helloWithOneParam = val => "Hello " + val;

console.log( helloWithOneParam("One Param") ); // "Hello One Param"
