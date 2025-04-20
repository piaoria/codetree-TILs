const fs = require("fs");

const inputWord = fs.readFileSync(0).toString().trim();

function printEightTimesRepeat (word) {
    let result = "";

    for (i = 0; i < 8; i ++) {
        result += word
    };

    return result;
}

console.log(printEightTimesRepeat(inputWord));