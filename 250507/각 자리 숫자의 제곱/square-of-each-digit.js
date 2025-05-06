const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let n = Number(input[0]);

const sumSquareOfEachDisit = (num) => {
    if (num === 0) return 0;

    return sumSquareOfEachDisit(Math.trunc(num / 10)) + (num % 10) ** 2;
};

console.log(sumSquareOfEachDisit(n));