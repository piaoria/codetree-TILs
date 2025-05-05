const fs = require("fs");
const [intN, intM] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const swap = (a, b) => {
    [a, b] = [b, a]

    return [a, b];
};

console.log(swap(intN, intM).join(" "));