const fs = require("fs");

const inputData = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(inputData[0]);
let b = Number(inputData[1]);

function printRepeatResult(firstNum, repeatCnt) {
    for (i = 1; i < repeatCnt + 1; i ++) {
        console.log(firstNum += repeatCnt);
    };
}

printRepeatResult(a, b);