const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0]);
const inputCommandData = inputData.slice(1).map((command) => command.split(" "));

const area = new Array(2 * intN * 10 + 1).fill(0);
let originIndex = intN * 10;

const movePosition = (commandList, idx) => {
    for (let com of commandList) {
        const x = Number(com[0]);
        const direct = com[1];

        if (direct === "R") {
            for (let i = idx; i < idx + x; i ++) {
                area[i] ++;
            }
            idx += x;

        } else if (direct === "L") {
            for (let j = idx - 1; j >= idx - x; j --) {
                area[j] ++;
            }
            idx -= x;

        }

    }
};

movePosition(inputCommandData, originIndex);

let count = 0;
area.forEach((factor) => {if (factor >= 2) count ++});
console.log(count);