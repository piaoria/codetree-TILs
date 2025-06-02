const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const [cmdLenA, cmdLenB] = inputData[0].split(" ").map(Number);
const cmdAList = inputData.slice(1, cmdLenA + 1).map((cmd) => cmd.split(" "));
const cmdBList = inputData.slice(cmdLenA + 1).map((cmd) => cmd.split(" "));

const makeList = (cmdList) => {
    let calculateList = [];

    for (let idx = 0; idx < cmdList.length; idx ++) {
        if (cmdList[idx][0] === "R") {
            for (let i = 0; i < Number(cmdList[idx][1]); i ++) {
                calculateList.push(-1);
            }
        } else if (cmdList[idx][0] === "L") {
            for (let i = 0; i < Number(cmdList[idx][1]); i ++) {
                calculateList.push(1);
            }

        }
    }

    return calculateList;
};

const calculateAList = makeList(cmdAList);
const calculateBList = makeList(cmdBList);

const findMeetingPoint = (aList, bList, len) => {
    let pointA = 0;
    let pointB = 0;

    for (let t = 0; t < len; t ++) {
        pointA += aList[t];
        pointB += bList[t];

        if (pointA === pointB) {
            return t + 1;
        }
    }

    return -1;
};

console.log(findMeetingPoint(calculateAList, calculateBList, calculateAList.length));