const fs = require("fs");

const inputGridData = fs.readFileSync(0).toString().trim().split("\n");

const [rows, cols] = inputGridData[0].split(" ").map(Number);

const firstGrid = inputGridData.slice(1, rows + 1).map(line => line.split(" ").map(Number));
const secondGrid = inputGridData.slice(rows + 1).map(line => line.split(" ").map(Number));

function compareGrid(gridA, gridB, rows, cols) {
    let resultGrid = [];

    for (let i = 0; i < rows; i ++) {
        let newLine = [];
        
        for (let j = 0; j < cols; j ++) {
            newLine.push(gridA[i][j] ===gridB[i][j] ? 0 : 1);
        };

        resultGrid.push(newLine);
    };

    return resultGrid;
};

const resultGrid = compareGrid(firstGrid, secondGrid, rows, cols);

for (let k = 0; k < rows; k ++) {
    console.log(resultGrid[k].join(" "));
};