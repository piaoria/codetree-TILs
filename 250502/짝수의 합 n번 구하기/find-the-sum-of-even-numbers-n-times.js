const fs = require("fs");

const [testCase, ...inputData] = fs.readFileSync(0).toString().trim().split("\n");

function printSumAToB(first, last) {
    let sumResult = 0;

    for (let i = first; i <= last; i ++) {
        if (i % 2 === 0) {
            sumResult += i;
        };
    };

    return sumResult;
};

for (let j = 0; j < testCase; j ++) {
    const [intA, intB] = inputData[j].split(" ").map(Number);

    console.log(printSumAToB(intA, intB));
};