const fs = require("fs");

const inputData = fs.readFileSync(0).toString().trim().split('\n');

const inputN = Number(inputData[0]);
const inputArray = inputData[1].split(" ").map(Number);

function getSquaredResult(n, array) {
    let result = "";

    for (i = 0; i < n; i ++) {
        result += array[i]**2 + " ";
    };

    result.trim();
    return result;    
};

console.log(getSquaredResult(inputN, inputArray));