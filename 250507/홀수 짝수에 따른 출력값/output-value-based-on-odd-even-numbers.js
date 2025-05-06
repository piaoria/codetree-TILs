const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());

const sumOddOrEvenNum = (num) => {
    if (num < 0) return 0;

    return sumOddOrEvenNum(num - 2) + num;
};

console.log(sumOddOrEvenNum(inputNum));