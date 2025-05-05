const fs = require("fs");
const [intA, intB, intC] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function getMinNumber(a, b, c) {
    return Math.min(a, b, c);
}

console.log(getMinNumber(intA, intB, intC));