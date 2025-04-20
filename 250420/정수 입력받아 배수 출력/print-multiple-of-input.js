const fs = require("fs");

const inputData = Number(fs.readFileSync(0).toString().trim());

function multiplyFiveTimes(count) {
    let result = "";

    for (i = 1; i < 6; i ++) {
        result += `${count * i} `;
    };

    result.trimEnd();

    return result;
}

console.log(multiplyFiveTimes(inputData));