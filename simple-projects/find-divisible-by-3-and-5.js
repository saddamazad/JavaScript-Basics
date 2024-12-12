// find the numbers divisible by 3, 5 and 3 & 5 both between 1-100

function findDivisibleNumbers(numbers) {
    //let numbers = [];

    for(let i = 1; i <= numbers; i++) {
        if(i % 15 === 0) {
            //numbers.push(i);
            console.log( `${i} is divisible by 3 and 5` );
        } else if(i % 3 === 0) {
            //numbers.push(i);
            console.log( `${i} is divisible by 3` );
        } else if(i % 5 === 0) {
            //numbers.push(i);
            console.log( `${i} is divisible by 5` );
        } else {
            console.log( i );
        }
    }

    //return numbers;
}

//console.log( findDivisibleNumbers() );

findDivisibleNumbers(100);
