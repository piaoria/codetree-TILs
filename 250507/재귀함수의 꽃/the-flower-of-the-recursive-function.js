const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let n = Number(input[0]);

const printSequenceAndReverseSequence = (num) => {
    if (num < 1) return;

    process.stdout.write(num + " ")
    printSequenceAndReverseSequence(num - 1);
    process.stdout.write(num + " ")
};

printSequenceAndReverseSequence(n);