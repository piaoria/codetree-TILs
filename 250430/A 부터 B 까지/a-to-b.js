const fs = require("fs");

const [intA, intB] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

function getAToBList(a, b) {
    let result = [];

    while (true) {
        if (a > b) {
            break;
        } else if (a % 2 === 1) {
            result.push(a);
            a *= 2;
        } else {
            result.push(a);
            a += 3;
        };
    };

    return result;
};

console.log(getAToBList(intA, intB).join(" "));