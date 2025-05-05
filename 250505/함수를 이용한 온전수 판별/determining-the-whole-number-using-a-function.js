const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [intA, intB] = input[0].split(" ").map(Number);
let count = 0;

const isPerfectNumber = (intN) => {
    if (intN % 2 === 0 || intN % 10 === 5 || (intN % 3 === 0 && intN % 9 !== 0)) {
        return false;
    }

    return true;
}

for (let i = intA; i <= intB; i ++) {
    if (isPerfectNumber(i)) {
        count ++;
    }

}

console.log(count);