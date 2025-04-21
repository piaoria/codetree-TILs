const fs = require("fs");

const inputA = Number(fs.readFileSync(0).toString().trim());

function isMultipleThirteenOrNineteen(value) {
    if (((value / 13) - Number((value / 13).toFixed(0)) == 0) || ((value / 19) - Number((value / 19).toFixed(0)) == 0)) {
        return "True";
    } else {
        return "False";
    };
};

console.log(isMultipleThirteenOrNineteen(inputA));