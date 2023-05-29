/* 
    Sometimes you will need to test more than one thing at a time. 
    The logical and operator (&&) returns true if and only if the 
    operands to the left and right of it are true.

    For example
        5 > 3 && 4 < 6 // true
        5 < 3 && 4 < 6 // false
        5 < 3 && 4 > 6 // false

    Question
        Using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
*/

function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "Yes";  
    }
    return "No";
}

console.log(testLogicalAnd(10));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(40));
console.log(testLogicalAnd(90));