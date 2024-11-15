
// Sort ASC
const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b) {
    return a - b;
});

console.log(points); // [1, 5, 10, 25, 40, 100]




// Sort DESC
const points2 = [40, 100, 1, 5, 25, 10];

points2.sort(function(a, b) {
    return b - a;
});

console.log(points2); // [100, 40, 25, 10, 5, 1]




const points3 = [40, 100, 1, 5, 25, 10];

// the `toSorted()` method is a safe way to sort an array without altering the original array
const sorted = points3.toSorted( function(a, b) { return b - a; } );

console.log(sorted); // [100, 40, 25, 10, 5, 1]

// the original `points3` array is unchanged
console.log(points3); // [40, 100, 1, 5, 25, 10]
