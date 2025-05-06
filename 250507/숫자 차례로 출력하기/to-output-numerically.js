const fs = require("fs");
const inputNum = Number(fs.readFileSync(0).toString().trim());

const printSequence = (num) => {
    if (num > inputNum) return;

    process.stdout.write(num + " ");
    printSequence(num + 1);
};

const printReverseSequence = (num) => {
    if (num > inputNum) return;

    printReverseSequence(num + 1);
    process.stdout.write(num + " ");
};

printSequence(1);
process.stdout.write("\n");
printReverseSequence(1);