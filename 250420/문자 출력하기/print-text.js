const fs = require("fs");

const inputWord = fs.readFileSync(0).toString().trim();

function printEightTimesRepeat (word) {
    for (i = 0; i < 8; i ++) {
        process.stdout.write(word);
    };
}

printEightTimesRepeat(inputWord);