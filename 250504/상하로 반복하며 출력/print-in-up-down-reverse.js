const fs = require("fs");

const inputNum = Number(fs.readFileSync(0).toString().trim());

function makeNewGrid(intN) {
    let result = [];
    
    for (let i = 0; i < intN; i ++) {
        result.push([]);
    };

    for (let col = 0; col < intN; col ++) {
        for (let row = 0; row < intN; row ++) {
            if (col % 2 === 1) {
                result[row][col] = intN - row;
            } else {
                result[row][col] = row + 1;
            };
        };
    };

    return result;
};

const newGrid = makeNewGrid(inputNum);

for (let j = 0; j < inputNum; j ++) {
    console.log(newGrid[j].join(""));
};