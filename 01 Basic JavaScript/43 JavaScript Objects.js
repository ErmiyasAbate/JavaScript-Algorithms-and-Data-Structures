/* 
    Objects are similar to arrays, except that instead of using indexes to access and modify their data, \
    you access the data in objects through what are called properties.
    
    Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.
    
    Here's a sample cat object:
*/

const cat = {
    "name": "Whisker",
    "legs": 4,
    "tails": 1,
    "enemies": ["Water", "Dogs"]
};

/* 
    ----- Accessing object properties -----
    
    There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.

    i) Dot notation (.)
        Dot notation is what you use when you know the name of the property you're trying to access ahead of time.
*/
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

/* 
    ii) Bracket Notation (.)
        If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
*/
const testObjtwo = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

/* 
    Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
    This can be very useful for iterating through an object's properties or when accessing a lookup table.
*/
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
};

const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);

// Updating Object Properties
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";
ourDog["legs"] = 4;
console.log(ourDog);

// Adding new Object Properties
ourDog.bark = "Bow-Wow"; // or ourDog["bark"] = "Bow-Wow";
console.log(ourDog);

// Deleting Object Properties
delete ourDog.bark;
console.log(ourDog);