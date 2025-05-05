const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

const [lengthA, lengthB] = inputData[0].split(" ").map(Number);
const inputArrayA = inputData[1].split(" ").map(Number);
const inputArrayB = inputData[2].split(" ").map(Number);

let result = false;

const isContiguousSubarray = (indexA, arrayA, arrayB) => {
    let contiguous = true;
    let indexB = 0;

    for (let i = indexA; i < indexA + arrayB.length; i ++) {
        if (arrayA[i] === arrayB[indexB]) {
            indexB ++;
            continue;
        } else {
            contiguous = false;
            break;
        }
    }

    return contiguous;
};

for (let idx = 0; idx < lengthA; idx ++) {
    if (inputArrayA[idx] === inputArrayB[0] && isContiguousSubarray(idx, inputArrayA, inputArrayB)) {
        result = true;
    }
}

console.log(result ? "Yes" : "No");