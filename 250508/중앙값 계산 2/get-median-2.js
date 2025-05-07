const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const intN = Number(inputData[0]);
const inputArray = inputData[1].split(" ").map(Number);

const printMiddleValue = (array, len) => {
    return process.stdout.write(array.sort((prev, cur) => prev - cur)[Math.trunc(len / 2)] + " ");
};

for (let i = 1; i <= intN; i += 2) {
    printMiddleValue(inputArray.slice(0, i), i);
}