const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());

const get100Sequence = (intN) => {
    if (intN === 1) return 2;
    else if (intN === 2) return 4;

    return ((get100Sequence(intN - 1) * get100Sequence(intN - 2)) % 100);
};

console.log(get100Sequence(inputNum));