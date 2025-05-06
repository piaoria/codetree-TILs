const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());

const sumOneToN = (intN) => {
    if (intN === 0) return 0;

    return intN + sumOneToN(intN - 1);
};

console.log(sumOneToN(inputNum));