const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const findMaxValueWithRecursion = (index, value) => {
    if (index === n) return value;

    return Math.max(findMaxValueWithRecursion(index + 1, arr[index]) , value);
};

console.log(findMaxValueWithRecursion(0, 0));