const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());

const calculateFactorial = (num) => {
    if (num === 1 || num === 0) return 1;

    return calculateFactorial(num - 1) * num;
};

console.log(calculateFactorial(inputNum));