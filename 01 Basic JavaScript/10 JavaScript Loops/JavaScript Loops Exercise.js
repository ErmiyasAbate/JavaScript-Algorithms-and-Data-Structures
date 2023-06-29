/*
    Question 1:
        Write a JS code to print numbers from 1 to 10
        Function `printNumbers()` prints numbers from 1 to 10 using for loop.
*/
console.log('Write a JS code to print numbers from 1 to 10');

function printNumbers() {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
}

printNumbers();

console.log('\n');
/*
    Question 2:
        Write a JS code to print a 2D array
        Function `printArray()` prints all the elements of a 2D array using nested for loops.
*/
console.log('Write a JS code to print a 2D array');

function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j] + ' ');
        }
    }
}

let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

printArray(arr);

/*
    Question 3:
        Write a JS code to print Even numbers in given array
        Function `printEven()` prints all the even numbers of a 2D array using for loops and ‘%’ operator.
*/
console.log('Write a JS code to print Even numbers in given array');

function printEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
    }
}
let arrTwo = [13, 23, 12, 45, 22, 48, 66, 100]

printEven(arrTwo);

/*
    Question 4:
        Write a JS code to delete all occurrence of element in given array
        Function `deleteElement()` deletes all the occurrence of element from the given array.
*/
console.log('Write a JS code to delete all occurrence of element in given array');

function deleteElement(arr, ele) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == ele) {
            arr.splice(i, 1); //Delete element from array
        }
    }
    return arr;
}
var arrThree = [23, 56, 4, 78, 5, 63, 45, 210, 56];
arrThree = deleteElement(arrThree, 56)

console.log(arrThree);