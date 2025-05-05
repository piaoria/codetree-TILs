const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [intA, intB] = input[0].split(" ").map(Number);
let totalCnt = 0;

const isPrimeNumber = (intN) => {
    let primeCnt = 0;

    for (let i = 1; i <= intN; i ++) {
        if (intN % i === 0) {
            primeCnt ++;
        }
    }

    if (primeCnt === 2) {

        return true;
    }

    return false;
}

const isDigitSumEven = (intN) => {
    let result = 0;
    const stringNumber = String(intN).split("");

    for (let i of stringNumber) {
        result += Number(i);
    }

    return result % 2 === 0;
}

for (let j = intA; j <= intB; j ++) {
    if (isPrimeNumber(j) && isDigitSumEven(j)) {
        totalCnt ++;
    }
}

console.log(totalCnt);