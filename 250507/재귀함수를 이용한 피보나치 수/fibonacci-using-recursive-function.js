const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());

const fibonacciSequenceNum = (cur) => {
    if (cur === 1 || cur === 2) return 1;

    return fibonacciSequenceNum(cur - 1) + fibonacciSequenceNum(cur - 2);
};

console.log(fibonacciSequenceNum(inputNum));