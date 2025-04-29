const fs = require("fs");

const [inputN, inputM] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function printRectangularStarMark(n, m) {

    for (let i = 0; i < n; i ++) {
        let printArray = [];

        for (let j = 0; j < m; j ++) {
            printArray.push("*");
        };

        console.log(printArray.join(" "));
    };

    return;
};

printRectangularStarMark(inputN, inputM);