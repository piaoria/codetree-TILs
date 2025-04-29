const fs = require("fs");

const [numA, numB] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function getSumAToB(numberA, numberB) {
    let result = 0;
    for (i = numberA; i <= numberB; i ++) {
        if (i % 2 === 0) {
        result += i;
        };
    };
    return result;
};

console.log(getSumAToB(numA, numB));