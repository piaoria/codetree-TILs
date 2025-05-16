const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const intN = Number(inputData[0]);
const offset = 100;
const inputSquareList = inputData.slice(1).map((square) => square.split(" ").map((len) => Number(len) + offset));

const rows = 201;
const cols = 201;

const grid = Array.from({length : rows}, () => Array(cols).fill(0));

const fillSqaure = (squareList) => {
    for (let squ of squareList) {
        const [x1, y1, x2, y2] = [...squ];
        
        for (let i = x1; i < x2; i ++) {
            for (let j = y1; j < y2; j ++) {
                grid[i][j] = 1;
            }
        }
    }
};

fillSqaure(inputSquareList);

const calculateArea = (array) => {
    let area = 0;

    for (let x = 0; x < 201; x ++) {
        for (let y = 0; y < 201; y ++) {
            if (array[x][y] === 1) {
                area ++;
            }
        }
    }

    return area;
};

console.log(calculateArea(grid));