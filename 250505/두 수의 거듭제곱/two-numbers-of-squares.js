const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
const [intA, intB] = input.map(Number);

const getATothePowerOfB = (a, b) => {
    let result = 1;

    for (let i = 1; i <= b; i ++) {
        result *= a;
    }

    return result;
}

console.log(getATothePowerOfB(intA, intB));