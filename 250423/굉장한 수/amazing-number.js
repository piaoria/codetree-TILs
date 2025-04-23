const fs = require("fs");

const inputNum = Number(fs.readFileSync(0).toString().trim());

function isGreatNumber(num) {
    if ((num % 2 == 1) && (num % 3 == 0) || (num % 2 == 0) && (num % 5 == 0)) {
        return "true"
    } else {
        return "false"
    };
};

console.log(isGreatNumber(inputNum));