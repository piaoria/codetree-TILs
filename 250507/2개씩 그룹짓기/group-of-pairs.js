const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

nums.sort((prev, cur) => prev - cur);

const findMaxSum = (array, len) => {
    let maxValue = 0;

    for (let idx = 0; idx < len / 2; idx ++) {
        let sumFactors = array[idx] + array[len - idx - 1];
        
        if (maxValue <= sumFactors) {
            maxValue = sumFactors;
        }

    }

    return maxValue;
};

console.log(findMaxSum(nums, n * 2));