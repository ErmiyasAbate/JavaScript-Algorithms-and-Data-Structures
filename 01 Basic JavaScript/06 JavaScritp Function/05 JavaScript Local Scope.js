/* Variables which are declared within a function, as well as the function parameters,
 have local scope. That means they are only visible within that function. */
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error (Uncaught ReferenceError: b is not defined)