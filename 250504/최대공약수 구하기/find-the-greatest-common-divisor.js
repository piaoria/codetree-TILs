const fs = require("fs");
const [intN, intM] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function getGreatestCommonDivisor(a, b) {
    let greatestNum = 0;
    let testNum = 1;

    while (testNum <= a || testNum <= b) {
        if (a % testNum === 0 && b % testNum === 0) {
            greatestNum = testNum;
        }
        testNum ++;
    }

    return greatestNum;
};

console.log(getGreatestCommonDivisor(intN, intM));