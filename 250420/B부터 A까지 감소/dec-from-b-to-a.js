const fs = require("fs");

const inputData = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(inputData[0]);
let b = Number(inputData[1]);

function getDecreasingResult(targetValue, initNum) {
    let result = "";

    for (i = initNum; i >= targetValue; i --) {
        result += `${i} `;
    }

    result.trimEnd();

    return result;
};

console.log(getDecreasingResult(a, b));
