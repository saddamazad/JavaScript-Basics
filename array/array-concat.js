// The `concat()` method creates a `new array` by merging existing arrays, it doesn't alter the existing arrays

const myGirls = ["Cecilie", "Lone", "Linus"];
const myBoys  = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); // it doesn't filter the common elements, it merges all the elements

console.log(myChildren); // ['Cecilie', 'Lone', 'Linus', 'Emil', 'Tobias', 'Linus']



const myChilds = myBoys.concat("Tarin"); // we can concat a `string/element` with an array

console.log(myChilds); // ['Emil', 'Tobias', 'Linus', 'Tarin']
