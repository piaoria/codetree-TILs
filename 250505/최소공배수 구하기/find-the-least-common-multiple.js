const fs = require("fs");
const [intN, intM] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function getLeastCommonMultiple(a, b) {
    let result = a * b;
    let start = a <= b ? b : a;
    let end = a * b;

    for (let i = start; i <= end; i ++) {
        if (i % a === 0 && i % b === 0) {
            result = i;
            return result;
        }
    }

    return result;
}

console.log(getLeastCommonMultiple(intN, intM));