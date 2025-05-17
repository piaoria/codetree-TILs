const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0]);
const offSet = 100;
const inputPaperList = inputData.slice(1).map((list) => list.split(" ").map((factor) => Number(factor) + offSet));

const grid = Array.from({length : 201}, () => Array(201).fill(0));

const fillSquare64Extent = (paperList) => {
    for (let paper of paperList) {
        let paperX = paper[0];
        let paperY = paper[1];

        for (let x = paperX; x < paperX + 8; x ++) {
            for (let y = paperY; y < paperY + 8; y ++) {
                grid[x][y] = 1;
            }
        }
    }
};

fillSquare64Extent(inputPaperList);

let dimension = 0;

for (let i = 0; i < 201; i ++) {
    for (let j = 0; j < 201; j ++) {
        if (grid[i][j] === 1) {
            dimension ++;
        }
    }
}

console.log(dimension);