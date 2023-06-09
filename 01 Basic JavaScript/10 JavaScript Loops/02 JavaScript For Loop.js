/* 
    The most common type of JavaScript loop is called a for loop because it runs for a specific number of times.
    
    For loops are declared with three optional expressions separated by semicolons:
    
    for (a; b; c), where 
        a is the initialization statement, 
        b is the condition statement, and 
        c is the final expression.
    
    The initialization statement is executed one time only before the loop starts. It is typically used to define 
    and setup your loop variable.
    
    The condition statement is evaluated at the beginning of every loop iteration and will continue as long as i
    t evaluates to true. When the condition is false at the start of the iteration, the loop will stop executing. 
    This means if the condition starts as false, your loop will never execute.
    
    The final expression is executed at the end of each loop iteration, prior to the next condition check and is 
    usually used to increment or decrement your loop counter.

    Example:
        In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll 
        increment i by 1 in each loop iteration with i++ as our final expression.
*/
const ourArrays = [];

for (let i = 0; i < 5; i++) {
    ourArrays.push(i);
}

console.log(ourArrays);

/*
-------------------------------------------------------------------------------------------------------------------------------------
    For loops don't have to iterate one at a time. By changing our final-expression, we can count by even or odd numbers.
    
    For even numbers:-
*/

const ourEven = [];

for (let i = 0; i < 10; i += 2) {
    ourEven.push(i);
}

console.log(ourEven);

// For odd numbers

const ourOdd = [];

for (let i = 1; i <= 9; i += 2) {
    ourOdd.push(i);
}

console.log(ourOdd);

/*
-------------------------------------------------------------------------------------------------------------------------------------
    A for loop can also count backwards, so long as we can define the right conditions.
    
    In order to decrement by two each iteration, we'll need to change our initialization, condition, and final expression.
*/

const decrementList = [];

for (let i = 10; i > 0; i--) {
    decrementList.push(i);
}

console.log(decrementList);

// For Even Decrement
const evenDecrement = [];

for (let i = 10; i > 0; i -= 2) {
    evenDecrement.push(i);
}

console.log(evenDecrement);

// For Odd Decrement
const oddDecrement = [];

for (let i = 9; i > 0; i -= 2) {
    oddDecrement.push(i);
}

console.log(oddDecrement);

/*
-------------------------------------------------------------------------------------------------------------------------------------
    A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a for loop. 
*/
const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
/*
    Example:
        Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
*/
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

console.log(total);

/*
------------------------------------------------------------------------------------------------------------------------------------------------
    If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. 
    Here is an example:
*/
const nestedArr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (let i = 0; i < nestedArr.length; i++) {
    for (let j = 0; j < nestedArr[i].length; j++) {
        console.log(nestedArr[i][j]);
    }
}

// Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));
console.log(multiplyAll([[1], [2], [3]]));
console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]));