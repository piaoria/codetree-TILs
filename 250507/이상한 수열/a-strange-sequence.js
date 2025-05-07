const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());

const getStrangeSequence = (intN) => {
    if (intN === 1) return 1;
    else if (intN === 2) return 2;

    return getStrangeSequence(Math.trunc(intN / 3)) + getStrangeSequence(intN - 1);
};

console.log(getStrangeSequence(inputNum));