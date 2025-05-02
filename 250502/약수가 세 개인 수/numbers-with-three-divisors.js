const fs = require("fs");

const [inputStart, inputEnd] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let answerCount = 0;

function countDivisorOfAnInteger(value) {
    let result = [];

    for (let i = 1; i <= value; i ++) {
        if (value % i === 0) {
            result.push(i);
        };
    };

    return result.length;
};

for (let j = inputStart; j <= inputEnd; j ++) {
    if (countDivisorOfAnInteger(j) === 3) {
        answerCount ++;
    };

};

console.log(answerCount);