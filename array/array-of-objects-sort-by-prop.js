// Even if objects have properties of different data types, the sort() method can be used to sort the array

// The solution is to write a compare function to compare the `property` values

const cars = [
        { type:"Volvo", year:2016 },
        { type:"Saab", year:2001 },
        { type:"BMW", year:2010 }
    ];

cars.sort(function(a, b) {
    return a.year - b.year; // sorting the array by the objects `year` property
});

console.log( cars );
/*[
    { type: 'Saab', year: 2001 },
    { type: 'BMW', year: 2010 },
    { type: 'Volvo', year: 2016 }
]*/



const cars2 = [
    { type:"Saab", year:2001 },
    { type:"Volvo", year:2016 },
    { type:"BMW", year:2010 }
];

// the `toSorted()` method is a safe way to sort an array without altering the original array
let sortedByYear = cars2.toSorted(function(a, b) {
    return a.year - b.year; // sorting the array by the objects `year` property
});

console.log( sortedByYear );

console.log( cars2 ); // the original `car2` array is unchanged



// Comparing `string` properties is a little more complex:
cars2.sort(function(a, b) {
    let x = a.type.toLowerCase(); // sorting the array by the objects `type` property
    let y = b.type.toLowerCase(); // sorting the array by the objects `type` property

    if (x < y) { return -1; } // ASC, reverse the comparison operator to get DESC
    if (x > y) { return 1; } // ASC, reverse the comparison operator to get DESC
    
    return 0;
});

console.log( cars2 );
