const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let intA = Number(input[0]);
let intB = Number(input[1]);

const getCalculateResult = (a, b) => {

    return a > b ? [a * 2, b + 10] : [a + 10, b * 2];
};

console.log(getCalculateResult(intA, intB).join(" "));