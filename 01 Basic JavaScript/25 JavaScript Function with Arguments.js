/* Parameters are variables that act as placeholders for the values that are to be input to 
a function when it is called. When a function is defined, it is typically defined along 
with one or more parameters. 

The actual values that are input (or "passed") into a function when it is called 
are known as arguments. */

function testFun(para1, para2) {
    console.log(para1, para2);
}

// We can call the function with parameters
testFun("Hello", "world!");

testFun(23, 24);

// Example 2
function functionWithArgs (num1, num2) {
    console.log(num1 + num2);
}

functionWithArgs(3, 4);
functionWithArgs(100, 4);
functionWithArgs(3878, 423782);
