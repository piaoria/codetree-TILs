const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

const printSequenceStars = (repeatCnt) => {
    if (repeatCnt > n) return;

    console.log("*".repeat(repeatCnt));
    printSequenceStars(repeatCnt + 1);
};

printSequenceStars(1);