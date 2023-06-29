// --------------------------------------------------------------------------------------------------
console.log('Square Star Pattern in Javascript');
let squarePattern = "";

function squareStarPattern(row, column) {
    for (var i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            squarePattern += "* ";
        }
        squarePattern += "\n";
    }

    console.log(squarePattern);
}

squareStarPattern(5, 5)

// --------------------------------------------------------------------------------------------------
console.log('Hollow Square Pattern');
let hollowPattern = "";

function hollowSquarePattern(row, column) {
    for (var i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (i === 0 || i === row - 1) {
                hollowPattern += "* ";
            } else {
                if (j === 0 || j === column - 1) {
                    hollowPattern += "* ";
                } else {
                    hollowPattern += "  ";
                }
            }
        }
        hollowPattern += "\n";
    }

    console.log(hollowPattern);
}

hollowSquarePattern(5, 5)

// --------------------------------------------------------------------------------------------------
console.log('Right Triangle Pattern One in Javascript');
let rightTriangle = "";

function rightTrianglePattern(row) {
    for (var i = 0; i < row; i++) {
        for (let j = 0; j <= i; j++) {
            rightTriangle += "* ";
        }
        rightTriangle += "\n";
    }

    console.log(rightTriangle);
}

rightTrianglePattern(5)

console.log('Right Triangle Pattern Two in Javascript');
let rightTriangleTwo = "";

function rightTrianglePatternTwo(row) {
    for (var i = 1; i <= row; i++) {
        for (let j = 0; j < row - i; j++) {
            rightTriangleTwo += "  ";
        }
        // printing star
        for (let k = 0; k < i; k++) {
            rightTriangleTwo += "* ";
        }
        rightTriangleTwo += "\n";
    }

    console.log(rightTriangleTwo);
}

rightTrianglePatternTwo(5)

console.log('Downward Triangle Star Pattern');
let downTriangle = "";

function downTrianglePattern(row) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < row - i; j++) {
            downTriangle += "* ";
        }
        downTriangle += "\n";
    }

    console.log(downTriangle);
}

downTrianglePattern(5)

console.log('Downward Triangle Star Pattern Two');
let downTriangleTwo = "";

function downTrianglePatternTwo(row) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < i; j++) {
            downTriangleTwo += "  ";
        }

        for (let k = 0; k < row - i; k++) {
            downTriangleTwo += "* ";
        }

        downTriangleTwo += "\n";
    }

    console.log(downTriangleTwo);
}

downTrianglePatternTwo(5)

console.log('Hollow Triangle Star Pattern');
let hollowTriangle = "";

function hollowTrianglePattern(row) {
    for (let i = 0; i <= row; i++) {
        for (let j = 0; j < i; j++) {
            if (i === row) {
                hollowTriangle += "*";
            } else {
                if (j == 0 || j == i - 1) {
                    hollowTriangle += "*";
                } else {
                    hollowTriangle += " ";
                }
            }
        }
        hollowTriangle += "\n";
    }
    console.log(hollowTriangle);
}

hollowTrianglePattern(6);

console.log('Javascript Pyramid Pattern');

let pyramidPattern = "";

function pyramidStarPattern(row) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < row - i; j++) {
            pyramidPattern += "  ";
        }
        for (let k = 0; k <= i; k++) {
            pyramidPattern += "* ";
        }

        for (let l = 1; l <= i; l++) {
            pyramidPattern += "* ";
        }

        pyramidPattern += "\n";
    }

    console.log(pyramidPattern);
}

pyramidStarPattern(5)

console.log('OR');

let pyramidPatternTwo = "";

function pyramidStarPatternTwo(row) {
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= row - i; j++) {
            pyramidPatternTwo += "  ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            pyramidPatternTwo += "* ";
        }
        pyramidPatternTwo += "\n";
    }
    console.log(pyramidPatternTwo);
}

pyramidStarPatternTwo(5)