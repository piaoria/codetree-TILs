const fs = require("fs");

const inputArray = fs.readFileSync(0).toString().trim().split("\n").map(Number);

function getThreeOrFiveMultipleList(array) {
    let resultThreeList = [];
    let resultFiveList = [];

    for (let i = 0; i < array.length; i ++) {
        if (array[i] % 3 === 0) {
            resultThreeList.push(array[i]);
        } if (array[i] % 5 === 0) {
            resultFiveList.push(array[i]);
        };
    };

    return resultThreeList, resultFiveList;
};

console.log(getThreeOrFiveMultipleList(inputArray));