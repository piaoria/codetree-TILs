const fs = require("fs");

const inputArray = fs.readFileSync(0).toString().trim().split("\n").map(Number);

function getThreeOrFiveMultipleList(array) {
    let resultThreeCnt = 0;
    let resultFiveCnt = 0;

    for (let i = 0; i < array.length; i ++) {
        if (array[i] % 3 === 0) {
            resultThreeCnt ++
        };
        if (array[i] % 5 === 0) {
            resultFiveCnt ++
        };
    };

    return [resultThreeCnt, resultFiveCnt];
};

console.log(getThreeOrFiveMultipleList(inputArray).join(" "));