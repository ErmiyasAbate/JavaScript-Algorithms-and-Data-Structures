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