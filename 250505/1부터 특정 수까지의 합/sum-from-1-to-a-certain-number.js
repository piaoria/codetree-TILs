const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());

function sumOneToN(intN) {
    let result = 0;

    for (let i = 1; i <= intN; i ++) {
        result += i;
    }

    return result;
}

console.log(parseInt(sumOneToN(inputNum) / 10));