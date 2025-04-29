const fs = require("fs");

const inputNum = Number(fs.readFileSync(0).toString().trim());

function getOverTheNumberSumTiming(targetNum) {
    let start = 0;
    for (let i = 1; i < 101; i++) {
        start += i;
        if (start >= targetNum) {
            return i;
        };
    };
};

console.log(getOverTheNumberSumTiming(inputNum));