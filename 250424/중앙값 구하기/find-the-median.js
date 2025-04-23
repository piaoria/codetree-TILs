const [intA, intB, intC] = require("fs").readFileSync(0).toString().trim().split(" ").map(Number);

function findMiddleValue (a, b, c) {
    if (a > b && b > c || c > b && b > a) {
        return b;
    } else if (b > a && a > c || c > a && a > b) {
        return a;
    } else if (a > c && c > b || b > c && c > a) {
        return c;
    };
};

console.log(findMiddleValue(intA, intB, intC));