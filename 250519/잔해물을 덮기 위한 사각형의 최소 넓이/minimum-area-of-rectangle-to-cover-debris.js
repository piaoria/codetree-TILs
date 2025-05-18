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

let lenX = 0;
let lenY = 0;

for (let x = minX; x < maxX; x ++) {
    let yLength = 0;
    for (let y = minY; y < maxY; y ++) {
        if (grid[x][y] === 1) {
            yLength ++;
        }
    }
    if (yLength) {
        lenX ++;
    }
    lenY = Math.max(lenY, yLength);
}

console.log(lenX * lenY);