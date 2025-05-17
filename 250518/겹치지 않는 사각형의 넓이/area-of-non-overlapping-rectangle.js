const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const offSet = 1000;
const [aX1, aY1, aX2, aY2] = inputData[0].split(" ").map((position) => Number(position) + offSet);
const [bX1, bY1, bX2, bY2] = inputData[1].split(" ").map((position) => Number(position) + offSet);
const [mX1, mY1, mX2, mY2] = inputData[2].split(" ").map((position) => Number(position) + offSet);

const x = 1001;
const y = 1001;
const grid = Array.from({length: x + offSet}, () => Array(y + offSet).fill(0));

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
fillSquare(bX1, bY1, bX2, bY2);
unfillSquare(mX1, mY1, mX2, mY2);

let dimensions = 0;

for (let i = 0; i < x + offSet; i ++) {
    for (let j = 0; j < y + offSet; j ++) {
        if (grid[i][j] === 1) {
            dimensions ++;
        }
    }
}

console.log(dimensions);