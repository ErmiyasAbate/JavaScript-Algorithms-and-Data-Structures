function checkObject(property) {
    const myObj = {
        top: 'hat',
        bottom: 'pants'
    };

    return myObj.hasOwnProperty(property);
}

console.log(checkObject('top'));


/*
    Modify the function checkObj to test if the object passed to the function parameter obj contains 
    the specific property passed to the function parameter checkProp. If the property passed to checkProp is found on obj, 
    return that property's value. If not, return Not Found.

    function checkObj(obj, checkProp) {
        Only change code below this line
        return "Change Me!";
        Only change code above this line
    }
*/

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
    // Only change code above this line
}