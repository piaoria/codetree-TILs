const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0]);
const inputLines = inputData.slice(1).map((line) => line.split(" ").map((factor) => Number(factor) + 100));

const lineArray = new Array(201).fill(0);

const checkIntervals = (command) => {
    for (let line of command) {
        const [st, ed] = [...line];
        
        for (let i = st; i < ed; i ++) {
            lineArray[i] ++;
        }

    }
};

checkIntervals(inputLines);

console.log(Math.max(...lineArray));