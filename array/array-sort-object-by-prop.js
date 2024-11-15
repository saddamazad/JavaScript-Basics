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
    { type:"Volvo", year:2016 },
    { type:"Saab", year:2001 },
    { type:"BMW", year:2010 }
];

// the `toSorted()` method is a safe way to sort an array without altering the original array
let sortedByYear = cars2.toSorted(function(a, b) {
    return a.year - b.year; // sorting the array by the objects `year` property
});

console.log( sortedByYear );

console.log( cars2 ); // the original `car2` array is unchanged
