const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let [a, b, c] = input[0].split(" ").map(Number);

const sumOfDisit = (num) => {
    if (num === 0) return 0;

    return sumOfDisit(Math.trunc(num / 10)) + num % 10;
};

console.log(sumOfDisit(a * b * c));