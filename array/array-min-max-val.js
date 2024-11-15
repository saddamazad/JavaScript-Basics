// Sorting a whole array is a very inefficient method if we only want to find the highest (or lowest) value


const points = [40, 100, 1, 5, 25, 10];

// we can use `Math.min.apply()` to find the lowest number in an array
let minValue = Math.min.apply(null, points);

console.log(minValue); // 1



const points2 = [40, 100, 1, 5, 25, 10];

// we can use `Math.max.apply()` to find the lowest number in an array
let maxValue = Math.max.apply(null, points2);

console.log(maxValue); // 100
