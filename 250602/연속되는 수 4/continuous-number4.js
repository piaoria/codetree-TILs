const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0]);
const inputNumberList = inputData.slice(1).map(Number);

let maxCnt = 1;
let cnt = 1;
let pastNum = 0;

for (let num of inputNumberList) {
    if (pastNum < num) {
        cnt ++;
        pastNum = num;

    } else {
        maxCnt = Math.max(maxCnt, cnt);
        cnt = 1;
        pastNum = num;

    }
}

console.log(maxCnt);