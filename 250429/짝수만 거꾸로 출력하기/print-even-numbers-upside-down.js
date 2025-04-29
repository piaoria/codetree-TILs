const fs = require("fs");

const [inputInt, inputArray] = fs.readFileSync(0).toString().trim().split("\n");

let numberList = inputArray.split(" ").map(Number);

function getEvenNumberReverseArray(len,array) {
    let result = [];

    for (let i = 0; i < len; i ++) {
        if (array[i] % 2 == 0) {
            result.unshift(array[i]);
        };
    };

    return result;
};

console.log(getEvenNumberReverseArray(inputInt,numberList).join(" "));