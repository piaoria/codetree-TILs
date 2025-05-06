const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());
let cnt = 0;

const countRepeatWork = (intN) => {
    if (intN === 1) return;
    cnt ++;
    return countRepeatWork(intN % 2 === 0 ? Math.trunc(intN / 2) : Math.trunc(intN / 3));
};

countRepeatWork(inputNum);

console.log(cnt);