const fs = require("fs");

const inputArrayData = fs.readFileSync(0).toString().trim().split("\n");

const arrayData = inputArrayData.map(line => line.split(" ").map(Number));

function countMultipleOfFive(array2D) {
    let totalCnt = 0;

    for (let i = 0; i < 4; i ++) {
        for (let j = 0; j < 4; j ++) {
            if (array2D[i][j] % 5 === 0) {
                totalCnt ++;
            };
        };
    };

    return totalCnt;
};

console.log(countMultipleOfFive(arrayData));