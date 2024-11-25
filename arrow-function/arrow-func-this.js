// With a regular function `this` keyword represents the object that calls the function

let helloReg = function() {
    document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", helloReg);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", helloReg);



// With an arrow function `this` keyword represents the owner of the function or the Scope where the function is defined

hello = () => {
    document.getElementById("demo-arrow").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn-arrow").addEventListener("click", hello);
