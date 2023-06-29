// I. Square Star Pattern in Javascript

let squarePattern = "";

function squareStarPattern (row, column) {
    for (var i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            squarePattern += "* ";
        }
        squarePattern += "\n";
    }
    
    console.log(squarePattern);
}

squareStarPattern (5, 5)