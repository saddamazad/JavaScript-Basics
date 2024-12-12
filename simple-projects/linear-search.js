
const letters = ["A", "B", "C", "D", "E"];

/*let letterIndex = letters.indexOf("F");

let search = letterIndex !== -1 ? letterIndex : "Not found";

console.log( search );*/

function linearSearch(arr, val) {
    const length = arr.length;

    for(let i=0; i < length; i++) {

        if( arr[i] === val ) {
            return i;
        }
        
    }

    return "Not found";
}

let search = linearSearch(letters, "C");

console.log( search );
