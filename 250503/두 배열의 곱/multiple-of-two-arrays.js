const fs = require("fs");

const inputMatrix = fs.readFileSync(0).toString().trim().split("\n");

const splitIndex = inputMatrix.indexOf("");

const firstMatrix = inputMatrix.slice(0, splitIndex).map(line => line.split(" ").map(Number));
const secondMatrix = inputMatrix.slice(splitIndex + 1).map(line => line.split(" ").map(Number));

function multiply3x3Matrices(matrixA, matrixB) {
    let newMatrix = [];

    for (let i = 0; i < 3; i ++) {
        let newLine = [];
        
        for (let j = 0; j < 3; j ++) {
            newLine.push(matrixA[i][j] * matrixB[i][j]);
        };

        newMatrix.push(newLine);
    };

    return newMatrix;
};

const newMatrix = multiply3x3Matrices(firstMatrix, secondMatrix);

for (let k = 0; k < 3; k ++) {
    console.log(...newMatrix[k]);
};