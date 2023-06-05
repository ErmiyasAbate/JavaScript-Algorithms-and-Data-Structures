/*
    Write a JavaScript program to list the properties of a JavaScript object.
    
    Sample object:
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12
    };

    Sample Output: name,sclass,rollno
*/

const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
}

let keys = [];
for (let key in student) {
    keys.push(key);
}
console.log(keys);


// Another Way
let keyS = Object.keys(student);
console.log(keyS);

// Another Way
let keySS = Object.getOwnPropertyNames(student);
console.log(keySS); 