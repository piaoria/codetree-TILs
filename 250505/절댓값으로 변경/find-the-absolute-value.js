const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);

const changeAbsNumber = (num) => {
    process.stdout.write(Math.abs(num) + " ");
};

for (let factor of arr) {
    changeAbsNumber(factor);
}