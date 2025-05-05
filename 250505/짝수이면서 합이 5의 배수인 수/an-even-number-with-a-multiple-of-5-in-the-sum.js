const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());

function isMultipleOfFive(intN) {
    let ones = intN % 10;
    let tens = Math.trunc((intN / 10) % 10);

    return (tens + ones) % 5 === 0;
}

console.log(inputNum % 2 === 0 && isMultipleOfFive(inputNum) ? "Yes" : "No");