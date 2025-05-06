const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

const printSequenceStars = (cnt) => {
    if (cnt < 1) return;

    console.log("* ".repeat(cnt));
    printSequenceStars(cnt - 1);
    console.log("* ".repeat(cnt));
};

printSequenceStars(n);