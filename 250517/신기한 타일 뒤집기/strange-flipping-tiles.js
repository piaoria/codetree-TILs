const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0]);
const inputCmdList = inputData.slice(1).map((line) => line.split(" "));

const tileArray = new Array(intN * 100 * 2 + 1).fill(0);
const initIndex = intN * 100;

const reverseTile = (cmdList, index) => {
    for (let cmd of cmdList) {
        let len = Number(cmd[0]);
        let direction = cmd[1];

        if (direction === "R") {
            for (let i = index; i < index + len; i ++) {
                tileArray[i] = 1;
            }
            index = index + len - 1;
            
        } else if (direction === "L") {
            for (let j = index; j > index - len; j --) {
                tileArray[j] = -1;
            }
            index = index - len + 1;
        }
    }
};

reverseTile(inputCmdList, initIndex);

const countTileType = (tileList) => {
    let white = 0;
    let black = 0;

    for (let color of tileList) {
        if (color === -1) white ++;
        else if (color === 1) black ++;
    }

    return [white, black];
};

console.log(...countTileType(tileArray));