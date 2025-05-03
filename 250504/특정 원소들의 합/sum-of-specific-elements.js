const fs = require("fs");

const inputGridData = fs.readFileSync(0).toString().trim().split("\n");

const gridData = inputGridData.map(line => line.split(" ").map(Number));

function sumOfSpecificFactors(grid) {
    let totalSum = 0;

    for (let row = 0; row < 4; row ++) {
        for (let col = 0; col <= row; col ++) {
            totalSum += grid[row][col];
        };
    };

    return totalSum;
};

console.log(sumOfSpecificFactors(gridData));