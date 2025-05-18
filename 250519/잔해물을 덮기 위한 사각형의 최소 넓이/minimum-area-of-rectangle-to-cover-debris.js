const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const offset = 1000;
const [aX1, aY1, aX2, aY2] = inputData[0].split(" ").map((position) => Number(position) + offset);
const [bX1, bY1, bX2, bY2] = inputData[1].split(" ").map((position) => Number(position) + offset);


const grid = Array.from({length : 2001}, () => Array(2001).fill(0));

const fillSquare = (x1, y1, x2, y2) => {
    for (let i = x1; i < x2; i ++) {
        for (let j = y1; j < y2; j ++) {
            grid[i][j] = 1;
        }
    }
};

const unfillSquare = (x1, y1, x2, y2) => {
    for (let i = x1; i < x2; i ++) {
        for (let j = y1; j < y2; j ++) {
            grid[i][j] = 0;
        }
    }
};

fillSquare(aX1, aY1, aX2, aY2);
unfillSquare(bX1, bY1, bX2, bY2);

let minX = aX1;
let maxX = aX2;
let minY = aY1;
let maxY = aY2;

let minXIdx = 2001;
let maxXIdx = 0;
let minYIdx = 2001;
let maxYIdx = 0;

for (let x = minX; x < maxX; x++) {
    for (let y = minY; y < maxY; y++) {
        if (grid[x][y] === 1) {
            minXIdx = Math.min(minXIdx, x);
            break;
        }
    }

    for (let y = maxY - 1; y >= minY; y--) {
        if (grid[x][y] === 1) {
            maxXIdx = Math.max(maxXIdx, x);
            break;
        }
    }
}

for (let y = minY; y < maxY; y++) {
    for (let x = minX; x < maxX; x++) {
        if (grid[x][y] === 1) {
            minYIdx = Math.min(minYIdx, y);
            break;
        }
    }

    for (let x = maxX - 1; x >= minX; x--) {
        if (grid[x][y] === 1) {
            maxYIdx = Math.max(maxYIdx, y);
            break;
        }
    }
}

if (minXIdx > maxXIdx || minYIdx > maxYIdx) {
    console.log(0);
} else {
    console.log((maxXIdx - minXIdx + 1) * (maxYIdx - minYIdx + 1));
}