const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const [intN, intK] = inputData[0].split(" ").map(Number);
const commandList = inputData.slice(1).map((line) => line.split(" ").map(Number));

const blockArray = new Array(intN + 1).fill(0);

const stackBlocks = (list) => {
    for (let command of list) {
        const st = command[0];
        const ed = command[1];

        for (let i = st; i <= ed; i ++) {
            blockArray[i] ++;
        }

    }
};

stackBlocks(commandList);

console.log(Math.max(...blockArray));