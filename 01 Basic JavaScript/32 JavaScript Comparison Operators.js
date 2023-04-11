/*
There are many comparison operators in JavaScript. All of these operators
return a boolean value true or false.

The most basic operator is the equality operator ==. The equality operator compares 
two values and returns true if they're equivalent or false if they are not. 

Note that equality is different from assignment (=), which assigns the value on the 
right of the operator to a variable on the left.
*/

function testEqual(val){
    if(val == 10) {
        return "Equal";
    } 
    return "Not equal";
}

console.log(testEqual(10));
console.log(testEqual(12));

// 1 == 1 true
// 1 == 2 false
// 1 == "1" true
// '3' == 3 true
/* 
When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. 
An empty string converts to 0. A non-numeric string converts to NaN which is always false . 
*/