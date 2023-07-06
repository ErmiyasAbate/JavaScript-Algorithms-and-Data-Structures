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