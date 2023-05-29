/* 
if statements are used to make decisions in code. The keyword if tells JavaScript to execute 
the code in the curly braces under certain conditions, defined in the parentheses. 
These conditions are known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement inside the curly 
braces. When the Boolean condition evaluates to false, the statement inside 
the curly braces will not execute.
*/
function test(myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

console.log(test(true));
console.log(test(false));

// Example 2
// check if the number is positive or negative/zero

function check(number) {
    // check if number is greater than 0
    if (number > 0) {
        console.log("The number is positive");
    }
    // if number is not greater than 0
    else {
        console.log("The number is either a negative number or 0");
    }

    console.log("The if...else statement is easy");
}

check(7);
check(-7);


// Introducing ELse Statements
function testElse(val) {
    let result = "";

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}

console.log(testElse(4));

// Introducing Else If Statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(7));