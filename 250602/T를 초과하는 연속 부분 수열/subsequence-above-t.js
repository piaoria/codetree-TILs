const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const [intN, intT] = inputData[0].split(" ").map(Number);
const inputIntList = inputData[1].split(" ").map(Number);

let maxCnt = 0;
let cnt = 0;

for (let idx = 0; idx < intN; idx ++) {
    let cur = inputIntList[idx];

    if (cur > intT) {
        cnt ++;

    } else {
        cnt = 0;

    }

    maxCnt = Math.max(cnt, maxCnt);
}

console.log(maxCnt);