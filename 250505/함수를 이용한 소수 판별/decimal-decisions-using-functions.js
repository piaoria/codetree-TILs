const fs = require("fs");
const [intA, intB] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let total = 0;

function isPrimeNumber(intN) {
    let prime = 1;

    for (let j = 2; j <= intN; j ++) {

        if (intN % j === 0) {
            prime ++;

            if (prime > 2) {
                return false;
            }
        }
    }

    return true;
}

for (let i = intA; i <= intB; i ++) {
    if (isPrimeNumber(i)) {
        total += i;
    }
}

console.log(total);