const fs = require("fs");

const inputNum = Number(fs.readFileSync(0).toString().trim());

function makeNewArray(intN) {
    let result = [];
    let line = [];

    for (let i = 1; i <= intN; i ++) {
        line.push(i);
    };

    for (let j = 0; j < intN; j ++) {
        if (j % 2 === 1) {
            result.push([...line].reverse());
        } else {
            result.push(line);
        };
    };

    return result;
};

const newArray = makeNewArray(inputNum);

for (let row = 0; row < inputNum; row ++) {
    console.log(newArray[row].join(""));
};