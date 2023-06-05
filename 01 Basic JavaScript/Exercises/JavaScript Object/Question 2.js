/*
    Write a JavaScript program to delete the rollno property from the following object. 
    Also print the object before or after deleting the property.

    Sample object:

    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 
    };
*/

const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

const keys = Object.getOwnPropertyNames(student);
console.log(keys);

delete student.rollno;
const keysAfter = Object.getOwnPropertyNames(student);
console.log(keysAfter);