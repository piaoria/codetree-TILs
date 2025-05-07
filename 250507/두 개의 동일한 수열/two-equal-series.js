const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

const isEqualityArray = (arrA, arrB, len) => {
    let result = true;
    const sortedArrA = arrA.sort((prev, cur) => prev - cur);
    const sortedArrB = arrB.sort((prev, cur) => prev - cur);

    for (let idx = 0; idx < len; idx ++) {
        if (sortedArrA[idx] !== sortedArrB[idx]) {
            result = false;
            break;
        }
    }

    return result;
};

console.log(isEqualityArray(a, b, n) ? "Yes" : "No");