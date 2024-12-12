
const myObject = {
    a: "SHA",
    b: undefined,
    c: "Azad",
    d: false,
    e: "",
    f: "Apple",
    g: 40,
    h: "k",
    i: true,
    j: "Thanks all",
    k: NaN
};

for(let el in myObject) {
    if( ! myObject[el] ) {
        delete myObject[el];
    }
}

console.log( myObject );
