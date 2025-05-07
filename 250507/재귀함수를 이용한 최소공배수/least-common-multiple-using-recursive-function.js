const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const numbers = input[1].split(" ").map(Number);

const gcd = (intA, intB) => {
    while (intB !== 0) {
        [intA, intB] = [intB, intA % intB];
    }

    return intA;
};

const lcm = (intA, intB) => {

    return (intA * intB) / gcd(intA, intB);
};

console.log(numbers.reduce((acc, cur) => lcm(acc, cur), 1));