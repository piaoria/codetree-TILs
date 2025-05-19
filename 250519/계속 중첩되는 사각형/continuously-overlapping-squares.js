const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0]);
const offSet = 100;
const inputRectangularList = inputData.slice(1).map((square) => square.split(" ").map((position) => Number(position) + offSet));

const grid = Array.from({length : 201}, () => Array(201).fill(0));

const fillRedRectangular = (x1, y1, x2, y2) => {
    for (let x = x1; x < x2; x ++) {
        for (let y = y1; y < y2; y ++) {
            grid[x][y] = 0;
        }
    }
};

const fillBlueRectangular = (x1, y1, x2, y2) => {
    for (let x = x1; x < x2; x ++) {
        for (let y = y1; y < y2; y ++) {
            grid[x][y] = 1;
        }
    }
};

for (let idx = 0; idx < intN; idx ++) {
    if (idx % 2 === 0) {
        fillRedRectangular(...inputRectangularList[idx]);
    } else {
        fillBlueRectangular(...inputRectangularList[idx]);
    }
}

let minX = 201;
let minY = 201;
let maxX = 0;
let maxY = 0;

for (let rec of inputRectangularList) {
    const [x1, y1, x2, y2] = rec;
    
    minX = Math.min(x1, minX)
    minY = Math.min(y1, minY)
    maxX = Math.max(x2, maxX)
    maxY = Math.max(y2, maxY)
}

let dementions = 0;

for (let i = minX; i < maxX; i ++) {
    for (let j = minY; j < maxY; j ++) {
        if (grid[i][j] === 1) {
            dementions ++;
        }
    }
}

console.log(dementions);