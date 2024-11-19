// while loop loops through a block of code as long as a specified condition is `true`

let i = 0;

while (i < 10) {
    console.log(`The number is ${i}`);
    i++; // increment MUST be done inside the while loop, otherwise it'll be an Infinite loop
}


/* `do while` loop will always execute the code block `for the 1st time` even though the condition doesn't meet */

let x = 12;

do {
    console.log(`(D-WHL) The number is ${x}`);
    x++; // increment MUST be done inside the while loop, otherwise it'll be an Infinite loop
} while (x < 10);

// (D-WHL) The number is 12
