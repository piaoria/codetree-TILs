const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

let [intN, intM] = inputData[0].split(" ").map(Number);
let inputSequenceA = inputData[1].split(" ").map(Number);
let result = 0;

const oddNumber = (num) => {
    result += inputSequenceA[num - 1];

    return num - 1;
};

const evenNumber = (num) => {
    result += inputSequenceA[num - 1];

    return Math.trunc(num / 2);
};

while (intM >= 1) {
    if (intM % 2 === 0) {
        intM = evenNumber(intM);
    } else {
        intM = oddNumber(intM);
    }
}

console.log(result);