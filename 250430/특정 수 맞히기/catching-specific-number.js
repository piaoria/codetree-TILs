const fs = require("fs");

const inputNumList = fs.readFileSync(0).toString().trim().split("\n").map(Number);

function printMatchingSpecificNumber(numList, targetNumber) {
    let idx = 0;

    while (true) {
        if (numList[idx] === targetNumber) {
            console.log("Good");
            break;
        } else if (numList[idx] < targetNumber) {
            console.log("Higher");
        } else {
            console.log("Lower");
        };
        idx ++;
    };

    return;
}

printMatchingSpecificNumber(inputNumList, 25);