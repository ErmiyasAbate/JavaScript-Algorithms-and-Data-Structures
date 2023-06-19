/*
    Order is important in if, else if statements.

    The function is executed from top to bottom so you will want to be careful of what statement comes first.

    Take these two functions as an example.
*/

function foo(x) {
    if (x < 1) {
        return "Less than one";
    } else if (x < 2) {
        return "Less than two";
    } else {
        return "Greater than or equal to two";
    }
}

function bar(x) {
    if (x < 2) {
        return "Less than two";
    } else if (x < 1) {
        return "Less than one";
    } else {
        return "Greater than or equal to two";
    }
}

console.log(foo(0));
console.log(bar(0));