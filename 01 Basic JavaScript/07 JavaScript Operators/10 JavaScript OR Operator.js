/*
    The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

    Questions
        Combine the two if statements into one statement which returns the string 
        Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
*/

function logicalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }

    return "Inside";
}

console.log(logicalOr(15));