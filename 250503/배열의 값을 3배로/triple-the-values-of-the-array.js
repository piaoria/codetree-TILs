const fs = require("fs");

const inputMatrix = fs.readFileSync(0).toString().trim().split("\n");

function makeNewMatrix(initMatrix) {
    
    return matrix = initMatrix.map(line => line.split(" ").map(num => num * 3));
};

const newMatrix = makeNewMatrix(inputMatrix);

for (let i = 0; i < newMatrix.length; i ++) {
    console.log(...newMatrix[i]);
};