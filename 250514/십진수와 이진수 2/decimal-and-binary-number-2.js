const fs = require("fs");
const inputBinaryArray = fs.readFileSync(0).toString().trim().split("").map(Number);

const convertBinaryToDecimal = (binaryArray) => {
    let decimalResult = 0;

    for (let idx = 0; idx < binaryArray.length; idx ++) {
        decimalResult = decimalResult * 2 + binaryArray[idx];
    }

    return decimalResult;
};

const convertDecimalToBinary = (decimal) => {
    let binaryResult = [];

    while (true) {
        if (Math.trunc(decimal / 2) === 0) {
            binaryResult.unshift(decimal % 2);
            break;
        }
        binaryResult.unshift(decimal % 2);
        decimal = Math.trunc(decimal / 2)
    }

    return binaryResult.join("");
};

console.log(convertDecimalToBinary(convertBinaryToDecimal(inputBinaryArray) * 17));