const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let arr = input[1].split(" ").map(Number);

const devideEvenFactor = (value) => {
    if (value % 2 === 0) {
        return Math.trunc(value / 2);
    }

    return value;
};

for (let val of arr) {
    process.stdout.write(devideEvenFactor(val) + " ");
}