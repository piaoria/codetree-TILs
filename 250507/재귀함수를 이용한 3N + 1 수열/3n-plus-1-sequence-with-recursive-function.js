const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());

const countLoopNumToOne = (cur) => {
    if (cur === 1) return 0;

    return countLoopNumToOne(cur % 2 === 0 ? Math.trunc(cur / 2) : cur * 3 + 1) + 1
};

console.log(countLoopNumToOne(inputNum));