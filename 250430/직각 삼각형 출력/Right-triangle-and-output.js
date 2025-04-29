const fs = require("fs");

const inputNum = Number(fs.readFileSync(0).toString().trim());

function printRightTriangleStarMark(num) {

    for (let i = 1; i <= num; i ++) {
        console.log("*".repeat((2 * i) - 1));
    };

    return;
};

printRightTriangleStarMark(inputNum);