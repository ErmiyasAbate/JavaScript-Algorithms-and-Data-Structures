/*
    ---------- Use Recursion to Create a Range of Numbers ----------
    
    Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

    We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a 
    number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting 
    number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. 
    It should also work for cases where both startNum and endNum are the same.
*/

function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        const numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
};


/*
    OR SOLUTION 2

    function rangeOfNumbers(startNum, endNum) {
        return endNum < startNum
            ? []
            : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
    }
*/