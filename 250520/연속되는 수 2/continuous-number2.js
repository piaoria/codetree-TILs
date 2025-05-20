const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0]);
const inputNumberList = inputData.slice(1).map(Number);


let repeatCnt = 1;
let maxCnt = 1;
let prevNum = inputNumberList[0];

for (let curIdx = 1; curIdx < intN; curIdx ++) {
    if (prevNum === inputNumberList[curIdx]) {
        repeatCnt ++;
        if (curIdx === intN - 1) {
            maxCnt = Math.max(maxCnt, repeatCnt);
            break;
        }

    } else if (prevNum !== inputNumberList[curIdx]) {
        maxCnt = Math.max(maxCnt, repeatCnt);
        prevNum = inputNumberList[curIdx];
        repeatCnt = 1;
    }
}

console.log(maxCnt);