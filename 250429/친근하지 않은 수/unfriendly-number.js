const fs = require("fs");

const inputNum = Number(fs.readFileSync(0).toString().trim());

function getNotFriendlyNumberList(num) {
    let resultArray = [];

    for (let i = 1; i < num; i ++) {
        if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0) {
            resultArray.push(i);
        }
    };

    return resultArray;
};

console.log(getNotFriendlyNumberList(inputNum).length);