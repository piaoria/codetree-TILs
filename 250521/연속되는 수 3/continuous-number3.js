const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0]);
const inputNumberList = inputData.slice(1).map(Number);

let repeatPorN = inputNumberList[0] > 0 ? "+" : "-";
let repeatCnt = 1;
let maxCnt = 1;

for (let idx = 1; idx < intN; idx ++) {
    if ((inputNumberList[idx] > 0 ? "+" : "-") === repeatPorN) {
        repeatCnt ++;
        if (idx === intN - 1) {
            maxCnt = Math.max(maxCnt, repeatCnt);
        }
    } else {
        repeatPorN = inputNumberList[idx] > 0 ? "+" : "-";
        maxCnt = Math.max(maxCnt, repeatCnt);
        repeatCnt = 1;
    }
}

console.log(maxCnt);