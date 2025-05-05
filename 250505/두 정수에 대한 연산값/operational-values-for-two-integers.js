const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [intA, intB] = input[0].split(" ").map(Number);

const printCalculateValue = (a, b) => {
    return [bigNum, smallNum] = a > b ? [a + 25, b * 2] : [a * 2, b + 25];
};

console.log(printCalculateValue(intA, intB).join(" "));