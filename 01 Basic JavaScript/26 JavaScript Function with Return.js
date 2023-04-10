/* We can pass a value to a function with an arguments and 
we can use a return statement to send a value back out of a function. */
function returnNum(num) {
    return num;
}
console.log(returnNum(6));

// We can assign the return value to a variable
const returnedNum = returnNum(10);
console.log(returnedNum);

// Other example
function plusThree(num) {
    return num + 3;
}
const answer = plusThree(90);
console.log(answer);