/*
    ---------- Conditional (Ternary) Operator ----------

    The conditional operator, also called the ternary operator, can be used as a one line if-else expression.

    The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, 
    and c is the code to run when the condition returns false.
    
    The following function uses an if/else statement to check a condition:

    function findGreater(a, b) {
        if(a > b) {
            return "a is greater";
        }
        else {
            return "b is greater or equal";
        }
    }

    This can be re-written using the conditional operator:

    function findGreater(a, b) {
        return a > b ? "a is greater" : "b is greater or equal";
    }
*/

function checkEquality(a, b) {
    return a === b? "a is equal to b" : "a is not equal to b";
}

console.log(checkEquality(1, 2));

/*
    Multiple Conditional (Ternary) Operators

    function findGreater(a, b) {
        return a === b? "a is equals to b":
            a > b ? "a is greater":
                "b is greater
    }

    Example
        In the checkSign function, use multiple conditional operators - following the recommended format used in findGreaterOrEqual - 
        to check if a number is positive, negative or zero. The function should return positive, negative or zero.
*/

function checkSign(num) {
    return num > 0 ? "Positive":
    num < 0 ? "Negative": 
    "Zero"
}

console.log(checkSign(10))
console.log(checkSign(-10))
console.log(checkSign(0))