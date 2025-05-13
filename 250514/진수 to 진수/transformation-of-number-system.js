const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const [intA, intB] = inputData[0].split(" ").map(Number);
const intN = inputData[1];

const convertToDecimal = (base, num) => {
    const numArray = num.split("").map(Number);
    let decimalNum = 0;

    for (let i = 0; i < numArray.length; i ++) {
        decimalNum = decimalNum * base + numArray[i];
    }

    return decimalNum;
};

const convertToBase = (base, num) => {
    const baseArray = [];

    while (true) {
        if (Math.trunc(num / base) === 0) {
            baseArray.unshift(num % base);
            break;
        }

        baseArray.unshift(num % base);
        num = Math.trunc(num / base);
    }

    return baseArray.join("");
};

console.log(convertToBase(intB,convertToDecimal(intA, intN)));