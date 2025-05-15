const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");
const intN = Number(inputData[0]);
const inputLinesData = inputData.slice(1).map((line) => line.trim().split(" ").map(Number));

const lineArray = new Array(101).fill(0);

const drawLine = (lineList) => {
    for (let line of lineList) {
        const st = line[0];
        const ed = line[1];

        for (let i = st; i <= ed; i ++) {
            lineArray[i] ++;
        }

    }

};

drawLine(inputLinesData);
console.log(Math.max(...lineArray));