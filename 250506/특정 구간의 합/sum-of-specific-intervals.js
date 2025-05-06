const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split('\n');
const inputArray = inputData[1].split(" ").map(Number);
const queries = inputData.slice(2).map(line => line.split(" ").map(Number));

const sumSpecificSection = (start, end) => {
    return inputArray.slice(start - 1, end).reduce((acc, cur) => acc + cur, 0);
};

for (let query of queries) {
    console.log(sumSpecificSection(...query));
}