// The `throw` statement allows us to create a `custom` error
// Syntax:  throw "error message" or an object {name: "ErrorName", message: "error message"}

let x = 12;
//let x = "";

try {

    if( x == "" ) throw "empty";

    if( isNaN(x) ) throw "not a number";

    x = Number(x);

    if( x < 5 ) throw {name: "LowError", message: "too low"};

    if( x > 10 ) throw "too high";

} catch(err) {

    // since it's a custom error and we're thrwoing an String as the error message, we will directly get the error message in `err` parameter

    console.log( err ); // "too high"


    /*  ###  if the "too low" error occurs, we have to print the error using err.message since it throws a custom error Object  ###  */

}

console.log("This is a regular line");
