const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split('\n');
const intN = Number(inputData[0]);
const numberList = inputData[1].split(" ").map(Number);
const visitedArray = Array(intN).fill(false);

const result = [];

const cmp = (prev, cur) => {
    return prev - cur;
};

const sortedNumberList = [...numberList].sort(cmp);

for (let i = 0; i < intN; i ++) {
    for (let j = 0; j < intN; j ++) {
        if (numberList[i] === sortedNumberList[j] && visitedArray[j] === false) {
            result.push(j + 1);
            visitedArray[j] = true;

            break;
        }
    }
}

console.log(...result);