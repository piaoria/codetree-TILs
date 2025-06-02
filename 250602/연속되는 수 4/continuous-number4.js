const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0]);
const inputNumberList = inputData.slice(1).map(Number);

let maxCnt = 1;
let cnt = 1;
let pastNum = inputNumberList[0];

for (let idx = 1; idx < intN; idx ++) {
    if (pastNum < inputNumberList[idx]) {
        cnt ++;
        pastNum = inputNumberList[idx];

        if (idx === intN - 1) {
            maxCnt = Math.max(maxCnt, cnt);
        }

    } else {
        maxCnt = Math.max(maxCnt, cnt);
        cnt = 1;
        pastNum = inputNumberList[idx];

    }
}

console.log(maxCnt);