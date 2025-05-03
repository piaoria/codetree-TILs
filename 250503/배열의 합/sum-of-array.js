const fs = require("fs");

const inputLinesData = fs.readFileSync(0).toString().trim().split("\n");

function sumLineData(line) {
    let total = 0;

    for (let i = 0; i < line.length; i ++) {
        total += line[i];
    };

    return total;
};

for (let j = 0; j < inputLinesData.length; j ++) {
    console.log(sumLineData(inputLinesData[j].split(" ").map(Number)));
};