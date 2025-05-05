const fs = require("fs");
const [intA, intB] = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let count = 0;

function isIncludingThreeOrSixOrNine(intN) {
    const stringNum = String(intN);

    return stringNum.includes("3") || stringNum.includes("6") || stringNum.includes("9") 
}

function isThreeMultiple(intN) {
    return intN % 3 === 0;
}

for (let i = intA; i <= intB; i ++) {
    if (isIncludingThreeOrSixOrNine(i) || isThreeMultiple(i)) {
        count ++;
    }
}

console.log(count);