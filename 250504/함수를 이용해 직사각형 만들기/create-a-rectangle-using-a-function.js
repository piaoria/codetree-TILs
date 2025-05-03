const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim();
const [intN, intM] = inputData.split(" ").map(Number);

function makeRectangular(cols, rows) {
    let result = [];
    let line = [];

    for (let row = 0; row < rows; row ++) {
        line.push(1);
    }

    for (let col = 0; col < cols; col ++) {
        result.push(line);
    }

    return result;
}

const rectangular = makeRectangular(intN, intM);

rectangular.forEach(line => console.log(line.join("")));