const fs = require("fs");
const inputBinaryArray = fs.readFileSync(0).toString().trim().split("").map(Number);

const convertBinaryToDecimal = (binaryArray) => {
    let result = 0;

    for (let i = 0; i < binaryArray.length; i ++) {
        result = result * 2 + binaryArray[i];
    }

    return result;
};

console.log(convertBinaryToDecimal(inputBinaryArray));