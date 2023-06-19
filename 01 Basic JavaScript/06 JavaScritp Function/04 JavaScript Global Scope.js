/* In JavaScript, scope refers to the visibility of variables. 
Variables which are defined outside of a function block have Global scope. 
This means, they can be seen everywhere in your JavaScript code. */

// program to print a text 
let a = "hello";
function greet () {
    console.log(a);
}
greet(); // hello


// The value of a global variable can be changed inside a function. For example,
// program to show the change in global variable
let b = "hello";
function changeValue() {
    b = 3;
}
// before the function call
console.log(b);

//after the function call
changeValue();
console.log(b); // 3