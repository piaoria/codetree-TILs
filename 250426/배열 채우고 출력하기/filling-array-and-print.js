const fs = require("fs");

const inputWordArray = fs.readFileSync(0).toString().trim().split(" ");

function getReverseWord (initArray) {
    const reverseArray = initArray.reverse();
    let result = "";
    for (i = 0; i < 10; i ++) {
        result += reverseArray[i];
    };
    return result;
};

console.log(getReverseWord(inputWordArray));