
try {

    // do something or regular code

    console.log("Hello World!");

    adlert("Welcome!"); // error

    console.log("JS is love"); // it won't be executed, because the above statement causes an error

    Numbers("78 5"); // error

} catch(err) {

    //console.dir( err );

    console.log( err.message ); // catches only the `1st` error and instantly STOPS executing the remaining code/lines

}
